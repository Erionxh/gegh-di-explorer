// Shtresat e huazimeve. Çdo fjalë ka drejtimin e vet (kush i dha kujt), i cili testohet, nuk supozohet.
// Drejtimi: 'in' = hyri në shqip; 'out' = doli nga shqipja; 'both' = në të dy drejtimet / substrat i përbashkët; 'open' = i pazgjidhur.
// Prejardhja turke e fjalëve më poshtë është e njohur gjerësisht në studime; faqja e burimit (Boretzky 1975–76, Dizdari 2005) do të shtohet fjalë për fjalë.

export const LAYERS = [
  { id: 'latine', sq: 'Latinishtja', en: 'Latin', note: { sq: 'Shtresa më e madhe dhe më e vjetër e huazimeve.', en: 'The largest and oldest loan layer.' }, ready: false },
  { id: 'greke', sq: 'Greqishtja', en: 'Greek', note: { sq: 'E lashtë dhe e re, në të dy drejtimet: çfarë hyri, çfarë doli, çfarë mbetet e hapur.', en: 'Ancient and modern, in both directions: what came in, what went out, what stays open.' }, ready: true },
  { id: 'sllave', sq: 'Sllavishtja', en: 'Slavic', note: { sq: 'Nga mesjeta, sidomos në veri.', en: 'From the Middle Ages, especially in the north.' }, ready: false },
  { id: 'turke', sq: 'Turqishtja', en: 'Turkish', note: { sq: 'Nga periudha osmane (shek. XV–1912).', en: 'From the Ottoman period (15th c.–1912).' }, ready: true },
  { id: 'italiane', sq: 'Italishtja dhe venedikishtja', en: 'Italian and Venetian', note: { sq: 'Bregdeti, tregtia, kisha.', en: 'The coast, trade, the Church.' }, ready: false },
];

// [shqip, turqisht, kuptimi sq, kuptimi en, nëpërmjet (P = persisht, A = arabisht, G = greqisht→arabisht), fjala vendase krah saj]
export const TURKISH = [
  { sq: 'Shtëpia', en: 'The house', words: [
    ['odë', 'oda', 'dhomë', 'room', '', ''],
    ['oxhak', 'ocak', 'vendi i zjarrit, tymtari', 'chimney, hearth', '', 'vatër'],
    ['penxhere', 'pencere', 'dritare', 'window', 'P', 'dritare'],
    ['çati', 'çatı', 'kulmi i shtëpisë', 'roof', '', 'kulm'],
    ['kat', 'kat', 'kati', 'floor, storey', '', ''],
    ['hajat', 'hayat', 'ballkon, oborr i mbuluar', 'veranda, covered yard', '', ''],
    ['bahçe', 'bahçe', 'kopsht', 'garden', 'P', 'kopsht'],
    ['dollap', 'dolap', 'dollap', 'cupboard', '', ''],
    ['qerpiç', 'kerpiç', 'tullë balte e papjekur', 'mud brick', '', ''],
    ['kullë', 'kule', 'kullë guri', 'stone tower-house', '', ''],
  ]},
  { sq: 'Gjumi dhe veshja', en: 'Sleep and clothing', words: [
    ['dyshek', 'döşek', 'dyshek', 'mattress', '', ''],
    ['jastëk', 'yastık', 'jastëk', 'pillow', '', ''],
    ['jorgan', 'yorgan', 'jorgan', 'quilt', '', ''],
    ['qilim', 'kilim', 'qilim', 'rug', '', ''],
    ['çorape', 'çorap', 'çorape', 'sock', '', ''],
    ['çizme', 'çizme', 'çizme', 'boot', '', ''],
    ['xhep', 'cep', 'xhep', 'pocket', 'A', ''],
  ]},
  { sq: 'Kuzhina dhe sofra', en: 'Kitchen and table', words: [
    ['kazan', 'kazan', 'kazan', 'cauldron', '', ''],
    ['tavë', 'tava', 'tavë', 'baking pan', '', ''],
    ['tepsi', 'tepsi', 'tepsi', 'tray', '', ''],
    ['sahan', 'sahan', 'pjatë e thellë', 'deep dish', '', ''],
    ['filxhan', 'fincan', 'filxhan', 'cup', 'A', ''],
    ['xhezve', 'cezve', 'xhezve', 'coffee pot', '', ''],
    ['sofër', 'sofra', 'tryezë e ulët', 'low dining table', 'A', ''],
    ['sheqer', 'şeker', 'sheqer', 'sugar', 'P', ''],
    ['qyp', 'küp', 'enë balte për ushqim', 'clay storage jar', '', ''],
  ]},
  { sq: 'Familja', en: 'Family', words: [
    ['dajë', 'dayı', 'vëllai i nënës', 'mother\'s brother', '', ''],
    ['hallë', 'hala', 'motra e babait', 'father\'s sister', '', ''],
    ['teze', 'teyze', 'motra e nënës', 'mother\'s sister', '', ''],
  ]},
  { sq: 'Fisi, ligji dhe armët', en: 'Tribe, law and arms', words: [
    ['bajrak', 'bayrak', 'flamur; njësi fisnore', 'banner; tribal unit', '', 'flamur'],
    ['bajraktar', 'bayraktar', 'prijësi i bajrakut', 'head of the bajrak', '', ''],
    ['kanun', 'kanun', 'ligji zakonor', 'customary law', 'G', ''],
    ['hak', 'hak', 'e drejtë, shpërblim', 'right, due', 'A', ''],
    ['çifte', 'çifte', 'pushkë dytytëshe', 'double-barrelled gun', '', ''],
  ]},
  { sq: 'Puna dhe tregu', en: 'Work and market', words: [
    ['çekiç', 'çekiç', 'çekiç', 'hammer', '', ''],
    ['kazmë', 'kazma', 'kazmë', 'pickaxe', '', ''],
    ['dyqan', 'dükkân', 'dyqan', 'shop', 'A', ''],
    ['pazar', 'pazar', 'treg', 'market', 'P', 'treg'],
    ['borxh', 'borç', 'borxh', 'debt', '', ''],
  ]},
  { sq: 'Shpirti', en: 'The heart', words: [
    ['hall', 'hal', 'hall, telash', 'trouble, plight', 'A', ''],
    ['dert', 'dert', 'brengë', 'sorrow', 'P', ''],
    ['sevda', 'sevda', 'dashuri e madhe', 'love, longing', 'A', 'dashuri'],
  ]},
];

