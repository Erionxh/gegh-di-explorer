'use client';
import Link from 'next/link';
import { useLang } from '../../../components/LangProvider';
import { TURKISH } from '../../../lib/layers';

const VIA = { P: { sq: 'nga persishtja', en: 'from Persian' }, A: { sq: 'nga arabishtja', en: 'from Arabic' }, G: { sq: 'nga greqishtja, nëpërmjet arabishtes', en: 'from Greek, via Arabic' } };
const T = {
  sq: {
    back: '← Shtresat e huazimeve', eyebrow: 'Shtresa 4 · Hulumtim i hapur', h1: 'Shtresa turke',
    lead: 'Pesë shekuj nën osmanët lanë fjalë në çdo shtëpi: në kuzhinë, në shtrat, në familje, në treg. Disa nga këto fjalë nuk janë as turke në rrënjë: turqishtja i kishte marrë vetë nga persishtja ose arabishtja dhe na i dha më tej.',
    dirNote: 'Drejtimi për këto fjalë: hyrë në shqip. Turqishtja ka familjen e fjalës dhe dëshmitë më të hershme. Fjalë shqipe kanë hyrë edhe në turqishten e Ballkanit, por janë pak dhe do të shënohen veç.',
    srcNote: 'Prejardhja turke e këtyre fjalëve është e njohur në studime. Burimi me faqe për secilën (Boretzky 1975–76, Dizdari 2005) do të shtohet, sipas rregullit GOLD-INV-03.',
    qTitle: 'Pyetjet e hapura',
    q: [
      'Cilat nga këto i thoni ende? Cilat i thoshte gjyshja, por ju jo më?',
      'Kur ka dy fjalë (penxhere dhe dritare, bahçe dhe kopsht), cila thuhej në shtëpi, dhe cila në shkollë?',
      'Mirdita, katolike dhe me një status të veçantë autonomie nën osmanët, a ka ruajtur më pak fjalë turke se krahinat përreth? Kjo është pyetje, jo përfundim.',
      'A keni fjalë të vjetra shqipe për gjëra që sot i quajmë me emër turk?',
    ],
    cols: ['Shqip', 'Turqisht', 'Kuptimi', 'Fjala vendase'],
    say: 'Si e thoni?',
  },
  en: {
    back: '← The loan layers', eyebrow: 'Layer 4 · Open research', h1: 'The Turkish layer',
    lead: 'Five centuries under the Ottomans left words in every house: in the kitchen, in the bed, in the family, at the market. Some of these words are not even Turkish at the root: Turkish had taken them from Persian or Arabic and passed them on.',
    dirNote: 'Direction for these words: into Albanian. Turkish has the word family and the earliest records. Albanian words also entered Balkan Turkish, but they are few and will be listed separately.',
    srcNote: 'The Turkish origin of these words is well known in the literature. The source with page for each (Boretzky 1975–76, Dizdari 2005) will be added, under rule GOLD-INV-03.',
    qTitle: 'The open questions',
    q: [
      'Which of these do you still say? Which did your grandmother say, but you no longer do?',
      'Where there are two words (penxhere and dritare, bahçe and kopsht), which one was said at home, and which at school?',
      'Did Mirdita, Catholic and with a special autonomous status under the Ottomans, keep fewer Turkish words than the regions around it? This is a question, not a conclusion.',
      'Do you know old Albanian words for things we now call by a Turkish name?',
    ],
    cols: ['Albanian', 'Turkish', 'Meaning', 'Native word'],
    say: 'How do you say it?',
  },
};

export default function TurkishLayer() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/shtresat" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <p className="draft-note"><span className="dir dir-in" style={{ marginRight: 8 }}>→ shqip</span>{t.dirNote}</p>

      <section className="card pad lens-example">
        <h2>{t.qTitle}</h2>
        <ol>{t.q.map((x) => <li key={x}>{x}</li>)}</ol>
      </section>

      {TURKISH.map((g) => (
        <section key={g.sq} className="lens-sec">
          <h2>{lang === 'en' ? g.en : g.sq}</h2>
          <div className="layer-list">
            {g.words.map(([sq, tr, msq, men, via, native]) => (
              <div key={sq} className="layer-row">
                <div className="layer-main">
                  <strong>{sq}</strong>
                  <span className="layer-tr">← {tr}{via ? ` (${VIA[via][lang]})` : ''}</span>
                  <span className="layer-m">{lang === 'en' ? men : msq}</span>
                  {native && <span className="layer-native">{lang === 'en' ? 'native rival' : 'fjala vendase'}: <b>{native}</b></span>}
                </div>
                <Link href={`/kujtesa?fjala=${encodeURIComponent(sq)}`} className="layer-say">{t.say}</Link>
              </div>
            ))}
          </div>
        </section>
      ))}
      <p style={{ fontSize: 14, color: 'var(--muted)' }}>{t.srcNote}</p>
    </div>
  );
}
