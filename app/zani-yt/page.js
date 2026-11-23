'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../components/LangProvider';
import { REGION_NAMES, areasFor, villagesFor, placeLabel } from '../../lib/places';

const WORDS = [
  ['qumësht', 'milk'], ['bukë', 'bread'], ['djathë', 'cheese'], ['gjalpë', 'butter'], ['vezë', 'egg'],
  ['shtëpi', 'house'], ['nënë', 'mother'], ['gjyshe', 'grandmother'], ['vëlla', 'brother'], ['motër', 'sister'],
  ['vajzë', 'girl'], ['djalë', 'boy'], ['grua', 'woman'], ['burrë', 'man'], ['nuse', 'bride'],
  ['nesër', 'tomorrow'], ['mëngjes', 'morning'], ['mbrëmje', 'evening'], ['dimër', 'winter'], ['zjarr', 'fire'],
  ['ujë', 'water'], ['hënë', 'moon'], ['dele', 'sheep'], ['qen', 'dog'], ['gjarpër', 'snake'],
];

const T = {
  sq: {
    eyebrow: 'GEG 1.0 · Piloti: gegnishtja e Mirditës',
    from: (n, p) => `${p ? p + ', ' : ''}${n} të ka dërguar këtë ftesë.`,
    hello: 'Zani yt.', sub: 'Shpëto gjuhën e moçme shqiptare.',
    lead: 'Ulu pranë më të moshuarit të familjes, nënës, babait, gjyshes ose gjyshit, dhe regjistroje. Disa fjalë, pesë nga pesë: sa të doni. Zëri i tyre është shqipja më e moçme që kemi ende gjallë. Nuk ke asnjë pranë? Thuaji vetë, ashtu si i dëgjoje prej tyre.', module: 'Ky është piloti i projektit: dialekti geg, varianti mirditor. Por çdo zë ruhet. Je nga Tirana, Elbasani, Kavaja, Skrapari, Tepelena, Çamëria apo nga një krahinë tjetër? Regjistro si e thoni ju: do të përdoret kur të vijë moduli i krahinës sate, dhe deri atëherë krahasimi na tregon ku ndahen dialektet.', notLang: 'Shqipja letrare mbetet gjuha jonë e përbashkët; ne nuk e ndryshojmë. Ruajmë dialektet, para se të humbasin.',
    consent: 'Pranoj që zëri im, ose zëri i atij që regjistroj me pëlqimin e tij, të ruhet në arkivin GEG 1.0 dhe të përdoret për studim.',
    start: 'Fillo', modeQ: 'Kush do të flasë?', modes: ['Po regjistroj nënën ose babanë', 'Po regjistroj gjyshen ose gjyshin', 'Një tjetër të moshuar', 'Unë vetë, si i kujtoj'], modeHint: 'Sa më i moshuar zëri, aq më e çmuar fjala.',
    cTitle: 'Pëlqimi', cElderLead: 'Para se të nisni, lexoja me zë: «Ky regjistrim është për arkivin GEG 1.0. Zëri yt ruhet për studimin e gjuhës shqipe. Mund ta tërheqësh kurdo.» Pastaj le të thotë vetë një fjali pëlqimi, p.sh. «Po, pranoj.»',
    cRec: '🎙 Regjistro pëlqimin me zë', cRecAgain: 'Regjistroje prapë', cRecHint: 'Nuk është e detyrueshme, por është mbrojtja më e mirë për të dhe për arkivin.',
    cElderBox: 'Ai ose ajo që flet e dha vetë pëlqimin.', cPublic: 'Lejoj që zëri të dëgjohet publikisht në faqe. Pa këtë, ruhet vetëm për studim.',
    codeLabel: 'Kodi yt për tërheqje. Ruaje (bëj një foto ekrani): nëse ndryshon mendje, e shkruan te geg1.org/terheq dhe zërat fshihen.', about: 'Çfarë është GEG 1.0? Shih punën që qëndron pas →',
    placeQ: 'Nga cili fshat ose krahinë janë të parët e tu?', placeQElder: 'Nga cili fshat ose krahinë është ai ose ajo që flet?', placePh: 'p.sh. Orosh, Shkodër, Gjakovë, Tiranë, Elbasan, Skrapar, Konispol…',
    regionL: 'Krahina', regionPick: '— Zgjidh krahinën —', regionOther: 'Tjetër / nuk e gjej', regionOtherPh: 'Shkruaje krahinën',
    areaL: 'Zona (bajraku, krahina e vogël)', areaOther: 'Tjetër', areaOtherPh: 'Shkruaje zonën',
    villageL: 'Fshati ose qyteti', villagePh: 'Shkruaje. Nëse nuk del në listë, shkruaje vetë.',
    placeNote: 'Çdo fshat ka të folurin e vet. Lista nuk është e plotë: çdo vend që shkruani e pasuron arkivin.',
    ageQ: 'Mosha jote (nuk është e detyrueshme)', ageQElder: 'Mosha e atij ose asaj që flet (nuk është e detyrueshme)',
    next: 'Vazhdo →',
    wordOf: (i, n) => `Fjala ${i} nga ${n}`, chunkDone: (n) => `Faleminderit! ${n} fjalë janë ruajtur.`, chunkQ: 'Edhe pesë të tjera?', more5: 'Po, edhe 5', enough: 'Mjafton për sot',
    std: 'Në shqipen standarde:',
    how: 'Si e thoshte nëna, babai ose gjyshja?', howElder: 'Pyete: si e thoni këtë? Pastaj shtyp dhe lëre të flasë.',
    rec: '🎙 Shtyp dhe fol', stop: '■ Ndalo', again: 'Regjistroje prapë',
    who: 'Kush e thoshte kështu?', whoOpts: ['Unë vetë', 'Nëna', 'Babai', 'Gjyshja', 'Gjyshi'],
    send: 'Ruaje dhe vazhdo →', skip: 'Nuk e di · kalo', sending: 'Po ruhet…',
    mic: 'Mikrofoni nuk u hap. Lejoje te shfletuesi, ose kalo fjalën.',
    guessQ: 'Çfarë mendon: nga cili dialekt ose krahinë është kjo mënyrë e të folurit?', guessPh: 'p.sh. Mirdita, Malësia e Madhe, Dukagjini… (nuk është e detyrueshme)',
    done: 'Faleminderit!', doneLead: (n) => `${n} fjalë me zërin tënd janë tani në arkiv. Kështu nuk humbin.`,
    doneZero: 'Faleminderit që e hape. Kur të kesh dy minuta, provoje prapë.',
    share: 'Çoja dikujt', shareName: 'Emri yt (që ta dinë kush ua dërgoi)', shareText: (n) => `🎙 ${n ? n + ' të fton: ' : ''}Zëri yt. Ulu pranë më të moshuarit të familjes dhe regjistroje: disa fjalë, pesë nga pesë. Zëri i tyre është shqipja më e moçme që kemi ende gjallë. `,
    more: 'Do të shohësh më shumë? Hyr në arkiv →',
  },
  en: {
    eyebrow: 'GEG 1.0 · Pilot: Gheg of Mirdita',
    from: (n, p) => `${p ? p + ', ' : ''}${n} sent you this invitation.`,
    hello: 'Zani yt. Your voice.', sub: 'Save the old Albanian language.',
    lead: 'Sit with the eldest in your family, your mother, father, grandmother or grandfather, and record them. A few words, five at a time: as many as you like. Their voice is the oldest Albanian still alive. No one nearby? Say the words yourself, the way you heard them from them.', module: 'This is the project\'s pilot: the Gheg dialect, Mirdita variant. But every voice is kept. From Tirana, Elbasan, Kavaja, Skrapar, Tepelena, Çamëria or another region? Record how you say it: it will be used when your region\'s module comes, and until then the comparison shows where the dialects part.', notLang: 'Standard Albanian remains our common language; we are not changing it. We preserve the dialects before they are lost.',
    consent: 'I agree that my voice, or the voice of the person I record with their consent, is kept in the GEG 1.0 archive and used for study.',
    start: 'Start', modeQ: 'Who will speak?', modes: ['I am recording my mother or father', 'I am recording my grandmother or grandfather', 'Another elder', 'Me, as I remember it'], modeHint: 'The older the voice, the more precious the word.',
    cTitle: 'Consent', cElderLead: 'Before you start, read this aloud: "This recording is for the GEG 1.0 archive. Your voice is kept for the study of the Albanian language. You can withdraw it at any time." Then let them say a sentence of consent themselves, e.g. "Yes, I agree."',
    cRec: '🎙 Record the spoken consent', cRecAgain: 'Record it again', cRecHint: 'Not required, but it is the best protection for them and for the archive.',
    cElderBox: 'The person speaking gave their own consent.', cPublic: 'I allow the voice to be played publicly on the site. Without this, it is kept for study only.',
    codeLabel: 'Your withdrawal code. Keep it (take a screenshot): if you change your mind, enter it at geg1.org/terheq and the voices are deleted.', about: 'What is GEG 1.0? See the work behind it →',
    placeQ: 'Which village or region are your people from?', placeQElder: 'Which village or region is the speaker from?', placePh: 'e.g. Orosh, Kthellë, Shkodër, Gjakova…',
    regionL: 'Region', regionPick: '— Choose a region —', regionOther: 'Other / not listed', regionOtherPh: 'Type the region',
    areaL: 'Area (bajrak, smaller region)', areaOther: 'Other', areaOtherPh: 'Type the area',
    villageL: 'Village or town', villagePh: 'Type it. If it isn’t in the list, write it anyway.',
    placeNote: 'Every village has its own way of speaking. The list is not complete: every place you add enriches the archive.',
    ageQ: 'Your age (optional)', ageQElder: 'The speaker\'s age (optional)',
    next: 'Continue →',
    wordOf: (i, n) => `Word ${i} of ${n}`, chunkDone: (n) => `Thank you! ${n} words are saved.`, chunkQ: 'Five more?', more5: 'Yes, 5 more', enough: 'Enough for today',
    std: 'In standard Albanian:',
    how: 'How did your mother, father or grandmother say it?', howElder: 'Ask: how do you say this? Then tap and let them speak.',
    rec: '🎙 Tap and speak', stop: '■ Stop', again: 'Record again',
    who: 'Who said it like this?', whoOpts: ['Me', 'Mother', 'Father', 'Grandmother', 'Grandfather'],
    send: 'Save and continue →', skip: 'Don\'t know · skip', sending: 'Saving…',
    mic: 'The microphone did not open. Allow it in the browser, or skip the word.',
    guessQ: 'What do you think: where is this way of speaking from?', guessPh: 'e.g. Mirdita, Malësia e Madhe, Dukagjin… (optional)',
    done: 'Thank you!', doneLead: (n) => `${n} words in your voice are now in the archive. This way they are not lost.`,
    doneZero: 'Thank you for opening it. When you have two minutes, try again.',
    share: 'Send it to someone', shareName: 'Your name (so they know who sent it)', shareText: (n) => `🎙 ${n ? n + ' invites you: ' : ''}Sit with the eldest in your family and record them: a few Albanian words, five at a time. Their voice is the oldest Albanian still alive. `,
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
  const [preg, setPreg] = useState('');
  const [pregOther, setPregOther] = useState('');
  const [parea, setParea] = useState('');
  const [pareaOther, setPareaOther] = useState('');
  const [age, setAge] = useState('');
  const [guess, setGuess] = useState('');
  const [i, setI] = useState(0);
  const [who, setWho] = useState(1);
  const [mode, setMode] = useState(0);
  const [pub, setPub] = useState(false);
  const [elderOk, setElderOk] = useState(false);
  const [cBlob, setCBlob] = useState(null);
  const [cUrl, setCUrl] = useState(null);
  const [cRec, setCRec] = useState(false);
  const [cSent, setCSent] = useState(false);
  const cr = useRef(null);
  const [ids] = useState(() => {
    const u = () => (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : null);
    const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const r = (n) => Array.from({ length: n }, () => abc[Math.floor(Math.random() * abc.length)]).join('');
    return { session: u(), code: `GEG-${r(4)}-${r(4)}` };
  });
  const elder = mode < 3;
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

  async function toggleConsent() {
    if (cRec) { cr.current?.stop(); return; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream); const chunks = [];
      m.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      m.onstop = () => { stream.getTracks().forEach((x) => x.stop()); const b = new Blob(chunks, { type: m.mimeType || 'audio/webm' }); setCBlob(b); setCUrl(URL.createObjectURL(b)); setCRec(false); };
      cr.current = m; m.start(); setCRec(true);
    } catch { setMicErr(true); }
  }

  function nextWord() {
    setBlob(null); setUrl(null);
    if (i + 1 >= WORDS.length) setStep('done'); else { setI(i + 1); if ((i + 1) % 5 === 0) setStep('pause'); }
  }

  async function save() {
    if (!blob) return;
    setBusy(true);
    const d = new FormData();
    d.set('word', WORDS[i][0]); d.set('meaning', WORDS[i][1]);
    d.set('village', placeLabel({ village: place, area: parea === '__o' ? pareaOther : parea, region: preg === '__o' ? pregOther : preg })); d.set('region', guess); d.set('age_band', age);
    d.set('speaker', elder ? ['prindi (vetë)', 'gjyshi/gjyshja (vetë)', 'i moshuar (vetë)'][mode] : `vetë, si e thoshte: ${WHO_SQ[who]}`); d.set('era', 'kartolina'); d.set('consent', 'true'); d.set('lang', lang);
    d.set('audio', blob, 'recording');
    d.set('consent_by', elder ? 'on_behalf' : 'self'); d.set('consent_public', pub ? 'true' : 'false');
    if (ids.session) { d.set('session_id', ids.session); d.set('speaker_id', ids.session); }
    d.set('withdraw_code', ids.code); d.set('website', '');
    if (cBlob && !cSent) d.set('consent_audio', cBlob, 'consent');
    try { const res = await fetch('/api/kujtesa', { method: 'POST', body: d }); if (res.ok) { setSaved((n) => n + 1); if (cBlob) setCSent(true); } } catch { /* vazhdo */ }
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
            <p className="kt-small" style={{ fontWeight: 600 }}>{t.notLang}</p>
            <Link className="kt-about" href="/">{t.about}</Link>
            <label className="kt-check"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /> {t.consent}</label>
            <button className="kt-btn" disabled={!consent} onClick={() => setStep('mode')}>{t.start}</button>
          </>
        )}

        {step === 'mode' && (
          <>
            <h2 className="kt-q">{t.modeQ}</h2>
            <div className="kt-modes">
              {t.modes.map((m, k) => <button key={k} className={mode === k ? 'on' : ''} onClick={() => setMode(k)}>{k < 3 ? '👵 ' : '🙋 '}{m}</button>)}
            </div>
            <p className="kt-small">{t.modeHint}</p>
            <button className="kt-btn" onClick={() => setStep('consent2')}>{t.next}</button>
          </>
        )}

        {step === 'consent2' && (
          <>
            <h2 className="kt-q">{t.cTitle}</h2>
            {elder && (
              <>
                <p className="kt-lead" style={{ fontSize: 16 }}>{t.cElderLead}</p>
                <button className={`kt-rec ${cRec ? 'on' : ''}`} onClick={toggleConsent}>{cRec ? t.stop : cUrl ? t.cRecAgain : t.cRec}</button>
                {cUrl && <audio controls src={cUrl} className="kt-audio" />}
                <p className="kt-small">{t.cRecHint}</p>
                <label className="kt-check"><input type="checkbox" checked={elderOk} onChange={(e) => setElderOk(e.target.checked)} /> {t.cElderBox}</label>
              </>
            )}
            <label className="kt-check"><input type="checkbox" checked={pub} onChange={(e) => setPub(e.target.checked)} /> {t.cPublic}</label>
            <div className="kt-code"><span>{t.codeLabel}</span><b>{ids.code}</b></div>
            <button className="kt-btn" disabled={elder && !elderOk} onClick={() => setStep('place')}>{t.next}</button>
          </>
        )}

        {step === 'place' && (
          <>
            <h2 className="kt-q">{elder ? t.placeQElder : t.placeQ}</h2>
            <label className="kt-small" htmlFor="kt-reg">{t.regionL}</label>
            <select id="kt-reg" className="kt-input" value={preg} onChange={(e) => { setPreg(e.target.value); setParea(''); }}>
              <option value="">{t.regionPick}</option>
              {REGION_NAMES.map((r) => <option key={r} value={r}>{r}</option>)}
              <option value="__o">{t.regionOther}</option>
            </select>
            {preg === '__o' && <input className="kt-input" value={pregOther} onChange={(e) => setPregOther(e.target.value)} placeholder={t.regionOtherPh} maxLength={60} />}
            {preg && preg !== '__o' && areasFor(preg).length > 0 && (
              <>
                <p className="kt-small">{t.areaL}</p>
                <div className="kt-pills">
                  {areasFor(preg).map((a) => <button key={a} className={parea === a ? 'on' : ''} onClick={() => setParea(parea === a ? '' : a)}>{a}</button>)}
                  <button className={parea === '__o' ? 'on' : ''} onClick={() => setParea(parea === '__o' ? '' : '__o')}>{t.areaOther}</button>
                </div>
                {parea === '__o' && <input className="kt-input" value={pareaOther} onChange={(e) => setPareaOther(e.target.value)} placeholder={t.areaOtherPh} maxLength={60} />}
              </>
            )}
            <label className="kt-small" htmlFor="kt-vil">{t.villageL}</label>
            <input id="kt-vil" className="kt-input" list="kt-villages" value={place} onChange={(e) => setPlace(e.target.value)} placeholder={preg ? t.villagePh : t.placePh} maxLength={80} />
            <datalist id="kt-villages">
              {villagesFor(preg, parea && parea !== '__o' ? parea : '').map((v) => <option key={v} value={v} />)}
            </datalist>
            <p className="kt-small" style={{ opacity: 0.75 }}>{t.placeNote}</p>
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
            <div className="kt-progress"><span style={{ width: `${((i % 5) / 5) * 100}%` }} /></div>
            <p className="kt-small">{t.wordOf((i % 5) + 1, Math.min(5, WORDS.length - Math.floor(i / 5) * 5))}</p>
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

        {step === 'pause' && (
          <>
            <h1 className="kt-h">🎉</h1>
            <p className="kt-lead">{saved > 0 ? t.chunkDone(saved) : t.doneZero}</p>
            <h2 className="kt-q">{t.chunkQ}</h2>
            <button className="kt-btn" onClick={() => setStep('words')}>{t.more5}</button>
            <button className="kt-skip" onClick={() => setStep('done')}>{t.enough}</button>
          </>
        )}

        {step === 'done' && (
          <>
            <h1 className="kt-h">{t.done}</h1>
            <p className="kt-lead">{saved > 0 ? t.doneLead(saved) : t.doneZero}</p>
            {saved > 0 && <div className="kt-code"><span>{t.codeLabel}</span><b>{ids.code}</b></div>}
            <input className="kt-input" value={myName} onChange={(e) => setMyName(e.target.value)} placeholder={t.shareName} maxLength={40} />
            <a className="kt-btn kt-wa" href={`https://wa.me/?text=${encodeURIComponent(t.shareText(myName) + shareUrl)}`} target="_blank" rel="noopener noreferrer">{t.share} · WhatsApp</a>
            <Link className="kt-more" href="/">{t.more}</Link>
          </>
        )}
      </div>
    </div>
  );
}
