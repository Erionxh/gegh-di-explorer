// Rrahje mendimesh: pyetjet e mëdha, me qëndrimet, kundërshtimet dhe provën që do t'i zgjidhte.
// Statusi vendoset në Pleqni (nga shqyrtuesit, me arsye), jo nga votat.
export const RR_STATUS = {
  open: { sq: 'E hapur', en: 'Open' },
  leaning: { sq: 'Anon nga një anë', en: 'Leaning one way' },
  closed: { sq: 'E mbyllur', en: 'Closed' },
};

export const RRAHJE = [
  {
    id: 'nder',
    q: { sq: 'Nga vjen fjala nder?', en: 'Where does the word nder (honour) come from?' },
    why: { sq: 'Buzuku (1555) shkruan ëndēr, ënderë, ënderja. Kjo hapi pyetjen nëse nderi ka lindur „në derë”.', en: 'Buzuku (1555) writes ëndēr, ënderë, ënderja. This opened the question whether honour was born "at the door".' },
    word: 'Q20007',
    status: 'open',
    pleqnia: { sq: 'E hapur. Asnjë qëndrim nuk ka ende provë vendimtare. Shkrimi i Buzukut nuk e provon „në derë”, por as nuk e përjashton.', en: 'Open. No position has decisive evidence yet. Buzuku\'s spelling does not prove "në derë", but does not rule it out either.' },
    positions: [
      { id: 'A', who: 'Hipotezë GEG', badge: 'geg',
        claim: { sq: 'Nga „në derë”: në derë → nëderë → ënderë → ënder → nder.', en: 'From "në derë" (at the door): në derë → nëderë → ënderë → ënder → nder.' },
        why: { sq: 'Nderi te malësorët lidhet me derën: si pritet miku, „dera e hapur”. Buzuku e shkruan me ë- përpara dhe me -ë në fund, si derë.', en: 'For the highlanders honour is tied to the door: how the guest is received, "the open door". Buzuku writes it with ë- in front and -ë at the end, like derë.' },
        src: 'S-buzuku-1555' },
      { id: 'B', who: 'Imberciadori (2025)',
        claim: { sq: 'Nga një rrënjë e vjetër indoevropiane për „ballë, fytyrë” (*h₂ent-).', en: 'From an old Indo-European root for "forehead, face" (*h₂ent-).' },
        why: { sq: 'Nderi është „fytyra”: themi „me faqe të bardhë”, „i doli faqja e zezë”.', en: 'Honour is "the face": we say "me faqe të bardhë" (with a white face), "his face came out black".' },
        src: 'S-imberciadori-nder-2025' },
      { id: 'C', who: 'Meyer (1891)',
        claim: { sq: 'Nga latinishtja honorem.', en: 'From Latin honorem.' },
        why: { sq: 'Shumë fjalë të jetës shoqërore hynë nga latinishtja. Meyer e shënon te faqja 298.', en: 'Many words of social life came in from Latin. Meyer lists it on page 298.' },
        src: 'S-meyer-1891' },
    ],
    exchange: [
      { to: 'A', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Buzuku vë ë- para çdo n + bashkëtingëllore: ënde „në”, ënfalle. Pra ë- te ënder mund të jetë thjesht mënyra si e shkruan n\' e gegnishtes.', en: 'Buzuku puts ë- before every n + consonant: ënde "in", ënfalle. So the ë- in ënder may just be how he writes the Gheg n\'.' } },
      { to: 'A', kind: 'rep', who: 'Hipotezë GEG', t: { sq: 'E pranojmë: shkrimi vetëm nuk e provon. Por kuptimi përputhet: „ma bani nder” është si të prit te dera. Duhet parë nëse ka shprehje të vjetra ku nderi dhe dera dalin bashkë.', en: 'Agreed: the spelling alone does not prove it. But the meaning fits: "ma bani nder" is how you are received at the door. We need to see whether old phrases bring honour and door together.' } },
      { to: 'B', kind: 'obj', who: 'Hipotezë GEG', t: { sq: 'Pse atëherë gegnishtja s\'ka asnjë fjalë tjetër nga kjo rrënjë për ballin?', en: 'Then why does Gheg have no other word from this root for the forehead?' } },
      { to: 'B', kind: 'rep', who: 'Shqyrtues', t: { sq: 'Fjalët e vjetra shpesh mbeten vetëm në një kuptim të figurshëm. Por kjo duhet treguar me shembuj, jo vetëm me rrënjë.', en: 'Old words often survive only in a figurative sense. But this has to be shown with examples, not only with a root.' } },
      { to: 'C', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Si humbi h- dhe zanorja e parë, dhe nga erdhi d? Meyer nuk e shpjegon hap pas hapi.', en: 'How were h- and the first vowel lost, and where did the d come from? Meyer does not explain it step by step.' } },
    ],
    test: { sq: [
      'Të mblidhen të gjitha format e nderit te Buzuku (TITUS), me fjalinë përreth.',
      'Të krahasohen me Formulën e pagëzimit (1462), Budin, Bardhin dhe Bogdanin.',
      'Të regjistrohen në Mirditë shprehje të vjetra ku nderi dhe dera dalin bashkë.',
    ], en: [
      'Collect every form of nder in Buzuku (TITUS), with the sentence around it.',
      'Compare with the Baptismal Formula (1462), Budi, Bardhi and Bogdani.',
      'Record old Mirdita phrases where honour and the door appear together.',
    ] },
  },
  {
    id: 'kuven',
    q: { sq: 'Kuven: „ku + ven” apo latinishtja conventum?', en: 'Kuven: "ku + ven" (where + place) or Latin conventum?' },
    why: { sq: 'Në Mirditë thuhet „Sipas venit bahet kuveni.” Fjala tingëllon si „ku është vendi”.', en: 'In Mirdita they say "Sipas venit bahet kuveni" (the council is held according to the place). The word sounds like "where the place is".' },
    word: null,
    status: 'open',
    pleqnia: { sq: 'E hapur. Shpjegimi latin ka mbështetje te rumanishtja; leximi „ku + ven” tregon si e dëgjon populli fjalën, dhe kjo vlen vetë.', en: 'Open. The Latin explanation has support from Romanian; the "ku + ven" reading shows how people hear the word, and that has value in itself.' },
    positions: [
      { id: 'A', who: 'Hipotezë GEG', badge: 'geg',
        claim: { sq: 'ku + ven: vendi ku mblidhen e flasin.', en: 'ku + ven: the place where people gather and talk.' },
        why: { sq: '„Sipas venit bahet kuveni.” „Guri i rand, n\'ven t\'vet.” Kuveni lidhet gjithmonë me vendin.', en: '"Sipas venit bahet kuveni." "Guri i rand, n\'ven t\'vet" (the heavy stone stays in its place). The council is always tied to the place.' } },
      { id: 'B', who: 'Meyer (1891)',
        claim: { sq: 'Nga latinishtja conventum.', en: 'From Latin conventum.' },
        why: { sq: 'Meyer (f. 219) jep kuvend, në Shkodër kuven, „bisedë, fjalë”. Rumanishtja ka cuvânt „fjalë” nga e njëjta fjalë latine.', en: 'Meyer (p. 219) gives kuvend, in Shkodër kuven, "conversation, word". Romanian has cuvânt "word" from the same Latin word.' },
        src: 'S-meyer-1891' },
    ],
    exchange: [
      { to: 'A', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Gegnishtja e bën nd në n edhe te vend → ven. Pra kuven mund të jetë thjesht kuvend në gegnisht, pa „ku”.', en: 'Gheg turns nd into n in vend → ven too. So kuven may simply be kuvend in Gheg, with no "ku".' } },
      { to: 'A', kind: 'rep', who: 'Hipotezë GEG', t: { sq: 'Mund të jetë. Por pse populli e lidh kaq fort me vendin? Ndoshta fjala e huaj u „shqiptarizua” sipas kuptimit.', en: 'Possibly. But why do people tie it so strongly to the place? Maybe the foreign word was reshaped to fit a meaning they heard in it.' } },
    ],
    test: { sq: [
      'A e ka Buzuku fjalën kuvend? Në çfarë kuptimi?',
      'Të mblidhen shprehjet me kuven nga pleqtë e Mirditës.',
    ], en: [
      'Does Buzuku have the word kuvend? In what sense?',
      'Collect the sayings with kuven from Mirdita elders.',
    ] },
  },
  {
    id: 'buzuku-e',
    q: { sq: 'Pse Buzuku shkruan ë- para n: ënder, ënde, ënfalle?', en: 'Why does Buzuku write ë- before n: ënder, ënde, ënfalle?' },
    why: { sq: 'Sot themi nder, n\', nfalë. Buzuku në 1555 i shkruan me një zanore përpara.', en: 'Today we say nder, n\', nfalë. Buzuku in 1555 writes them with a vowel in front.' },
    word: null,
    status: 'open',
    pleqnia: { sq: 'E hapur. Duhen numëruar format te Buzuku dhe krahasuar me tekstet e tjera të vjetra.', en: 'Open. The forms in Buzuku need counting and comparing with the other old texts.' },
    positions: [
      { id: 'A', who: 'Shpjegimi i zakonshëm',
        claim: { sq: 'Është mënyrë shkrimi: kështu shënohet n\' e gegnishtes.', en: 'It is a spelling habit: this is how the Gheg n\' is written.' },
        why: { sq: 'Një n që qëndron vetë para bashkëtingëllores është e vështirë të shkruhet me alfabetin latin.', en: 'An n standing alone before a consonant is hard to write in the Latin alphabet.' } },
      { id: 'B', who: 'Hipotezë GEG', badge: 'geg',
        claim: { sq: 'Buzuku shkruan atë që dëgjon: kur ndalon, para n del një ë e lehtë.', en: 'Buzuku writes what he hears: when you pause, a light ë comes out before the n.' },
        why: { sq: 'Edhe sot, kur flet ngadalë ose fillon fjalinë, dëgjohet „ënder”.', en: 'Even today, when you speak slowly or start a sentence, you can hear "ënder".' } },
    ],
    exchange: [
      { to: 'B', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Formula e pagëzimit (1462) shkruan shkurt: Un, pr\'emenit. Pra jo të gjithë e shkruanin zanoren.', en: 'The Baptismal Formula (1462) writes short: Un, pr\'emenit. So not everyone wrote the vowel.' } },
      { to: 'B', kind: 'rep', who: 'Hipotezë GEG', t: { sq: 'Pikërisht: Formula është gegnishte më e „pastër”. Ndoshta Buzuku shkruante më ngadalë, si lexohet në kishë.', en: 'Exactly: the Formula is "purer" Gheg. Maybe Buzuku wrote more slowly, the way things are read aloud in church.' } },
    ],
    test: { sq: [
      'Të numërohen te Buzuku të gjitha fjalët me ë-/e- para n + bashkëtingëllore.',
      'Të shihet a ndryshon kjo në fillim të fjalisë dhe në mes.',
    ], en: [
      'Count every word in Buzuku with ë-/e- before n + consonant.',
      'See whether this changes at the start of a sentence versus the middle.',
    ] },
  },
  {
    id: 'kanun',
    q: { sq: 'Kanun: nga greqishtja kanōn apo „K\'ha un”?', en: 'Kanun: from Greek kanōn or "K\'ha un"?' },
    why: { sq: 'Kanuni është themeli i shoqërisë së Mirditës. Nga vjen vetë fjala?', en: 'The Kanun is the foundation of Mirdita society. Where does the word itself come from?' },
    word: null,
    status: 'leaning',
    pleqnia: { sq: 'Anon nga greqishtja: e njëjta fjalë, me të njëjtin kuptim „ligj, rregull”, gjendet në greqisht, turqisht dhe arabisht. Por „K\'ha un” mbetet një mënyrë e fortë si e kupton Mirdita Kanunin: çdo burrë mbret në shpinë e vet.', en: 'Leaning toward Greek: the same word, with the same meaning "law, rule", is found in Greek, Turkish and Arabic. But "K\'ha un" remains a strong way Mirdita understands the Kanun: every man a king in his own house.' },
    positions: [
      { id: 'A', who: 'Hipotezë GEG', badge: 'geg',
        claim: { sq: 'K\'ha un: „nga brenda meje”.', en: 'K\'ha un: "from within me".' },
        why: { sq: 'Ideja themelore e Mirditës: secili është mbret në shpinë të vet. Ligji nuk vjen nga jashtë, vjen nga vetja. Prandaj K\'ha un = Kanun.', en: 'The founding idea of Mirdita: everyone is king in his own house. The law does not come from outside, it comes from within. Hence K\'ha un = Kanun.' } },
      { id: 'B', who: 'Shpjegimi i zakonshëm',
        claim: { sq: 'Nga greqishtja kanōn „rregull, masë”, ndoshta përmes turqishtes kanun.', en: 'From Greek kanōn "rule, measuring rod", perhaps through Turkish kanun.' },
        why: { sq: 'Kisha e quante ligjin e vet „kanon”; Perandoria Osmane i quante ligjet „kanun”. Fjala ka të njëjtën formë dhe kuptim në gjithë rajonin.', en: 'The Church called its law "canon"; the Ottoman Empire called its laws "kanun". The word has the same form and meaning across the whole region.' } },
    ],
    exchange: [
      { to: 'A', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Nëse fjala lindi në Mirditë, pse turqit, grekët dhe arabët kanë pikërisht të njëjtën fjalë për „ligj”?', en: 'If the word was born in Mirdita, why do Turks, Greeks and Arabs have exactly the same word for "law"?' } },
      { to: 'A', kind: 'rep', who: 'Hipotezë GEG', t: { sq: 'Fjala mund të ketë ardhur nga jashtë, por Mirdita e dëgjoi si „K\'ha un” dhe e mbajti sepse i përshtatej. Kjo tregon diçka për shoqërinë, edhe nëse nuk është etimologjia.', en: 'The word may have come from outside, but Mirdita heard it as "K\'ha un" and kept it because it fit. That says something about the society, even if it is not the etymology.' } },
    ],
    test: { sq: [
      'Kur shfaqet fjala kanun për herë të parë në shqip, dhe në çfarë kuptimi?',
      'A e thonë pleqtë e Mirditës „K\'ha un”? Të regjistrohen shprehjet.',
    ], en: [
      'When does the word kanun first appear in Albanian, and in what sense?',
      'Do Mirdita elders say "K\'ha un"? Record the sayings.',
    ] },
  },
  {
    id: 'mirdita-turqisht',
    q: { sq: 'A ka Mirdita më pak fjalë turke se krahinat e tjera?', en: 'Does Mirdita have fewer Turkish words than other regions?' },
    why: { sq: 'Mirdita ruajti shumë vetëqeverisje nën osmanët: katolike, me Kanunin dhe bajrakët e vet, me pak nëpunës osmanë. A u duk kjo edhe te gjuha?', en: 'Mirdita kept a great deal of self-rule under the Ottomans: Catholic, with its own Kanun and bajraks, and few Ottoman officials. Did this show in the language too?' },
    word: null,
    status: 'open',
    pleqnia: { sq: 'E hapur. Nuk ka ende numërim. Prova është e thjeshtë: të njëjtat fjalë, të regjistruara në disa krahina, dhe të numërohen ato me prejardhje turke.', en: 'Open. There is no count yet. The test is simple: the same words, recorded in several regions, and count those of Turkish origin.' },
    positions: [
      { id: 'A', who: 'Hipotezë GEG', badge: 'geg',
        claim: { sq: 'Po: Mirdita ka nga më pak fjalë turke.', en: 'Yes: Mirdita has among the fewest Turkish words.' },
        why: { sq: 'Ku nuk kishte nëpunës, xhami dhe pazar osman, gjuha e përditshme mori më pak prej tyre. Kanuni dhe kuvendi i pleqve e rregullonin jetën vetë.', en: 'Where there were no Ottoman officials, mosques or bazaars, everyday speech took less from them. The Kanun and the elders\' council ran life themselves.' } },
      { id: 'B', who: 'Kundërpikëpamje',
        claim: { sq: 'Jo domosdoshmërisht: fjalët turke hynë kudo.', en: 'Not necessarily: Turkish words got in everywhere.' },
        why: { sq: 'Edhe vetë fjalët bajrak dhe kanun erdhën përmes turqishtes. Tregtia, ushtria dhe administrata i çuan fjalët turke edhe te malësorët katolikë.', en: 'Even the words bajrak and kanun came through Turkish. Trade, the army and the administration carried Turkish words to the Catholic highlanders too.' } },
    ],
    exchange: [
      { to: 'A', kind: 'obj', who: 'Shqyrtues', t: { sq: 'Vetëqeverisja nuk do të thotë izolim. Mirditorët shkonin në pazaret e Shkodrës dhe të Prizrenit dhe shërbenin në ushtri.', en: 'Self-rule does not mean isolation. Mirdita people went to the markets of Shkodër and Prizren and served in the army.' } },
      { to: 'A', kind: 'rep', who: 'Hipotezë GEG', t: { sq: 'E vërtetë, por fjalët e pazarit janë një gjë, fjalët e shtëpisë një tjetër. Duhet parë sa fjalë turke ka te shtëpia, familja dhe bagëtia.', en: 'True, but market words are one thing and household words another. We need to see how many Turkish words there are for the house, the family and the livestock.' } },
    ],
    test: { sq: [
      'Të regjistrohen 500 fjalët e GEG 500 në Mirditë dhe në 2–3 krahina të tjera (p.sh. Shkodër, Dibër, Malësi e Madhe).',
      'Të shënohen fjalët me prejardhje turke dhe të numërohen sipas fushës: shtëpia, familja, bagëtia, pazari, ligji.',
    ], en: [
      'Record the 500 GEG 500 words in Mirdita and in 2–3 other regions (e.g. Shkodër, Dibër, Malësia e Madhe).',
      'Mark the words of Turkish origin and count them by field: house, family, livestock, market, law.',
    ] },
  },
];

export const getRrahje = (id) => RRAHJE.find((x) => x.id === id) || null;
