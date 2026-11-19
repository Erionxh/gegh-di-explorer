import { admin, userFrom, clip, json } from '../../../../lib/server/kv';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  let b = {};
  try { b = await req.json(); } catch { /* empty */ }
  if (!b.post) return json({ ok: false, error: 'bad_request' }, 400);
  await db.from('kv_reports').upsert({ post_id: b.post, user_id: user.id, reason: clip(b.reason, 300) }, { onConflict: 'post_id,user_id' });
  // Tre raportime e fshehin postimin derisa ta shohë moderatori.
  const { count } = await db.from('kv_reports').select('id', { count: 'exact', head: true }).eq('post_id', b.post).eq('resolved', false);
  if ((count || 0) >= 3) await db.from('kv_posts').update({ status: 'held', flag_reason: 'reports' }).eq('id', b.post).eq('status', 'live');
  return json({ ok: true });
}
