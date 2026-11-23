import { admin, userFrom, clip, json } from '../../../lib/server/kv';
import { checkText } from '../../../lib/server/profanity';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TOPIC = /^(pyetje|(fjala|rrahje|tema|pyetje-geg):[A-Za-z0-9-]{1,60})$/;
const KINDS = ['post', 'reply', 'version', 'argument'];
const MAX_AUDIO = 5 * 1024 * 1024;

async function shape(db, posts, user) {
  const ids = posts.map((p) => p.id);
  const authors = [...new Set(posts.map((p) => p.author))];
  const [{ data: profs }, { data: votes }] = await Promise.all([
    authors.length ? db.from('kv_profiles').select('id, display_name, village').in('id', authors) : { data: [] },
    ids.length ? db.from('kv_votes').select('post_id, user_id, value').in('post_id', ids) : { data: [] },
  ]);
  const pm = Object.fromEntries((profs || []).map((p) => [p.id, p]));
  return Promise.all(posts.map(async (p) => {
    const vs = (votes || []).filter((v) => v.post_id === p.id);
    let audio = null;
    if (p.audio_path) {
      const { data } = await db.storage.from('recordings').createSignedUrl(p.audio_path, 3600);
      audio = data?.signedUrl || null;
    }
    return {
      id: p.id, kind: p.kind, parent: p.parent_id, title: p.title, body: p.body, form: p.form, place: p.place, stance: p.stance,
      audio, held: p.status === 'held', at: p.created_at, mine: user?.id === p.author,
      who: pm[p.author]?.display_name || '—', village: pm[p.author]?.village || '',
      yes: vs.filter((v) => v.value === 1).length, no: vs.filter((v) => v.value === -1).length,
      my: user ? (vs.find((v) => v.user_id === user.id)?.value || 0) : 0,
    };
  }));
}

const COLS = 'id, topic, kind, parent_id, title, body, form, place, stance, audio_path, author, status, created_at';
const UUID = /^[0-9a-f-]{36}$/i;

export async function GET(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const sp = new URL(req.url).searchParams;
  const user = await userFrom(req, db);
  const visible = (q) => (user ? q.or(`status.eq.live,and(status.eq.held,author.eq.${user.id})`) : q.eq('status', 'live'));

  const id = sp.get('id');
  if (id) {
    if (!UUID.test(id)) return json({ ok: false, error: 'bad_id' }, 400);
    const { data } = await visible(db.from('kv_posts').select(COLS).eq('id', id)).maybeSingle();
    if (!data) return json({ ok: false, error: 'not_found' }, 404);
    const [post] = await shape(db, [data], user);
    return json({ ok: true, post: { ...post, topic: data.topic } });
  }

  const topic = sp.get('topic') || '';
  if (!TOPIC.test(topic)) return json({ ok: false, error: 'bad_topic' }, 400);
  const { data: posts, error } = await visible(db.from('kv_posts').select(COLS).eq('topic', topic)).order('created_at', { ascending: true }).limit(500);
  if (error) return json({ ok: false, error: 'read_failed' }, 500);
  const out = await shape(db, posts, user);
  if (topic === 'pyetje' && posts.length) {
    const { data: ans } = await db.from('kv_posts').select('topic, created_at').in('topic', posts.map((p) => `tema:${p.id}`)).eq('status', 'live');
    out.forEach((p) => {
      const mine = (ans || []).filter((a) => a.topic === `tema:${p.id}`);
      p.answers = mine.length;
      p.last = mine.reduce((m, a) => (a.created_at > m ? a.created_at : m), p.at);
    });
  }
  return json({ ok: true, posts: out });
}

export async function POST(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  const { data: prof } = await db.from('kv_profiles').select('id, banned').eq('id', user.id).maybeSingle();
  if (!prof) return json({ ok: false, error: 'profile_required' }, 403);
  if (prof.banned) return json({ ok: false, error: 'banned' }, 403);

  const since = new Date(Date.now() - 86400000).toISOString();
  const { count } = await db.from('kv_posts').select('id', { count: 'exact', head: true }).eq('author', user.id).gte('created_at', since);
  if ((count || 0) >= 30) return json({ ok: false, error: 'too_many' }, 429);

  let f;
  try { f = await req.formData(); } catch { return json({ ok: false, error: 'bad_request' }, 400); }
  const topic = clip(f.get('topic'), 80);
  const kind = KINDS.includes(f.get('kind')) ? f.get('kind') : 'post';
  const body = clip(f.get('body'), 4000);
  if (!TOPIC.test(topic) || !body) return json({ ok: false, error: 'bad_request' }, 400);
  const parent = clip(f.get('parent'), 40) || null;
  const row = {
    topic, kind, body, author: user.id, parent_id: parent,
    title: clip(f.get('title'), 160) || null, form: clip(f.get('form'), 80) || null,
    place: clip(f.get('place'), 80) || null, stance: clip(f.get('stance'), 10) || null,
  };
  const chk = checkText(row.title, row.body, row.form, row.place);
  row.status = chk.held ? 'held' : 'live';
  row.flag_reason = chk.reason || null;

  const audio = f.get('audio');
  if (audio && typeof audio === 'object' && audio.size > 0) {
    if (audio.size > MAX_AUDIO) return json({ ok: false, error: 'audio_too_large' }, 413);
    const type = audio.type || 'audio/webm';
    if (!type.startsWith('audio/')) return json({ ok: false, error: 'not_audio' }, 415);
    const ext = type.includes('mp4') ? 'm4a' : type.includes('ogg') ? 'ogg' : 'webm';
    const path = `kuveni/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}.${ext}`;
    const { error } = await db.storage.from('recordings').upload(path, Buffer.from(await audio.arrayBuffer()), { contentType: type });
    if (error) return json({ ok: false, error: 'upload_failed' }, 500);
    row.audio_path = path;
  }
  const { data, error } = await db.from('kv_posts').insert(row).select('id, status').single();
  if (error) return json({ ok: false, error: 'save_failed' }, 500);
  return json({ ok: true, id: data.id, held: data.status === 'held' });
}

export async function DELETE(req) {
  const db = admin();
  if (!db) return json({ ok: false, error: 'not_configured' }, 503);
  const user = await userFrom(req, db);
  if (!user) return json({ ok: false, error: 'login_required' }, 401);
  const id = new URL(req.url).searchParams.get('id');
  const { error } = await db.from('kv_posts').update({ status: 'removed' }).eq('id', id).eq('author', user.id);
  if (error) return json({ ok: false, error: 'failed' }, 500);
  return json({ ok: true });
}
