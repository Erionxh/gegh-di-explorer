'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useKvAuth } from '../../../components/KuveniLive';


function ModSignIn({ client }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  if (sent) return <p className="kl-ok">Kontrolloni emailin dhe klikoni lidhjen. Ajo ju sjell drejt këtu, te Moderimi.</p>;
  return (
    <form className="kl-email" style={{ maxWidth: 420 }} onSubmit={async (e) => {
      e.preventDefault(); setErr('');
      const { error } = await client.auth.signInWithOtp({ email, options: { emailRedirectTo: `${window.location.origin}/kuveni/moderimi` } });
      if (error) setErr(error.message); else setSent(true);
    }}>
      <p style={{ margin: '0 0 8px' }}>Hyni me emailin e moderatorit:</p>
      <input className="kt-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="emaili@shembull.com" />
      <button className="btn" type="submit" style={{ marginTop: 8 }}>Më dërgo lidhjen</button>
      {err && <p style={{ color: '#a8321f' }}>{err}</p>}
    </form>
  );
}

function Regjistrimet({ token }) {
  const [d, setD] = useState(null);
  const [reasons, setReasons] = useState({});
  const [tx, setTx] = useState({});
  const [txMsg, setTxMsg] = useState({});
  const [err, setErr] = useState('');
  const saveTx = async (r) => {
    const v = { ipa: r.ipa || '', geg: r.geg_spelling || '', status: r.transcription_status && r.transcription_status !== 'none' ? r.transcription_status : 'draft', ...(tx[r.id] || {}) };
    const res = await fetch('/api/kujtesa/shqyrtim', { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify({ id: r.id, action: 'transcribe', ...v }) }).then((x) => x.json()).catch(() => ({}));
    setTxMsg({ ...txMsg, [r.id]: res.ok ? 'U ruajt ✓' : res.error === 'needs_sql' ? 'Duhet ekzekutuar docs/transkriptimi.sql në Supabase.' : 'Nuk u ruajt.' });
  };
  const setT = (id, k, val) => setTx({ ...tx, [id]: { ...(tx[id] || {}), [k]: val } });
  const load = useCallback(async () => {
    const r = await fetch('/api/kujtesa/shqyrtim', { headers: { authorization: `Bearer ${token}` } }).then((x) => x.json()).catch(() => ({}));
    setD(r);
  }, [token]);
  useEffect(() => { load(); }, [load]);
  const act = async (id, action) => {
    const reason = (reasons[id] || '').trim();
    if (reason.length < 3) { setErr('Shkruaj një arsye të shkurtër para se të vendosësh.'); return; }
    setErr('');
    await fetch('/api/kujtesa/shqyrtim', { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify({ id, action, reason }) });
    load();
  };
  if (!d) return <p>Po ngarkohet…</p>;
  if (!d.ok) return <p>Gabim: {d.error}</p>;
  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ fontSize: 26 }}>Regjistrimet në pritje · {d.items.length}</h2>
      <p className="kt-small">{d.total} regjistrime gjithsej. Çdo vendim kërkon një arsye dhe shënohet në ditar.</p>
      {err && <p className="kl-err">{err}</p>}
      {d.items.length === 0 && <p className="kl-ok">Asgjë për të shqyrtuar. ✓</p>}
      {d.items.map((r) => (
        <article key={r.id} className="kl-post held">
          <div className="kl-meta">{new Date(r.created_at).toLocaleString()} · {r.region || r.era || ''} · {r.speaker || ''}{r.consent_by === 'on_behalf' ? ' · regjistruar nga një i afërm' : ''}{r.consent_public ? ' · lejon dëgjim publik' : ' · vetëm për studim'}</div>
          <h3 style={{ margin: '6px 0' }}>{r.word} <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: 15 }}>{r.meaning}</span></h3>
          <p className="kl-form">{[r.village, r.age_band, r.birthplace].filter(Boolean).join(' · ')}</p>
          {r.audio ? <audio controls preload="none" src={r.audio} /> : <p className="kt-small">Pa zë.</p>}
          {r.consent_audio && <><p className="kt-small">Pëlqimi i thënë me zë:</p><audio controls preload="none" src={r.consent_audio} /></>}
          {r.example && <p className="kl-body">{r.example}</p>}
          {r.said_form && <p className="kl-body">Si e tha (sipas dërguesit): <b>{r.said_form}</b></p>}
          <details style={{ margin: '6px 0' }}>
            <summary className="kt-small" style={{ cursor: 'pointer' }}>✍️ Transkriptimi {r.transcription_status === 'checked' ? '· i kontrolluar' : r.transcription_status === 'draft' ? '· draft' : ''}</summary>
            <input className="pn-input" style={{ width: '100%', margin: '6px 0' }} placeholder="IPA, p.sh. [ˈtaːməl]" defaultValue={r.ipa || ''} onChange={(e) => setT(r.id, 'ipa', e.target.value)} />
            <input className="pn-input" style={{ width: '100%', margin: '0 0 6px' }} placeholder="Shkrimi gegnisht, p.sh. tâmël" defaultValue={r.geg_spelling || ''} onChange={(e) => setT(r.id, 'geg', e.target.value)} />
            <select className="pn-input" defaultValue={r.transcription_status && r.transcription_status !== 'none' ? r.transcription_status : 'draft'} onChange={(e) => setT(r.id, 'status', e.target.value)}>
              <option value="draft">Draft</option><option value="checked">I kontrolluar</option>
            </select>
            <button className="btn" style={{ marginLeft: 8 }} onClick={() => saveTx(r)}>Ruaj</button>
            {txMsg[r.id] && <span className="kt-small" style={{ marginLeft: 8 }}>{txMsg[r.id]}</span>}
          </details>
          <input className="pn-input" style={{ width: '100%', margin: '6px 0' }} placeholder="Arsyeja (p.sh. zë i qartë, forma gege e saktë / zhurmë, fjalë tjetër)" value={reasons[r.id] || ''} onChange={(e) => setReasons({ ...reasons, [r.id]: e.target.value })} />
          <div className="rr-votes">
            <button className="on yes" onClick={() => act(r.id, 'approved')}>✓ Prano</button>
            <button className="on no" onClick={() => act(r.id, 'rejected')}>✗ Refuzo</button>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Moderimi() {
  const { client, session, token } = useKvAuth();
  const [d, setD] = useState(null);
  const load = useCallback(async () => {
    if (!token) return;
    const r = await fetch('/api/kuveni/mod', { headers: { authorization: `Bearer ${token}` } }).then((x) => x.json()).catch(() => ({}));
    setD(r);
  }, [token]);
  useEffect(() => { load(); }, [load]);
  const act = async (post, action) => {
    if (action === 'ban' && !window.confirm('Ta bllokoj këtë person? Postimi fshihet dhe ai nuk mund të shkruajë më.')) return;
    await fetch('/api/kuveni/mod', { method: 'POST', headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify({ post, action }) });
    load();
  };
  return (
    <div className="wrap" style={{ paddingTop: 36, paddingBottom: 64, maxWidth: 860 }}>
      <Link href="/kuveni" style={{ fontSize: 14 }}>← Kuveni</Link>
      <h1 style={{ fontSize: 36 }}>Moderimi</h1>
      {!client && <p>Forumi nuk është ndezur ende.</p>}
      {client && !session && <ModSignIn client={client} />}
      {d && !d.ok && <p>{d.error === 'not_moderator' ? 'Ky email nuk është moderator.' : `Gabim: ${d.error}`}</p>}
      {d?.ok && token && <Regjistrimet token={token} />}
      {d?.ok && (
        <>
          <h2 style={{ fontSize: 26, marginTop: 32 }}>Kuveni</h2>
          <p>{d.total} postime gjithsej · {d.users} anëtarë · <b>{d.items.length}</b> presin shqyrtim</p>
          {d.items.length === 0 && <p className="kl-ok">Asgjë për të shqyrtuar. ✓</p>}
          {d.items.map((p) => (
            <article key={p.id} className="kl-post held">
              <div className="kl-meta"><b>{p.who}</b> · {p.topic} · {new Date(p.created_at).toLocaleString()} · arsyeja: {p.flag_reason || 'raportim'}{p.banned && ' · I BLLOKUAR'}</div>
              {p.title && <h3>{p.title}</h3>}
              {p.form && <p className="kl-form"><strong>{p.form}</strong>{p.place && ` · ${p.place}`}</p>}
              <p className="kl-body">{p.body}</p>
              {p.reports.length > 0 && <p className="kl-held">Raportime: {p.reports.join(' · ')}</p>}
              <div className="rr-votes">
                <button className="on yes" onClick={() => act(p.id, 'approve')}>✓ Lejoje</button>
                <button className="on no" onClick={() => act(p.id, 'remove')}>✗ Fshije</button>
                <button onClick={() => act(p.id, 'ban')}>⛔ Fshije dhe blloko</button>
              </div>
            </article>
          ))}
        </>
      )}
    </div>
  );
}
