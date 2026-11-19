// Shtresat e huazimeve. Çdo fjalë ka drejtimin e vet (kush i dha kujt), i cili testohet, nuk supozohet.
// Drejtimi: 'in' = hyri në shqip; 'out' = doli nga shqipja; 'both' = në të dy drejtimet / substrat i përbashkët; 'open' = i pazgjidhur.
// Prejardhja turke e fjalëve më poshtë është e njohur gjerësisht në studime; faqja e burimit (Boretzky 1975–76, Dizdari 2005) do të shtohet fjalë për fjalë.

export const LAYERS = [
  { id: 'latine', sq: 'Latinishtja', en: 'Latin', note: { sq: 'Shtresa më e madhe dhe më e vjetër e huazimeve.', en: 'The largest and oldest loan layer.' }, ready: false },
  { id: 'greke', sq: 'Greqishtja', en: 'Greek', note: { sq: 'E lashtë dhe e re, në të dy drejtimet. Do të ndërtohet me burime për çdo drejtim.', en: 'Ancient and modern, in both directions. To be built with sources for each direction.' }, ready: false },
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
