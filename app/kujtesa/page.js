'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../components/LangProvider';
import WantedGuide from '../../components/WantedGuide';

export default function Kujtesa() {
  const { t, lang } = useLang();
  const m = t.memory;
  const [audioBlob, setAudioBlob] = useState(null);
  const [state, setState] = useState('idle');
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [micError, setMicError] = useState(false);
  const [sent, setSent] = useState(false);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => () => { if (audioUrl) URL.revokeObjectURL(audioUrl); }, [audioUrl]);
  useEffect(() => {
    const w = new URLSearchParams(window.location.search).get('fjala');
    const el = document.getElementById('k-meaning');
    if (w && el) el.value = w.slice(0, 80);
  }, []);

  async function toggleRecording() {
    if (recording) {
      recorderRef.current?.stop();
      return;
    }
    setMicError(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => { if (e.data.size) chunksRef.current.push(e.data); };
      rec.onstop = () => {
        stream.getTracks().forEach((tr) => tr.stop());
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || 'audio/webm' });
        setAudioBlob(blob);
        setAudioUrl(URL.createObjectURL(blob));
        setRecording(false);
      };
      recorderRef.current = rec;
      rec.start();
      setRecording(true);
    } catch (e) {
      setMicError(true);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData();
    data.set('word', f.elements['k-word'].value);
    data.set('meaning', f.elements['k-meaning'].value);
    data.set('village', f.elements['k-village'].value);
    data.set('country', f.elements['k-country'].value);
    data.set('age_band', f.elements['k-age'].value);
    data.set('birthplace', f.elements['k-birth'].value);
    data.set('gender', f.elements['k-gender'].value);
    data.set('region', f.elements['k-region'].value);
    data.set('speaker', f.elements['k-who'].value);
    data.set('era', f.elements['k-when'].value);
    data.set('example', f.elements['k-example'].value);
    data.set('consent', String(f.elements['k-consent'].checked));
    data.set('lang', lang);
    if (audioBlob) data.set('audio', audioBlob, 'recording');
    setState('sending');
    try {
      const res = await fetch('/api/kujtesa', { method: 'POST', body: data });
      if (res.ok) { setState('sent'); f.reset(); setAudioBlob(null); setAudioUrl(null); }
      else if (res.status === 503) setState('offline');
      else setState('error');
    } catch (err) {
      setState('error');
    }
    setSent(true);
  }

  return (
    <div className="wrap memory">
      <section className="memory-left">
        <p className="eyebrow" style={{ margin: 0 }}>{m.step}</p>
        <h1>{m.h1}</h1>
        <p className="lead" style={{ margin: 0, fontSize: 18 }}>{m.lead}</p>
        <WantedGuide />

        <div className="card recbox">
          <button type="button" className={`recbtn${recording ? ' on' : ''}`} onClick={toggleRecording} aria-label={recording ? m.stop : m.rec}>
            {recording ? (
              <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2" fill="#fff" /></svg>
            ) : (
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></svg>
            )}
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <strong style={{ fontSize: 18, color: recording ? '#b42318' : 'var(--green)' }}>
              {recording ? m.stop : audioUrl ? m.again : m.rec}
            </strong>
            <span style={{ fontSize: 15, color: 'var(--ink-2)' }}>{m.recNote}</span>
            {audioUrl && <audio controls src={audioUrl} style={{ maxWidth: '100%' }} />}
            {micError && <span role="alert" style={{ fontSize: 14, color: '#b42318' }}>{m.micError}</span>}
          </div>
        </div>

        <div>
          <h2 style={{ fontFamily: 'var(--sans)', fontSize: 16, marginBottom: 6 }}>{m.tipsTitle}</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--ink-2)', lineHeight: 1.8 }}>
            {m.tips.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </section>

      <form className="card memory-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="k-word">{m.word}</label>
          <input id="k-word" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="k-meaning">{m.meaning}</label>
          <textarea id="k-meaning" rows={3} placeholder={m.meaningPh} />
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="k-village">{m.village}</label>
            <input id="k-village" type="text" placeholder={m.villagePh} />
          </div>
          <div className="field">
            <label htmlFor="k-region">{m.region}</label>
            <select id="k-region">{m.regions.map((r) => <option key={r}>{r}</option>)}</select>
          </div>
          <div className="field">
            <label htmlFor="k-who">{m.who}</label>
            <select id="k-who">{m.whoOpts.map((r) => <option key={r}>{r}</option>)}</select>
          </div>
          <div className="field">
            <label htmlFor="k-when">{m.when}</label>
            <input id="k-when" type="text" placeholder={m.whenPh} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="k-country">{m.country}</label>
          <input id="k-country" type="text" list="k-countries" placeholder={m.countryPh} />
          <datalist id="k-countries">{m.countries.map((c) => <option key={c} value={c} />)}</datalist>
        </div>
        <div className="grid2">
          <div className="field">
            <label htmlFor="k-age">{m.age}</label>
            <select id="k-age" defaultValue="">{m.ageOpts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
          </div>
          <div className="field">
            <label htmlFor="k-gender">{m.gender}</label>
            <select id="k-gender" defaultValue="">{m.genderOpts.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
          </div>
          <div className="field">
            <label htmlFor="k-birth">{m.birth}</label>
            <input id="k-birth" type="text" placeholder={m.birthPh} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="k-example">{m.example}</label>
          <input id="k-example" type="text" placeholder={m.examplePh} />
        </div>
        <label className="consent">
          <input id="k-consent" type="checkbox" required defaultChecked />
          <span>{m.consent}</span>
        </label>
        {sent && state === 'sent' && <p className="notice" role="status">{m.thanks}</p>}
        {sent && state === 'offline' && <p className="notice" role="status">{m.pending}</p>}
        {sent && state === 'error' && <p className="notice" role="alert" style={{ background: '#fde8e6', color: '#9a1f12' }}>{m.failed}</p>}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn-navy" disabled={state === 'sending'}>{state === 'sending' ? m.sending : m.submit}</button>
        </div>
      </form>
    </div>
  );
}
