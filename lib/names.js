// Emrat. Çdo emër ka etiketën e vet: me burim (ok) ose i paverifikuar (unv).
// Nuk shpikim kuptime: kur nuk ka burim, nuk shkruajmë kuptim.
export const NAME_CATS = {
  ilir: { sq: ['Ilirë', 'Emra njerëzish të dokumentuar në burime antike (autorë grekë e romakë, monedha, mbishkrime). Lidhja me shqipen është çështje studimi, jo e sigurt.'], en: ['Illyrian', 'Personal names documented in ancient sources (Greek and Roman authors, coins, inscriptions). Their link to Albanian is a research question, not a certainty.'] },
  veri: { sq: ['Tradicionalë të veriut', 'Emra që përdoreshin gjerësisht në Mirditë dhe në veri. Lista nuk ka ende burim të shkruar: e paverifikuar.'], en: ['Traditional northern', 'Names widely used in Mirdita and the north. The list has no written source yet: unverified.'] },
  ruajtje: { sq: ['Emra "që të mos lindin më vajza"', 'Emra që u viheshin vajzave me dëshirën që të ishte e fundit. Burimi: Qemal Murati, «Semiologjia e emrit», Telegrafi.'], en: ['"No more daughters" names', 'Names given to girls in the hope she would be the last. Source: Qemal Murati, "Semiologjia e emrit", Telegrafi.'] },
  rinj: { sq: ['Emra të rinj shqip (shek. XX)', 'Emra të krijuar kryesisht në shekullin XX, shpesh të quajtur "ilirë" në internet, por në fakt të rinj. Burimi: lista të internetit, e paverifikuar.'], en: ['New Albanian names (20th c.)', 'Names coined mostly in the 20th century, often called "Illyrian" online but in fact new. Source: internet lists, unverified.'] },
};

