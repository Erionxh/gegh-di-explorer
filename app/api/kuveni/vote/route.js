import { admin, userFrom, json } from '../../../../lib/server/kv';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  let b = {};
  try { b = await req.json(); } catch { /* empty */ }
  const value = Number(b.value);
  if (!b.post || ![-1, 0, 1].includes(value)) return json({ ok: false, error: 'bad_request' }, 400);
  if (value === 0) await db.from('kv_votes').delete().eq('post_id', b.post).eq('user_id', user.id);
  else {
    const { error } = await db.from('kv_votes').upsert({ post_id: b.post, user_id: user.id, value });
    if (error) return json({ ok: false, error: 'failed' }, 500);
  }
  return json({ ok: true });
}
