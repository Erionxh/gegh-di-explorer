'use client';
import { useState } from 'react';
import { translations } from '../lib/i18n';
import { lexicalDatabase } from '../lib/data';

export default function Home() {
  const [lang, setLang] = useState('sq');
  const [searchTerm, setSearchTerm] = useState('');
  const t = translations[lang];

  const filteredData = lexicalDatabase.filter(item => 
    item.root.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.meaning.sq.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.meaning.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Search Bar */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #334155' }}>
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: '1rem' }}
        />
      </div>

      {/* Database Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredData.map((item) => (
          <div key={item.id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.root}</span>
              <span style={{ 
                background: item.status === 'supported' ? '#0284c7' : '#d97706', 
                padding: '0.2rem 0.6rem', 
                borderRadius: '4px', 
                fontSize: '0.75rem', 
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
                {t.status[item.status]}
              </span>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: 0 }}>
              {item.meaning[lang]}
            </p>

            <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#94a3b8', borderLeft: '3px solid #38bdf8' }}>
              <strong>{item.lineage}</strong>
            </div>

            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>
                {lang === 'sq' ? 'Burimet Arkivore & Studimet (150+ Vjet)' : 'Archival Sources & Studies (150+ Yrs)'}
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                {item.sources.map((src, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>
                    <strong>{src.author} ({src.year})</strong>: <em>{src.work}</em> [{src.id}]
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
