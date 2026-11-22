'use client';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLang } from './LangProvider';
import { supa } from '../lib/supaClient';
import { FORUM_RULES } from '../lib/forum';

const T = {
  sq: {
    live: 'Nga ju', soon: 'Forumi po ndizet. Së shpejti mund të shkruani këtu.', signin: 'Hyni për të shkruar',
    google: 'Hyr me Google', email: 'Emaili juaj', sendLink: 'Më dërgo lidhjen', linkSent: 'Kontrolloni emailin: klikoni lidhjen që ju dërguam.',
    out: 'Dil', as: 'Jeni brenda si', setup: 'Edhe një hap', name: 'Emri që do të shfaqet (jo detyrimisht emri i vërtetë)', village: 'Fshati ose vendi (opsionale)',
    terms: 'Jam 16 vjeç ose më shumë dhe pranoj rregullat e Kuvenit.', rules: 'Rregullat', save: 'Vazhdo',
    write: 'Shkruani', title: 'Titulli', body: 'Çfarë doni të thoni?', form: 'Si e thoni fjalën?', place: 'Ku e thonë kështu?', send: 'Dërgo',
    rec: '🎙 Regjistro zërin', stop: '■ Ndalo', redo: 'Fshije regjistrimin', yes: 'Bindëse', no: 'Jo bindëse', reply: 'Përgjigju', report: 'Raporto',
    reported: 'U raportua. Faleminderit.', del: 'Fshije', held: 'Në pritje të shqyrtimit: vetëm ju e shihni.', heldSent: 'U dërgua. Disa fjalë kërkojnë shqyrtim, ndaj do të shfaqet pasi ta shohë moderatori.',
    empty: 'Asgjë ende. Bëhuni i pari.', stance: 'Për cilin qëndrim?', obj: 'Kundërshtim', sup: 'Mbështetje', q: 'Pyetje', err: 'Diçka nuk shkoi. Provoni përsëri.',
    tooMany: 'Keni shkruar shumë sot. Provoni nesër.', mod: 'Moderimi', loading: 'Po ngarkohet…', best: 'Më bindëset', newest: 'Më të rejat', active: 'Më të gjallat', answers: 'përgjigje', open: 'Hap një bisedë të re', back: '← Të gjitha bisedat', answersH: 'Përgjigjet',
  },
  en: {
    live: 'From you', soon: 'The forum is being switched on. Soon you will be able to write here.', signin: 'Sign in to write',
    google: 'Sign in with Google', email: 'Your email', sendLink: 'Send me the link', linkSent: 'Check your email: click the link we sent you.',
    out: 'Sign out', as: 'Signed in as', setup: 'One more step', name: 'Name to show (need not be your real name)', village: 'Village or place (optional)',
    terms: 'I am 16 or older and accept the rules of Kuveni.', rules: 'The rules', save: 'Continue',
    write: 'Write', title: 'Title', body: 'What do you want to say?', form: 'How do you say the word?', place: 'Where do they say it like this?', send: 'Send',
    rec: '🎙 Record your voice', stop: '■ Stop', redo: 'Delete the recording', yes: 'Convincing', no: 'Not convincing', reply: 'Reply', report: 'Report',
    reported: 'Reported. Thank you.', del: 'Delete', held: 'Waiting for review: only you can see it.', heldSent: 'Sent. Some words need review, so it will appear once a moderator has seen it.',
    empty: 'Nothing yet. Be the first.', stance: 'On which position?', obj: 'Objection', sup: 'Support', q: 'Question', err: 'Something went wrong. Try again.',
    tooMany: 'You have written a lot today. Try tomorrow.', mod: 'Moderation', loading: 'Loading…', best: 'Most convincing', newest: 'Newest', active: 'Most active', answers: 'answers', open: 'Open a new discussion', back: '← All discussions', answersH: 'The answers',
  },
};

export function useKvAuth() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(undefined);
  const [mod, setMod] = useState(false);
  const client = typeof window !== 'undefined' ? supa() : null;
  const loadProfile = useCallback(async (s) => {
    if (!s) { setProfile(null); setMod(false); return; }
    const r = await fetch('/api/kuveni/profile', { headers: { authorization: `Bearer ${s.access_token}` } }).then((x) => x.json()).catch(() => ({}));
    setProfile(r.profile || null); setMod(!!r.mod);
  }, []);
  useEffect(() => {
    if (!client) return undefined;
    client.auth.getSession().then(({ data }) => { setSession(data.session); loadProfile(data.session); });
    const { data: sub } = client.auth.onAuthStateChange((_e, s) => { setSession(s); loadProfile(s); });
    return () => sub.subscription.unsubscribe();
  }, [client, loadProfile]);
  return { client, session, profile, mod, reload: () => loadProfile(session), token: session?.access_token };
}

