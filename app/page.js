'use client';
import { useState } from 'react';
import { translations } from '../lib/i18n';

export default function Home() {
  const [lang, setLang] = useState('sq');
  const t = translations[lang];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, color: '#38bdf8' }}>{t.title}</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#94a3b8' }}>{t.subtitle}</p>
        </div>
        <button 
          onClick={() => setLang(lang === 'sq' ? 'en' : 'sq')}
          style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {lang === 'sq' ? '🇬🇧 English' : '🇦🇱 Shqip'}
        </button>
      </div>

      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: '1rem' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', flex: 1, minWidth: '200px' }}>
          <h3>{t.menu.lexicalUnits}</h3>
          <p style={{ color: '#cbd5e1' }}>Q10088 — DI</p>
          <span style={{ background: '#0284c7', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{t.status.supported}</span>
        </div>
        <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px', flex: 1, minWidth: '200px' }}>
          <h3>{t.menu.claims}</h3>
          <p style={{ color: '#cbd5e1' }}>Q4 — Comparative Lineage</p>
          <span style={{ background: '#d97706', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>{t.status.open}</span>
        </div>
      </div>
    </main>
  );
}
