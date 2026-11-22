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
  // Raportimet shkojnë te moderatori. Nuk e fshehin vetë postimin, që askush të mos e censurojë me llogari të rreme.
  return json({ ok: true });
}
