'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../components/LangProvider';

const WORDS = [
  ['qumësht', 'milk'], ['bukë', 'bread'], ['djathë', 'cheese'], ['gjalpë', 'butter'], ['vezë', 'egg'],
  ['shtëpi', 'house'], ['nënë', 'mother'], ['gjyshe', 'grandmother'], ['vëlla', 'brother'], ['motër', 'sister'],
  ['vajzë', 'girl'], ['djalë', 'boy'], ['grua', 'woman'], ['burrë', 'man'], ['nuse', 'bride'],
  ['nesër', 'tomorrow'], ['mëngjes', 'morning'], ['mbrëmje', 'evening'], ['dimër', 'winter'], ['zjarr', 'fire'],
  ['ujë', 'water'], ['hënë', 'moon'], ['dele', 'sheep'], ['qen', 'dog'], ['gjarpër', 'snake'],
];

const T = {
  sq: {
    eyebrow: 'Kartolinë nga gjyshja',
    from: (n, p) => `${p ? p + ', ' : ''}${n} të ka çue këtë kartolinë.`,
    hello: 'Më duhet ndihma jote.',
    lead: 'Po mbledhim fjalët e gegnishtes ashtu si i thoshin të vutë tanë, para se të harrohen. Janë 25 fjalë. Për secilën, thuaje me zë ashtu si e thoshte nana, babai a gjyshja. Dy minuta punë.',
    consent: 'Pranoj që zani im të ruhet në arkivin GEG 1.0 dhe të përdoret për studim.',
    start: 'Fillo',
    placeQ: 'Prej cilit fshat a krahinë janë të vutë?', placePh: 'p.sh. Orosh, Kthellë, Shkodër, Gjakovë…',
    ageQ: 'Mosha jote (s\'asht e detyrueshme)',
    next: 'Vazhdo →',
    wordOf: (i, n) => `Fjala ${i} nga ${n}`,
    std: 'Në shqipen standarde:',
    how: 'Si e thoshte nana, babai a gjyshja?',
    rec: '🎙 Shtyp dhe fol', stop: '■ Ndalo', again: 'Regjistroje prapë',
    who: 'Kush e thoshte kështu?', whoOpts: ['Unë vetë', 'Nana', 'Babai', 'Gjyshja', 'Gjyshi'],
    send: 'Ruaje dhe vazhdo →', skip: 'Nuk e di · kalo', sending: 'Po ruhet…',
    mic: 'Mikrofoni nuk u hap. Lejoje te shfletuesi, ose kalo fjalën.',
    guessQ: 'Çka mendon: nga cila anë asht kjo e folme?', guessPh: 'p.sh. Mirdita, Malësia e Madhe, Dukagjini… (s\'asht e detyrueshme)',
    done: 'Faleminderit!', doneLead: (n) => `${n} fjalë me zanin tand janë tash në arkiv. Kështu nuk humbin.`,
    doneZero: 'Faleminderit që e hape. Kur të kesh dy minuta, provoje prapë.',
    share: 'Çoja dikujt', shareName: 'Emri yt (që ta dijnë kush ua çoi)', shareText: (n) => `📮 ${n ? n + ' të ka çue' : 'Të kam çue'} një kartolinë nga gjyshja: 25 fjalë gegnisht, si i thoshin të vutë tanë. A i mban mend? Dy minuta. `,
    more: 'A don me pa ma shumë? Hyn në arkiv →',
  },
  en: {
    eyebrow: 'A postcard from grandma',
    from: (n, p) => `${p ? p + ', ' : ''}${n} sent you this postcard.`,
    hello: 'I need your help.',
    lead: 'We are collecting Gheg words the way our elders said them, before they are forgotten. There are 25 words. For each one, say it aloud the way your mother, father or grandmother said it. Two minutes.',
    consent: 'I agree that my voice is kept in the GEG 1.0 archive and used for study.',
    start: 'Start',
    placeQ: 'Which village or region are your people from?', placePh: 'e.g. Orosh, Kthellë, Shkodër, Gjakova…',
    ageQ: 'Your age (optional)',
    next: 'Continue →',
    wordOf: (i, n) => `Word ${i} of ${n}`,
    std: 'In standard Albanian:',
    how: 'How did your mother, father or grandmother say it?',
    rec: '🎙 Tap and speak', stop: '■ Stop', again: 'Record again',
    who: 'Who said it like this?', whoOpts: ['Me', 'Mother', 'Father', 'Grandmother', 'Grandfather'],
    send: 'Save and continue →', skip: 'Don\'t know · skip', sending: 'Saving…',
    mic: 'The microphone did not open. Allow it in the browser, or skip the word.',
    guessQ: 'What do you think: where is this way of speaking from?', guessPh: 'e.g. Mirdita, Malësia e Madhe, Dukagjin… (optional)',
    done: 'Thank you!', doneLead: (n) => `${n} words in your voice are now in the archive. This way they are not lost.`,
    doneZero: 'Thank you for opening it. When you have two minutes, try again.',
    share: 'Send it to someone', shareName: 'Your name (so they know who sent it)', shareText: (n) => `📮 ${n ? n + ' sent you' : 'I am sending you'} a postcard from grandma: 25 Gheg words, the way our elders said them. Do you remember them? Two minutes. `,
    more: 'Want to see more? Enter the archive →',
  },
};
const WHO_SQ = ['vetë', 'nana', 'babai', 'gjyshja', 'gjyshi'];

