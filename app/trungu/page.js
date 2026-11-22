'use client';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../../components/LangProvider';

// MOCK-UP. Gjithçka ruhet vetëm në këtë pajisje (localStorage). Asgjë nuk dërgohet në server.
const KEY = 'geg-trungu-v1';
const newId = () => Math.random().toString(36).slice(2, 10);

const T = {
  sq: {
    mock: 'Mock-up · gjithçka ruhet vetëm në këtë telefon ose kompjuter. Asgjë nuk na vjen neve.',
    eyebrow: 'Mjet për familjet', h1: 'Trungu i familjes',
    lead: 'Ndërto trungun e familjes sate brez pas brezi. Emri i plotë del vetë, si në traditën e veriut: emri yt, i babait, i gjyshit dhe fisi.',
    add: '+ Shto një person', name: 'Emri', surname: 'Mbiemri ose fisi', father: 'Babai', mother: 'Nëna', none: '—', born: 'Lindur (viti)', died: 'Vdekur (viti)', village: 'Fshati',
    chain: 'Emri i plotë', save: 'Ruaje', cancel: 'Anulo', edit: 'Ndrysho', del: 'Fshije', empty: 'Ende askush. Fillo nga vetja ose nga gjyshi më i vjetër që mban mend.',
    gift: 'Dhuroje këtë emër në arkivin e emrave (vetëm emri, shekulli dhe fshati, pa familjen)', giftNote: 'Në këtë mock-up dhurimi nuk dërgohet ende; shënohet vetëm.',
    exp: '⬇ Shkarko kopjen', imp: '⬆ Ngarko një kopje', impErr: 'Skedari nuk u lexua.', gens: (n) => `${n} breza`, people: (n) => `${n} vetë`,
    privacy: 'Pse vetëm këtu? Sepse trungu i familjes është i yti. As ne, as bordi nuk mund ta shohim. Nëse e fshin shfletuesin, humbet: prandaj shkarko herë pas here një kopje.',
    tree: 'Trungu', children: 'Fëmijët',
  },
  en: {
    mock: 'Mock-up · everything is stored only on this phone or computer. Nothing reaches us.',
    eyebrow: 'A tool for families', h1: 'The family tree',
    lead: 'Build your family tree generation by generation. The full name appears on its own, as in the northern tradition: your name, your father\'s, your grandfather\'s and the clan.',
    add: '+ Add a person', name: 'Name', surname: 'Surname or clan', father: 'Father', mother: 'Mother', none: '—', born: 'Born (year)', died: 'Died (year)', village: 'Village',
    chain: 'Full name', save: 'Save', cancel: 'Cancel', edit: 'Edit', del: 'Delete', empty: 'Nobody yet. Start with yourself or with the oldest grandparent you remember.',
    gift: 'Give this name to the names archive (only the name, century and village, not the family)', giftNote: 'In this mock-up the gift is not sent yet; it is only marked.',
    exp: '⬇ Download a copy', imp: '⬆ Load a copy', impErr: 'The file could not be read.', gens: (n) => `${n} generations`, people: (n) => `${n} people`,
    privacy: 'Why only here? Because your family tree is yours. Neither we nor the board can see it. If you clear your browser it is lost, so download a copy from time to time.',
    tree: 'Tree', children: 'Children',
  },
};

function chainOf(p, byId) {
  const parts = [p.name];
  let cur = p; let k = 0;
  while (cur && cur.father && byId[cur.father] && k < 2) { cur = byId[cur.father]; parts.push(cur.name); k++; }
  const sur = p.surname || cur?.surname || '';
  return [...parts, sur].filter(Boolean).join(' ');
}
function depth(p, byId, seen = new Set()) {
  if (!p || seen.has(p.id)) return 0; seen.add(p.id);
  const f = byId[p.father]; const m = byId[p.mother];
  return 1 + Math.max(depth(f, byId, seen), depth(m, byId, seen));
}

