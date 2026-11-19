import { admin, userFrom, json, isMod } from '../../../../lib/server/kv';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function guard(req) {
  const db = admin();
  if (!db) return [null, json({ ok: false, error: 'not_configured' }, 503)];
  const user = await userFrom(req, db);
  if (!user) return [null, json({ ok: false, error: 'login_required' }, 401)];
  if (!isMod(user)) return [null, json({ ok: false, error: 'not_moderator' }, 403)];
  return [db, null];
}

export async function GET(req) {
  const [db, err] = await guard(req);
  if (err) return err;
  const { data: held } = await db.from('kv_posts').select('id, topic, kind, title, body, form, place, author, flag_reason, created_at').eq('status', 'held').order('created_at').limit(200);
  const { data: reps } = await db.from('kv_reports').select('post_id, reason, created_at').eq('resolved', false).limit(500);
  const repIds = [...new Set((reps || []).map((r) => r.post_id))].filter((id) => !(held || []).some((h) => h.id === id));
  const { data: reported } = repIds.length ? await db.from('kv_posts').select('id, topic, kind, title, body, form, place, author, flag_reason, created_at').in('id', repIds) : { data: [] };
  const all = [...(held || []), ...(reported || [])];
  const authors = [...new Set(all.map((p) => p.author))];
  const { data: profs } = authors.length ? await db.from('kv_profiles').select('id, display_name, banned').in('id', authors) : { data: [] };
  const pm = Object.fromEntries((profs || []).map((p) => [p.id, p]));
  const { count: total } = await db.from('kv_posts').select('id', { count: 'exact', head: true });
  const { count: users } = await db.from('kv_profiles').select('id', { count: 'exact', head: true });
  return json({ ok: true, total, users, items: all.map((p) => ({
    ...p, who: pm[p.author]?.display_name || '—', banned: !!pm[p.author]?.banned,
    reports: (reps || []).filter((r) => r.post_id === p.id).map((r) => r.reason).filter(Boolean),
  })) });
}

export async function POST(req) {
  const [db, err] = await guard(req);
  if (err) return err;
  let b = {};
  try { b = await req.json(); } catch { /* empty */ }
  const { post, action } = b;
  if (!post || !['approve', 'remove', 'ban'].includes(action)) return json({ ok: false, error: 'bad_request' }, 400);
  if (action === 'approve') await db.from('kv_posts').update({ status: 'live', flag_reason: null }).eq('id', post);
  if (action === 'remove' || action === 'ban') await db.from('kv_posts').update({ status: 'removed' }).eq('id', post);
  if (action === 'ban') {
    const { data } = await db.from('kv_posts').select('author').eq('id', post).single();
    if (data) await db.from('kv_profiles').update({ banned: true }).eq('id', data.author);
  }
  await db.from('kv_reports').update({ resolved: true }).eq('post_id', post);
  return json({ ok: true });
}
