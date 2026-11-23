import { admin, userFrom, isMod, json, clip } from '../../../../lib/server/kv';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function guard(req) {
  const db = admin();
  if (!db) return [null, null, json({ ok: false, error: 'not_configured' }, 503)];
  const user = await userFrom(req, db);
  if (!user) return [null, null, json({ ok: false, error: 'login_required' }, 401)];
  if (!isMod(user)) return [null, null, json({ ok: false, error: 'not_moderator' }, 403)];
  return [db, user, null];
}

export async function GET(req) {
  const [db, , err] = await guard(req);
  if (err) return err;
  const { data, error } = await db.from('contributions').select('*').eq('status', 'pending').order('created_at').limit(60);
  if (error) return json({ ok: false, error: 'read_failed' }, 500);
  const items = await Promise.all(data.map(async (r) => {
    const sign = async (p) => (p ? (await db.storage.from('recordings').createSignedUrl(p, 900)).data?.signedUrl || null : null);
    return { ...r, ip_hash: undefined, withdraw_hash: undefined, audio: await sign(r.audio_path), consent_audio: await sign(r.consent_audio_path) };
  }));
  const { count } = await db.from('contributions').select('id', { count: 'exact', head: true });
  return json({ ok: true, total: count, items });
}

export async function POST(req) {
  const [db, user, err] = await guard(req);
  if (err) return err;
  let b = {};
  try { b = await req.json(); } catch { /* bosh */ }
  if (b.action === 'transcribe' && b.id) {
    const st = ['none', 'draft', 'checked'].includes(b.status) ? b.status : 'draft';
    const { error } = await db.from('contributions').update({ ipa: clip(b.ipa, 200) || null, geg_spelling: clip(b.geg, 200) || null, transcription_status: st }).eq('id', b.id);
    if (error) return json({ ok: false, error: /column/i.test(error.message || '') ? 'needs_sql' : 'failed' }, 500);
    await db.from('audit_log').insert({ actor: user.email, action: 'transcribe', target_table: 'contributions', target_id: b.id, reason: st, detail: { ipa: b.ipa || null, geg: b.geg || null } });
    return json({ ok: true });
  }
  const reason = clip(b.reason, 500);
  if (!b.id || !['approved', 'rejected'].includes(b.action)) return json({ ok: false, error: 'bad_request' }, 400);
  if (reason.length < 3) return json({ ok: false, error: 'reason_required' }, 400);
  let { error } = await db.from('contributions').update({ status: b.action, reviewed_at: new Date().toISOString(), reviewed_by: user.email, review_reason: reason }).eq('id', b.id);
  if (error) ({ error } = await db.from('contributions').update({ status: b.action }).eq('id', b.id));
  if (error) return json({ ok: false, error: 'failed' }, 500);
  await db.from('audit_log').insert({ actor: user.email, action: b.action, target_table: 'contributions', target_id: b.id, reason });
  return json({ ok: true });
}
