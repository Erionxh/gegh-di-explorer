'use client';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useKvAuth } from '../../../components/KuveniLive';

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
      {client && !session && <p>Hyni nga cilado faqe e Kuvenit me emailin e moderatorit, pastaj kthehuni këtu.</p>}
      {d && !d.ok && <p>{d.error === 'not_moderator' ? 'Ky email nuk është moderator.' : `Gabim: ${d.error}`}</p>}
      {d?.ok && (
        <>
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
