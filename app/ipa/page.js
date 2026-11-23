'use client';
import { useState } from 'react';
import IpaPanel from '../../components/IpaPanel';

export default function Ipa() {
  const [txt, setTxt] = useState('');
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <div className="kv-mock">Faqe e fshehur · për shqyrtuesit</div>
      <h1 style={{ fontSize: 'clamp(30px, 6.5vw, 44px)', margin: '18px 0 8px' }}>Legjenda IPA</h1>
      <p className="lead" style={{ marginTop: 0 }}>Alfabeti Fonetik Ndërkombëtar: një simbol për çdo tingull. Prek simbolet për të provuar.</p>
      <input className="pn-input" style={{ width: '100%', fontSize: 22, padding: 10 }} value={txt} onChange={(e) => setTxt(e.target.value)} placeholder="[ˈtaːməl]" />
      <IpaPanel open onInsert={(s) => setTxt((t) => t + s)} />
    </div>
  );
}
