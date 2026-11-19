'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import { StatusPill } from './Footer';
import SoundCompare from './SoundCompare';
import MeyerBox from './MeyerBox';
import { getWordDebate } from '../lib/forum';

export default function WordView({ word: w }) {
  const { t, lang } = useLang();
  const s = t.word;
  return (
    <div className="wrap word-page">
      <div className="word-main">
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Link href="/#fjalet" style={{ fontSize: 14 }}>← {s.back}</Link>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 16 }}>
            <h1 className="headword">{w.headword}</h1>
            {w.phonology && w.phonology.startsWith('IPA') && <span style={{ fontSize: 20, color: 'var(--muted)' }}>{w.phonology.replace('IPA:', '').trim()}</span>}
          </div>
          {w.concept && <p style={{ margin: 0, fontSize: 20, color: '#2b3443' }}>{s.concept}: <strong>{w.concept.toLowerCase()}</strong></p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {w.forms.map((f) => <span key={f} className="tag">{f}</span>)}
            {w.region !== '—' && <span className="tag">{w.region}</span>}
            {w.tosk?.length > 0 && <span className="tag">Tosk: {w.tosk.join(', ')}</span>}
          </div>
        </section>

        <SoundCompare concept={w.concept} />

        <MeyerBox forms={[w.headword, ...w.forms, ...(w.tosk || [])]} />

        <section className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontSize: 26 }}>{s.voices}</h2>
          <p style={{ margin: 0, color: 'var(--ink-2)' }}>{s.voicesEmpty}</p>
          <Link href="/kujtesa" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>{s.addVoice}</Link>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontSize: 26 }}>{s.sayTitle}</h2>
          {w.claim ? (
            <article className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: 18 }}>{s.claimTitle}: {w.claim.pieRoot}</h3>
                <StatusPill status={w.claim.status} />
              </div>
              {w.claim.reviewNote && <p style={{ margin: 0, color: 'var(--ink-2)' }}>{w.claim.reviewNote}</p>}
            </article>
          ) : (!w.hypotheses?.length && (
            <p style={{ margin: 0, color: 'var(--ink-2)' }}>{s.sayEmpty}</p>
          ))}
          {w.hypotheses?.map((h) => (
            <article key={h.id} className="card pad" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontFamily: 'var(--sans)', fontSize: 17 }}>{t.scholars.lensLabel} {h.lens}</h3>
                <StatusPill status={h.status} />
              </div>
              <p style={{ margin: 0 }}>{lang === 'en' ? h.en : h.sq}</p>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 15 }}>{t.scholars.test}: {lang === 'en' ? h.test_en : h.test_sq}</p>
            </article>
          ))}
          {w.family?.length > 0 && (
            <div><strong>{t.scholars.family}:</strong> <span style={{ color: 'var(--ink-2)' }}>{w.family.join(' · ')}</span></div>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <Link href={`/studiuesit/${w.id}`} className="btn btn-navy">{s.openDossier}</Link>
            {getWordDebate(w.id) && <Link href={`/kuveni/fjala/${w.id}`} className="btn btn-outline">{lang === 'en' ? 'Debate it in the Kuven' : 'Kuvendo në gegnisht'} →</Link>}
          </div>
        </section>
      </div>

      <aside className="word-side">
        <div className="card pad">
          <dl className="facts">
            {w.morphology && (<><dt>{s.morph}</dt><dd>{w.morphology}</dd></>)}
            {w.phonology && (<><dt>{s.phon}</dt><dd>{w.phonology}</dd></>)}
            {w.provenance && (<><dt>{s.prov}</dt><dd>{w.provenance}</dd></>)}
            <dt>ID</dt><dd className="mono">{w.id}</dd>
          </dl>
        </div>
      </aside>
    </div>
  );
}
