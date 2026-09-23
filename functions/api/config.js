/**
 * CF Pages Function: /api/config
 * 返回 AI 配置状态（不泄露密钥）。
 */
export async function onRequest({ request, env }) {
  const apiKey = env.YINGDAO_API_KEY;
  return new Response(JSON.stringify({
    configured: !!apiKey,
    ai_enabled: !!apiKey,
    model: 'yingdao-agent',
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
