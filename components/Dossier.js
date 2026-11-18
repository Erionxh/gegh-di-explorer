'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';

// Pikat e besueshmërisë dalin vetëm nga statusi (shih /metodologjia), jo nga vota.
const CONFIDENCE = { SUPPORTED: 4, OPEN: 2, CORRECTED: 2, NEEDS_SOURCE: 1, DISPUTED: 1, REFUTED: 0 };

function Dots({ status }) {
  const n = CONFIDENCE[status] ?? 1;
  const color = status === 'REFUTED' ? '#b42318' : n >= 3 ? '#2f7a4f' : '#c58a1c';
  return (
    <span role="img" aria-label={`${n}/5`} style={{ display: 'inline-flex', gap: 5 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} style={{ width: 11, height: 11, borderRadius: 999, background: i < n ? color : '#e1e4ea', display: 'inline-block' }} />
      ))}
    </span>
  );
}

export default function Dossier({ word: w }) {
  const { t, lang } = useLang();
  const s = t.scholars;
  const d = t.dossier;
  const c = w.claim;
  const [tab, setTab] = useState(0);

  const claimRows = [];
  if (c) claimRows.push({ id: `${w.id}-A`, source: c.pieRoot, status: c.status, tag: d.current });
  if (c && c.superseded && c.superseded.pie_root) claimRows.push({ id: `${w.id}-0`, source: c.superseded.pie_root, status: 'REFUTED', tag: d.earlier });
  (w.hypotheses || []).forEach((h) => claimRows.push({ id: `${w.id}-${h.id}`, source: lang === 'en' ? h.en : h.sq, status: h.status, tag: `${s.lensLabel} ${h.lens}${h.author ? ' · ' + h.author : ''}` }));
  const has1b = (w.hypotheses || []).some((h) => h.lens === '1b');
  const lensStates = [c ? 'open' : 'collecting', 'none', 'collecting', 'na', 'none', 'collecting'];
  const issueUrl = `https://github.com/Erionxh/gegh-di-explorer/issues/new?title=${encodeURIComponent(w.headword + ' (' + w.id + ')')}`;

  return (
    <div className="wrap dossier">
      <div className="dossier-main">
        <section className="card pad dossier-head">
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link href="/studiuesit" style={{ fontSize: 14 }}>← {s.title}</Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'baseline' }}>
              <h1 style={{ fontSize: 56, lineHeight: 1 }}>{w.headword}</h1>
              <span className="tag mono">{w.id}</span>
            </div>
            {w.concept && <p style={{ margin: 0, fontSize: 18, fontStyle: 'italic', fontFamily: 'var(--serif)' }}>“{w.concept.toLowerCase()}”</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {w.forms.map((f) => <span key={f} className="tag">{f}</span>)}
              {c && c.status === 'CORRECTED' && <StatusPill status="CORRECTED" />}
            </div>
          </div>
          <div className="summary-box">
            <h2>{d.summary}</h2>
            <dl>
              <dt>{d.form}</dt><dd>{w.forms.join(' / ')}</dd>
              <dt>{d.meaning}</dt><dd>{(w.concept || '—').toLowerCase()}</dd>
              <dt>{d.language}</dt><dd>{d.languageVal}</dd>
              {w.morphology && (<><dt>{d.gram}</dt><dd>{w.morphology}</dd></>)}
              <dt>{d.status}</dt><dd>{c ? <StatusPill status={c.status} /> : <StatusPill status="OBSERVATION" />}</dd>
            </dl>
          </div>
        </section>

        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 24 }}>{d.claimsTitle}</h2>
            <Link href="/metodologjia#statuset" style={{ fontSize: 14 }}>{t.method.legendLink}</Link>
          </div>
          {claimRows.length ? (
            <div style={{ overflowX: 'auto' }}>
              <table className="data" style={{ minWidth: 560 }}>
                <thead><tr>{d.cols.map((x) => <th key={x} scope="col">{x}</th>)}</tr></thead>
                <tbody>
                  {claimRows.map((r) => (
                    <tr key={r.id}>
                      <td className="mono" style={{ whiteSpace: 'nowrap' }}>{r.id}<div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 400 }}>{r.tag}</div></td>
                      <td>{r.source}</td>
                      <td><StatusPill status={r.status} /></td>
                      <td><Dots status={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{ margin: 0, color: 'var(--ink-2)' }}>{s.noClaim}</p>
          )}
        </section>

        {(w.hypotheses?.length > 0 || w.family?.length > 0) && (
          <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ fontSize: 24 }}>{s.hypTitle}</h2>
            {w.hypotheses.map((h) => (
              <article key={h.id} className="hyp">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                  <strong>{h.id} · {s.lensLabel} {h.lens}</strong>
                  <StatusPill status={h.status} />
                </div>
                <p>{lang === 'en' ? h.en : h.sq}</p>
                <p className="hyp-test"><strong>{s.test}:</strong> {lang === 'en' ? h.test_en : h.test_sq}</p>
                {h.author && <p className="hyp-by">{s.by}: {h.author}</p>}
              </article>
            ))}
            {w.family?.length > 0 && (
              <div>
                <strong>{s.family}:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>{w.family.map((f) => <span key={f} className="tag">{f}</span>)}</div>
              </div>
            )}
          </section>
        )}

        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div role="tablist" aria-label={d.claimsTitle} className="tabs">
            {d.tabs.map((name, i) => (
              <button key={name} type="button" role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>{name}</button>
            ))}
          </div>

          {tab === 0 && (
            <div className="tabpanel">
              <p><strong>{w.headword}</strong> — {(w.concept || '').toLowerCase()}. {c ? `${s.pie}: ${c.pieRoot}.` : s.noClaim}</p>
              {c?.reviewNote && <p style={{ color: 'var(--ink-2)' }}>{c.reviewNote}</p>}
              <div className="method-note"><strong>{d.methodNote}.</strong> {d.methodText}</div>
            </div>
          )}

          {tab === 1 && (
            <ol className="chain">
              <li><strong>{d.chainObs}</strong><span>{[w.forms.join(' / '), w.phonology, w.provenance].filter(Boolean).join(' · ')}</span></li>
              <li><strong>{d.chainClaim}</strong><span>{c ? c.pieRoot : '—'}</span></li>
              <li><strong>{d.chainReview}</strong><span>{c?.reviewNote ? `${c.reviewNote} (${c.reviewed})` : '—'}</span></li>
              <li><strong>{d.chainNext}</strong><span>{d.chainNextText}</span></li>
            </ol>
          )}

          {tab === 2 && (
            c && c.cognates.length ? (
              <table className="data" style={{ minWidth: 0 }}>
                <tbody>
                  <tr><th scope="row" style={{ width: '35%' }}>Shqip (gegë)</th><td><em>{w.forms.join(' / ')}</em></td></tr>
                  {c.cognates.map((x) => {
                    const [lang, ...rest] = x.split(' ');
                    return <tr key={x}><th scope="row">{lang}</th><td>{rest.join(' ')}</td></tr>;
                  })}
                </tbody>
              </table>
            ) : <p style={{ margin: 0, color: 'var(--ink-2)' }}>{d.noCognates}</p>
          )}

          {tab === 3 && (
            <div className="tabpanel">
              {c && c.pieRoot && c.pieRoot.startsWith('*') && (
                <div className="derivation" aria-label={d.tabs[3]}>
                  <span className="deriv-box">{c.pieRoot.split(' ')[0]}</span>
                  <span className="deriv-arrow" aria-hidden="true">↓</span>
                  <span className="deriv-pending">?</span>
                  <span className="deriv-arrow" aria-hidden="true">↓</span>
                  <span className="deriv-box deriv-end">{w.headword}</span>
                </div>
              )}
              <p style={{ color: 'var(--ink-2)' }}>{d.soundEmpty}</p>
            </div>
          )}

          {tab === 4 && <p style={{ margin: 0, color: 'var(--ink-2)' }}>{d.sourcesEmpty}</p>}

          {tab === 5 && (
            <div className="tabpanel">
              <p style={{ color: 'var(--ink-2)' }}>{d.discussText}</p>
              <a href={issueUrl} className="btn btn-navy" style={{ minHeight: 44, fontSize: 14 }}>{d.discussCta}</a>
            </div>
          )}

          {c?.superseded && tab < 2 && (
            <div className="superseded">
              <strong>{s.superseded}</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>
                {Object.entries(c.superseded).map(([k, v]) => (
                  <li key={k}><code>{k}</code>: {Array.isArray(v) ? v.join(' · ') || '—' : String(v)}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>

      <aside className="dossier-side">
        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 16 }}>{s.lensesTitle}</h2>
          <ul className="lens-list">
            {s.lenses.map((name, i) => (
              <li key={name} style={{ flexDirection: 'column', gap: 6 }}>
                <span style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}><span>{i + 1} {name}</span><span style={{ color: 'var(--muted)' }}>{s.lensState[lensStates[i]]}</span></span>
                {i === 0 && s.sublenses.map((sub, j) => (
                  <span key={sub} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, paddingLeft: 14, fontSize: 13 }}>
                    <span>{sub}</span>
                    <span style={{ color: 'var(--muted)' }}>{j === 1 && has1b ? s.lensState.open : s.lensState.collecting}</span>
                  </span>
                ))}
              </li>
            ))}
          </ul>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--muted)' }}>{s.lensNote} <Link href="/metodologjia#lentet">→</Link></p>
        </section>
        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 16 }}>{s.observation}</h2>
          <dl className="facts" style={{ fontSize: 14 }}>
            {w.phonology && (<><dt>{t.word.phon}</dt><dd>{w.phonology}</dd></>)}
            {w.provenance && (<><dt>{t.word.prov}</dt><dd>{w.provenance}</dd></>)}
          </dl>
        </section>
        <Link href={`/fjala/${w.id}`} className="btn btn-outline">{s.publicView}</Link>
      </aside>
    </div>
  );
}
