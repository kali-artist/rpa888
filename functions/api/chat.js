/**
 * CF Pages Function: /api/chat
 * 代理影刀 Agent API，实现 API Key 分离。
 * 
 * 架构：前端 → CF Pages Function → 影刀 Agent API
 * API Key 存储在 CF Pages 环境变量 YINGDAO_API_KEY 中，前端不暴露。
 * 
 * 请求体：{ message, conversationId? }
 * 响应：SSE 流式，格式兼容前端 streamBackend()：
 *   data: {"type":"token","t":"..."}
 *   data: {"type":"done","reply":"...","recommendations":[],"followups":[]}
 *   data: [DONE]
 */

const AGENT_ID = '09d08458-9b9c-41c7-ba5d-2daeb70e148a';
const YD_API_BASE = 'https://power-api.yingdao.com/oapi/agent/v1';

export async function onRequest({ request, env }) {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const apiKey = env.YINGDAO_API_KEY;
  if (!apiKey) {
    return jsonResp({ error: 'AI 服务未配置' }, 503);
  }

  let body = {};
  try { body = await request.json(); } catch {}
  const { message, conversationId } = body;

  if (!message || !message.trim()) {
    return jsonResp({ error: 'message 不能为空' }, 400);
  }

  const ydHeaders = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  // 1. 获取或创建 conversationId
  let convId = conversationId;
  if (!convId) {
    try {
      const convRes = await fetch(
        `${YD_API_BASE}/agents/${AGENT_ID}/conversations`,
        { method: 'POST', headers: ydHeaders, body: '{}' }
      );
      if (!convRes.ok) {
        const errText = await convRes.text();
        return jsonResp({ error: `创建会话失败: ${convRes.status} ${errText}` }, 502);
      }
      const convData = await convRes.json();
      convId = convData.data && convData.data.conversationUuid;
      if (!convId) {
        return jsonResp({ error: '创建会话失败: 无 conversationUuid' }, 502);
      }
    } catch (e) {
      return jsonResp({ error: `创建会话异常: ${e.message}` }, 502);
    }
  }

  // 2. 调用影刀 stream 端点
  let streamRes;
  try {
    streamRes = await fetch(
      `${YD_API_BASE}/conversations/${convId}/execute/stream`,
      {
        method: 'POST',
        headers: {
          ...ydHeaders,
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify({ content: message.trim(), attachments: [] }),
      }
    );
  } catch (e) {
    return jsonResp({ error: `调用 Agent 异常: ${e.message}` }, 502);
  }

  if (!streamRes.ok) {
    const errText = await streamRes.text();
    return jsonResp({ error: `Agent 返回 ${streamRes.status}: ${errText}` }, 502);
  }

  // 3. SSE 转换：影刀格式 → 前端期望格式
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  const writeSse = (payload) => {
    writer.write(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
  };

  (async () => {
    const reader = streamRes.body.getReader();
    const decoder = new TextDecoder();
    let buf = '';
    let curEvent = '';
    let curData = '';
    let fullReply = '';

    // 发送 start 事件（含 conversationId，前端保存用于多轮）
    writeSse({ type: 'start', conversationId: convId });

    const flushBlock = () => {
      const ev = curEvent;
      const dt = curData;
      curEvent = '';
      curData = '';
      if (!ev && !dt) return;

      // 丢弃生命周期事件
      if (ev === 'xybot-run-lifecycle') return;

      if (ev === 'xybot-message') {
        let text = '';
        try {
          const parsed = JSON.parse(dt);
          text =
            parsed.content ||
            (parsed.data && parsed.data.content) ||
            (parsed.properties && parsed.properties.part && parsed.properties.part.text) ||
            '';
        } catch {}
        if (text) {
          fullReply += text;
          writeSse({ type: 'token', t: text });
        }
        return;
      }

      // message.part.updated 格式（兼容）
      if (ev === 'message.part.updated') {
        let text = '';
        try {
          const parsed = JSON.parse(dt);
          text = (parsed.properties && parsed.properties.part && parsed.properties.part.text) || '';
        } catch {}
        if (text) {
          fullReply += text;
          writeSse({ type: 'token', t: text });
        }
        return;
      }
    };

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buf += decoder.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.replace(/\r$/, '');
          if (trimmed === '') {
            flushBlock();
          } else if (trimmed.startsWith(':')) {
            // SSE comment, skip
          } else if (trimmed.startsWith('event:')) {
            curEvent = trimmed.slice(6).trim();
          } else if (trimmed.startsWith('data:')) {
            const v = trimmed.slice(5);
            const val = v.startsWith(' ') ? v.slice(1) : v;
            curData = curData ? curData + '\n' + val : val;
          }
        }
      }
      if (curEvent || curData) flushBlock();

      // 发送 done 事件
      writeSse({
        type: 'done',
        reply: fullReply,
        recommendations: [],
        followups: [],
        intent: 'chat',
        conversationId: convId,
      });
      writer.write(encoder.encode('data: [DONE]\n\n'));
    } catch (e) {
      writeSse({ type: 'error', error: e.message || '流式传输异常' });
      writer.write(encoder.encode('data: [DONE]\n\n'));
    } finally {
      try { await writer.close(); } catch {}
    }
  })();

  return new Response(readable, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-store',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

function jsonResp(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
