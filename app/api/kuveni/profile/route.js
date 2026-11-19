import { admin, userFrom, clip, json, isMod } from '../../../../lib/server/kv';
import { checkText } from '../../../../lib/server/profanity';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  const { data } = await db.from('kv_profiles').select('display_name, village, banned').eq('id', user.id).maybeSingle();
  return json({ ok: true, profile: data || null, mod: isMod(user) });
}

export async function POST(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  let b = {};
  try { b = await req.json(); } catch { /* empty */ }
  const name = clip(b.name, 40);
  if (name.length < 2) return json({ ok: false, error: 'name_required' }, 400);
  if (!b.terms) return json({ ok: false, error: 'terms_required' }, 400);
  if (checkText(name).held) return json({ ok: false, error: 'name_not_allowed' }, 400);
  const { error } = await db.from('kv_profiles').upsert({ id: user.id, display_name: name, village: clip(b.village, 80) || null });
  if (error) return json({ ok: false, error: 'failed' }, 500);
  return json({ ok: true });
}
