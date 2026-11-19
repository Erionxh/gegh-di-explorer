'use client';
import { useLang } from '../../components/LangProvider';

const T = {
  sq: {
    eyebrow: 'Eksperimenti i parë · 19 nëntor 2026',
    h1: 'Pema e parë e gjuhëve',
    lead: 'Një provë e parë, e hapur për t’u kontrolluar: 57 gjuhë të gjalla dhe të vdekura, 170 kuptime bazë të fjalorit. Kompjuteri i grupon fjalët vetë sipas tingujve, pa gjykimet e ekspertëve. Pastaj e krahasojmë me pemën e ekspertëve.',
    dataTitle: 'Të dhënat',
    data: [
      'IE-CoR (Heggarty et al., Science 2023): fjalët për 170 kuptime bazë, nga gjuhë indoevropiane të gjalla dhe të vdekura. Licencë CC BY 4.0.',
      'NorthEuraLex: finlandisht, hungarisht, turqisht, gjeorgjisht dhe baskisht si grup kontrolli (gjuhë jo-indoevropiane). Licencë CC BY 4.0.',
      'Gegnishtja e Mirditës nga korpusi GEG (61 fjalë që përputhen me listën).',
    ],
    findTitle: 'Çfarë doli',
    finds: [
      ['Shqipja është një degë më vete', 'Të dyja metodat i bashkojnë gegnishten, shqipen standarde dhe arbërishten në një degë të vetme, të ndarë nga të tjerat. Kompjuteri e gjeti këtë vetë.'],
      ['Te pema e ekspertëve, shqipja ndahet herët', 'Pas hititishtes (rrënja) dhe toharishtes, ndahen greqishtja me armenishten, dhe menjëherë pas tyre shqipja, para indo-iranishtes, baltosllavishtes, keltishtes, latinishtes dhe gjermanishtes. Kjo është një provë e qartë që shqipja është një linjë e vjetër e pavarur.'],
      ['Në pemën automatike, shqipja shkon pranë latinishtes, dhe ky është mësim, jo zbulim', 'Metoda automatike i ngatërron huazimet latine me fjalë të trashëguara. Kjo tregon pikërisht pse “fshesa e pastër” ka nevojë për testin e huazimeve: ngjashmëria vetëm nuk mjafton.'],
      ['Shqipja ruan më pak fjalë bazë të përbashkëta me gjuhët e lashta', 'Nga 22 gjuhë moderne, shqipja ka përqindjen më të ulët të fjalëve bazë të përbashkëta me gjuhët e lashta (standardja 11.5%, gegnishtja 13.1%; suedishtja 21%). Kjo do të thotë se shqipja i ka ndryshuar më shumë se të tjerat fjalët e saj bazë, ose tingujt i ka shndërruar aq shumë sa lidhjet fshihen. Kjo nuk e mbështet idenë se shqipja ka mbetur më afër trungut.'],
      ['Por gegnishtja ruan më shumë se standardja', 'Gegnishtja (13.1%) ruan më shumë fjalë të përbashkëta me gjuhët e lashta se shqipja standarde (11.5%). Është një ndryshim i vogël, por shkon në drejtimin e hipotezës së GEG.'],
      ['Grupi i kontrollit tregon “zhurmën”', 'Finlandishtja, hungarishtja, turqishtja, gjeorgjishtja dhe baskishtja “ndajnë” 4–10% të fjalëve me gjuhët indoevropiane vetëm nga rastësia. Kjo është vija e zhurmës: çdo ngjashmëri nën këtë nivel nuk vlen asgjë.'],
    ],
    limitsTitle: 'Kufijtë e kësaj prove',
    limits: [
      'Është një provë e parë me metodë të thjeshtë (fqinji më i afërt), jo analiza e plotë bayesiane që përdorin studiuesit.',
      'Disa gjuhë të lashta me pak fjalë (mikenishtja, luvishtja, oskishtja, umbrishtja, galishtja) dhe gegnishtja e Mirditës nuk hynë në pemë, sepse kishin shumë pak fjalë të përbashkëta me disa gjuhë të tjera. Mirdita hyn në fazën tjetër, kur të kemi më shumë fjalë.',
      'Drejtimi i huazimit (kush i dha kujt) nuk del nga kjo metodë: kërkon ligjet tingullore dhe datat.',
    ],
    nextTitle: 'Hapi tjetër',
    next: 'Shtimi i testit të huazimeve, i fjalëve të Mirditës për të gjitha 170 kuptimet, dhe i një analize rrjeti që tregon kontaktet ndërmjet degëve.',
    expertCap: 'Pema e ekspertëve (gjykimet e IE-CoR), me hititishten si rrënjë. E kuqe = shqipja.',
    autoCap: 'Pema “e pastër” (grupim automatik i fjalëve), me baskishten si grup kontrolli. E kuqe = shqipja.',
    files: 'Skriptet dhe rezultatet',
  },
  en: {
    eyebrow: 'First experiment · 19 November 2026',
    h1: 'The first language tree',
    lead: 'A first test, open for anyone to check: 57 living and dead languages, 170 core-vocabulary meanings. The computer groups the words by sound on its own, without the experts’ judgments. Then we compare it with the experts’ tree.',
    dataTitle: 'The data',
    data: [
      'IE-CoR (Heggarty et al., Science 2023): words for 170 core meanings from living and dead Indo-European languages. CC BY 4.0.',
      'NorthEuraLex: Finnish, Hungarian, Turkish, Georgian and Basque as a control group (non-Indo-European languages). CC BY 4.0.',
      'Mirdita Gheg from the GEG corpus (61 words that match the list).',
    ],
    findTitle: 'What came out',
    finds: [
      ['Albanian is a branch of its own', 'Both methods group Gheg, Standard Albanian and Arbëresh into one single branch, separate from all others. The computer found this by itself.'],
      ['In the experts’ tree, Albanian splits off early', 'After Hittite (the root) and Tocharian, Greek and Armenian split off, and right after them Albanian, before Indo-Iranian, Balto-Slavic, Celtic, Latin and Germanic. That is clear evidence that Albanian is an old, independent line.'],
      ['In the automatic tree, Albanian lands next to Latin, and that is a lesson, not a discovery', 'The automatic method mistakes Latin loanwords for inherited words. This shows exactly why the clean slate needs the borrowing test: similarity alone is not enough.'],
      ['Albanian keeps the fewest shared core words with the ancient languages', 'Of 22 modern languages, Albanian has the lowest share of core words in common with the ancient languages (Standard 11.5%, Gheg 13.1%; Swedish 21%). Albanian has changed its core words more than the others, or transformed its sounds so much that the links are hidden. This does not support the idea that Albanian stayed closer to the trunk.'],
      ['But Gheg keeps more than Standard', 'Gheg (13.1%) keeps more words in common with the ancient languages than Standard Albanian (11.5%). It is a small difference, but it goes in the direction of GEG’s hypothesis.'],
      ['The control group shows the “noise”', 'Finnish, Hungarian, Turkish, Georgian and Basque “share” 4–10% of words with Indo-European languages by pure chance. That is the noise floor: any similarity below it means nothing.'],
    ],
    limitsTitle: 'Limits of this test',
    limits: [
      'It is a first test with a simple method (neighbour-joining), not the full Bayesian analysis scholars use.',
      'Some ancient languages with few words (Mycenaean, Luvian, Oscan, Umbrian, Gaulish) and Mirdita Gheg did not enter the tree, because they share too few attested meanings with some other languages. Mirdita joins in the next phase, when we have more words.',
      'The direction of borrowing (who gave to whom) does not come out of this method: it needs sound laws and dates.',
    ],
    nextTitle: 'Next step',
    next: 'Adding the borrowing test, Mirdita words for all 170 meanings, and a network analysis that shows contact between branches.',
    expertCap: 'The experts’ tree (IE-CoR judgments), rooted on Hittite. Red = Albanian.',
    autoCap: 'The “clean slate” tree (automatic word grouping), rooted on Basque as a control. Red = Albanian.',
    files: 'Scripts and results',
  },
};

