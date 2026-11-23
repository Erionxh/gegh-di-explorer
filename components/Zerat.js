'use client';
import { useEffect, useState } from 'react';
import { useLang } from './LangProvider';

// Zërat e pranuar për një ose disa fjalë të GEG 500.
export default function Zerat({ slugs }) {
  const { lang } = useLang();
  const [items, setItems] = useState(null);
  const key = (slugs || []).join(',');
  useEffect(() => {
    if (!key) { setItems([]); return; }
    Promise.all(key.split(',').map((s) => fetch(`/api/zera?slug=${encodeURIComponent(s)}`).then((r) => r.json()).catch(() => ({ items: [] }))))
      .then((rs) => setItems(rs.flatMap((r) => r.items || [])));
  }, [key]);
  if (!items || items.length === 0) return null;
  return (
    <section className="card pad" style={{ marginTop: 20 }}>
      <h2 style={{ marginTop: 0, fontSize: 22 }}>🎙 {lang === 'en' ? 'Voices from the archive' : 'Zërat e arkivit'}</h2>
      <p className="kt-small">{lang === 'en' ? 'Recordings approved by a reviewer, shared with the speaker’s permission.' : 'Regjistrime të pranuara nga shqyrtuesi, të ndara me lejen e folësit.'}</p>
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((x) => (
          <div key={x.id}>
            <p style={{ margin: '0 0 4px' }}><b>{x.geg || x.said || x.word}</b>{x.ipa && <span style={{ color: 'var(--ink-2)' }}> [{x.ipa}]</span>}<span className="kt-small"> · {[x.place, x.age].filter(Boolean).join(' · ')}</span></p>
            <audio controls preload="none" src={x.audio} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
