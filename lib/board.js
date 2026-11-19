// Bordi i nëntë: një faqe për çdo ulëse. Vendet janë të hapura.
// The board of nine: one page per seat. The seats are open.

export const CONTACT = 'erion.xhaferraj@gmail.com';

export const SEATS = [
  {
    sq: { name: 'Gjuhësi historike', lens: 'Lentet 1 dhe 2', does: ['Shqyrton etimologjitë dhe hipotezat e fjalëve, si „nder” apo „kuven”.', 'Kontrollon shënimet e Meyer-it dhe shtresat e huazimeve (latine, greke, turke): a qëndron drejtimi?', 'Vendos kur një hipotezë kalon nga „e hapur” në „e mbështetur” ose „e rrëzuar”, me arsye të shkruar.'], not: 'Nuk gjykon ADN-në apo arkeologjinë. Nuk vendos çfarë është gegnisht e „mirë”.', fits: 'Gjuhëtar ose doktorant në gjuhësi historike indoevropiane ose albanologji. Leximi i gjermanishtes dhe latinishtes ndihmon shumë.' },
    en: { name: 'Historical linguistics', lens: 'Lenses 1 and 2', does: ['Reviews the etymologies and word hypotheses, such as "nder" or "kuven".', "Checks Meyer's notes and the loan layers (Latin, Greek, Turkish): does the direction hold?", 'Decides when a hypothesis moves from "open" to "supported" or "refuted", with written reasons.'], not: 'Does not judge DNA or archaeology. Does not decide what "good" Gheg is.', fits: 'A linguist or doctoral student in Indo-European historical linguistics or Albanology. Reading German and Latin helps a lot.' },
  },
  {
    sq: { name: 'Dialektologji gege', lens: 'Lentet 1 dhe 3', does: ['Dëgjon regjistrimet e Kujtesës dhe kontrollon shkrimin e tyre.', 'Vendos krahinën dhe të folmen e çdo fjale në hartë.', 'Shqyrton listën e fjalëve të ndyra dhe mallkimeve: e vërtetë apo e shpikur, nga cila krahinë.'], not: 'Nuk e gjykon një të folme si më të mirë se tjetra. Nuk korrigjon folësit: i dëgjon.', fits: 'Dialektolog, mësues i gjuhës ose studiues nga trevat gege, me vesh për dallimet mes fshatrave.' },
    en: { name: 'Gheg dialectology', lens: 'Lenses 1 and 3', does: ['Listens to the Kujtesa recordings and checks how they are written down.', 'Places each word on the map by region and local speech.', 'Reviews the list of profanity and curses: real or invented, from which region.'], not: 'Does not rank one local speech above another. Does not correct speakers: listens to them.', fits: 'A dialectologist, language teacher or researcher from the Gheg lands, with an ear for differences between villages.' },
  },
  {
    sq: { name: 'Arkeologji', lens: 'Lentja 5', does: ['Kontrollon shtresat e arkeologjisë dhe të artit shkëmbor në hartë: data, vend, burim.', 'Ndan zbulimet e botuara nga njoftimet e shtypit (si guri i Xhuxhës).', 'Kujton rregullin: një gërmim nuk provon gjuhën.'], not: 'Nuk i jep emër etnik një varri apo vazoje pa provë.', fits: 'Arkeolog që njeh periudhën ilire, romake ose mesjetën e hershme (Koman, Lin, Antigonea).' },
    en: { name: 'Archaeology', lens: 'Lens 5', does: ['Checks the archaeology and rock-art layers on the map: date, place, source.', 'Separates published finds from press reports (such as the Xhuxhë stone).', 'Keeps the rule: an excavation does not prove a language.'], not: 'Does not give an ethnic name to a grave or a pot without evidence.', fits: 'An archaeologist who knows the Illyrian, Roman or early medieval period (Komani, Lin, Antigonea).' },
  },
  {
    sq: { name: 'Gjenetikë e popullsive', lens: 'Lentja 4', does: ['Kontrollon pikat e ADN-së në hartë dhe çfarë thonë vërtet studimet.', 'Shpjegon me fjalë të thjeshta haplogrupet dhe kufijtë e tyre.', 'Ndalon leximet e gabuara: ADN-ja tregon njerëzit, jo gjuhën që flisnin.'], not: 'Nuk vendos „kush ishte i pari”. Nuk lidh gjenet me kombet e sotme pa kujdes.', fits: 'Gjenetist i popullsive ose i ADN-së së lashtë, ose studiues që e njeh mirë literaturën (Olalde, Lazaridis).' },
    en: { name: 'Population genetics', lens: 'Lens 4', does: ['Checks the DNA points on the map and what the studies really say.', 'Explains haplogroups and their limits in plain words.', 'Stops misreadings: DNA shows people, not the language they spoke.'], not: 'Does not decide "who was first". Does not tie genes to modern nations carelessly.', fits: 'A population or ancient-DNA geneticist, or a researcher who knows the literature well (Olalde, Lazaridis).' },
  },
  {
    sq: { name: 'Antropologji dhe etnomuzikë', lens: 'Lentja 6', does: ['Lidh fjalët me jetën: kanuni, mikpritja, vajet, këngët, betimet.', 'Kujdeset për etikën e regjistrimit të njerëzve: pëlqimi, privatësia, respekti për të moshuarit.', 'Ndihmon me zërat: si regjistrohet një këngë ose një vaj.'], not: 'Nuk e romantizon të kaluarën dhe nuk e gjykon.', fits: 'Etnolog, antropolog ose etnomuzikolog që ka punuar në terren në veri.' },
    en: { name: 'Anthropology & ethnomusicology', lens: 'Lens 6', does: ['Ties words to life: the kanun, hospitality, laments, songs, oaths.', 'Looks after the ethics of recording people: consent, privacy, respect for the elderly.', 'Helps with the voices: how a song or a lament is recorded.'], not: 'Does not romanticise the past, nor judge it.', fits: 'An ethnologist, anthropologist or ethnomusicologist with fieldwork in the north.' },
  },
  {
    sq: { name: 'Statistikë dhe matematikë', lens: 'Të gjitha lentet', does: ['Mat anshmërinë e Kujtesës: kush regjistron dhe kush mungon (mosha, krahina, burra e gra).', 'Ndërton hartat sipas brezit: ku po ndryshon gjuha tani.', 'Propozon pragjet: sa dëshmi duhen që një fjalë të quhet „e mbështetur”.'], not: 'Nuk e kthen një shumicë votash në të vërtetë.', fits: 'Statisticien ose matematikan, mundësisht me përvojë në të dhëna gjuhësore ose shoqërore.' },
    en: { name: 'Statistics & mathematics', lens: 'All lenses', does: ['Measures the bias in Kujtesa: who records and who is missing (age, region, men and women).', 'Builds the maps by generation: where the language is changing now.', 'Proposes thresholds: how much evidence a word needs to be called "supported".'], not: 'Does not turn a majority of votes into truth.', fits: 'A statistician or mathematician, ideally with experience of linguistic or social data.' },
  },
  {
    sq: { name: 'Arkitekturë IT', lens: 'Kështjella vetë', does: ['Kujdeset për faqen, databazën, kopjet rezervë dhe sigurinë.', 'Mbron privatësinë e njerëzve që dërgojnë zërin e tyre.', 'Ndërton forumin e vërtetë dhe filtrin e fjalëve të ndyra.'], not: 'Nuk vendos për përmbajtjen: e mban kështjellën në këmbë.', fits: 'Inxhinier software me përvojë në faqe të hapura, të dhëna dhe siguri.' },
    en: { name: 'IT architecture', lens: 'The castle itself', does: ['Looks after the site, the database, backups and security.', 'Protects the privacy of the people who send their voices.', 'Builds the real forum and the profanity filter.'], not: 'Does not decide on content: keeps the castle standing.', fits: 'A software engineer with experience in open sites, data and security.' },
  },
  {
    sq: { name: 'Përfaqësues i diasporës', lens: 'Zëri i gjallë', does: ['Sjell zërat e gegëve jashtë vendit: Itali, Gjermani, Zvicër, SHBA.', 'Lidh GEG me arbëreshët dhe arvanitët.', 'Ndjek si ndryshon gjuha jashtë: çfarë ruhet dhe çfarë humbet.'], not: 'Nuk flet në emër të një partie apo shoqate.', fits: 'Dikush aktiv në komunitetet e diasporës, me lidhje të gjera dhe pa interes politik.' },
    en: { name: 'Diaspora representative', lens: 'The living voice', does: ['Brings in the voices of Ghegs abroad: Italy, Germany, Switzerland, the US.', 'Connects GEG with the Arbëresh and the Arvanites.', 'Follows how the language changes abroad: what is kept and what is lost.'], not: 'Does not speak for a party or an association.', fits: 'Someone active in diaspora communities, well connected and without political interest.' },
  },
  {
    sq: { name: 'Themeluesi: roja e Kushtetutës', lens: 'Kushtetuta', does: ['Ruan rregullat: burimi ose „pa burim”, hipoteza nuk paraqitet si fakt.', 'Ka një votë si të tjerët.', 'Fton anëtarët e parë dhe e mban projektin në lëvizje.'], not: 'Nuk vendos çfarë është e vërtetë. Nuk ka veto mbi përfundimet e shkencës.', fits: 'Kjo ulëse është e zënë: kujdestari i GEG 1.0.', founder: true },
    en: { name: 'The founder: guardian of the Constitution', lens: 'The Constitution', does: ['Keeps the rules: a source or "no source", a hypothesis is never presented as fact.', 'Has one vote like the others.', 'Invites the first members and keeps the project moving.'], not: 'Does not decide what is true. Has no veto over scientific conclusions.', fits: 'This seat is taken: the keeper of GEG 1.0.', founder: true },
  },
];
