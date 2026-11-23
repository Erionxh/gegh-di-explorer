'use client';
import Link from 'next/link';
import { useLang } from './LangProvider';
import LiveTopic from './KuveniLive';
import { PYETJET } from '../lib/pyetjet';

const T = {
  sq: { eyebrow: 'Kuveni · Pyetjet', h1: 'Pyetjet e Kuvenit', lead: 'Pyetje të vërteta nga GEG 1.0. Çdo përgjigje me fshatin dhe me atë që e thoshte është një dëshmi e vogël.', how: 'Si të përgjigjeni: shkruani fshatin, kush e thoshte (gjyshja, babai, ju vetë) dhe si e thoshte. Me zë është edhe më mirë.', voice: '🎙 Thuaje me zë', answers: 'Përgjigjet tuaja', back: '← Kuveni', all: 'Të gjitha pyetjet →', see: 'Shih edhe' },
  en: { eyebrow: 'Kuveni · Questions', h1: 'Questions of the Kuven', lead: 'Real questions from GEG 1.0. Every answer with a village and who said it is a small piece of evidence.', how: 'How to answer: write the village, who said it (grandmother, father, yourself) and how they said it. By voice is even better.', voice: '🎙 Say it aloud', answers: 'Your answers', back: '← Kuveni', all: 'All questions →', see: 'See also' },
};

export function PyetjetIndex() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <Link href="/kuveni" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 14 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(32px, 7vw, 46px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="lens-pages">
        {PYETJET.map((x) => (
          <Link key={x.id} href={`/kuveni/pyetje/${x.id}`} className="card pad rr-card"><h3 style={{ margin: 0 }}>{x[lang].t} →</h3></Link>
        ))}
      </div>
    </div>
  );
}

export function PyetjaView({ x }) {
  const { lang } = useLang();
  const t = T[lang];
  const c = x[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <Link href="/kuveni/pyetje" style={{ fontSize: 14 }}>{t.all}</Link>
      <p className="eyebrow" style={{ marginTop: 14 }}>{t.eyebrow} · GEG 1.0</p>
      <h1 style={{ fontSize: 'clamp(28px, 6.5vw, 42px)', margin: '4px 0 10px' }}>{c.t}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{c.b}</p>
      <p style={{ color: 'var(--ink-2)' }}>{t.how}</p>
      <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(x.sq.t)}`}>{t.voice}</Link>
        <span style={{ color: 'var(--ink-2)' }}>{t.see}: <Link href={x.link[0]}>{lang === 'en' ? x.link[2] : x.link[1]}</Link></span>
      </p>
      <LiveTopic topic={`pyetje-geg:${x.id}`} mode="reply" heading={t.answers} />
    </div>
  );
}
