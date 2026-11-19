'use client';
import { useEffect, useState } from 'react';

const GENDER = { m: 'Burrë', f: 'Grua' };
const ERR = {
  not_configured: 'Paneli nuk është ndezur ende: mungon fjalëkalimi ADMIN_PASSWORD në Vercel.',
  wrong_password: 'Fjalëkalim i gabuar.',
  no_database: 'Mungon lidhja me databazën.',
  read_failed: 'Nuk u lexuan dot të dhënat.',
};

function Bars({ title, rows, label = (k) => k }) {
  const max = Math.max(1, ...rows.map(([, n]) => n));
  return (
    <section className="card pad pn-box">
      <h2>{title}</h2>
      {rows.length === 0 && <p className="pn-muted">Ende asgjë.</p>}
      {rows.slice(0, 12).map(([k, n]) => (
        <div key={k} className="pn-bar">
          <span className="pn-k">{label(k)}</span>
          <span className="pn-track"><i style={{ width: `${(n / max) * 100}%` }} /></span>
          <b>{n}</b>
        </div>
      ))}
    </section>
  );
}

export default function Paneli() {
  const [pw, setPw] = useState('');
  const [d, setD] = useState(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  async function load(p) {
    setBusy(true); setErr('');
    try {
      const r = await fetch('/api/paneli', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: p }) });
      const j = await r.json();
      if (!j.ok) { setErr(ERR[j.error] || 'Gabim.'); setD(null); try { sessionStorage.removeItem('geg-pn'); } catch {} }
      else { setD(j); try { sessionStorage.setItem('geg-pn', p); } catch {} }
    } catch { setErr('Nuk u lidh dot me serverin.'); }
    setBusy(false);
  }

  useEffect(() => { try { const p = sessionStorage.getItem('geg-pn'); if (p) { setPw(p); load(p); } } catch {} }, []);

  if (!d) {
    return (
      <div className="wrap" style={{ paddingTop: 48, paddingBottom: 64, maxWidth: 480 }}>
        <p className="eyebrow">Vetëm për themeluesin</p>
        <h1 style={{ fontSize: 40 }}>Paneli</h1>
        <form className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 12 }} onSubmit={(e) => { e.preventDefault(); load(pw); }}>
          <label htmlFor="pn-pw" style={{ fontWeight: 600 }}>Fjalëkalimi</label>
          <input id="pn-pw" type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} className="pn-input" />
          <button className="btn btn-navy" disabled={busy || !pw}>{busy ? 'Duke hapur…' : 'Hyr'}</button>
          {err && <p style={{ color: '#9a1f12', margin: 0 }}>{err}</p>}
        </form>
      </div>
    );
  }

  const t = d.totals;
  const tiles = [
    ['Gjithsej', t.all], ['Sot', t.today], ['7 ditët e fundit', t.week], ['Fjalë të ndryshme', t.words],
    ['Me zë', t.audio], ['Me shpjegim', t.meaning], ['Me shembull', t.example], ['Presin shqyrtim', t.pending],
  ];
  const maxDay = Math.max(1, ...d.days.map(([, n]) => n));
  return (
    <div className="wrap" style={{ paddingTop: 36, paddingBottom: 64 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
        <h1 style={{ fontSize: 40 }}>Paneli</h1>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn btn-outline" style={{ minHeight: 40 }} onClick={() => load(pw)} disabled={busy}>{busy ? '…' : 'Rifresko'}</button>
          <button className="btn btn-outline" style={{ minHeight: 40 }} onClick={() => { try { sessionStorage.removeItem('geg-pn'); } catch {} setD(null); setPw(''); }}>Dil</button>
        </div>
      </div>

      <div className="pn-tiles">
        {tiles.map(([k, v]) => <div key={k} className="card pn-tile"><b>{v}</b><span>{k}</span></div>)}
      </div>

      <section className="card pad pn-box">
        <h2>30 ditët e fundit</h2>
        <div className="pn-days">
          {d.days.map(([day, n]) => <span key={day} title={`${day}: ${n}`} style={{ height: `${(n / maxDay) * 100}%` }} />)}
        </div>
        <div className="pn-muted" style={{ display: 'flex', justifyContent: 'space-between' }}><span>{d.days[0][0]}</span><span>sot</span></div>
      </section>

      <div className="pn-grid">
        <Bars title="Krahina" rows={d.by.region} />
        <Bars title="Ku jetojnë sot" rows={d.by.country} />
        <Bars title="Mosha" rows={d.by.age} />
        <Bars title="Burrë / grua" rows={d.by.gender} label={(k) => GENDER[k] || k} />
        <Bars title="Kush e thoshte" rows={d.by.speaker} />
        <Bars title="Fjalët më të dërguara" rows={d.topWords} />
      </div>

      <section className="pn-box" style={{ marginTop: 18 }}>
        <h2>Të fundit</h2>
        {d.latest.length === 0 && <p className="pn-muted">Ende asnjë dërgesë.</p>}
        <div className="pn-list">
          {d.latest.map((r) => (
            <article key={r.id} className="card pn-item">
              <div className="pn-row1">
                <strong>{r.word}</strong>
                <span className={`pill pill-${r.status === 'approved' ? 'supported' : r.status === 'rejected' ? 'refuted' : 'open'}`}>{r.status === 'approved' ? 'Pranuar' : r.status === 'rejected' ? 'Refuzuar' : 'Pret'}</span>
                <span className="pn-muted">{new Date(r.at).toLocaleString('sq-AL')}</span>
              </div>
              {r.meaning && <p>{r.meaning}</p>}
              {r.example && <p className="pn-muted">„{r.example}”</p>}
              <div className="pn-muted">
                {[r.village, r.region, r.country, r.speaker, r.era, r.age, GENDER[r.gender], r.birthplace && `lindur/rritur: ${r.birthplace}`].filter(Boolean).join(' · ')}
              </div>
              {r.audio && <audio controls preload="none" src={r.audio} style={{ width: '100%', marginTop: 6 }} />}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
