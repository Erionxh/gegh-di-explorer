'use client';
import { useState } from 'react';
import { translations } from '../lib/i18n';
import { lexicalCorpus } from '../lib/lexicon';

export default function Home() {
  const [lang, setLang] = useState('sq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLens, setSelectedLens] = useState('all');
  const [viewMode, setViewMode] = useState('cards');
  const [activeConstellation, setActiveConstellation] = useState(null);
  const t = translations[lang];

  const filteredData = lexicalCorpus.filter(item => {
    const lemmaStr = item.lemma || '';
    const conceptStr = item.concept || '';
    const idStr = item.id || '';
    const ghegArr = item.attestations?.gheg || [];

    const matchesSearch = 
      lemmaStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conceptStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ghegArr.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLens = selectedLens === 'all' || item.lenses?.includes(selectedLens);

    return matchesSearch && matchesLens;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'SUPPORTED': return '#0284c7';
      case 'OBSERVATION_SUPPORTED': return '#10b981';
      case 'OPEN': return '#d97706';
      case 'DISPUTED': return '#ca8a04';
      case 'REFUTED': return '#dc2626';
      case 'NO_RELEVANT_EVIDENCE': return '#64748b';
      default: return '#64748b';
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ margin: 0, color: '#38bdf8' }}>{t.title} (GEGH 1.0 — BUILD GATE 04)</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#94a3b8' }}>Evidence Constellation Architecture, Stream Independence & Archival Asymmetry</p>
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

      {/* INV-20 Notice Banner */}
      <div style={{ background: '#1e293b', borderLeft: '4px solid #10b981', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
        <strong>🛡️ INV-20 Stream Independence Active:</strong> Analytical lenses are independent evidentiary streams (L1–L5), not voting mechanisms. Absence or silence within one stream does not penalize or invalidate evidence in others.
      </div>

      {/* Search & Lenses */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder="Kërko koncept, lemma gegë, fonetikë IPA..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: '1rem' }}
        />
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginRight: '0.5rem' }}>Analytical Streams:</span>
          {['all', 'philological', 'comparative', 'embodied', 'material', 'archaeogenetic'].map((lens) => (
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {filteredData.map((item) => (
            <div key={item.id} style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.lemma.toUpperCase()}</span>
                  <span style={{ color: '#64748b', fontSize: '0.8rem', marginLeft: '0.5rem' }}>[{item.concept}]</span>
                </div>
                <span style={{ background: getStatusColor(item.status), padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#fff' }}>
                  Status: {item.status}
                </span>
              </div>

              {/* Attestation & Phonology */}
              <div style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#f8fafc', borderLeft: '3px solid #38bdf8', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div><strong>Gheg:</strong> {item.attestations?.gheg?.join(', ')} | <strong>Tosk:</strong> {item.attestations?.tosk?.join(', ')}</div>
                <div style={{ color: '#94a3b8' }}><strong>Morphology:</strong> {item.attestations?.morphology}</div>
                <div style={{ color: '#38bdf8' }}><strong>Phonology:</strong> {item.attestations?.phonology}</div>
              </div>

              {/* Evidence Constellation Preview */}
              <div>
                <button
                  onClick={() => setActiveConstellation(activeConstellation === item.id ? null : item.id)}
                  style={{ width: '100%', padding: '0.5rem', background: '#334155', color: '#38bdf8', border: '1px solid #475569', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}
                >
                  {activeConstellation === item.id ? '🔬 Hide Evidence Constellation' : '🔬 View Evidence Constellation (L1–L5)'}
                </button>

                {activeConstellation === item.id && item.evidenceConstellation && (
                  <div style={{ background: '#0b0f19', padding: '0.75rem', borderRadius: '4px', marginTop: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', border: '1px dashed #38bdf8', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <strong style={{ color: '#f8fafc' }}>Evidence Constellation Matrix:</strong>
                    {Object.entries(item.evidenceConstellation.streams).map(([streamName, streamData]) => (
                      <div key={streamName} style={{ background: '#111827', padding: '0.4rem', borderRadius: '4px', borderLeft: `3px solid ${getStatusColor(streamData.state)}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#f8fafc', fontWeight: 'bold' }}>
                          <span>{streamName}</span>
                          <span style={{ color: getStatusColor(streamData.state) }}>{streamData.state}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>{streamData.description}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Archival Asymmetry summary */}
              {item.archivalAsymmetry && (
                <div style={{ fontSize: '0.8rem', color: '#64748b', background: '#111827', padding: '0.5rem', borderRadius: '4px' }}>
                  <strong>Archival Coverage:</strong> Doc: {item.archivalAsymmetry.documentaryCoverage} | Oral: {item.archivalAsymmetry.oralCoverage}
                </div>
              )}

              <div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase' }}>
                  Archival Sources
                </h4>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem' }}>
                  {item.sources?.map((src, idx) => (
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
                <th style={{ padding: '1rem' }}>Lemma / Concept</th>
                <th style={{ padding: '1rem' }}>Gheg Attestation</th>
                <th style={{ padding: '1rem' }}>Status</th>
                <th style={{ padding: '1rem' }}>L1 Philological</th>
                <th style={{ padding: '1rem' }}>L2 Embodied</th>
                <th style={{ padding: '1rem' }}>L3 Comparative</th>
                <th style={{ padding: '1rem' }}>L5 Archaeogenetic</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #334155', color: '#cbd5e1' }}>
                  <td style={{ padding: '1rem', fontWeight: 'bold', color: '#38bdf8' }}>{item.lemma} <span style={{ color: '#64748b', fontSize: '0.8rem' }}>({item.concept})</span></td>
                  <td style={{ padding: '1rem', color: '#f8fafc', fontWeight: 'bold' }}>{item.attestations?.gheg?.join(', ')}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ background: getStatusColor(item.status), padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#fff', fontWeight: 'bold' }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{item.evidenceConstellation?.streams?.PHILOLOGICAL?.state || 'N/A'}</td>
                  <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{item.evidenceConstellation?.streams?.EMBODIED?.state || 'N/A'}</td>
                  <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{item.evidenceConstellation?.streams?.COMPARATIVE?.state || 'N/A'}</td>
                  <td style={{ padding: '1rem', fontSize: '0.8rem' }}>{item.evidenceConstellation?.streams?.ARCHAEOGENETIC?.state || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
