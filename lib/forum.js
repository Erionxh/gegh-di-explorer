// Kuveni: të dhëna PROVË për mock-up-in. Asgjë këtu nuk është postim i vërtetë.
// Kuveni: SAMPLE data for the mock-up. Nothing here is a real post.

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
    ['Pa politikë partiake', 'Kuveni është për gjuhën, historinë dhe kujtesën.'],
    ['Shqip ose anglisht', 'Shkruhet shqip, në çdo dialekt (gegnisht, toskërisht, arbërisht, arvanitisht) ose anglisht. Një fjalë greke, serbe a turke si dëshmi lejohet në thonjëza, p.sh. „λουλούδι”.'],
    ['Pa fyerje dhe pa urrejtje', 'Fjalët e ndyra kundër njerëzve dhe gjuha e urrejtjes kundër çdo populli (grekë, serbë, kushdo) fshihen. Por mallkimet e vjetra si fjalë që studiohen janë të mirëpritura, me shenjën „fjalë në studim”.'],
  ],
  en: [
    ['A source, or "no source"', 'Every claim has a source (book, page, recording). If not, it is marked "no source" and stays a question.'],
    ['The argument, not the person', 'Challenge the idea, not the person. No insults, no mocking someone\'s village or region.'],
    ['The village voice counts', 'How grandmother says it is evidence. Give the village and the generation, not the full name.'],
    ['Votes do not decide the truth', 'Votes show interest. A thread\'s status is set by reviewers, with written reasons.'],
    ['No party politics', 'Kuveni is for language, history and memory.'],
    ['Albanian or English', 'Write in Albanian, in any dialect (Gheg, Tosk, Arbëresh, Arvanitika), or in English. A Greek, Serbian or Turkish word as evidence is allowed in quotes, e.g. "λουλούδι".'],
    ['No insults, no hate', 'Profanity aimed at people and hate speech against any people (Greeks, Serbs, anyone) is removed. But old curses as words under study are welcome, marked "word under study".'],
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
      'Pyetja për Kuvenin: a njihni shprehje ku nderi lidhet ende me derën, pragun ose pritjen e mikut?',
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

// Fjalët në Kuven: secila fjalë ka versionet e njerëzve (si e thonë, me zë) dhe debatin (pse).
// Words in the Kuven: each word has people's versions (how they say it, with audio) and the debate (why).
export const WORD_DEBATES = [
  {
    id: 'kuven', word: 'kuven', gloss: { sq: 'kuvend', en: 'council, assembly' }, noPage: true,
    ask: { sq: 'Kuven apo kuvend? Dhe nga vjen fjala: „ku + ven” apo latinishtja conventum?', en: 'Kuven or kuvend? And where does the word come from: "ku + ven" (where + place) or Latin conventum?' },
    versions: [
      { form: 'kuven', place: 'Orosh', who: 'plaku, rreth 80 vjeç', say: '„U mblodh kuveni”', audio: '0:05', same: 12 },
      { form: 'kuvend', place: 'Tiranë', who: 'mësues, rreth 50 vjeç', say: '„Kuvendi i Shqipërisë”', audio: '0:04', same: 3 },
    ],
    thread: null,
    debate: [
      { u: 'Hipotezë GEG', badge: 'geg', votes: 19, stance: { sq: 'ku + ven: „ku është vendi”', en: 'ku + ven: "where is the place"' }, t: 'Kuveni është vendi ku mblidhen e flasin: ku + ven. Si thuhet: „Sipas venit bahet kuveni.” Dhe: „Guri i rand, n\'ven t\'vet.”' },
      { u: 'lexuesi_i_meyerit', votes: 14, stance: { sq: 'Nga latinishtja', en: 'From Latin' }, t: 'Meyer (1891, f. 219) shënon kuvend, në Shkodër kuven, „bisedë, fjalë”, nga latinishtja conventum. Edhe rumanishtja ka cuvânt „fjalë” nga e njëjta rrënjë. Ven i Gegnishtes duhet krahasuar me këtë.', src: 'S-meyer-1891' },
    ],
  },
  {
    id: 'Q20007', word: 'nder', gloss: { sq: 'nderi', en: 'honour' },
    ask: { sq: 'Si e thoni nderin te ju? Në çfarë shprehjesh e përdorni?', en: 'How do you say "honour" where you are? In which phrases do you use it?' },
    versions: [
      { form: 'nder', place: 'Orosh', who: 'gjyshja, rreth 80 vjeç', say: '„Ma bani nder” (më bëri nder)', audio: '0:07', same: 14 },
      { form: 'ndêr', place: 'Kushnen', who: 'babai, rreth 60 vjeç', say: '„Nderi i shpisë”', audio: '0:05', same: 9 },
      { form: 'nder', place: 'Rrëshen', who: 'mësuese, rreth 40 vjeç', say: '„Falemnderit”, si fjalë e vetme', audio: '0:04', same: 6 },
    ],
    thread: 'nder-ne-dere',
    debate: [
      { u: 'Hipotezë GEG', badge: 'geg', votes: 22, stance: { sq: 'Mendoj se vjen nga „në derë”', en: 'I think it comes from "në derë"' }, t: 'Buzuku shkruan ënderë: ën + derë. Nderi lindi te dera, te pritja e mikut.', src: 'S-buzuku-1555' },
      { u: 'studiuese_graz', badge: 'reviewer', votes: 18, stance: { sq: 'Kundër, ose të paktën jo ende', en: 'Against, or at least not yet' }, t: 'Buzuku vë ë- para çdo n + bashkëtingëllore, pra shkrimi s\'e provon. Më bind më shumë rrënja për „fytyrë”.', src: 'S-imberciadori-nder-2025' },
      { u: 'bariu_oroshit', votes: 7, stance: { sq: 'Pyetje', en: 'Question' }, t: 'Po pse e themi „me faqe të bardhë” për nderin? A s\'është kjo lidhja me fytyrën?' },
    ],
  },
  {
    id: 'Q20001', word: 'shuj', gloss: { sq: 'shuaj (zjarrin)', en: 'put out (a fire)' },
    ask: { sq: 'Si e thoni kur shuani zjarrin? Po sherrin?', en: 'What do you say for putting out a fire? And a quarrel?' },
    versions: [
      { form: 'shuj', place: 'Spaç', who: 'gjyshja, rreth 85 vjeç', say: '„Me e shu\' zjarmin”', audio: '0:06', same: 11 },
      { form: 'shuj', place: 'Fan', who: 'bariu, rreth 70 vjeç', say: '„Shuje sherrin”', audio: '0:05', same: 5 },
      { form: 'shuaj', place: 'Tiranë', who: 'nipi, 20 vjeç', say: '„Ta shuajmë”', audio: '0:03', same: 2 },
    ],
    thread: 'shuj-shuaj',
    debate: [
      { u: 'Hipotezë GEG', badge: 'geg', votes: 15, stance: { sq: 'shh + uj', en: 'shh + uj (water)' }, t: 'Shuarja emërtohet nga tingulli (shhh) dhe nga uji.' },
      { u: 'mesuesja_rreshen', votes: 9, stance: { sq: 'Parashtesa sh-', en: 'The prefix sh-' }, t: 'Si te shkul, shkëput: sh- do të thotë „largo”. Duhet parë Buzuku.' },
    ],
  },
  {
    id: 'GC-0001', word: 'uj', gloss: { sq: 'ujë', en: 'water' },
    ask: { sq: 'Uj, ujë apo ujët? Si thuhet te ju?', en: 'Uj, ujë or ujët? How is it said where you are?' },
    versions: [
      { form: 'uj', place: 'Orosh', who: 'gjyshi, rreth 75 vjeç', say: '„Më jep pak uj”', audio: '0:04', same: 17 },
      { form: 'ujë', place: 'Lezhë', who: 'nusja, rreth 35 vjeç', say: '„Ujë i ftohtë”', audio: '0:03', same: 4 },
    ],
    thread: null,
    debate: [],
  },
];

export function getWordDebate(id) {
  return WORD_DEBATES.find((w) => w.id === id) || null;
}
