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
    eyebrow: 'GEG 1.0 · Moduli i parë: gegnishtja',
    from: (n, p) => `${p ? p + ', ' : ''}${n} të ka dërguar këtë ftesë.`,
    hello: 'Zani yt.', sub: 'Shpëto gjuhën e moçme shqiptare.',
    lead: 'Ulu pranë gjyshes ose gjyshit dhe regjistroji. Dy minuta, 25 fjalë. Zëri i tyre është shqipja më e moçme që kemi ende gjallë. Nuk ke gjysh pranë? Thuaji vetë, ashtu si i dëgjoje prej tyre.', module: 'Ky është moduli i parë i projektit: dialekti geg, varianti mirditor. Më pas do të zgjerohet në të gjitha dialektet e gjuhës shqipe. Je nga jugu? Na duhet edhe zëri yt: krahasimi na tregon ku ndahen dialektet.',
    consent: 'Pranoj që zëri im, ose zëri i atij që regjistroj me pëlqimin e tij, të ruhet në arkivin GEG 1.0 dhe të përdoret për studim.',
    start: 'Fillo', modeQ: 'Kush do të flasë?', modes: ['Po regjistroj gjyshen ose gjyshin', 'Një tjetër të moshuar të familjes', 'Unë vetë, si i kujtoj'], modeHint: 'Sa më i moshuar zëri, aq më e çmuar fjala.', about: 'Çfarë është GEG 1.0? Shih punën që qëndron pas →',
    placeQ: 'Nga cili fshat ose krahinë janë të parët e tu?', placeQElder: 'Nga cili fshat ose krahinë është ai ose ajo që flet?', placePh: 'p.sh. Orosh, Kthellë, Shkodër, Gjakovë…',
    ageQ: 'Mosha jote (nuk është e detyrueshme)', ageQElder: 'Mosha e atij ose asaj që flet (nuk është e detyrueshme)',
    next: 'Vazhdo →',
    wordOf: (i, n) => `Fjala ${i} nga ${n}`,
    std: 'Në shqipen standarde:',
    how: 'Si e thoshte nëna, babai ose gjyshja?', howElder: 'Pyete: si e thoni këtë? Pastaj shtyp dhe lëre të flasë.',
    rec: '🎙 Shtyp dhe fol', stop: '■ Ndalo', again: 'Regjistroje prapë',
    who: 'Kush e thoshte kështu?', whoOpts: ['Unë vetë', 'Nëna', 'Babai', 'Gjyshja', 'Gjyshi'],
    send: 'Ruaje dhe vazhdo →', skip: 'Nuk e di · kalo', sending: 'Po ruhet…',
    mic: 'Mikrofoni nuk u hap. Lejoje te shfletuesi, ose kalo fjalën.',
    guessQ: 'Çfarë mendon: nga cili dialekt ose krahinë është kjo mënyrë e të folurit?', guessPh: 'p.sh. Mirdita, Malësia e Madhe, Dukagjini… (nuk është e detyrueshme)',
    done: 'Faleminderit!', doneLead: (n) => `${n} fjalë me zërin tënd janë tani në arkiv. Kështu nuk humbin.`,
    doneZero: 'Faleminderit që e hape. Kur të kesh dy minuta, provoje prapë.',
    share: 'Çoja dikujt', shareName: 'Emri yt (që ta dinë kush ua dërgoi)', shareText: (n) => `🎙 ${n ? n + ' të fton: ' : ''}Zëri yt. Ulu pranë gjyshes ose gjyshit dhe regjistroji: 25 fjalë, dy minuta. Zëri i tyre është shqipja më e moçme që kemi ende gjallë. `,
    more: 'Do të shohësh më shumë? Hyr në arkiv →',
  },
  en: {
    eyebrow: 'GEG 1.0 · First module: Gheg',
    from: (n, p) => `${p ? p + ', ' : ''}${n} sent you this invitation.`,
    hello: 'Zani yt. Your voice.', sub: 'Save the old Albanian language.',
    lead: 'Sit with your grandmother or grandfather and record them. Two minutes, 25 words. Their voice is the oldest Albanian still alive. No grandparent nearby? Say the words yourself, the way you heard them from them.', module: 'This is the first module of the project: the Gheg dialect, Mirdita variant. It will then grow to every dialect of the Albanian language. From the south? We need your voice too: the comparison shows where the dialects part.',
    consent: 'I agree that my voice, or the voice of the person I record with their consent, is kept in the GEG 1.0 archive and used for study.',
    start: 'Start', modeQ: 'Who will speak?', modes: ['I am recording my grandmother or grandfather', 'Another elder in the family', 'Me, as I remember it'], modeHint: 'The older the voice, the more precious the word.', about: 'What is GEG 1.0? See the work behind it →',
    placeQ: 'Which village or region are your people from?', placeQElder: 'Which village or region is the speaker from?', placePh: 'e.g. Orosh, Kthellë, Shkodër, Gjakova…',
    ageQ: 'Your age (optional)', ageQElder: 'The speaker\'s age (optional)',
    next: 'Continue →',
    wordOf: (i, n) => `Word ${i} of ${n}`,
    std: 'In standard Albanian:',
    how: 'How did your mother, father or grandmother say it?', howElder: 'Ask: how do you say this? Then tap and let them speak.',
    rec: '🎙 Tap and speak', stop: '■ Stop', again: 'Record again',
    who: 'Who said it like this?', whoOpts: ['Me', 'Mother', 'Father', 'Grandmother', 'Grandfather'],
    send: 'Save and continue →', skip: 'Don\'t know · skip', sending: 'Saving…',
    mic: 'The microphone did not open. Allow it in the browser, or skip the word.',
    guessQ: 'What do you think: where is this way of speaking from?', guessPh: 'e.g. Mirdita, Malësia e Madhe, Dukagjin… (optional)',
    done: 'Thank you!', doneLead: (n) => `${n} words in your voice are now in the archive. This way they are not lost.`,
    doneZero: 'Thank you for opening it. When you have two minutes, try again.',
    share: 'Send it to someone', shareName: 'Your name (so they know who sent it)', shareText: (n) => `🎙 ${n ? n + ' invites you: ' : ''}Sit with your grandmother or grandfather and record them: 25 Albanian words, two minutes. Their voice is the oldest Albanian still alive. `,
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
  const [mode, setMode] = useState(0);
  const elder = mode < 2;
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
    d.set('speaker', elder ? (mode === 0 ? 'gjyshi/gjyshja (vetë)' : 'i moshuar i familjes (vetë)') : `vetë, si e thoshte: ${WHO_SQ[who]}`); d.set('era', 'kartolina'); d.set('consent', 'true'); d.set('lang', lang);
    d.set('audio', blob, 'recording');
    try { const res = await fetch('/api/kujtesa', { method: 'POST', body: d }); if (res.ok) setSaved((n) => n + 1); } catch { /* vazhdo */ }
    setBusy(false);
    nextWord();
  }

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/zani-yt${myName ? `?nga=${encodeURIComponent(myName)}` : ''}` : '';

  return (
    <div className="kt-wrap">
      <div className="kt-card">
        <div className="kt-plate" aria-label="MR"><span className="kt-plate-flag">AL</span><b>MR</b></div>

        {step === 'intro' && (
          <>
            <p className="kt-eyebrow">{t.eyebrow}</p>
            {q.nga && <p className="kt-from">{t.from(q.nga, q.per)}</p>}
            <h1 className="kt-h">{t.hello}</h1>
            <p className="kt-sub">{t.sub}</p>
            <p className="kt-lead">{t.lead}</p>
            <p className="kt-small" style={{ marginTop: -2 }}>{t.module}</p>
            <Link className="kt-about" href="/">{t.about}</Link>
            <label className="kt-check"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> {t.consent}</label>
            <button className="kt-btn" disabled={!consent} onClick={() => setStep('mode')}>{t.start}</button>
          </>
        )}

        {step === 'mode' && (
          <>
            <h2 className="kt-q">{t.modeQ}</h2>
            <div className="kt-modes">
              {t.modes.map((m, k) => <button key={k} className={mode === k ? 'on' : ''} onClick={() => setMode(k)}>{k < 2 ? '👵 ' : '🙋 '}{m}</button>)}
            </div>
            <p className="kt-small">{t.modeHint}</p>
            <button className="kt-btn" onClick={() => setStep('place')}>{t.next}</button>
          </>
        )}

        {step === 'place' && (
          <>
            <h2 className="kt-q">{elder ? t.placeQElder : t.placeQ}</h2>
            <input className="kt-input" value={place} onChange={(e) => setPlace(e.target.value)} placeholder={t.placePh} maxLength={120} />
            <p className="kt-small">{elder ? t.ageQElder : t.ageQ}</p>
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
            <h2 className="kt-q">{elder ? t.howElder : t.how}</h2>
            <button className={`kt-rec ${rec ? 'on' : ''}`} onClick={toggle}>{rec ? t.stop : url ? t.again : t.rec}</button>
            {micErr && <p className="kt-err">{t.mic}</p>}
            {url && <audio controls src={url} className="kt-audio" />}
            {url && (
              <>
                {!elder && (<>
                <p className="kt-small">{t.who}</p>
                <div className="kt-pills">{t.whoOpts.map((o, k) => <button key={o} className={who === k ? 'on' : ''} onClick={() => setWho(k)}>{o}</button>)}</div>
                </>)}
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