// Shtresa greke. Çdo fjalë ka faqen te Meyer 1891 (fjalori ynë /meyer), që të kontrollohet.
// [shqip, greqisht, kuptimi sq, kuptimi en, faqja te Meyer, shënim sq, shënim en]
export const GREEK = {
  in: [
    ['trëndafil (geg. trandafil)', 'τριαντάφυλλο', 'trëndafil', 'rose', 436, '', ''],
    ['stoli', 'στολή', 'zbukurim, veshje e mirë', 'ornament, fine dress', 393, '', ''],
    ['lip', 'λύπη', 'pikëllim, keqardhje', 'grief, pity', 246, 'Meyer pyet nëse lidhet me lyp „lyp, kërkoj”. Ndoshta jo.', 'Meyer asks whether it is linked to lyp "beg, ask for". Probably not.'],
    ['molis', 'μολεύω', 'ndot, ngjis sëmundje', 'infect, contaminate', 285, '', ''],
  ],
  out: [
    ['lule', 'λουλούδι', 'lule', 'flower', 250, 'Fjala më e njohur shqipe në greqishten e sotme.', 'The best-known Albanian word in modern Greek.'],
    ['gjon', 'γκιώνης', 'kukuvajkë e vogël', 'scops owl', 141, '', ''],
    ['zverk', 'ζβέρκος', 'zverk, pjesa e pasme e qafës', 'nape of the neck', 488, '', ''],
    ['shkop', 'σκόπι (Epir)', 'shkopi i bariut', 'shepherd\'s staff', 408, '', ''],
    ['tufë', 'τούφα (Epir)', 'tufë bari, degësh', 'tuft, bunch', 451, 'Udhë me tri hapa: latinisht tufa → shqip tufë → greqisht e Epirit.', 'A three-step journey: Latin tufa → Albanian tufë → Epirus Greek.'],
    ['goricë', 'γκορίτσα', 'dardhë e egër', 'wild pear', 127, 'Rrënja është sllave; greqishtja e mori nëpërmjet shqipes.', 'The root is Slavic; Greek took it through Albanian.'],
  ],
  open: [
    ['drapën (geg.) / drapër', 'δρέπανον', 'drapër', 'sickle', 73, 'Meyer vetëm e krahason („vgl.”), nuk thotë kush i dha kujt. Huazim i lashtë apo kushërinj nga e njëjta rrënjë?', 'Meyer only compares the two ("vgl."), without saying who gave it to whom. An ancient loan, or cousins from the same root?'],
    ['kopsht', 'κῆπος', 'kopsht', 'garden', 198, 'Meyer: kop- „mund të jetë i afërt” me greqishten. Huazim, apo fjalë motra?', 'Meyer: kop- "may be related" to the Greek. A loan, or sister words?'],
  ],
};
