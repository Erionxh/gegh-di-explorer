'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { TRIVIA, TRIVIA_CATS } from '../../lib/trivia';

const T = {
  sq: { eyebrow: 'Kuriozitete me burim', h1: 'A e dini?', lead: 'Gjëra të vogla e të bukura për shqipen dhe gegnishten. Çdo kartë ka burimin e vet dhe shenjën nëse asht e vërtetuar apo ende e diskutueshme.', all: 'Të gjitha', ok: '✓ E vërtetuar', deb: '≈ E diskutueshme', myth: '✗ Mit', src: 'Burimi', more: 'Ma shumë →', rand: '🎲 Një rastësore' },
  en: { eyebrow: 'Curiosities with sources', h1: 'Did you know?', lead: 'Small, beautiful facts about Albanian and Gheg. Every card has its source and a mark saying whether it is proven or still debated.', all: 'All', ok: '✓ Proven', deb: '≈ Debated', myth: '✗ Myth', src: 'Source', more: 'More →', rand: '🎲 A random one' },
};

export default function AeDini() {
  const { lang } = useLang();
  const t = T[lang];
  const [cat, setCat] = useState('all');
  const [hi, setHi] = useState(null);
  const list = TRIVIA.map((x, i) => ({ ...x, i })).filter((x) => cat === 'all' || x.cat === cat);
  const pick = () => { const k = Math.floor(Math.random() * TRIVIA.length); setCat('all'); setHi(k); setTimeout(() => document.getElementById(`tr-${k}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50); };
  return (
    <div className="wrap" style={{ paddingTop: 36, paddingBottom: 64, maxWidth: 820 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(36px, 6vw, 52px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="kv-chips" style={{ margin: '14px 0' }}>
        <button className={cat === 'all' ? 'on' : ''} onClick={() => setCat('all')}>{t.all}</button>
        {Object.entries(TRIVIA_CATS).map(([k, v]) => <button key={k} className={cat === k ? 'on' : ''} onClick={() => setCat(k)}>{v[lang === 'en' ? 1 : 0]}</button>)}
        <button onClick={pick}>{t.rand}</button>
      </div>
      <div className="tr-grid">
        {list.map((x) => {
          const [h, b] = lang === 'en' ? x.en : x.sq;
          return (
            <article key={x.i} id={`tr-${x.i}`} className={`tr-card ${hi === x.i ? 'hi' : ''}`}>
              <div className="tr-top">{x.yr && <span className="tr-yr">{x.yr}</span>}<span className={`tr-tag ${x.tag}`}>{t[x.tag]}</span></div>
              <h2>{h}</h2>
              <p>{b}</p>
              <div className="tr-foot"><span>{t.src}: {x.src}</span>{x.link && <Link href={x.link}>{t.more}</Link>}</div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
