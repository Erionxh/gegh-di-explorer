// Kuvendi: të dhëna PROVË për mock-up-in. Asgjë këtu nuk është postim i vërtetë.
// Kuvendi: SAMPLE data for the mock-up. Nothing here is a real post.

export const FORUM_CATS = {
  hyp: { sq: 'Hipotezë', en: 'Hypothesis' },
  word: { sq: 'Fjalë', en: 'Word' },
  src: { sq: 'Burime', en: 'Sources' },
  mem: { sq: 'Kujtesa', en: 'Memory' },
  q: { sq: 'Pyetje', en: 'Question' },
};

export const FORUM_RULES = {
  sq: [
    ['Burimi ose „pa burim”', 'Çdo pretendim ka burim (libër, faqe, regjistrim). Nëse s\'ka, shënohet „pa burim” dhe mbetet pyetje.'],
    ['Argumenti, jo njeriu', 'Kundërshtohet ideja, jo personi. Pa fyerje, pa tallje me fshatin a krahinën e tjetrit.'],
    ['Zëri i fshatit vlen', 'Si e thotë gjyshja është dëshmi. Tregoni fshatin dhe brezin, jo emrin e plotë.'],
    ['Votat nuk vendosin të vërtetën', 'Votat tregojnë interesin. Statusin e temës e vendosin shqyrtuesit, me arsye të shkruar.'],
    ['Pa politikë partiake', 'Kuvendi është për gjuhën, historinë dhe kujtesën.'],
  ],
  en: [
    ['A source, or "no source"', 'Every claim has a source (book, page, recording). If not, it is marked "no source" and stays a question.'],
    ['The argument, not the person', 'Challenge the idea, not the person. No insults, no mocking someone\'s village or region.'],
    ['The village voice counts', 'How grandmother says it is evidence. Give the village and the generation, not the full name.'],
    ['Votes do not decide the truth', 'Votes show interest. A thread\'s status is set by reviewers, with written reasons.'],
    ['No party politics', 'Kuvendi is for language, history and memory.'],
  ],
};

