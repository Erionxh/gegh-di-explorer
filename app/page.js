'use client';
import { useState } from 'react';
import { translations } from '../lib/i18n';
import { lexicalDatabase } from '../lib/data';

export default function Home() {
  const [lang, setLang] = useState('sq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLens, setSelectedLens] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'matrix'
  const t = translations[lang];

  const filteredData = lexicalDatabase.filter(item => {
    const matchesSearch = 
      item.root.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.sq.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.en.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLens = selectedLens === 'all' || item.lens === selectedLens;

    return matchesSearch && matchesLens;
  });

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      {/* Header & Language Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, color: '#38bdf8' }}>{t.title}</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#94a3b8' }}>{t.subtitle}</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            onClick={() => setViewMode(viewMode === 'cards' ? 'matrix' : 'cards')}
            style={{ padding: '0.5rem 1rem', background: '#334155', color: '#fff', border: '1px solid #475569', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {viewMode === 'cards' ? '📊 Matrix View' : '🪪 Card View'}
          </button>
          <button 
            onClick={() => setLang(lang === 'sq' ? 'en' : 'sq')}
            style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {lang === 'sq' ? '🇬🇧 English' : '🇦🇱 Shqip'}
          </button>
        </div>
      </div>

      {/* Analytical Lenses & Search Bar */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: '1rem' }}
        />
        
        {/* Lenses Filter Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginRight: '0.5rem' }}>Analytical Lenses:</span>
          {['all', 'mythology', 'phonetics', 'kinship'].map((lens) => (
            <button
              key={lens}
              onClick={() => setSelectedLens(lens)}
              style={{
                padding: '0.3rem 0.8rem',
                borderRadius: '4px',
                border: 'none',
                background: selectedLens === lens ? '#0284c7' : '#0f172a',
                color: selectedLens === lens ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                fontWeight: 'bold'
              }}
            >
              {lens}
            </button>
          ))}
        </div>
      </div>

      {/* Conditional Rendering: Cards View vs Matrix View */}
      {viewMode === 'cards' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredData.map((item) => (
            <div key={item.id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.root}</span>
                <span style={{ background: '#0284c7', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {item.lens}
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
                  {lang === 'sq' ? 'Burimet Arkivore' : 'Archival Sources'}
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem' }}>
                  {item.sources.map((src, idx) => (
                    <li key={idx} style={{ marginBottom: '0.35rem' }}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'none' }}>
                        <strong>{src.author} ({src.year})</strong>: <em>{src.work}</em> 🔗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Matrix Table View */
        <div style={{ background: '#1e293b', borderRadius: '8px', border: '1px solid #334155', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#0f172a', color: '#38bdf8', borderBottom: '1px solid #334155' }}>
                <th style={{ padding: '1rem' }}>Root</th>
                <th style={{ padding: '1rem' }}>PIE Ref</th>
                <th style={{ padding: '1rem' }}>Proto-Albanian</th>
                <th style={{ padding: '1rem' }}>Sanskrit</th>
                <th style={{ padding: '1rem' }}>Ancient Greek</th>
                <th style={{ padding: '1rem' }}>Latin</th>
                <th style={{ padding: '1rem' }}>Germanic</th>
                <th style={{ padding: '1rem' }}>Slavic</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #334155', color: '#cbd5e1' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', color: '#38bdf8' }}>{item.root}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.pie}</td>
                  <td style={{ padding: '1rem', color: '#38bdf8' }}>{item.matrix.protoAlbanian}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.sanskrit}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.greek}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.latin}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.germanic}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.slavic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
