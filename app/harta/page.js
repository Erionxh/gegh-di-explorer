'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { LAYERS, POINTS, PENDING } from '../../lib/map';

const MapView = dynamic(() => import('../../components/MapView'), { ssr: false, loading: () => <div style={{ height: 520, borderRadius: 14, background: '#eceae3' }} /> });

const T = {
  sq: { eyebrow: 'Lentet 1 · 3 · 4 · 6', h1: 'Harta', lead: 'Zërat e sotëm, studiuesit e vjetër, fotografitë dhe ADN-ja mbi të njëjtën hartë. Kur shtresat ndriçojnë në të njëjtin vend, ai vend meriton të shihet më nga afër. Është një sinjal, jo provë.', layers: 'Shtresat', soon: 'Së shpejti', note: 'Koordinatat janë të përafërta. Gjenet dhe gjuha nuk udhëtojnë gjithmonë bashkë: arbëreshët e Italisë, p.sh., dolën nga Shqipëria në shek. XV.' },
  en: { eyebrow: 'Lenses 1 · 3 · 4 · 6', h1: 'The Map', lead: 'Today’s voices, the old scholars, photographs and DNA on one map. When the layers light up in the same place, that place deserves a closer look. It is a signal, not proof.', layers: 'Layers', soon: 'Coming soon', note: 'Coordinates are approximate. Genes and language do not always travel together: the Arbëresh of Italy, for example, left Albania in the 15th century.' },
};

export default function Harta() {
  const { lang } = useLang();
  const t = T[lang];
  const [on, setOn] = useState(Object.fromEntries(LAYERS.map((l) => [l.id, true])));
  const pts = POINTS.filter((p) => on[p.layer]);
  return (
    <div className="wrap" style={{ paddingTop: 56, paddingBottom: 64, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <p className="eyebrow">{t.eyebrow}</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>{t.h1}</h1>
        <p className="lead">{t.lead}</p>
      </div>
      <div className="map-layers" aria-label={t.layers}>
        {LAYERS.map((l) => {
          const count = POINTS.filter((p) => p.layer === l.id).length;
          return (
            <label key={l.id} className="map-layer">
              <input type="checkbox" checked={on[l.id]} onChange={() => setOn({ ...on, [l.id]: !on[l.id] })} />
              <span className="map-dot" style={{ background: l.color }} />
              {lang === 'en' ? l.en : l.sq} <span className="map-count">{count || t.soon}</span>
            </label>
          );
        })}
      </div>
      <MapView points={pts} layers={LAYERS} lang={lang} />
      <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--ink-2)', fontSize: 15 }}>
        {PENDING[lang].map((x) => <li key={x}>{x}</li>)}
      </ul>
      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)' }}>{t.note}</p>
    </div>
  );
}
