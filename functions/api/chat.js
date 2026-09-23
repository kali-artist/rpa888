/**
 * CF Pages Function: /api/chat
 * 影刀 Agent SSE **纯透传**代理（2026-09-23 由转换版改为透传版）。
 * 原因：线上 v4 前端 app.js 的 streamAgent() 自己解析双层 JSON（xybot-* / message.part.updated），
 *      期望的是原始影刀事件流，而不是转换后的 start/token/done 协议！
 * 影刀 SSE 原始格式：id:...\nevent:xybot-message\ndata:{...data 内嵌 JSON 串}
 *
 * env.YINGDAO_API_KEY = 影刀开放平台 API Key（CF secret，前端不暴露）
 */
const YD_API_BASE = 'https://power-api.yingdao.com/oapi/agent/v1';
const AGENT_ID = '09d08458-9b9c-41c7-ba5d-2daeb70e148a';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Expose-Headers': 'X-Conversation-Id',
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }
  if (request.method !== 'POST') {
    return json({ error: 'Method Not Allowed' }, 405);
  }

  const apiKey = env.YINGDAO_API_KEY;
  if (!apiKey) return json({ error: 'YINGDAO_API_KEY 未配置' }, 503);

  let message = '';
  let conversationId = '';
  try {
    const body = await request.json();
    message = (body.message || '').trim();
    conversationId = body.conversationId || '';
  } catch {
    return json({ error: '请求体必须是 JSON' }, 400);
  }
  if (!message) return json({ error: 'message 不能为空' }, 400);

  // 1. 无会话则创建（透传给影刀）
  try {
    if (!conversationId) {
      const createRes = await fetch(
        `${YD_API_BASE}/agents/${AGENT_ID}/conversations`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: '{}',
        }
      );
      const d = await createRes.json();
      if (!d.success || !d.data || !d.data.conversationUuid) {
        return json({ error: d.msg || '会话创建失败' }, 502);
      }
      conversationId = d.data.conversationUuid;
    }
  } catch (e) {
    return json({ error: `创建会话异常: ${e.message}` }, 502);
  }

  // 2. 调影刀 stream 端点，响应体**原样透传**给前端
  const streamRes = await fetch(
    `${YD_API_BASE}/conversations/${conversationId}/execute/stream`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify({ content: message, attachments: [] }),
    }
  );

  if (!streamRes.ok) {
    const errText = await streamRes.text();
    return json({ error: `Agent 返回 ${streamRes.status}: ${errText}` }, 502);
  }

  const headers = new Headers({
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
    'X-Conversation-Id': conversationId,
    ...CORS,
  });

  return new Response(streamRes.body, { status: 200, headers });
}
