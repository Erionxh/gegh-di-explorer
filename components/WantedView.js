'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import MeyerBox from './MeyerBox';
import Zerat from './Zerat';
import { WANTED, getWanted, archiveMatch, layerMatch, CAT_EN } from '../lib/wantedWords';

const T = {
  sq: { back: '← Të gjitha fjalët', eyebrow: 'GEG 500 · Fjalë që kërkojmë', std: 'Në shqipen standarde', ask: 'Si e thoni në Mirditë, ose në fshatin tuaj?', askLead: 'Kjo fjalë nuk ka ende zërin e saj në arkiv. Thuajeni ashtu si e thoshin te shpia: me fshatin dhe brezin.', rec: '🎙 Regjistro si e thoni', arch: 'Kjo fjalë ka faqen e saj në arkiv:', layer: 'Shih edhe', prev: '← E mëparshmja', next: 'Tjetra →', no: 'nr.' },
  en: { back: '← All the words', eyebrow: 'GEG 500 · Words we are looking for', std: 'In standard Albanian', ask: 'How do you say it in Mirdita, or in your village?', askLead: 'This word has no voice in the archive yet. Say it the way it was said at home: with the village and the generation.', rec: '🎙 Record how you say it', arch: 'This word has its own page in the archive:', layer: 'See also', prev: '← Previous', next: 'Next →', no: 'no.' },
};

export default function WantedView({ slug }) {
  const { lang } = useLang();
  const t = T[lang];
  const w = getWanted(slug);
  const a = archiveMatch(w);
  const l = layerMatch(w);
  const i = w.n - 1;
  return (
    <div className="wrap" style={{ paddingTop: 44, paddingBottom: 64, maxWidth: 820 }}>
      <Link href="/fjalet" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow} · {t.no} {w.n} · {lang === 'en' ? CAT_EN[w.cat] || w.cat : w.cat}</p>
      <h1 className="headword" style={{ marginBottom: 4 }}>{w.sq}</h1>
      <p style={{ fontSize: 19, color: 'var(--ink-2)', margin: 0 }}>{w.en}</p>
      <p style={{ fontSize: 13.5, color: 'var(--muted)', marginTop: 4 }}>{t.std}</p>

      {a ? (
        <section className="card pad" style={{ marginTop: 20 }}>
          <p style={{ margin: 0 }}>{t.arch} <Link href={`/fjala/${a.id}`}><b>{a.headword}</b> →</Link></p>
        </section>
      ) : (
        <section className="card pad" style={{ marginTop: 20, borderLeft: '4px solid var(--gold)' }}>
          <h2 style={{ fontSize: 22, marginTop: 0 }}>{t.ask}</h2>
          <p style={{ color: 'var(--ink-2)' }}>{t.askLead}</p>
          <Link className="btn btn-gold" style={{ minHeight: 44 }} href={`/kujtesa?fjala=${encodeURIComponent(w.sq.split('/')[0].trim())}`}>{t.rec}</Link>
        </section>
      )}

      {l && <p style={{ marginTop: 16 }}>{t.layer}: <Link href={`/shtresat/${l[0]}`}>{lang === 'en' ? l[2] : l[1]} →</Link></p>}

      <div style={{ marginTop: 18 }}><MeyerBox forms={w.sq.split('/').map((x) => x.trim())} /></div>
      <Zerat slugs={[w.slug]} />

      <nav style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28 }}>
        {i > 0 ? <Link href={`/kerkojme/${WANTED[i - 1].slug}`}>{t.prev}</Link> : <span />}
        {i < WANTED.length - 1 ? <Link href={`/kerkojme/${WANTED[i + 1].slug}`}>{t.next}</Link> : <span />}
      </nav>
    </div>
  );
}
