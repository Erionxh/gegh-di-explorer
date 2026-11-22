'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '../../components/LangProvider';

// MOCK-UP. Pyetjet dhe fjalët janë ftesë; përgjigjet vijnë nga njerëzit, me vendin dhe brezin.
const STAGES = [
  {
    id: 'lindja', icon: '👶',
    sq: { name: 'Lindja', lead: 'Si pritej një fëmijë i porsalindur? A festohej ndryshe djali nga vajza? Çfarë urimesh thuheshin dhe kush vinte për vizitë?',
      q: ['Si e lajmëronin lindjen e një fëmije?', 'A festohej ndryshe lindja e djalit nga ajo e vajzës? Si?', 'Çfarë urimesh i thoshin nënës dhe fëmijës?', 'Çfarë dhuratash sillnin vizitorët?', 'Si quhej nëna e porsalindur dhe sa kohë rrinte pa dalë?'],
      w: ['lehona', 'djep', 'ninullë', 'myzhde', 'urim'] },
    en: { name: 'Birth', lead: 'How was a newborn welcomed? Was a boy celebrated differently from a girl? What blessings were said, and who came to visit?',
      q: ['How was a birth announced?', 'Was a boy\'s birth celebrated differently from a girl\'s? How?', 'What blessings were said to the mother and the child?', 'What gifts did visitors bring?', 'What was the new mother called, and how long did she stay indoors?'],
      w: ['lehona (new mother)', 'djep (cradle)', 'ninullë (lullaby)', 'myzhde (good news)', 'urim (blessing)'] },
  },
  {
    id: 'martesa', icon: '💍',
    sq: { name: 'Martesa', lead: 'Nga shkuesi te dita kur nusja hynte në shtëpinë e re: fejesa, krushqit, pajët, këngët dhe fjalët e çdo hapi.',
      q: ['Si bëhej fejesa dhe kush ishte shkuesi?', 'Si shkonin krushqit për nusen dhe çfarë ndodhte rrugës?', 'Pse bëhej zhurmë kur krushqit vinin për nusen? Me çfarë: pushkë, këngë, kuaj, e sot borie makinash?', 'Çfarë kishte paja e nuses?', 'Cilat këngë këndoheshin në dasmë?', 'Çfarë thuhej kur nusja hynte në shtëpi për herë të parë?'],
      w: ['shkues', 'fejesë', 'krushq', 'nuse', 'dhëndër', 'pajë', 'dasmë'] },
    en: { name: 'Marriage', lead: 'From the matchmaker to the day the bride entered her new home: the engagement, the wedding party, the dowry, the songs and the words of every step.',
      q: ['How was an engagement arranged, and who was the matchmaker?', 'How did the wedding party go to fetch the bride, and what happened on the way?', 'Why was noise made when the wedding party came for the bride? With what: rifles, songs, horses, and today car horns?', 'What did the bride\'s dowry contain?', 'Which songs were sung at the wedding?', 'What was said when the bride entered the house for the first time?'],
      w: ['shkues (matchmaker)', 'fejesë (engagement)', 'krushq (wedding party)', 'nuse (bride)', 'dhëndër (groom)', 'pajë (dowry)', 'dasmë (wedding)'] },
  },
  {
    id: 'vdekja', icon: '🕯️',
    sq: { name: 'Vdekja', lead: 'Vaji i grave, gjâma e burrave, ngushëllimi dhe zia. Fjalët që thuheshin pranë të vdekurit janë ndër më të vjetrat e gjuhës, dhe po humbin bashkë me ata që i dinin.',
      q: ['Si vajtohej i vdekuri dhe kush vajtonte?', 'Si bëhej gjâma e burrave te ju?', 'Çfarë thuhej kur shkoje për ngushëllim?', 'Sa zgjaste zia dhe si mbahej?', 'A mban mend vargje vaji? (Vetëm nëse familja pranon t\'i ndajë.)'],
      w: ['vaj', 'vajtim', 'gjâmë', 'ngushëllim', 'zi'] },
    en: { name: 'Death', lead: 'The women\'s lament, the men\'s gjâma, condolences and mourning. The words said beside the dead are among the oldest in the language, and they are disappearing with the people who knew them.',
      q: ['How was the dead lamented, and who lamented?', 'How was the men\'s gjâma done where you are from?', 'What was said when you went to offer condolences?', 'How long did mourning last, and how was it kept?', 'Do you remember lines of a lament? (Only if the family agrees to share them.)'],
      w: ['vaj (lament)', 'vajtim (lamenting)', 'gjâmë (men\'s lament)', 'ngushëllim (condolence)', 'zi (mourning)'] },
  },
];

