'use client';
import { useRef, useState } from 'react';
import { useLang } from './LangProvider';
import { ANCIENT, LANGS } from '../lib/ancient';

const TXT = {
  sq: {
    title: 'Dëgjo dhe krahaso',
    lead: 'Fjala e Mirditës pranë gjuhëve më të vjetra të shkruara. Shtyp ▶ për ta dëgjuar.',
    read: 'Si lexohet',
    all: '▶ Dëgjoji të gjitha',
    root: 'Rrënja e përbashkët',
    note: 'Zë sintetik. Askush nuk e ka dëgjuar hititishten apo sanskritishten të folur: shqiptimi është rindërtuar nga studiuesit. Fjalët e gjalla do të kenë regjistrime të vërteta.',
  },
  en: {
    title: 'Listen and compare',
    lead: 'The Mirdita word next to the oldest written languages. Press ▶ to hear it.',
    read: 'How to say it',
    all: '▶ Play them all',
    root: 'Shared root',
    note: 'Synthetic voice. Nobody has heard Hittite or Sanskrit spoken: the pronunciation is reconstructed by scholars. Living words will have real recordings.',
  },
};

export default function SoundCompare({ concept }) {
  const { lang } = useLang();
  const set = concept && ANCIENT[concept.toUpperCase()];
  const [playing, setPlaying] = useState(null);
  const audio = useRef(null);
  if (!set) return null;
  const t = TXT[lang];
  const src = (code) => `/audio/ancient/${set.key}_${code}.mp3`;

  const play = (code) => new Promise((resolve) => {
    if (audio.current) audio.current.pause();
    const a = new Audio(src(code));
    audio.current = a;
    setPlaying(code);
    a.onended = () => { setPlaying(null); resolve(); };
    a.onerror = () => { setPlaying(null); resolve(); };
    a.play().catch(() => { setPlaying(null); resolve(); });
  });
  const playAll = async () => {
    for (const r of set.rows) { await play(r[0]); await new Promise((ok) => setTimeout(ok, 500)); }
  };

  return (
    <section className="card pad sound-compare">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: 26 }}>{t.title}</h2>
        <button className="btn btn-outline" onClick={playAll}>{t.all}</button>
      </div>
      <p style={{ margin: 0, color: 'var(--ink-2)' }}>{t.lead}</p>
      <div className="sc-rows">
        {set.rows.map(([code, written, alb, meaning]) => (
          <div key={code} className={`sc-row${code === 'sq' ? ' sc-own' : ''}`}>
            <button className={`sc-play${playing === code ? ' on' : ''}`} onClick={() => play(code)} aria-label={`▶ ${written}`}>▶</button>
            <div className="sc-lang">{LANGS[code][lang]}</div>
            <div className="sc-written">{written}</div>
            <div className="sc-alb"><span>{t.read}:</span> <strong>{alb}</strong>{meaning && <em> · {meaning.split(' / ')[lang === 'en' ? 1 : 0]}</em>}</div>
          </div>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: 15 }}>{t.root}: <strong>{set.root}</strong></p>
      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>{t.note}</p>
    </section>
  );
}
