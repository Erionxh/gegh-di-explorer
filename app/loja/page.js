'use client';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLang } from '../../components/LangProvider';

// MOCK-UP. Vetëm dallime që i shënon çdo libër dialektologjie, plus fjalët që i ka konfirmuar kujdestari.
// [forma, shkronjat e fshehura (indekset), dialekti, standardi, kuptimi sq, kuptimi en, shënim sq, shënim en]
const WORDS = [
  ['venë', [1, 3], 'geg', 'verë', 'pije nga rrushi', 'wine', 'Gegnishtja ruan n-në e vjetër; toskërishtja e ktheu në r.', 'Gheg keeps the old n; Tosk turned it into r.'],
  ['emën', [0, 2], 'geg', 'emër', 'si quhet dikush', 'name', 'E njëjta n e vjetër: emën, emër.', 'The same old n: emën, emër.'],
  ['dimën', [1, 4], 'geg', 'dimër', 'stina e ftohtë', 'winter', 'Edhe këtu: n në veri, r në jug.', 'Here too: n in the north, r in the south.'],
  ['nanë', [1], 'geg', 'nënë', 'ajo që të lindi', 'mother', 'Para n-së, veriu thotë a, jugu ë.', 'Before n, the north says a, the south ë.'],
  ['shpi', [2, 3], 'geg', 'shtëpi', 'ku jeton familja', 'house', 'Forma e shkurtër e veriut.', 'The short northern form.'],
  ['çikë', [1, 3], 'geg', 'vajzë', 'fëmijë femër', 'girl', 'Në veri e në Kosovë.', 'In the north and in Kosova.'],
  ['çupë', [1, 2], 'tosk', 'vajzë', 'fëmijë femër', 'girl', 'Në jug, te toskët.', 'In the south, among the Tosk.'],
  ['gocë', [0, 2], 'tosk', 'vajzë', 'fëmijë femër', 'girl', 'Edhe kjo në jug.', 'This one too in the south.'],
  ["t'amël", [2, 4], 'geg', 'qumësht', 'pije e bardhë nga lopa', 'milk', 'Në Mirditë; ndoshta nga «të ambël», e ëmbla.', 'In Mirdita; perhaps from "të ambël", the sweet one.'],
  ['kru', [1], 'geg', 'krua', 'vend ku buron uji', 'spring (of water)', 'Prej këtu ndoshta edhe emri i Krujës.', 'Perhaps the source of the name Kruja too.'],
];

const T = {
  sq: { mock: 'Mock-up · loja nuk kërkon llogari', eyebrow: 'Loja e Ditës së Alfabetit', h1: 'Plotëso fjalën', lead: 'Dhjetë fjalë nga veriu dhe jugu, me disa shkronja që mungojnë. I gjeni dot?', geg: 'Gegërisht', tosk: 'Toskërisht', std: 'Standard', check: 'Kontrollo', ok: '✓ Saktë!', no: 'Jo ende, provo prapë', show: 'Trego', score: (n) => `${n} nga 10`,
    yoursQ: 'Si e thoni ju këtë fjalë?', yoursPh: 'p.sh. siç e thoshte gjyshja (s\'është e detyrueshme)', placeQ: 'Nga cili fshat ose krahinë?', placePh: 'p.sh. Orosh, Elbasan, Skrapar…',
    consent: 'Pranoj që format që shkrova të ruhen në arkivin GEG 1.0 për studim (vetëm teksti, pa zë).', send: 'Dërgo format e mia', sent: (n) => `Faleminderit! U ruajtën ${n} forma.`, none: 'Shkruani të paktën një formë për ta dërguar.',
    done: 'Bravo! I plotësuat të gjitha.', voice: '🎙 Doni të jepni edhe zërin? Zëri yt →', share: 'Ftoni një mik', shareText: 'Gjeni dot 10 fjalët e shqipes nga veriu dhe jugu? 🧩 ' },
  en: { mock: 'Mock-up · the game needs no account', eyebrow: 'The Alphabet Day game', h1: 'Complete the word', lead: 'Ten words from the north and the south, with a few letters missing. Can you find them?', geg: 'Gheg', tosk: 'Tosk', std: 'Standard', check: 'Check', ok: '✓ Correct!', no: 'Not yet, try again', show: 'Show', score: (n) => `${n} of 10`,
    yoursQ: 'How do you say this word?', yoursPh: 'e.g. the way your grandmother said it (optional)', placeQ: 'Which village or region?', placePh: 'e.g. Orosh, Elbasan, Skrapar…',
    consent: 'I agree that the forms I wrote are kept in the GEG 1.0 archive for study (text only, no voice).', send: 'Send my forms', sent: (n) => `Thank you! ${n} forms were saved.`, none: 'Write at least one form to send.',
    done: 'Well done! You completed them all.', voice: '🎙 Want to give your voice too? Your voice →', share: 'Invite a friend', shareText: 'Can you find the 10 Albanian words from north and south? 🧩 ' },
};