export default function Tree() {
  const { lang } = useLang();
  const t = T[lang];
  return (
    <div className="wrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>{t.h1}</h1>
      <p className="lead">{t.lead}</p>

      <h2 className="section-title" style={{ marginTop: 40, fontSize: 28 }}>{t.findTitle}</h2>
      <div className="source-list">
        {t.finds.map(([h, p], i) => (
          <article key={h} className="card source">
            <div className="source-year">{i + 1}</div>
            <div><h3 style={{ marginBottom: 6 }}>{h}</h3><p style={{ margin: 0, color: 'var(--ink-2)' }}>{p}</p></div>
          </article>
        ))}
      </div>

      <figure className="card" style={{ margin: '32px 0 0', padding: 16 }}>
        <img src="/pema/tree_expert.png" alt={t.expertCap} style={{ width: '100%', height: 'auto' }} />
        <figcaption style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{t.expertCap}</figcaption>
      </figure>
      <figure className="card" style={{ margin: '20px 0 0', padding: 16 }}>
        <img src="/pema/tree_auto.png" alt={t.autoCap} style={{ width: '100%', height: 'auto' }} />
        <figcaption style={{ fontSize: 14, color: 'var(--muted)', marginTop: 8 }}>{t.autoCap}</figcaption>
      </figure>

      <h2 className="section-title" style={{ marginTop: 40, fontSize: 28 }}>{t.dataTitle}</h2>
      <ul style={{ paddingLeft: 20, color: 'var(--ink-2)', lineHeight: 1.8 }}>{t.data.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 className="section-title" style={{ marginTop: 28, fontSize: 28 }}>{t.limitsTitle}</h2>
      <ul style={{ paddingLeft: 20, color: 'var(--ink-2)', lineHeight: 1.8 }}>{t.limits.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 className="section-title" style={{ marginTop: 28, fontSize: 28 }}>{t.nextTitle}</h2>
      <p style={{ color: 'var(--ink-2)' }}>{t.next}</p>

      <a className="btn btn-navy" style={{ marginTop: 12 }} href="https://github.com/Erionxh/gegh-di-explorer/tree/main/research/tree-2026-11" target="_blank" rel="noopener noreferrer">{t.files} ↗</a>
    </div>
  );
}
