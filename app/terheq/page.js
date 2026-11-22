'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';

const T = {
  sq: { h1: 'Tërhiq zërin tënd', lead: 'Nëse ndryshon mendje, shkruaj kodin që more në fund të regjistrimit. Zërat fshihen nga arkivi, bashkë me fshatin, moshën dhe të dhënat e tjera personale. Mbetet vetëm shënimi se u tërhoqën.', ph: 'Kodi, p.sh. GEG-7KQ4-M2XP', btn: 'Tërhiqe', done: (n) => `U tërhoqën ${n} regjistrime. Zërat u fshinë.`, nf: 'Nuk u gjet asnjë regjistrim me këtë kod, ose është tërhequr më parë.', err: 'Diçka nuk shkoi. Provo përsëri.', lost: 'E ke humbur kodin? Shkruaj te erion.xhaferraj@gmail.com me fjalët, datën dhe fshatin, dhe e bëjmë me dorë.' },
  en: { h1: 'Withdraw your voice', lead: 'If you change your mind, enter the code you got at the end of the recording. The voices are deleted from the archive, together with the village, age and other personal data. Only the note that they were withdrawn remains.', ph: 'Code, e.g. GEG-7KQ4-M2XP', btn: 'Withdraw', done: (n) => `${n} recordings withdrawn. The voices were deleted.`, nf: 'No recording was found with this code, or it was already withdrawn.', err: 'Something went wrong. Try again.', lost: 'Lost the code? Write to erion.xhaferraj@gmail.com with the words, the date and the village, and we will do it by hand.' },
};

export default function Terheq() {
  const { lang } = useLang();
  const t = T[lang];
  const [code, setCode] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  return (
    <div className="wrap" style={{ paddingTop: 40, paddingBottom: 64, maxWidth: 620 }}>
      <h1 style={{ fontSize: 'clamp(30px, 6vw, 44px)' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <form onSubmit={async (e) => {
        e.preventDefault(); setBusy(true); setMsg('');
        const r = await fetch('/api/kujtesa/terheq', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ code }) }).then((x) => x.json()).catch(() => ({}));
        setBusy(false);
        setMsg(r.ok ? t.done(r.count) : r.error === 'not_found' ? t.nf : t.err);
      }} style={{ display: 'grid', gap: 10, marginTop: 16 }}>
        <input className="kt-input" value={code} onChange={(e) => setCode(e.target.value)} placeholder={t.ph} required minLength={8} maxLength={40} />
        <button className="kt-btn" disabled={busy}>{t.btn}</button>
      </form>
      {msg && <p style={{ marginTop: 12, fontWeight: 700 }}>{msg}</p>}
      <p className="kt-small" style={{ marginTop: 18 }}>{t.lost}</p>
      <p style={{ marginTop: 18 }}><Link href="/">← GEG 1.0</Link></p>
    </div>
  );
}
