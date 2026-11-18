'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../../components/LangProvider';

export default function Kujtesa() {
  const { t } = useLang();
  const m = t.memory;
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [micError, setMicError] = useState(false);
  const [sent, setSent] = useState(false);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);

  useEffect(() => () => { if (audioUrl) URL.revokeObjectURL(audioUrl); }, [audioUrl]);

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

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="wrap memory">
      <section className="memory-left">
        <p className="eyebrow" style={{ margin: 0 }}>{m.step}</p>
        <h1>{m.h1}</h1>
        <p className="lead" style={{ margin: 0, fontSize: 18 }}>{m.lead}</p>

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
          <label htmlFor="k-example">{m.example}</label>
          <input id="k-example" type="text" placeholder={m.examplePh} />
        </div>
        <label className="consent">
          <input type="checkbox" required defaultChecked />
          <span>{m.consent}</span>
        </label>
        {sent && <p className="notice" role="status">{m.pending}</p>}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn-navy">{m.submit}</button>
        </div>
      </form>
    </div>
  );
}