// [emri, gjinia m/f, kategoria, statusi ok/unv, shënim i shkurtër, shënim anglisht]
export const NAMES = [
  ['Bardhyl', 'm', 'ilir', 'ok', 'Bardylis, mbret ilir (rreth 400–358 p.e.s.), themelues i dinastisë së parë të njohur ilire.', 'Bardylis, Illyrian king (c. 400–358 BC), founder of the first known Illyrian dynasty.'],
  ['Agron', 'm', 'ilir', 'ok', 'Mbret i ardianëve (250–230 p.e.s.).', 'King of the Ardiaei (250–230 BC).'],
  ['Teuta', 'f', 'ilir', 'ok', 'Mbretëreshë e ardianëve, regjente pas Agronit (231–227 p.e.s.).', 'Queen of the Ardiaei, regent after Agron (231–227 BC).'],
  ['Genti', 'm', 'ilir', 'ok', 'Gentius, mbreti i fundit i ilirëve (181–168 p.e.s.).', 'Gentius, the last Illyrian king (181–168 BC).'],
  ['Pleurat', 'm', 'ilir', 'ok', 'Pleuratus, emër i disa mbretërve ilirë (shek. IV–II p.e.s.).', 'Pleuratus, name of several Illyrian kings (4th–2nd c. BC).'],
  ['Glaukia', 'm', 'ilir', 'ok', 'Glaukias, mbret i taulantëve (shek. IV p.e.s.).', 'Glaukias, king of the Taulantii (4th c. BC).'],
  ['Monun', 'm', 'ilir', 'ok', 'Monunius, mbret i dardanëve, i njohur nga monedhat (rreth 290–270 p.e.s.).', 'Monunius, Dardanian king known from coins (c. 290–270 BC).'],
  ['Klit', 'm', 'ilir', 'ok', 'Kleitos (Cleitus), i biri i Bardhylit, kundërshtar i Aleksandrit të Madh (335 p.e.s.).', 'Kleitos (Cleitus), son of Bardylis, opponent of Alexander the Great (335 BC).'],
  ['Skerdilajd', 'm', 'ilir', 'ok', 'Scerdilaidas, mbret ilir (218–206 p.e.s.).', 'Scerdilaidas, Illyrian king (218–206 BC).'],
  ['Pinnes', 'm', 'ilir', 'ok', 'I biri i Agronit, mbret fëmijë nën regjencën e Teutës.', 'Son of Agron, child king under Teuta\'s regency.'],
  ['Ballaios', 'm', 'ilir', 'ok', 'Mbret ilir, i njohur vetëm nga monedhat (shek. III p.e.s.).', 'Illyrian king known only from coins (3rd c. BC).'],
  ['Bato', 'm', 'ilir', 'ok', 'Emër i disa prijësve ilirë e dardanë, ndër ta i kryengritjes kundër Romës (6–9 e.s.).', 'Name of several Illyrian and Dardanian leaders, among them of the revolt against Rome (AD 6–9).'],
  ['Sirra', 'm', 'ilir', 'ok', 'Sirras, mbret ilir (fundi i shek. V p.e.s.).', 'Sirras, Illyrian king (late 5th c. BC).'],
  ['Grabo', 'm', 'ilir', 'ok', 'Grabos, mbret ilir (shek. V–IV p.e.s.).', 'Grabos, Illyrian king (5th–4th c. BC).'],
  ['Audata', 'f', 'ilir', 'ok', 'Princeshë ilire, gruaja e Filipit II të Maqedonisë.', 'Illyrian princess, wife of Philip II of Macedon.'],
  ['Birkena', 'f', 'ilir', 'ok', 'Bircenna, e bija e Bardhylit II, gruaja e Pirros së Epirit.', 'Bircenna, daughter of Bardylis II, wife of Pyrrhus of Epirus.'],
  ['Etuta', 'f', 'ilir', 'ok', 'Mbretëreshë, gruaja e Gentit (169–168 p.e.s.).', 'Queen, wife of Gentius (169–168 BC).'],
  ...['Gjon', 'Gjergj', 'Prenga', 'Pjetër', 'Mark', 'Lekë', 'Dedë', 'Ndue', 'Nikoll', 'Kol', 'Tomë', 'Zef', 'Pal', 'Mhill', 'Frrok', 'Llesh', 'Cub', 'Gjin', 'Ndrec', 'Vat'].map((n) => [n, 'm', 'veri', 'unv', '', '']),
  ...['Mrikë', 'Drane', 'Lule', 'Prenda', 'Dilë', 'Marte', 'Bardhe', 'Sose', 'Tone', 'Gjyste', 'Mrise', 'Pashke'].map((n) => [n, 'f', 'veri', 'unv', '', '']),
  ['Cubë', 'f', 'ruajtje', 'ok', 'Rugovë: me dëshirën që të "cubohet", pra të shkurtohet lindja e vajzave.', 'Rugova: in the hope that the births of girls would be "cut short".'],
  ['Mjaftime', 'f', 'ruajtje', 'ok', 'Kosovë: "të jetë mjaft".', 'Kosova: "let it be enough".'],
  ['Sose', 'f', 'ruajtje', 'ok', 'Kosovë: "të sosen", të mbarojnë.', 'Kosova: "may they end".'],
  ['Zbone', 'f', 'ruajtje', 'ok', 'Dushkajë e Dukagjinit: "të mos bëjë më vajza".', 'Dushkaja, Dukagjin: "may she have no more daughters".'],
  ['Elhame', 'f', 'ruajtje', 'ok', 'Kamenicë: falënderim se "u kryen vajzat".', 'Kamenica: thanks that "the daughters are done".'],
  ...['Adriatik', 'Afrim', 'Idlir', 'Ilir', 'Ilirian', 'Ilirjet', 'Indrit', 'Jetan', 'Jetbardh'].map((n) => [n, 'm', 'rinj', 'unv', '', '']),
  ...['Ilira', 'Iliria', 'Ilirjeta', 'Ilnaja'].map((n) => [n, 'f', 'rinj', 'unv', '', '']),
];