export default function Trungu() {
  const { lang } = useLang();
  const t = T[lang];
  const [people, setPeople] = useState([]);
  const [form, setForm] = useState(null);
  const [err, setErr] = useState('');
  useEffect(() => { try { setPeople(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { /* bosh */ } }, []);
  const persist = (list) => { setPeople(list); try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* bosh */ } };
  const byId = useMemo(() => Object.fromEntries(people.map((p) => [p.id, p])), [people]);
  const gens = useMemo(() => people.reduce((m, p) => Math.max(m, depth(p, byId)), 0), [people, byId]);
  const sorted = [...people].sort((a, b) => (+a.born || 9999) - (+b.born || 9999));
  const blank = { id: '', name: '', surname: '', father: '', mother: '', born: '', died: '', village: '', gift: false };

  const save = () => {
    if (!form.name.trim()) return;
    const p = { ...form, id: form.id || newId(), name: form.name.trim() };
    persist(form.id ? people.map((x) => (x.id === p.id ? p : x)) : [...people, p]);
    setForm(null);
  };
  const del = (id) => persist(people.filter((x) => x.id !== id).map((x) => ({ ...x, father: x.father === id ? '' : x.father, mother: x.mother === id ? '' : x.mother })));
  const exportFile = () => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'GEG Trungu', v: 1, people }, null, 2)], { type: 'application/json' }));
    a.download = 'trungu-i-familjes.json'; a.click();
  };
  const importFile = async (e) => {
    setErr('');
    try { const j = JSON.parse(await e.target.files[0].text()); if (Array.isArray(j.people)) persist(j.people); else setErr(t.impErr); } catch { setErr(t.impErr); }
  };
  const opts = (excl) => people.filter((x) => x.id !== excl);

  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 760 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>

      {people.length > 0 && <p className="kt-small">{t.people(people.length)} · {t.gens(gens)}</p>}

      {!form && <button className="kt-btn" style={{ width: '100%' }} onClick={() => setForm(blank)}>{t.add}</button>}

      {form && (
        <div className="card pad tr-form">
          <div className="tr-row"><input className="kt-input" placeholder={t.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={40} /><input className="kt-input" placeholder={t.surname} value={form.surname} onChange={(e) => setForm({ ...form, surname: e.target.value })} maxLength={40} /></div>
          <div className="tr-row">
            <label>{t.father}<select className="kt-input" value={form.father} onChange={(e) => setForm({ ...form, father: e.target.value })}><option value="">{t.none}</option>{opts(form.id).map((x) => <option key={x.id} value={x.id}>{chainOf(x, byId)}</option>)}</select></label>
            <label>{t.mother}<select className="kt-input" value={form.mother} onChange={(e) => setForm({ ...form, mother: e.target.value })}><option value="">{t.none}</option>{opts(form.id).map((x) => <option key={x.id} value={x.id}>{chainOf(x, byId)}</option>)}</select></label>
          </div>
          <div className="tr-row3"><input className="kt-input" inputMode="numeric" placeholder={t.born} value={form.born} onChange={(e) => setForm({ ...form, born: e.target.value.replace(/\D/g, '').slice(0, 4) })} /><input className="kt-input" inputMode="numeric" placeholder={t.died} value={form.died} onChange={(e) => setForm({ ...form, died: e.target.value.replace(/\D/g, '').slice(0, 4) })} /><input className="kt-input" placeholder={t.village} value={form.village} onChange={(e) => setForm({ ...form, village: e.target.value })} maxLength={60} /></div>
          <p className="tr-chain"><span>{t.chain}:</span> <b>{chainOf({ ...form, name: form.name || '…' }, byId)}</b></p>
          <label className="kt-check"><input type="checkbox" checked={form.gift} onChange={(e) => setForm({ ...form, gift: e.target.checked })} /> {t.gift}</label>
          {form.gift && <p className="kt-small" style={{ margin: 0 }}>{t.giftNote}</p>}
          <div className="tr-row"><button className="kt-btn" onClick={save}>{t.save}</button><button className="kt-skip" onClick={() => setForm(null)}>{t.cancel}</button></div>
        </div>
      )}

      <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
        {people.length === 0 && !form && <p className="kl-soon">{t.empty}</p>}
        {sorted.map((p) => {
          const kids = people.filter((x) => x.father === p.id || x.mother === p.id);
          return (
            <div key={p.id} className="tr-person">
              <div className="tr-top"><b>{chainOf(p, byId)}</b><span className="kt-small">{[p.born && `${p.born}${p.died ? '–' + p.died : ''}`, p.village].filter(Boolean).join(' · ')}{p.gift ? ' · 🎁' : ''}</span></div>
              {kids.length > 0 && <p className="kt-small" style={{ margin: '2px 0 0' }}>{t.children}: {kids.map((k) => k.name).join(', ')}</p>}
              <div className="tr-acts"><button className="linkish" onClick={() => setForm({ ...blank, ...p })}>{t.edit}</button><button className="linkish" onClick={() => del(p.id)}>{t.del}</button></div>
            </div>
          );
        })}
      </div>

      <div className="tr-row" style={{ marginTop: 18 }}>
        <button className="kt-skip" onClick={exportFile} disabled={!people.length}>{t.exp}</button>
        <label className="kt-skip" style={{ cursor: 'pointer' }}>{t.imp}<input type="file" accept="application/json" onChange={importFile} style={{ display: 'none' }} /></label>
      </div>
      {err && <p className="kl-err">{err}</p>}
      <p className="kt-small" style={{ marginTop: 14 }}>🔒 {t.privacy}</p>
      <p style={{ marginTop: 18 }}><Link href="/">← GEG 1.0</Link></p>
    </div>
  );
}