export default function Karta() {
  const { lang } = useLang();
  const t = T[lang];
  const [q, setQ] = useState({});
  const [step, setStep] = useState('intro');
  const [consent, setConsent] = useState(false);
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [guess, setGuess] = useState('');
  const [i, setI] = useState(0);
  const [who, setWho] = useState(1);
  const [rec, setRec] = useState(false);
  const [blob, setBlob] = useState(null);
  const [url, setUrl] = useState(null);
  const [busy, setBusy] = useState(false);
  const [micErr, setMicErr] = useState(false);
  const [saved, setSaved] = useState(0);
  const [myName, setMyName] = useState('');
  const r = useRef(null);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setQ({ nga: (sp.get('nga') || '').slice(0, 40), per: (sp.get('per') || '').slice(0, 40) });
  }, []);

  async function toggle() {
    if (rec) { r.current?.stop(); return; }
    setMicErr(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream); const chunks = [];
      m.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      m.onstop = () => { stream.getTracks().forEach((x) => x.stop()); const b = new Blob(chunks, { type: m.mimeType || 'audio/webm' }); setBlob(b); setUrl(URL.createObjectURL(b)); setRec(false); };
      r.current = m; m.start(); setRec(true);
    } catch { setMicErr(true); setRec(false); }
  }

  function nextWord() {
    setBlob(null); setUrl(null);
    if (i + 1 < WORDS.length) setI(i + 1); else setStep('done');
  }

  async function save() {
    if (!blob) return;
    setBusy(true);
    const d = new FormData();
    d.set('word', WORDS[i][0]); d.set('meaning', WORDS[i][1]);
    d.set('village', place); d.set('region', guess); d.set('age_band', age);
    d.set('speaker', WHO_SQ[who]); d.set('era', 'kartolina'); d.set('consent', 'true'); d.set('lang', lang);
    d.set('audio', blob, 'recording');
    try { const res = await fetch('/api/kujtesa', { method: 'POST', body: d }); if (res.ok) setSaved((n) => n + 1); } catch { /* vazhdo */ }
    setBusy(false);
    nextWord();
  }

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/kartolina${myName ? `?nga=${encodeURIComponent(myName)}` : ''}` : '';

  return (
    <div className="kt-wrap">
      <div className="kt-card">
        <div className="kt-stamp">GEG 1.0</div>

        {step === 'intro' && (
          <>
            <p className="kt-eyebrow">📮 {t.eyebrow}</p>
            {q.nga && <p className="kt-from">{t.from(q.nga, q.per)}</p>}
            <h1 className="kt-h">{t.hello}</h1>
            <p className="kt-lead">{t.lead}</p>
            <label className="kt-check"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> {t.consent}</label>
            <button className="kt-btn" disabled={!consent} onClick={() => setStep('place')}>{t.start}</button>
          </>
        )}

        {step === 'place' && (
          <>
            <h2 className="kt-q">{t.placeQ}</h2>
            <input className="kt-input" value={place} onChange={(e) => setPlace(e.target.value)} placeholder={t.placePh} maxLength={120} />
            <p className="kt-small">{t.ageQ}</p>
            <div className="kt-pills">
              {['<30', '30-50', '50-70', '70+'].map((a) => <button key={a} className={age === a ? 'on' : ''} onClick={() => setAge(age === a ? '' : a)}>{a}</button>)}
            </div>
            <h2 className="kt-q" style={{ marginTop: 18 }}>{t.guessQ}</h2>
            <input className="kt-input" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder={t.guessPh} maxLength={120} />
            <button className="kt-btn" onClick={() => setStep('words')}>{t.next}</button>
          </>
        )}

        {step === 'words' && (
          <>
            <div className="kt-progress"><span style={{ width: `${(i / WORDS.length) * 100}%` }} /></div>
            <p className="kt-small">{t.wordOf(i + 1, WORDS.length)}</p>
            <p className="kt-small" style={{ marginBottom: 0 }}>{t.std}</p>
            <div className="kt-word">{WORDS[i][0]}</div>
            {lang === 'en' && <p className="kt-small" style={{ marginTop: -6 }}>{WORDS[i][1]}</p>}
            <h2 className="kt-q">{t.how}</h2>
            <button className={`kt-rec ${rec ? 'on' : ''}`} onClick={toggle}>{rec ? t.stop : url ? t.again : t.rec}</button>
            {micErr && <p className="kt-err">{t.mic}</p>}
            {url && <audio controls src={url} className="kt-audio" />}
            {url && (
              <>
                <p className="kt-small">{t.who}</p>
                <div className="kt-pills">{t.whoOpts.map((o, k) => <button key={o} className={who === k ? 'on' : ''} onClick={() => setWho(k)}>{o}</button>)}</div>
                <button className="kt-btn" disabled={busy} onClick={save}>{busy ? t.sending : t.send}</button>
              </>
            )}
            <button className="kt-skip" onClick={nextWord}>{t.skip}</button>
          </>
        )}

        {step === 'done' && (
          <>
            <h1 className="kt-h">{t.done}</h1>
            <p className="kt-lead">{saved > 0 ? t.doneLead(saved) : t.doneZero}</p>
            <input className="kt-input" value={myName} onChange={(e) => setMyName(e.target.value)} placeholder={t.shareName} maxLength={40} />
            <a className="kt-btn kt-wa" href={`https://wa.me/?text=${encodeURIComponent(t.shareText(myName) + shareUrl)}`} target="_blank" rel="noopener noreferrer">{t.share} · WhatsApp</a>
            <Link className="kt-more" href="/">{t.more}</Link>
          </>
        )}
      </div>
    </div>
  );
}
