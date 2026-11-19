// Shtresat e huazimeve. Çdo fjalë ka drejtimin e vet (kush i dha kujt), i cili testohet, nuk supozohet.
// Drejtimi: 'in' = hyri në shqip; 'out' = doli nga shqipja; 'both' = në të dy drejtimet / substrat i përbashkët; 'open' = i pazgjidhur.
// Prejardhja turke e fjalëve më poshtë është e njohur gjerësisht në studime; faqja e burimit (Boretzky 1975–76, Dizdari 2005) do të shtohet fjalë për fjalë.

export const LAYERS = [
  { id: 'latine', sq: 'Latinishtja', en: 'Latin', note: { sq: 'Shtresa më e madhe dhe më e vjetër e huazimeve, me fjalë edhe të trupit e të shtëpisë.', en: 'The largest and oldest loan layer, reaching even the body and the house.' }, ready: true },
  { id: 'greke', sq: 'Greqishtja', en: 'Greek', note: { sq: 'E lashtë dhe e re, në të dy drejtimet: çfarë hyri, çfarë doli, çfarë mbetet e hapur.', en: 'Ancient and modern, in both directions: what came in, what went out, what stays open.' }, ready: true },
  { id: 'sllave', sq: 'Sllavishtja', en: 'Slavic', note: { sq: 'Nga mesjeta, sidomos në veri.', en: 'From the Middle Ages, especially in the north.' }, ready: false },
  { id: 'turke', sq: 'Turqishtja', en: 'Turkish', note: { sq: 'Nga periudha osmane (shek. XV–1912).', en: 'From the Ottoman period (15th c.–1912).' }, ready: true },
  { id: 'italiane', sq: 'Italishtja dhe venedikishtja', en: 'Italian and Venetian', note: { sq: 'Bregdeti, tregtia, kisha.', en: 'The coast, trade, the Church.' }, ready: false },
];

