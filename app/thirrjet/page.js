'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useLang } from '../../components/LangProvider';

const ANIMALS = [
  ['🐑', 'dele', 'sheep', 'delen'], ['🐐', 'dhi', 'goat', 'dhinë'], ['🐄', 'lopë', 'cow', 'lopën'], ['🐂', 'ka', 'ox', 'kaun'],
  ['🐕', 'qen', 'dog', 'qenin'], ['🐈', 'mace', 'cat', 'macen'], ['🐓', 'pulë', 'hen', 'pulën'], ['🐴', 'kalë', 'horse', 'kalin'],
  ['🫏', 'gomar', 'donkey', 'gomarin'], ['🐖', 'derr', 'pig', 'derrin'], ['🐝', 'bletë', 'bees', 'bletët'], ['🐑', 'qengj', 'lamb', 'qengjin'],
];
const ACTS = [
  ['ardh', 'të vijë', 'to come', '👋'], ['ik', 'të ikë / ta përzësh', 'to go away', '🚫'],
  ['ndal', 'të ndalet', 'to stop', '✋'], ['nisu', 'të niset / të ecë', 'to move on', '➡️'],
];

const T = {
  sq: {
    eyebrow: 'Loja e GEG', h1: 'Thirre bagëtinë!', lead: 'Si e thërrisni delen të vijë? Si e përzini qenin? Si i ndalni lopët? Këta tinguj janë ndër më të vjetrit e gjuhës, dhe askush nuk i ka mbledhur për Mirditën. Zgjidh një kafshë dhe thirre.',
    place: 'Nga cili fshat ose krahinë? (nuk është e detyrueshme)', placePh: 'p.sh. Orosh, Kthellë, Fan…',
    consent: 'Pranoj që zëri im të ruhet në arkivin GEG 1.0 dhe të përdoret për studim.',
    pick: 'Si e thërrisni', rec: '🎙 Thirre', stop: '■ Ndalo', again: 'Prapë', save: 'Ruaje', saving: 'Po ruhet…', saved: '✓ U ruajt',
    note: 'Shënim (opsional): kush e thoshte, a ka edhe një tjetër…', back: '← Kafshët', done: (n) => `${n} thirrje të ruajtura. Faleminderit!`,
    mic: 'Mikrofoni nuk u hap. Lejoje te shfletuesi.', needConsent: 'Shëno pëlqimin më sipër për ta ruajtur.',
    more: 'Zani ut: 25 fjalë →',
  },
  en: {
    eyebrow: 'A GEG game', h1: 'Call the animals!', lead: 'How do you call the sheep to come? How do you chase the dog away? How do you stop the cows? These sounds are among the oldest in a language, and nobody has collected them for Mirdita. Pick an animal and call it.',
    place: 'Which village or region? (optional)', placePh: 'e.g. Orosh, Kthellë, Fan…',
    consent: 'I agree that my voice is kept in the GEG 1.0 archive and used for study.',
    pick: 'How do you call the', rec: '🎙 Call it', stop: '■ Stop', again: 'Again', save: 'Save', saving: 'Saving…', saved: '✓ Saved',
    note: 'Note (optional): who said it, is there another one…', back: '← Animals', done: (n) => `${n} calls saved. Thank you!`,
    mic: 'The microphone did not open. Allow it in the browser.', needConsent: 'Tick the consent above to save.',
    more: 'Zani ut: 25 words →',
  },
};

function Recorder({ animal, act, place, consent, lang, t, onSaved }) {
  const [rec, setRec] = useState(false);
  const [blob, setBlob] = useState(null);
  const [url, setUrl] = useState(null);
  const [state, setState] = useState('');
  const [err, setErr] = useState('');
  const [note, setNote] = useState('');
  const r = useRef(null);
  const toggle = async () => {
    if (rec) { r.current?.stop(); return; }
    setErr('');
    try {
      const s = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(s); const ch = [];
      m.ondataavailable = (e) => e.data.size && ch.push(e.data);
      m.onstop = () => { s.getTracks().forEach((x) => x.stop()); const b = new Blob(ch, { type: m.mimeType || 'audio/webm' }); setBlob(b); setUrl(URL.createObjectURL(b)); setRec(false); setState(''); };
      r.current = m; m.start(); setRec(true);
    } catch { setErr(t.mic); }
  };
  const save = async () => {
    if (!consent) { setErr(t.needConsent); return; }
    setState('saving');
    const d = new FormData();
    d.set('word', `thirrje: ${animal[1]} (${act[1]})`); d.set('meaning', `call to a ${animal[2]}: ${act[2]}`);
    d.set('village', place); d.set('example', note); d.set('era', 'thirrjet'); d.set('consent', 'true'); d.set('lang', lang);
    d.set('audio', blob, 'recording');
    try { const res = await fetch('/api/kujtesa', { method: 'POST', body: d }); if (res.ok) { setState('saved'); onSaved(); } else setState('err'); } catch { setState('err'); }
  };
  return (
    <div className="th-act">
      <div className="th-act-h"><span>{act[3]}</span> {lang === 'en' ? act[2] : act[1]}</div>
      <div className="th-row">
        <button className={`th-rec ${rec ? 'on' : ''}`} onClick={toggle}>{rec ? t.stop : url ? t.again : t.rec}</button>
        {url && <audio controls src={url} />}
      </div>
      {url && state !== 'saved' && (
        <>
          <input className="kt-input" style={{ minHeight: 40, fontSize: 14 }} value={note} onChange={(e) => setNote(e.target.value)} placeholder={t.note} maxLength={300} />
          <button className="th-save" onClick={save} disabled={state === 'saving'}>{state === 'saving' ? t.saving : t.save}</button>
        </>
      )}
      {state === 'saved' && <p className="th-ok">{t.saved}</p>}
      {err && <p className="kt-err">{err}</p>}
    </div>
  );
}

export default function Thirrjet() {
  const { lang } = useLang();
  const t = T[lang];
  const [sel, setSel] = useState(null);
  const [place, setPlace] = useState('');
  const [consent, setConsent] = useState(false);
  const [n, setN] = useState(0);
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 640 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 8vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <input className="kt-input" style={{ width: '100%' }} value={place} onChange={(e) => setPlace(e.target.value)} placeholder={t.placePh} aria-label={t.place} maxLength={120} />
      <label className="kt-check" style={{ margin: '10px 0 16px' }}><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> {t.consent}</label>
      {n > 0 && <p className="th-ok">{t.done(n)}</p>}
      {!sel ? (
        <div className="th-grid">
          {ANIMALS.map((a, k) => (
            <button key={k} className="th-animal" onClick={() => setSel(a)}>
              <span className="th-emoji">{a[0]}</span><b>{lang === 'en' ? a[2] : a[1]}</b>
            </button>
          ))}
        </div>
      ) : (
        <section>
          <button className="linkish" onClick={() => setSel(null)}>{t.back}</button>
          <h2 className="th-h"><span className="th-emoji">{sel[0]}</span> {t.pick} {lang === 'en' ? sel[2] : sel[3]}?</h2>
          {ACTS.map((a) => <Recorder key={sel[1] + a[0]} animal={sel} act={a} place={place} consent={consent} lang={lang} t={t} onSaved={() => setN((x) => x + 1)} />)}
        </section>
      )}
      <p style={{ marginTop: 28 }}><Link href="/zani">{t.more}</Link></p>
    </div>
  );
}
