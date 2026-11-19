'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';
import { PILLARS, PILLAR_ORDER } from '../lib/pillars';

const L = {
  sq: { back: '← Tetë shtyllat', eyebrow: 'Shtylla', q: 'Pyetja', now: 'Ku jemi sot', next: 'Çfarë vjen më pas', prev: 'Shtylla e mëparshme', nxt: 'Shtylla tjetër', open: 'Vend i hapur', founder: 'Themeluesi' },
  en: { back: '← The eight pillars', eyebrow: 'Pillar', q: 'The question', now: 'Where we are today', next: 'What comes next', prev: 'Previous pillar', nxt: 'Next pillar', open: 'Open seat', founder: 'Founder' },
};
const STATUSES = ['OBSERVATION', 'OPEN', 'NEEDS_SOURCE', 'DISPUTED', 'CORRECTED', 'SUPPORTED', 'REFUTED'];

export default function PillarView({ id }) {
  const { t: ui, lang } = useLang();
  const p = PILLARS[id];
  if (!p) return null;
  const t = L[lang];
  const c = p[lang];
  const i = PILLAR_ORDER.indexOf(id);
  const prev = PILLAR_ORDER[i - 1], next = PILLAR_ORDER[i + 1];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/shtyllat" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow} {p.n} · {c.metaphor}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{c.name}</h1>
      <div className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <h2 style={{ fontSize: 20 }}>{t.q}</h2>
        <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5 }}>{c.question}</p>
      </div>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{c.lead}</p>
      {c.draft && <p className="draft-note">{c.draft}</p>}

      {c.articles && (
        <section className="lens-sec">
          <h2>{c.articlesTitle}</h2>
          <ol className={`articles ${lang}`}>
            {c.articles.map(([h, txt]) => <li key={h}><strong>{h}</strong><span>{txt}</span></li>)}
          </ol>
        </section>
      )}

      {c.seats && (
        <section className="lens-sec">
          <h2>{c.seatsTitle}</h2>
          <p>{c.seatsNote}</p>
          <div className="seat-grid">
            {c.seats.map(([h, txt], k) => (
              <div key={h} className="seat"><strong>{k + 1}. {h}</strong><span>{txt}</span><br /><em>{k === 8 ? t.founder : t.open}</em></div>
            ))}
          </div>
        </section>
      )}

      {c.sections.map(([h, items]) => (
        <section key={h} className="lens-sec"><h2>{h}</h2><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></section>
      ))}

      {c.statusesTitle && (
        <section className="lens-sec">
          <h2>{c.statusesTitle}</h2>
          <div className="card" style={{ overflow: 'hidden' }}>
            <dl className="legend">
              {ui.method.statuses.filter(([k]) => STATUSES.includes(k)).map(([k, txt]) => (
                <div key={k}><dt><StatusPill status={k} /></dt><dd>{txt}</dd></div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <div className="now-next">
        <div className="card pad"><h2>{t.now}</h2><ul>{c.now.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div className="card pad"><h2>{t.next}</h2><ul>{c.next.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>

      {p.links?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {p.links.map(([href, sq, en]) => <Link key={href} href={href} className="btn btn-navy">{lang === 'en' ? en : sq} →</Link>)}
        </div>
      )}

      <nav className="lens-nav">
        {prev ? <Link href={`/shtyllat/${prev}`}>← {t.prev}: {PILLARS[prev][lang].name}</Link> : <span />}
        {next ? <Link href={`/shtyllat/${next}`}>{t.nxt}: {PILLARS[next][lang].name} →</Link> : <span />}
      </nav>
    </div>
  );
}

export function Castle() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Kështjella me tetë shtylla">
      <rect x="40" y="262" width="560" height="22" rx="4" fill="#1d2a44" />
      <text x="320" y="277" textAnchor="middle" fontSize="11" fill="#d9b56a" fontFamily="Inter, sans-serif" fontWeight="600">1 · KUSHTETUTA / CONSTITUTION</text>
      <path d="M60 110 L320 40 L580 110 Z" fill="#f6f4ee" stroke="#1d2a44" strokeWidth="2" />
      <text x="320" y="96" textAnchor="middle" fontSize="12" fill="#1d2a44" fontFamily="Inter, sans-serif" fontWeight="700">8 · NDËRFAQJA / INTERFACE</text>
      <rect x="60" y="110" width="520" height="16" fill="#1d2a44" />
      {[2, 3, 4, 5, 6, 7].map((n, k) => (
        <g key={n}>
          <rect x={86 + k * 84} y="132" width="44" height="124" rx="3" fill="#fff" stroke="#1d2a44" strokeWidth="2" />
          <circle cx={108 + k * 84} cy="194" r="13" fill="#1d2a44" />
          <text x={108 + k * 84} y="199" textAnchor="middle" fontSize="13" fill="#d9b56a" fontFamily="Inter, sans-serif" fontWeight="700">{n}</text>
        </g>
      ))}
      <rect x="40" y="256" width="560" height="6" fill="#b8892b" />
    </svg>
  );
}
