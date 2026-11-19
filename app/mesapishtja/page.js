'use client';
import Link from 'next/link';
import { useLang } from '../../components/LangProvider';

const PAIRS = [
  ['aran', 'arë', 'ara, fusha', 'field', 'Tingujt përputhen mirë. Por arë ka të afërm edhe në gjuhë të tjera indoevropiane (lat. arvum): a është lidhje e veçantë mesapo-shqiptare, apo thjesht farefisni i largët?', 'The sounds match well. But arë has relatives in other Indo-European languages too (Lat. arvum): a special Messapic–Albanian link, or just distant kinship?'],
  ['biliā', 'bijë', 'bija', 'daughter', 'Krahasimi më i përmendur. Testi: a e shpjegojnë rregullat e njohura -l- mesapike përballë -j- shqipe? Disa studiues thonë po, të tjerë kërkojnë më shumë shembuj.', 'The most cited match. Test: do known rules explain Messapic -l- against Albanian -j-? Some scholars say yes, others want more examples.'],
  ['menza-', 'mëz', 'mëz, kali i ri', 'foal', 'Fjalë e rrallë dhe e veçantë, prandaj e vlefshme: fjalët e zakonshme mund të përputhen rastësisht, të rrallat më pak.', 'A rare and specific word, which makes it valuable: common words can match by chance, rare ones less so.'],
];

const T = {
  sq: {
    back: '← Shtresat e huazimeve', eyebrow: 'Lentja 2 · Gjuhë të afërta · Hulumtim i hapur', h1: 'Mesapishtja',
    lead: 'Mesapishtja u fol në Puja të Italisë së Jugut dhe dëshmohet në mbishkrime nga shek. VI deri në II p.e.s., me një alfabet të marrë nga greqishtja. Shumë studiues mendojnë se folësit e saj erdhën nga Ballkani. Pyetja për GEG: sa e afërt ishte me paraardhësen e shqipes?',
    pos: 'Tri qëndrimet',
    p: [
      ['Afëri e ngushtë', 'Disa studiues (p.sh. Eric Hamp) i grupojnë mesapishten, ilirishten dhe shqipen bashkë, në një degë „adriatike”. Kujtim Mani (2024) i lexon mbishkrimet mortore mesapike me ndihmën e shqipes.'],
      ['Kontakt, jo prejardhje', 'Të tjerë mendojnë se ngjashmëritë vijnë nga fqinjësia në Ballkan në parahistori, jo nga një gjuhë-mëmë e përbashkët.'],
      ['Ende pa provë', 'Shumica e mbishkrimeve janë emra njerëzish e hyjnish, jo fjali. Me kaq pak material, çdo krahasim mbetet i brishtë. Joachim Matzinger, studiuesi kryesor i mesapishtes, i shqyrton këto lidhje me kujdes.'],
    ],
    pairsH: 'Fjalët e propozuara, secila si hipotezë', mess: 'mesap.', test: 'Testi',
    open: 'E hapur', note: 'Lista do të rritet vetëm me fjalë që kanë burim me faqe. Krahasime nga autorë si Petro Zheji do të shtohen kur të kemi faqen, dhe do të testohen njësoj si të tjerat.',
    srcH: 'Burimet', map: 'Shih në hartë: Daunët e Pujës dhe ADN-ja e tyre →',
  },
  en: {
    back: '← The loan layers', eyebrow: 'Lens 2 · Related languages · Open research', h1: 'Messapic',
    lead: 'Messapic was spoken in Apulia in southern Italy and is attested in inscriptions from the 6th to the 2nd century BCE, in an alphabet taken from Greek. Many scholars think its speakers came from the Balkans. The question for GEG: how close was it to the ancestor of Albanian?',
    pos: 'Three positions',
    p: [
      ['Close kinship', 'Some scholars (e.g. Eric Hamp) group Messapic, Illyrian and Albanian together in an "Adriatic" branch. Kujtim Mani (2024) reads Messapic funerary inscriptions with the help of Albanian.'],
      ['Contact, not descent', 'Others think the likenesses come from being neighbours in the prehistoric Balkans, not from a shared parent language.'],
      ['Not proven yet', 'Most inscriptions are names of people and gods, not sentences. With so little material, every comparison stays fragile. Joachim Matzinger, the leading scholar of Messapic, weighs these links carefully.'],
    ],
    pairsH: 'The proposed words, each as a hypothesis', mess: 'Mess.', test: 'Test',
    open: 'Open', note: 'The list will grow only with words that have a source with a page. Comparisons by authors such as Petro Zheji will be added once we have the page, and tested like all the others.',
    srcH: 'Sources', map: 'See on the map: the Daunians of Apulia and their DNA →',
  },
};

const SRC = [
  ['Joachim Matzinger, Messapisch und Albanisch (2005); Messapico e illirico (2015)', 'https://dx.doi.org/10.1285%2Fi20380313v19p57'],
  ['Kujtim Mani, Respectus Philologicus (2024), CC BY', 'https://www.journals.vu.lt/respectus-philologicus/article/view/33707/33421'],
  ['Michele Bianconi et al., The vowel system of Messapic (2025), CC BY', 'https://ora.ox.ac.uk/objects/uuid:e57a895f-0ac8-4474-a4a4-344330f243b2/files/s6m311r45t'],
  ['Aneli et al., The Genetic Origin of Daunians (2022)', 'https://academic.oup.com/mbe/article-pdf/39/2/msac014/42437051/msac014.pdf'],
];

export default function Messapic() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap lens-page" style={{ paddingTop: 48, paddingBottom: 64 }}>
      <Link href="/shtresat" style={{ fontSize: 14 }}>{t.back}</Link>
      <p className="eyebrow" style={{ marginTop: 18 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(34px, 5vw, 50px)' }}>{t.h1}</h1>
      <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0 }}>{t.lead}</p>
      <section className="lens-sec">
        <h2>{t.pos}</h2>
        <div className="layer-list">
          {t.p.map(([h, x]) => <div key={h} className="layer-row"><div className="layer-main"><strong>{h}</strong><span className="layer-m">{x}</span></div></div>)}
        </div>
      </section>
      <section className="lens-sec">
        <h2>{t.pairsH}</h2>
        <div className="layer-list">
          {PAIRS.map(([ms, sq, msq, men, tsq, ten]) => (
            <div key={ms} className="layer-row">
              <div className="layer-main">
                <strong>{sq}</strong>
                <span className="layer-tr">↔ {t.mess} {ms}</span>
                <span className="layer-m">{lang === 'en' ? men : msq}</span>
                <span className="layer-native"><b>{t.test}:</b> {lang === 'en' ? ten : tsq}</span>
              </div>
              <span className="pill pill-open">{t.open}</span>
            </div>
          ))}
        </div>
        <p className="draft-note">{t.note}</p>
      </section>
      <p><Link href="/harta">{t.map}</Link></p>
      <section className="lens-sec">
        <h2>{t.srcH}</h2>
        <ul>{SRC.map(([l, u]) => <li key={u}><a href={u} target="_blank" rel="noopener noreferrer">{l} ↗</a></li>)}</ul>
      </section>
    </div>
  );
}
