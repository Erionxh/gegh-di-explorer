'use client';
import { useState } from 'react';
import { translations } from '../lib/i18n';
import { lexicalCorpus } from '../lib/lexicon';

export default function Home() {
  const [lang, setLang] = useState('sq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLens, setSelectedLens] = useState('all');
  const [viewMode, setViewMode] = useState('cards');
  const t = translations[lang];

  const filteredData = lexicalCorpus.filter(item => {
    const matchesSearch = 
      item.lemma.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.sq.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.en.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLens = selectedLens === 'all' || item.lenses.includes(selectedLens);

    return matchesSearch && matchesLens;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'SUPPORTED': return '#0284c7';
      case 'OPEN': return '#d97706';
      case 'DISPUTED': return '#ca8a04';
      case 'REFUTED': return '#dc2626';
      default: return '#64748b';
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ margin: 0, color: '#38bdf8' }}>{t.title} (CRAWL v0.1)</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#94a3b8' }}>Adversarial Test Instrument & Epistemic Engine</p>
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

      {/* Search & Lenses */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder={t.searchPlaceholder} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: '1rem' }}
        />
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginRight: '0.5rem' }}>Analytical Lenses:</span>
          {['all', 'philological', 'comparative', 'embodied'].map((lens) => (
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

      {/* Conditional View */}
      {viewMode === 'cards' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredData.map((item) => (
            <div key={item.id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.lemma.toUpperCase()} [{item.id}]</span>
                <span style={{ background: getStatusColor(item.status), padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff' }}>
                  {item.status}
                </span>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: 0 }}>
                {item.meaning[lang]}
              </p>

              <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#94a3b8', borderLeft: `3px solid ${getStatusColor(item.status)}` }}>
                <strong>Falsification Condition:</strong> {item.falsificationCondition}
              </div>

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>
                  Archival Sources
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
        <div style={{ background: '#1e293b', borderRadius: '8px', border: '1px solid #334155', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#0f172a', color: '#38bdf8', borderBottom: '1px solid #334155' }}>
                <th style={{ padding: '1rem' }}>Lemma</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem' }}>PIE Ref</th>
                <th style={{ padding: '1rem' }}>Proto-Albanian</th>
                <th style={{ padding: '1rem' }}>Sanskrit</th>
                <th style={{ padding: '1rem' }}>Latin</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #334155', color: '#cbd5e1' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', color: '#38bdf8' }}>{item.lemma}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ background: getStatusColor(item.status), padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fff', fontWeight: 'bold' }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>{item.matrix.pie}</td>
                  <td style={{ padding: '1rem', color: '#38bdf8' }}>{item.matrix.protoAlbanian}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.sanskrit}</td>
                  <td style={{ padding: '1rem' }}>{item.matrix.latin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
