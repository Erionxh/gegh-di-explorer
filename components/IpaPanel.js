'use client';
import { useState } from 'react';
import { IPA } from '../lib/ipa';

// Legjenda IPA me butona: prek një simbol dhe futet te fusha e fundit IPA ku ishe.
export default function IpaPanel({ onInsert, open: open0 = false }) {
  const [open, setOpen] = useState(open0);
  return (
    <div className="ipa-panel">
      <button type="button" className="btn" onClick={() => setOpen(!open)}>{open ? '▾' : '▸'} Legjenda IPA</button>
      {open && IPA.map((g) => (
        <div key={g.h} className="ipa-group">
          <h4>{g.h}</h4>
          <div className="ipa-keys">
            {g.rows.map(([sym, letter, ex, note]) => (
              <button type="button" key={g.h + sym} className="ipa-key" title={[letter, ex, note].filter(Boolean).join(' · ')}
                onMouseDown={(e) => e.preventDefault()} onClick={() => onInsert && onInsert(sym === '̃' ? '̃' : sym)}>
                <b>{sym}</b><span>{letter}</span>
              </button>
            ))}
          </div>
          <ul className="ipa-ex">
            {g.rows.filter((r) => r[2] || r[3]).map(([sym, letter, ex, note]) => <li key={g.h + sym + 'x'}><b>{sym}</b> {letter && `= ${letter}`} {ex && `· ${ex}`} {note && `· ${note}`}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