// [shqip, turqisht, kuptimi sq, kuptimi en, nëpërmjet (P = persisht, A = arabisht, G = greqisht→arabisht), fjala vendase krah saj]
export const TURKISH = [
  { sq: 'Shtëpia', en: 'The house', words: [
    ['odë', 'oda', 'dhomë', 'room', '', '', 314],
    ['oxhak', 'ocak', 'vendi i zjarrit, tymtari', 'chimney, hearth', '', 'vatër', 314],
    ['penxhere', 'pencere', 'dritare', 'window', 'P', 'dritare', 327],
    ['çati', 'çatı', 'kulmi i shtëpisë', 'roof', '', 'kulm', 445],
    ['kat', 'kat', 'kati', 'floor, storey', '', '', 168],
    ['hajat', 'hayat', 'ballkon, oborr i mbuluar', 'veranda, covered yard', '', '', 0],
    ['bahçe', 'bahçe', 'kopsht', 'garden', 'P', 'kopsht', 0],
    ['dollap', 'dolap', 'dollap', 'cupboard', '', '', 71],
    ['qerpiç', 'kerpiç', 'tullë balte e papjekur', 'mud brick', '', '', 0],
    ['kullë', 'kule', 'kullë guri', 'stone tower-house', '', '', 0],
  ]},
  { sq: 'Gjumi dhe veshja', en: 'Sleep and clothing', words: [
    ['dyshek', 'döşek', 'dyshek', 'mattress', '', '', 0],
    ['jastëk', 'yastık', 'jastëk', 'pillow', '', '', 0],
    ['jorgan', 'yorgan', 'jorgan', 'quilt', '', '', 163],
    ['qilim', 'kilim', 'qilim', 'rug', '', '', 0],
    ['çorape', 'çorap', 'çorape', 'sock', '', '', 0],
    ['çizme', 'çizme', 'çizme', 'boot', '', '', 0],
    ['xhep', 'cep', 'xhep', 'pocket', 'A', '', 0],
  ]},
  { sq: 'Kuzhina dhe sofra', en: 'Kitchen and table', words: [
    ['kazan', 'kazan', 'kazan', 'cauldron', '', '', 0],
    ['tavë', 'tava', 'tavë', 'baking pan', '', '', 425],
    ['tepsi', 'tepsi', 'tepsi', 'tray', '', '', 0],
    ['sahan', 'sahan', 'pjatë e thellë', 'deep dish', '', '', 377],
    ['filxhan', 'fincan', 'filxhan', 'cup', 'A', '', 0],
    ['xhezve', 'cezve', 'xhezve', 'coffee pot', '', '', 0],
    ['sofër', 'sofra', 'tryezë e ulët', 'low dining table', 'A', '', 389],
    ['sheqer', 'şeker', 'sheqer', 'sugar', 'P', '', 0],
    ['qyp', 'küp', 'enë balte për ushqim', 'clay storage jar', '', '', 0],
  ]},
  { sq: 'Familja', en: 'Family', words: [
    ['dajë', 'dayı', 'vëllai i nënës', 'mother\'s brother', '', ''],
    ['hallë', 'hala', 'motra e babait', 'father\'s sister', '', ''],
    ['teze', 'teyze', 'motra e nënës', 'mother\'s sister', '', ''],
  ]},
  { sq: 'Fisi, ligji dhe armët', en: 'Tribe, law and arms', words: [
    ['bajrak', 'bayrak', 'flamur; njësi fisnore', 'banner; tribal unit', '', 'flamur', 23],
    ['bajraktar', 'bayraktar', 'prijësi i bajrakut', 'head of the bajrak', '', '', 23],
    ['kanun', 'kanun', 'ligji zakonor', 'customary law', 'G', '', 0],
    ['hak', 'hak', 'e drejtë, shpërblim', 'right, due', 'A', '', 0],
    ['çifte', 'çifte', 'pushkë dytytëshe', 'double-barrelled gun', '', '', 0],
  ]},
  { sq: 'Puna dhe tregu', en: 'Work and market', words: [
    ['çekiç', 'çekiç', 'çekiç', 'hammer', '', '', 0],
    ['kazmë', 'kazma', 'kazmë', 'pickaxe', '', '', 0],
    ['dyqan', 'dükkân', 'dyqan', 'shop', 'A', '', 0],
    ['pazar', 'pazar', 'treg', 'market', 'P', 'treg', 0],
    ['borxh', 'borç', 'borxh', 'debt', '', '', 0],
  ]},
  { sq: 'Shpirti', en: 'The heart', words: [
    ['hall', 'hal', 'hall, telash', 'trouble, plight', 'A', '', 145],
    ['dert', 'dert', 'brengë', 'sorrow', 'P', '', 64],
    ['sevda', 'sevda', 'dashuri e madhe', 'love, longing', 'A', 'dashuri', 0],
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
    ['flamur', 'φλάμουρον', 'flamur', 'flag', 107, 'Udhë me tri hapa: latinisht flammula → greqisht e Bizantit → shqip.', 'A three-step journey: Latin flammula → Byzantine Greek → Albanian.'],
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

// Shtresa latine. [shqip, latinisht, kuptimi sq, kuptimi en, faqja te Meyer, shënim sq, shënim en]
export const LATIN = {
  groups: [
    { sq: 'Trupi', en: 'The body', words: [
      ['shpinë', 'spina', 'kurriz', 'back', 414, '', ''],
      ['kofshë', 'coxa', 'kofshë', 'thigh', 193, '', ''],
      ['ijë', 'ilia', 'anë e trupit, ije', 'side, flank', 158, '', ''],
      ['plagë', 'plaga', 'plagë', 'wound', 343, 'Meyer vetë e ka dyshim: -g- latine nuk do të duhej të ruhej.', 'Meyer himself has a doubt: the Latin -g- should not have survived.'],
    ]},
    { sq: 'Shtëpia dhe vendi', en: 'The house and the land', words: [
      ['shtrat', 'stratum', 'shtrat', 'bed', 417, '', ''],
      ['tra', 'trabem', 'tra', 'beam', 433, '', ''],
      ['shkallë', 'scala', 'shkallë', 'stairs', 406, '', ''],
      ['pus', 'puteus', 'pus', 'well', 359, '', ''],
      ['fushë', 'fusum', 'fushë', 'plain, field', 115, 'Meyer e jep me pikëpyetje.', 'Meyer gives it with a question mark.'],
      ['rërë', 'arena', 'rërë', 'sand', 366, '', ''],
      ['pluhur', 'pulverem', 'pluhur', 'dust', 346, '', ''],
    ]},
    { sq: 'Ushqimi dhe pemët', en: 'Food and trees', words: [
      ['peshk', 'piscis', 'peshk', 'fish', 329, '', ''],
      ['ulli', 'oliva', 'ulli', 'olive', 457, '', ''],
      ['pemë', 'pomum', 'pemë, frut', 'tree, fruit', 326, '', ''],
    ]},
    { sq: 'Familja dhe njerëzit', en: 'Family and people', words: [
      ['nip', 'nepos', 'nip', 'grandson, nephew', 310, 'Një nga të rrallat nga emërorja latine.', 'One of the rare ones from the Latin nominative.'],
      ['fqinj', 'vicinus', 'fqinj', 'neighbour', 107, '', ''],
      ['mjek', 'medicus', 'mjek; geg. edhe ai që shëron me fjalë magjie', 'doctor; Gheg also a charm-healer', 282, '', ''],
      ['mbret', 'imperator', 'mbret', 'king', 266, '', ''],
    ]},
    { sq: 'Besimi, shkrimi, fati', en: 'Faith, writing, fate', words: [
      ['bekoj', 'benedicere', 'bekoj', 'bless', 31, '', ''],
      ['shkruaj (geg. shkruj)', 'scribere', 'shkruaj', 'write', 409, '', ''],
      ['këngë (geg. kângë)', 'canticum', 'këngë', 'song', 187, '', ''],
      ['këmishë', 'camisia', 'këmishë', 'shirt', 187, '', ''],
      ['fat', 'fatum', 'fat; geg. edhe bashkëshort', 'fate; Gheg also spouse', 100, '', ''],
      ['turp', 'turpis', 'turp', 'shame', 453, '', ''],
      ['ar', 'aurum', 'ar', 'gold', 14, '', ''],
    ]},
  ],
  open: [
    ['nder', 'honorem', 'nder', 'honour', 298, 'Meyer: nga latinishtja. Të tjerë: rrënjë vendase. GEG ka hipotezën „në derë”.', 'Meyer: from Latin. Others: a native root. GEG has the "në derë" hypothesis.', '/fjala/Q20007'],
    ['katër', 'quattuor', 'katër', 'four', 181, 'Një numër i huazuar? Meyer thotë po; shumë të tjerë e shohin si të trashëguar.', 'A borrowed number? Meyer says yes; many others see it as inherited.', ''],
    ['portë', 'porta', 'portë', 'gate', 348, 'Meyer: nga latinishtja ose nga greqishtja e re.', 'Meyer: from Latin or from modern Greek.', ''],
    ['mollë', 'melum / malum', 'mollë', 'apple', 285, 'Meyer: latinisht. Të tjerë: greqisht e lashtë (dorisht mālon) ose fjalë vendase.', 'Meyer: Latin. Others: ancient Greek (Doric mālon) or a native word.', ''],
  ],
  out: [
    ['buzë', 'buză', 'buzë', 'lip', 57],
    ['mugull', 'mugur', 'syth', 'bud', 288],
    ['gjemb', 'ghimpe', 'gjemb', 'thorn', 140],
    ['qafë', 'ceafă', 'qafë', 'neck, nape', 219],
    ['përrua', 'pârâu', 'përrua', 'stream', 335],
  ],
};