const T = {
  sq: { mock: 'Mock-up · pyetjet janë ftesë, përgjigjet vijnë nga ju', eyebrow: 'Lentja antropologjike', h1: 'Rrethi i jetës', lead: 'Lindja, martesa dhe vdekja: tri pikat ku jeta ndalet dhe flet me fjalë të ngulitura. Gjuha e ritualit është më e moçmja që kemi, sepse fjalët e saj nuk ndryshohen. Na tregoni si bëhej te ju.', ask: 'Pyetjet', words: 'Fjalët që kërkojmë', tell: '🎙 Tregoje me zë', care: 'Për ritet e vdekjes: regjistro vetëm me pëlqimin e familjes. Arkivi i dokumenton zakonet si histori, pa i gjykuar dhe pa i lavdëruar.' },
  en: { mock: 'Mock-up · the questions are an invitation, the answers come from you', eyebrow: 'The anthropological lens', h1: 'The circle of life', lead: 'Birth, marriage and death: the three points where life stops and speaks in fixed words. Ritual language is the oldest we have, because its words are not changed. Tell us how it was done where you come from.', ask: 'Questions', words: 'Words we are looking for', tell: '🎙 Tell it aloud', care: 'For the rites of death: record only with the family\'s consent. The archive documents customs as history, without judging or glorifying them.' },
};

export default function Rrethi() {
  const { lang } = useLang();
  const t = T[lang];
  const [sel, setSel] = useState(0);
  const s = STAGES[sel];
  const L = s[lang];
  return (
    <div className="wrap" style={{ paddingTop: 28, paddingBottom: 64, maxWidth: 780 }}>
      <div className="kv-mock">{t.mock}</div>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 7vw, 50px)', margin: '4px 0 8px' }}>{t.h1}</h1>
      <p className="lead" style={{ marginTop: 0 }}>{t.lead}</p>
      <div className="rj-ring">
        {STAGES.map((x, k) => (
          <button key={x.id} className={k === sel ? 'on' : ''} onClick={() => setSel(k)}>
            <span>{x.icon}</span><b>{x[lang].name}</b>
          </button>
        ))}
      </div>
      <section className="card pad" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0, fontSize: 28 }}>{s.icon} {L.name}</h2>
        <p style={{ color: 'var(--ink-2)' }}>{L.lead}</p>
        <h3 className="rj-h">{t.ask}</h3>
        <div className="rj-qs">
          {L.q.map((q, k) => (
            <div key={k} className="rj-q">
              <p>{q}</p>
              <Link className="rj-tell" href={`/kujtesa?fjala=${encodeURIComponent(`${s.sq.name}: ${s.sq.q[k]}`)}`}>{t.tell}</Link>
            </div>
          ))}
        </div>
        <h3 className="rj-h">{t.words}</h3>
        <div className="kv-chips">
          {L.w.map((w, k) => <Link key={w} className="chip" href={`/kujtesa?fjala=${encodeURIComponent(s.sq.w[k])}`}>{w}</Link>)}
        </div>
        {s.id === 'vdekja' && <p className="kt-small" style={{ marginTop: 14 }}>{t.care}</p>}
      </section>
    </div>
  );
}