export const THREADS = [
  {
    id: 'nder-ne-dere', cat: 'hyp', status: 'OPEN', votes: 48, ago: '2 orë / 2 h',
    author: 'Hipotezë GEG', place: '', badge: 'geg',
    title: 'A vjen nder nga „në derë”? (në derë → ën derë → n\'derë → nder)',
    body: [
      'Buzuku (1555) shkruan ënderë: shkronjë për shkronjë ën + derë. Parafjalën në e shkruan po ashtu, en / ende. Fjala është femërore te ai (ënderja), si dera.',
      'Ideja: nderi ishte fillimisht si e pret shpia mikun te dera. Imberciadori (2025) propozon rrënjën për „ballë, fytyrë”, Meyer (1891) latinishten honorem. Të treja janë të hapura.',
      'Pyetja për Kuvendin: a njihni shprehje ku nderi lidhet ende me derën, pragun ose pritjen e mikut?',
    ],
    word: ['Q20007', 'nder'], sources: ['S-buzuku-1555', 'S-imberciadori-nder-2025', 'S-meyer-1891'],
    review: { status: 'OPEN', by: 'Shqyrtues/e (gjuhëtar)', note: 'Mbetet e hapur. Duhen: (1) shprehje gojore me datë e vend, (2) krahasimi i zanores ē te ndēr me e-në te derë.' },
    comments: [
      { u: 'bariu_oroshit', place: 'Orosh', votes: 21, ago: '1 orë', t: '(Shembull) Si do të dukej një dëshmi: „Te ne thuhet ... kur e pret mirë mikun.” Do pyes plakat e fshatit dhe e regjistroj.', tag: 'pa burim',
        replies: [
          { u: 'mesuesja_rreshen', place: 'Rrëshen', votes: 9, ago: '50 min', t: 'Mirë, por regjistrojeni në Kujtesa me fshatin dhe moshën e folësit. Pa atë mbetet kujtim i yni, jo dëshmi.' },
        ] },
      { u: 'studiuese_graz', place: 'Graz', votes: 17, ago: '40 min', badge: 'reviewer', t: 'Kujdes me ë-në e Buzukut: ai e vë para çdo n + bashkëtingëllore (ënder „ndër”, ënfalle). Pra ënderë nuk e provon vetë ën + derë. Argumenti duhet të vijë nga kuptimi, jo nga shkrimi.', src: 'S-buzuku-1555' },
      { u: 'djali_i_kushnenit', place: 'Kushnen', votes: 6, ago: '12 min', t: 'Po falemnderit? Falem me nder. Bashkë me derën do të ishte „falem te dera jote”. E bukur, por e di që s\'mjafton.', tag: 'pa burim' },
    ],
  },
  {
    id: 'shuj-shuaj', cat: 'mem', status: 'OBSERVATION', votes: 31, ago: '5 orë / 5 h',
    author: 'nana_e_spaçit', place: 'Spaç',
    title: 'Shuj apo shuaj? Si e thoni zjarrin në fshatin tuaj?',
    body: ['Ne themi „me e shu\' zjarmin”. Nipi në Tiranë thotë „ta shuajmë”. Si e thoni ju? Shkruani fshatin.'],
    word: ['Q20001', 'shuj'], sources: [],
    review: { status: 'OBSERVATION', by: 'Shqyrtues/e (folës gegë)', note: 'Vëzhgim: 6 fshatra me shuj, 1 me shuaj (shkollë). Hyn në hartë pas regjistrimeve.' },
    comments: [
      { u: 'bariu_oroshit', place: 'Orosh', votes: 8, ago: '4 orë', t: 'Shuj. Edhe „me shu\' sherrin”.' },
      { u: 'gjergji_fanit', place: 'Fan', votes: 5, ago: '3 orë', t: 'Shuj, por plaku thoshte edhe „me fik”.' },
    ],
  },
  {
    id: 'meyer-cabej', cat: 'src', status: 'NEEDS_SOURCE', votes: 26, ago: '1 ditë / 1 d',
    author: 'lexuesi_i_meyerit', place: 'Shkodër',
    title: 'Meyer i quan 76 fjalë „huazime”. Çka thotë Çabej për to?',
    body: ['Në shënimet e GEG 500, Meyer (1891) del me 76 huazime kundër 32 të trashëguara. Çabej i ka kundërshtuar shumë prej tyre. Kush e ka Studime etimologjike me faqe?'],
    word: null, sources: ['S-meyer-1891', 'S-cabej-1976'],
    review: { status: 'NEEDS_SOURCE', by: 'Shqyrtues/e (gjuhëtar)', note: 'Duhen faqet e Çabejt për secilën fjalë. Pa faqe, nuk ndryshon asgjë në arkiv.' },
    comments: [
      { u: 'studiuese_graz', place: 'Graz', votes: 12, ago: '20 orë', badge: 'reviewer', t: 'E kam vëllimin II. Nis me derë, mal dhe gjuhë këtë javë.', src: 'S-cabej-1976' },
    ],
  },
  {
    id: 'formula-buzuku', cat: 'q', status: 'DISPUTED', votes: 39, ago: '3 orë / 3 h',
    author: 'Hipotezë GEG', place: '', badge: 'geg',
    title: 'Formula 1462 apo Buzuku 1555: cili e tregon më mirë gegnishten e folur?',
    body: ['Formula (Un\'te paghesont pr\'emenit…) është e shkurtër dhe tingëllon si sot. Buzuku shton zanore dhe ka shije latine. A duhet ta marrim Formulën si dëshmi më të pastër të të folurit?'],
    word: null, sources: ['S-formula-1462', 'S-buzuku-1555'],
    review: { status: 'DISPUTED', by: 'Shqyrtues/e (gjuhëtar)', note: 'Të dyja vlejnë: Formula për shkurtësinë e të folurit, Buzuku për fjalorin dhe gramatikën. Një fjali s\'mjafton për të gjykuar një gjuhë.' },
    comments: [
      { u: 'mesuesja_rreshen', place: 'Rrëshen', votes: 14, ago: '2 orë', t: 'Spertit Senit nuk është si sot. Edhe Formula ka shkrimin e vet.', src: 'S-formula-1462' },
    ],
  },
  {
    id: 'penxhere-dritare', cat: 'word', status: 'OPEN', votes: 18, ago: '2 ditë / 2 d',
    author: 'studentja_ne_rome', place: 'Romë',
    title: 'Penxhere apo dritare? Çka thuhej në shtëpinë tuaj?',
    body: ['Për shtresën turke: kur ka dy fjalë, cila thuhej në shtëpi dhe cila në shkollë?'],
    link: ['/shtresat/turke', 'Shtresa turke'], word: null, sources: ['S-boretzky-1975'],
    review: null,
    comments: [],
  },
];

export function getThread(id) {
  return THREADS.find((t) => t.id === id) || null;
}