function SignIn({ client, t }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const here = () => window.location.href.split('#')[0];
  return (
    <div className="kl-box">
      <strong>{t.signin}</strong>
      <button className="btn kl-google" onClick={() => client.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: here() } })}>
        <span className="kl-g">G</span> {t.google}
      </button>
      {sent ? <p className="kl-ok">{t.linkSent}</p> : (
        <form className="kl-email" onSubmit={async (e) => { e.preventDefault(); const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: here() } }); if (!error) setSent(true); }}>
          <input className="pn-input" type="email" required placeholder={t.email} value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn">{t.sendLink}</button>
        </form>
      )}
    </div>
  );
}

function Setup({ token, t, lang, onDone }) {
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [terms, setTerms] = useState(false);
  const [err, setErr] = useState('');
  return (
    <form className="kl-box" onSubmit={async (e) => {
      e.preventDefault();
      const r = await fetch('/api/kuveni/profile', { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` }, body: JSON.stringify({ name, village, terms }) }).then((x) => x.json()).catch(() => ({}));
      if (r.ok) onDone(); else setErr(r.error || 'error');
    }}>
      <strong>{t.setup}</strong>
      <input className="pn-input" required minLength={2} maxLength={40} placeholder={t.name} value={name} onChange={(e) => setName(e.target.value)} />
      <input className="pn-input" maxLength={80} placeholder={t.village} value={village} onChange={(e) => setVillage(e.target.value)} />
      <details><summary>{t.rules}</summary><ol>{FORUM_RULES[lang].map((r, i) => <li key={i}><b>{r[0]}</b>: {r[1]}</li>)}</ol></details>
      <label className="kl-check"><input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} required /> {t.terms}</label>
      {err && <p className="kl-err">{err}</p>}
      <button className="btn btn-gold" disabled={!terms}>{t.save}</button>
    </form>
  );
}

function useRecorder() {
  const [rec, setRec] = useState(false);
  const [blob, setBlob] = useState(null);
  const r = useRef(null);
  const toggle = async () => {
    if (rec) { r.current?.stop(); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream); const chunks = [];
      m.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      m.onstop = () => { stream.getTracks().forEach((x) => x.stop()); setBlob(new Blob(chunks, { type: m.mimeType || 'audio/webm' })); setRec(false); };
      r.current = m; m.start(); setRec(true);
    } catch { setRec(false); }
  };
  return { rec, blob, toggle, clear: () => setBlob(null) };
}

function Composer({ topic, mode, stances, parent, token, t, onSent, compact }) {
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const r = useRecorder();
  return (
    <form className={`kl-compose ${compact ? 'compact' : ''}`} onSubmit={async (e) => {
      e.preventDefault();
      const f = e.currentTarget; const d = new FormData();
      d.set('topic', topic); d.set('body', f.elements.body.value);
      d.set('kind', parent ? 'reply' : mode === 'versions' ? 'version' : mode === 'argument' ? 'argument' : 'post');
      if (parent) d.set('parent', parent);
      ['title', 'form', 'place', 'stance'].forEach((k) => f.elements[k] && d.set(k, f.elements[k].value));
      if (r.blob) d.set('audio', r.blob, 'voice');
      setBusy(true); setMsg('');
      const res = await fetch('/api/kuveni', { method: 'POST', headers: { authorization: `Bearer ${token}` }, body: d }).then((x) => x.json()).catch(() => ({}));
      setBusy(false);
      if (res.ok) { f.reset(); r.clear(); setMsg(res.held ? t.heldSent : ''); onSent(res); }
      else setMsg(res.error === 'too_many' ? t.tooMany : t.err);
    }}>
      {!parent && mode === 'thread' && <input name="title" className="pn-input" maxLength={160} placeholder={t.title} required />}
      {!parent && mode === 'versions' && (
        <div className="kl-row"><input name="form" className="pn-input" maxLength={80} placeholder={t.form} required /><input name="place" className="pn-input" maxLength={80} placeholder={t.place} /></div>
      )}
      {!parent && mode === 'argument' && (
        <select name="stance" className="pn-input" defaultValue={stances?.[0] || ''}>
          {(stances || []).map((s) => <option key={s} value={s}>{t.stance} {s}</option>)}
          <option value="obj">{t.obj}</option><option value="q">{t.q}</option>
        </select>
      )}
      <textarea name="body" className="pn-input" rows={compact ? 2 : 3} maxLength={4000} required placeholder={t.body} />
      <div className="kl-actions">
        {mode !== 'argument' && !compact && (
          <button type="button" className={`btn ${r.rec ? 'kl-recording' : ''}`} onClick={r.toggle}>{r.rec ? t.stop : t.rec}</button>
        )}
        {r.blob && <><audio controls src={URL.createObjectURL(r.blob)} /><button type="button" className="linkish" onClick={r.clear}>{t.redo}</button></>}
        <button className="btn btn-gold" disabled={busy}>{t.send}</button>
      </div>
      {msg && <p className="kl-ok">{msg}</p>}
    </form>
  );
}

function Post({ p, children, token, t, refresh, canWrite, topic, mode }) {
  const [my, setMy] = useState(p.my);
  const [counts, setCounts] = useState([p.yes, p.no]);
  const [replying, setReplying] = useState(false);
  const [reported, setReported] = useState(false);
  const vote = async (v) => {
    if (!token) return;
    const nv = my === v ? 0 : v;
    const c = [...counts]; if (my === 1) c[0]--; if (my === -1) c[1]--; if (nv === 1) c[0]++; if (nv === -1) c[1]++;
    setMy(nv); setCounts(c);
    await fetch('/api/kuveni/vote', { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` }, body: JSON.stringify({ post: p.id, value: nv }) });
  };
  const hdr = { authorization: `Bearer ${token}`, 'content-type': 'application/json' };
  return (
    <article className={`kl-post ${p.held ? 'held' : ''} ${p.parent ? 'reply' : ''}`}>
      <div className="kl-meta"><b>{p.who}</b>{p.village && ` · ${p.village}`} · {new Date(p.at).toLocaleDateString()}{p.stance && <span className="kl-stance">{p.stance === 'obj' ? t.obj : p.stance === 'q' ? t.q : p.stance}</span>}</div>
      {p.title && <h3>{p.title}</h3>}
      {p.form && <p className="kl-form"><strong>{p.form}</strong>{p.place && ` · ${p.place}`}</p>}
      <p className="kl-body">{p.body}</p>
      {p.audio && <audio controls preload="none" src={p.audio} />}
      {p.held && <p className="kl-held">{t.held}</p>}
      <div className="rr-votes">
        <button className={my === 1 ? 'on yes' : ''} onClick={() => vote(1)} disabled={!token}>✓ {t.yes} {counts[0] || ''}</button>
        <button className={my === -1 ? 'on no' : ''} onClick={() => vote(-1)} disabled={!token}>✗ {t.no} {counts[1] || ''}</button>
        {canWrite && !p.parent && <button onClick={() => setReplying(!replying)}>{t.reply}</button>}
        {canWrite && !p.mine && (reported ? <span className="kl-ok">{t.reported}</span> : <button onClick={async () => { await fetch('/api/kuveni/report', { method: 'POST', headers: hdr, body: JSON.stringify({ post: p.id }) }); setReported(true); }}>⚑ {t.report}</button>)}
        {p.mine && <button onClick={async () => { await fetch(`/api/kuveni?id=${p.id}`, { method: 'DELETE', headers: hdr }); refresh(); }}>{t.del}</button>}
      </div>
      {replying && <Composer topic={topic} mode={mode} parent={p.id} token={token} t={t} compact onSent={() => { setReplying(false); refresh(); }} />}
      {children}
    </article>
  );
}

const score = (p) => p.yes - p.no;

export default function LiveTopic({ topic, mode = 'thread', stances, heading, list = false }) {
  const { lang } = useLang();
  const t = T[lang];
  const router = useRouter();
  const { client, session, profile, mod, reload, token } = useKvAuth();
  const [posts, setPosts] = useState(null);
  const [sort, setSort] = useState(list ? 'active' : 'best');
  const load = useCallback(async () => {
    const r = await fetch(`/api/kuveni?topic=${encodeURIComponent(topic)}`, { headers: token ? { authorization: `Bearer ${token}` } : {} }).then((x) => x.json()).catch(() => ({}));
    setPosts(r.ok ? r.posts : []);
  }, [topic, token]);
  useEffect(() => { if (client) load(); }, [client, load]);

  if (!client) return <section className="kl"><h2 className="rr-h">{heading || t.live}</h2><p className="kl-soon">{t.soon}</p></section>;
  const roots = (posts || []).filter((p) => !p.parent).slice();
  if (sort === 'best') roots.sort((a, b) => score(b) - score(a) || (a.at < b.at ? 1 : -1));
  if (sort === 'newest') roots.sort((a, b) => (a.at < b.at ? 1 : -1));
  if (sort === 'active') roots.sort((a, b) => ((b.last || b.at) > (a.last || a.at) ? 1 : -1));
  const canWrite = !!(session && profile && !profile.banned);
  const sorts = list ? ['active', 'newest', 'best'] : ['best', 'newest'];
  return (
    <section className="kl">
      <h2 className="rr-h">{heading || t.live}</h2>
      {roots.length > 1 && (
        <div className="kv-chips" style={{ marginBottom: 10 }}>
          {sorts.map((k) => <button key={k} className={sort === k ? 'on' : ''} onClick={() => setSort(k)}>{t[k]}</button>)}
        </div>
      )}
      {posts === null ? <p>{t.loading}</p> : roots.length === 0 ? <p className="kl-soon">{t.empty}</p> : list ? (
        <div style={{ display: 'grid', gap: 8 }}>
          {roots.map((p) => (
            <Link key={p.id} href={`/kuveni/t/${p.id}`} className={`kl-topic ${p.held ? 'held' : ''}`}>
              <strong>{p.title || p.body.slice(0, 80)}</strong>
              <span>{p.who}{p.village && ` · ${p.village}`} · 💬 {p.answers || 0} {t.answers} · ✓ {p.yes}{p.held ? ` · ${t.held}` : ''}</span>
            </Link>
          ))}
        </div>
      ) : roots.map((p) => (
        <Post key={p.id} p={p} token={token} t={t} refresh={load} canWrite={canWrite} topic={topic} mode={mode}>
          {posts.filter((c) => c.parent === p.id).map((c) => <Post key={c.id} p={c} token={token} t={t} refresh={load} canWrite={canWrite} topic={topic} mode={mode} />)}
        </Post>
      ))}
      <div style={{ marginTop: 16 }}>
        {!session ? <SignIn client={client} t={t} /> : profile === undefined ? null : !profile ? <Setup token={token} t={t} lang={lang} onDone={reload} /> : (
          <>
            {list && <p style={{ fontWeight: 700, margin: '0 0 8px' }}>{t.open}</p>}
            <Composer topic={topic} mode={mode} stances={stances} token={token} t={t} onSent={(res) => { if (list && res?.id && !res.held) router.push(`/kuveni/t/${res.id}`); else load(); }} />
            <p className="kl-who">{t.as} <b>{profile.display_name}</b> · <button className="linkish" onClick={() => client.auth.signOut()}>{t.out}</button>{mod && <> · <Link href="/kuveni/moderimi">{t.mod}</Link></>}</p>
          </>
        )}
      </div>
    </section>
  );
}

export function LiveThread({ id }) {
  const { lang } = useLang();
  const t = T[lang];
  const { client, session, profile, token } = useKvAuth();
  const [p, setP] = useState(undefined);
  const load = useCallback(async () => {
    const r = await fetch(`/api/kuveni?id=${encodeURIComponent(id)}`, { headers: token ? { authorization: `Bearer ${token}` } : {} }).then((x) => x.json()).catch(() => ({}));
    setP(r.ok ? r.post : null);
  }, [id, token]);
  useEffect(() => { if (client) load(); }, [client, load]);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 860 }}>
      <Link href="/kuveni" style={{ fontSize: 14 }}>{t.back}</Link>
      {p === undefined ? <p style={{ marginTop: 20 }}>{t.loading}</p> : p === null ? <p style={{ marginTop: 20 }}>—</p> : (
        <>
          <h1 style={{ fontSize: 'clamp(26px, 4.5vw, 38px)', margin: '16px 0 10px' }}>{p.title}</h1>
          <Post p={{ ...p, title: null }} token={token} t={t} refresh={load} canWrite={false} topic={p.topic} mode="thread" />
          <LiveTopic topic={`tema:${id}`} mode="reply" heading={t.answersH} />
        </>
      )}
    </div>
  );
}
