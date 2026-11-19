'use client';
import { useState } from 'react';
import { useLang } from './LangProvider';
import { WANTED } from '../lib/wanted';

const T = {
  sq: {
    title: 'Çfarë kërkojmë',
    lead: 'Fjalët e jetës së vjetër, ashtu si i thoshin pleqtë: natyra, trupi, kopeja, ara, shtëpia, familja, fisi. Nuk ke nevojë të dish nëse fjala është e lashtë. Këtë e shqyrtojnë studiuesit. Ti na sill fjalën dhe zërin.',
    yesTitle: 'Po, këto na duhen',
    yes: [
      'Fjalë që i thoni ndryshe nga shqipja e shkollës (hân për hënë, gjell për diell).',
      'Emrat e veglave dhe punëve të dikurshme: si lahej rroba në lumë, me çfarë rrihej, si krihej leshi, si thurej gardhi.',
      'Fjalë që po humbin, që nipërit nuk i dinë më.',
      'Tingujt e natyrës dhe të kafshëve, si i thoshit ju.',
      'Shprehje, betime, urime e mallkime të vjetra.',
    ],
    noTitle: 'Nuk na duhen tani',
    no: [
      'Emrat e gjërave të reja: telefon, televizor, makinë, kompjuter.',
      'Fjalë që i thoni njësoj si në shqipen e shkollës, me të njëjtin shqiptim.',
      'Emra njerëzish.',
    ],
    newWords: 'Fjalët e reja që shpik populli për gjërat moderne janë thesar më vete. Si plaka në Laç që e quajti laptopin "knoisi", ai që këndon. Do t\'u hapim një sirtar të veçantë më vonë.',
    pickTitle: 'Si i thoni këto? Prekni një fjalë',
    pickHint: 'Fjala hyn te "Çfarë do të thotë?". Ju shkruani si e thoni dhe e regjistroni.',
  },
  en: {
    title: 'What we are looking for',
    lead: 'The words of the old life, the way the elders said them: nature, the body, the flock, the field, the house, the family, the tribe. You don\'t need to know whether a word is ancient. Scholars review that. Just bring us the word and your voice.',
    yesTitle: 'Yes, we need these',
    yes: [
      'Words you say differently from school Albanian (hân for hënë, gjell for diell).',
      'Names of old tools and tasks: how clothes were washed in the river, what they were beaten with, how wool was combed, how a fence was woven.',
      'Words that are fading, that the grandchildren no longer know.',
      'Sounds of nature and animals, the way you said them.',
      'Old expressions, oaths, blessings and curses.',
    ],
    noTitle: 'Not needed for now',
    no: [
      'Names of new things: phone, TV, car, computer.',
      'Words you say exactly as in school Albanian, with the same pronunciation.',
      'People\'s names.',
    ],
    newWords: 'The new words people invent for modern things are a treasure of their own, like the old woman in Laç who called a laptop "knoisi", the one that sings. They will get their own drawer later.',
    pickTitle: 'How do you say these? Tap a word',
    pickHint: 'The word goes into "What does it mean?". You write how you say it and record it.',
  },
};

export default function WantedGuide() {
  const { lang } = useLang();
  const t = T[lang];
  const [cat, setCat] = useState(0);
  const c = WANTED[cat];

  function pick(word) {
    const m = document.getElementById('k-meaning');
    const w = document.getElementById('k-word');
    if (m) m.value = word;
    if (w) { w.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => w.focus(), 400); }
  }

  return (
    <div className="card wanted">
      <h2>{t.title}</h2>
      <p>{t.lead}</p>
      <details>
        <summary>{t.yesTitle} / {t.noTitle}</summary>
        <div className="wanted-yesno">
          <div><strong className="yes">✓ {t.yesTitle}</strong><ul>{t.yes.map((x) => <li key={x}>{x}</li>)}</ul></div>
          <div><strong className="no">✗ {t.noTitle}</strong><ul>{t.no.map((x) => <li key={x}>{x}</li>)}</ul></div>
        </div>
        <p className="wanted-new">{t.newWords}</p>
      </details>
      <h3>{t.pickTitle}</h3>
      <div className="wanted-cats" role="tablist">
        {WANTED.map((x, i) => (
          <button key={x.n} type="button" role="tab" aria-selected={i === cat} onClick={() => setCat(i)}>{lang === 'en' ? x.en : x.sq}</button>
        ))}
      </div>
      <div className="wanted-words">
        {c.words.map(([sq, en]) => (
          <button key={sq} type="button" className="tag" onClick={() => pick(sq)} title={en}>{lang === 'en' ? `${sq} (${en})` : sq}</button>
        ))}
      </div>
      <p className="wanted-hint">{t.pickHint}</p>
    </div>
  );
}
