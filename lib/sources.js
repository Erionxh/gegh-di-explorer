// Bibliografia e verifikuar. Çdo lidhje u kontrollua më 18.11.2026 në katalogë bibliotekash.
// Verified bibliography. Every link was checked on 18 Nov 2026 against library catalogues.
// Nëse një lidhje mungon, vepra ekziston por kopja publike nuk u gjet ende.

export const SOURCE_GROUPS = ['de', 'it', 'sq', 'intl'];

export const SOURCES = [
  {
    id: 'S-bopp-1855', group: 'de', author: 'Franz Bopp', country: 'DE', year: '1855',
    title: 'Über das Albanesische in seinen verwandtschaftlichen Beziehungen',
    place: 'Berlin', lens: '1',
    sq: 'Studimi i parë krahasues i thelluar; vendosi trashëgiminë indoevropiane të shqipes. (Paraqitur në Akademi më 1854.)',
    en: 'The first in-depth comparative study; established the Indo-European heritage of Albanian. (Read at the Academy in 1854.)',
    links: [{ label: 'Deutsche Digitale Bibliothek (digitized)', url: 'https://www.deutsche-digitale-bibliothek.de/item/SGSW7Y45WRPDRXI2NFDWXBG6AP53566B' }],
  },
  {
    id: 'S-hahn-1854', group: 'de', author: 'Johann Georg von Hahn', country: 'AT', year: '1854',
    title: 'Albanesische Studien (3 vols.)',
    place: 'Jena: Friedrich Mauke', lens: '1 · 2 · 6',
    sq: 'Konsulli austriak: gramatikë, fjalor, folklor dhe etnografi. Përfshin tezën pellazgjike (shtresa e hipotezave të guximshme).',
    en: 'The Austrian consul: grammar, dictionary, folklore and ethnography. Includes the Pelasgian thesis (bold-hypothesis tier).',
    links: [
      { label: 'ÖAW catalogue, vol. 1', url: 'https://oeaw.ac.at/resources/Record/990000518210504498' },
      { label: 'HathiTrust page images (via Online Books)', url: 'https://onlinebooks.library.upenn.edu/webbin/who/Hahn%2c%20J%2e%20G%2e%20von%20%28Johann%20Georg%29%2c%201811%2d1869' },
    ],
  },
  {
    id: 'S-meyer-1888', group: 'de', author: 'Gustav Meyer', country: 'DE/AT', year: '1888',
    title: 'Kurzgefasste albanesische Grammatik',
    place: 'Leipzig: Breitkopf & Härtel', lens: '1',
    sq: 'Gramatikë e shkurtër me tekste dhe fjalorth.',
    en: 'A short grammar with reading texts and glossary.',
    links: [{ label: 'PDF (UJK digital library)', url: 'https://bibliotekacyfrowa.ujk.edu.pl//Content/2319/PDF/130481.pdf' }],
  },
  {
    id: 'S-meyer-1891', group: 'de', author: 'Gustav Meyer', country: 'DE/AT', year: '1891',
    title: 'Etymologisches Wörterbuch der albanesischen Sprache',
    place: 'Strassburg: Trübner', lens: '1',
    sq: 'Fjalori i parë i madh etimologjik i shqipes; mori Çmimin Volney të Akademisë së Parisit. Profesor në Graz.',
    en: 'The first major etymological dictionary of Albanian; awarded the Prix Volney of the Paris Academy. Professor at Graz.',
    links: [
      { label: 'ÖAW catalogue (online access)', url: 'https://oeaw.ac.at/resources/Record/5005157952' },
      { label: 'Volkskundemuseum Wien, biography', url: 'https://volkskundemuseum.at/jart/prj3/volkskundemuseum/data/uploads/downloads/Meyer.pdf' },
    ],
  },
  {
    id: 'S-jokl-1923', group: 'de', author: 'Norbert Jokl', country: 'AT', year: '1923',
    title: 'Linguistisch-kulturhistorische Untersuchungen aus dem Bereiche des Albanischen',
    place: 'Berlin–Leipzig: De Gruyter', lens: '1 · 6',
    sq: 'Albanologu vjenez, „babai i albanologjisë”, i vrarë nga nazistët më 1942. Gjuhë dhe kulturë materiale bashkë.',
    en: 'The Viennese Albanologist, "father of Albanology", murdered by the Nazis in 1942. Language and material culture together.',
    links: [{ label: 'De Gruyter (2013 reprint)', url: 'https://www.degruyterbrill.com/isbn/9783111663692' }],
  },
  {
    id: 'S-jokl-1964', group: 'de', author: 'Norbert Jokl', country: 'AT', year: '1933–34 (publ. 1964)',
    title: 'Observations linguistiques sur l’histoire ancienne des Albanais',
    place: 'Studime Filologjike 2 (1964)', lens: '1 · 2',
    sq: 'Dorëshkrim i papërfunduar, i gjetur nga Çabej në Bibliotekën Kombëtare të Vjenës: shqipja, greqishtja e vjetër dhe latinishtja.',
    en: 'An unfinished manuscript found by Çabej in the Vienna National Library: Albanian, Ancient Greek and Latin.',
    links: [{ label: 'albanica.al (PDF)', url: 'https://albanica.al/studime_filologjike/article/download/1228/9191' }],
  },
  {
    id: 'S-camarda-1864', group: 'it', author: 'Demetrio Camarda (Dhimitër Kamarda)', country: 'IT · arbëresh', year: '1864–1866',
    title: 'Saggio di grammatologia comparata sulla lingua albanese (+ Appendice, 1866)',
    place: 'Livorno', lens: '1',
    sq: 'Vepra e parë shkencore krahasuese-historike për shqipen, nga një arbëresh i Hora e Arbëreshëvet.',
    en: 'The first scientific comparative-historical work on Albanian, by an Arbëresh scholar from Piana degli Albanesi.',
    links: [
      { label: 'Deutsche Digitale Bibliothek, vol. 1', url: 'https://www.deutsche-digitale-bibliothek.de/item/M7XMSHJUN437U5TLB7QPP6ICLJ65ZSHO' },
      { label: 'Deutsche Digitale Bibliothek, Appendice', url: 'https://www.deutsche-digitale-bibliothek.de/item/RCZC43QZGKK6FSPUDD7TC5P2XP4UAOOI' },
    ],
  },
  {
    id: 'S-cabej-1976', group: 'sq', author: 'Eqrem Çabej', country: 'AL', year: '1976–2014',
    title: 'Studime etimologjike në fushë të shqipes (7 vëll.)',
    place: 'Tiranë: Akademia e Shkencave / SHB Çabej', lens: '1',
    sq: 'Vepra themelore e etimologjisë shqipe; vëllimi i fundit doli pas vdekjes së autorit (1980).',
    en: 'The foundational work of Albanian etymology; the last volume appeared long after the author’s death (1980).',
    links: [
      { label: 'ÖAW catalogue', url: 'https://oeaw.ac.at/resources/Record/990002401220504498' },
      { label: 'B. Demiraj, review of vol. V (2014)', url: 'https://www.albanologie.uni-muenchen.de/downloads/publikationen-demiraj/neue-publikationen-2016/b_17_demiraj_buchbesprechung.pdf' },
    ],
  },
  {
    id: 'S-1972', group: 'sq', author: 'Akademia e Shkencave', country: 'AL', year: '1972 (publ. 1973)',
    title: 'Kongresi i Drejtshkrimit të Gjuhës Shqipe (20–25 nëntor 1972)',
    place: 'Studime Filologjike 1 (1973)', lens: '2 · sociologjike',
    sq: 'Raporti i Kongresit që vendosi standardin e sotëm. Burim parësor për Lentën historike.',
    en: 'The report of the Congress that set today’s standard. A primary source for the historical lens.',
    links: [{ label: 'albanica.al (PDF)', url: 'https://albanica.al/studime_filologjike/article/download/6510/9735/13014' }],
  },
  {
    id: 'S-demiraj-1997', group: 'sq', author: 'Bardhyl Demiraj', country: 'AL/DE', year: '1997',
    title: 'Albanische Etymologien: Untersuchungen zum albanischen Erbwortschatz',
    place: 'Amsterdam: Rodopi (Leiden Studies in Indo-European 7)', lens: '1',
    sq: 'Studim i fjalëve të trashëguara të shqipes, nga profesori i shqipes në LMU München.',
    en: 'A study of Albanian’s inherited vocabulary, by the professor of Albanian at LMU Munich.',
    links: [
      { label: 'Google Books', url: 'https://books.google.com/books?id=xZftQtCaYE0C' },
      { label: 'ÖAW catalogue', url: 'https://oeaw.ac.at/resources/Record/993471709904498' },
    ],
  },
  {
    id: 'S-orel-1998', group: 'intl', author: 'Vladimir Orel', country: 'RU/IL', year: '1998',
    title: 'Albanian Etymological Dictionary',
    place: 'Leiden–Boston–Köln: Brill', lens: '1',
    sq: 'Fjalor etimologjik i plotë; burimi i etimologjisë së njeh „numëroj” (f. 304).',
    en: 'A full etymological dictionary; the source for the etymology of njeh "to count" (p. 304).',
    links: [],
  },
  {
    id: 'S-dna-2023', group: 'intl', author: 'L.-R. Davranoglou, A. Lauka et al.', country: 'UK/AL', year: '2023 (preprint)',
    title: 'Ancient DNA reveals the origins of the Albanians',
    place: 'bioRxiv', lens: '4',
    sq: 'Paraversioni i studimit gjenetik; versioni përfundimtar u botua në Nature Human Behaviour (2026).',
    en: 'The preprint of the genetic study; the final version appeared in Nature Human Behaviour (2026).',
    links: [{ label: 'bioRxiv (PDF)', url: 'https://www.biorxiv.org/content/10.1101/2023.06.05.543790.full.pdf' }],
  },
];