const norm = (s) => s.toLowerCase().replace(/[’']/g, "'").trim();

function Word({ w, t, lang, onSolved, solved, yours, setYours }) {
  const [form, hidden, dia, std, mSq, mEn, nSq, nEn] = w;
  const chars = [...form];
  const [vals, setVals] = useState(() => Object.fromEntries(hidden.map((i) => [i, ''])));
  const [state, setState] = useState(solved ? 'ok' : '');
  const check = () => {
    const good = hidden.every((i) => norm(vals[i]) === norm(chars[i]));
    setState(good ? 'ok' : 'no');
    if (good) onSolved();
  };
  const show = () => { setVals(Object.fromEntries(hidden.map((i) => [i, chars[i]]))); setState('shown'); onSolved(); };
  return (
    <div className={`lj-word ${state}`}>
      <div className="lj-top"><span className={`lj-dia ${dia}`}>{dia === 'geg' ? t.geg : t.tosk}</span><span className="kt-small">{t.std}: <b>{std}</b> · {lang === 'en' ? mEn : mSq}</span></div>
      <div className="lj-tiles">
        {chars.map((c, i) => hidden.includes(i) ? (
          <input key={i} className="lj-tile in" maxLength={1} value={vals[i]} disabled={state === 'ok' || state === 'shown'} onChange={(e) => { setVals({ ...vals, [i]: e.target.value.slice(-1) }); setState(''); }} aria-label={`shkronja ${i + 1}`} />
        ) : <span key={i} className="lj-tile">{c}</span>)}
      </div>
      {state !== 'ok' && state !== 'shown' ? (
        <div className="rr-votes"><button onClick={check}>{t.check}</button><button onClick={show}>{t.show}</button>{state === 'no' && <span className="kt-small">{t.no}</span>}</div>
      ) : (
        <>
          <p className="lj-note">{state === 'ok' ? <b>{t.ok} </b> : null}{lang === 'en' ? nEn : nSq}</p>
          <input className="kt-input" style={{ minHeight: 40, fontSize: 15 }} value={yours || ''} onChange={(e) => setYours(e.target.value)} placeholder={`${t.yoursQ} ${t.yoursPh}`} maxLength={60} />
        </>
      )}
    </div>
  );
}

export default function Loja() {
  const { lang } = useLang();
  const t = T[lang];
  const [solved, setSolved] = useState({});
  const [yours, setYours] = useState({});
  const [place, setPlace] = useState('');
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState('');
  const n = Object.keys(solved).length;
  const filled = useMemo(() => Object.entries(yours).filter(([, v]) => v && v.trim()), [yours]);
  const send = async () => {
    if (!filled.length) { setMsg(t.none); return; }
    let ok = 0;
    for (const [k, v] of filled) {
      const w = WORDS[+k];
      const d = new FormData();
      d.set('word', w[3]); d.set('meaning', w[5]); d.set('example', v.trim()); d.set('village', place);
      d.set('era', 'loja'); d.set('consent', 'true'); d.set('consent_by', 'self'); d.set('consent_public', 'false'); d.set('website', ''); d.set('lang', lang);
      try { const r = await fetch('/api/kujtesa', { method: 'POST', body: d }); if (r.ok) ok++; } catch { /* vazhdo */ }
    }
    setMsg(t.sent(ok));
  };
  const url = typeof window !== 'undefined' ? `${window.location.origin}/loja` : '';
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 640 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 8vw, 50px)', margin: '4px 0 8px' }}>🧩 {t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="kt-progress" style={{ marginRight: 0 }}><span style={{ width: `${n * 10}%` }} /></div>
      <p className="kt-small">{t.score(n)}</p>
      <div style={{ display: 'grid', gap: 10 }}>
        {WORDS.map((w, k) => <Word key={k} w={w} t={t} lang={lang} solved={!!solved[k]} onSolved={() => setSolved((s) => ({ ...s, [k]: true }))} yours={yours[k]} setYours={(v) => setYours((y) => ({ ...y, [k]: v }))} />)}
      </div>
      {n === 10 && <h2 style={{ marginTop: 22 }}>🎉 {t.done}</h2>}
      {filled.length > 0 && (
        <section className="card pad" style={{ marginTop: 18, display: 'grid', gap: 10 }}>
          <label className="kt-small">{t.placeQ}<input className="kt-input" style={{ width: '100%', marginTop: 4 }} value={place} onChange={(e) => setPlace(e.target.value)} placeholder={t.placePh} maxLength={120} /></label>
          <label className="kt-check"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> {t.consent}</label>
          <button className="kt-btn" disabled={!consent} onClick={send}>{t.send}</button>
          {msg && <p className="kl-ok">{msg}</p>}
        </section>
      )}
      <div style={{ display: 'grid', gap: 10, marginTop: 18 }}>
        <Link className="kt-btn" href="/zani">{t.voice}</Link>
        <a className="kt-btn kt-wa" href={`https://wa.me/?text=${encodeURIComponent(t.shareText + url)}`} target="_blank" rel="noopener noreferrer">{t.share} · WhatsApp</a>
      </div>
    </div>
  );
}
