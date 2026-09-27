export const lexicalCorpus = [
  // --- 1. CORE SUPPORTED & COMPARATIVE ETYMOLOGIES (1-25) ---
  {
    id: "Q10088",
    lemma: "diell / di",
    category: "mythology",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    meaning: {
      sq: "Rrënjë e lashtë indoevropiane që lidhet me dritën, ditën, qiellin dhe hyjninë solare.",
      en: "Ancient Indo-European root associated with light, day, sky, and solar divinity."
    },
    claims: [{ id: "Q40099-B2", type: "etymological", status: "SUPPORTED", description: "Direct continuation of PIE *dyeu-." }],
    matrix: { pie: "*dyeu-", protoAlbanian: "*dī-", sanskrit: "Dyaus", greek: "Zeus / Dios", latin: "Dies / Iuppiter", germanic: "Tiwaz" },
    falsificationCondition: "Discovery of pre-Indo-European loan strata replacing primary solar nomenclature.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10090",
    lemma: "vesh",
    category: "material-culture",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Mbulim trupor, veshje; rrënjë e përbashkët indoevropiane për tekstilin dhe mbrojtjen e trupit.",
      en: "Body covering, garment; shared Indo-European root for textiles and bodily protection."
    },
    claims: [{ id: "Q40101", type: "etymological", status: "SUPPORTED", description: "PIE *wes- ('to clothe')." }],
    matrix: { pie: "*wes-", protoAlbanian: "*wes-jā", sanskrit: "vastra-", greek: "hesthai", latin: "vestis", germanic: "wasjan" },
    falsificationCondition: "Demonstrating that the term is a secondary borrowing from Latin/Romance rather than inherited.",
    sources: [{ id: "Q5-06", author: "Norbert Jokl", year: "1923", work: "Linguistisch-kulturhistorische Untersuchungen", url: "https://www.google.com/search?q=Norbert+Jokl" }]
  },
  {
    id: "Q10091",
    lemma: "motër",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    meaning: {
      sq: "Term fisnor i ruajtur në mënyrë të pavarur, lidhur me strukturat e hershme shoqërore të hapësirës paleobalkanike.",
      en: "Independently preserved kinship term linked to early social structures of the Paleo-Balkan space."
    },
    claims: [{ id: "Q40102", type: "etymological", status: "SUPPORTED", description: "Paleo-Balkan kinship preservation." }],
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*moterā", sanskrit: "svāsar-", greek: "adelphē", latin: "soror", germanic: "swister" },
    falsificationCondition: "Proof of a regular loan source in neighboring medieval languages.",
    sources: [{ id: "Q5-08", author: "Eqrem Çabej", year: "1960", work: "Studime gjuhësore II", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10093",
    lemma: "bir",
    category: "kinship",
    lenses: ["comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Pasardhës, fëmijë, djalë; term i trashëguar indoevropian për pjellorinë dhe linjën e gjakut.",
      en: "Offspring, child, son; inherited Indo-European core term for lineage."
    },
    claims: [{ id: "Q40103", type: "etymological", status: "SUPPORTED", description: "PIE *bher- ('to bear')." }],
    matrix: { pie: "*bher-", protoAlbanian: "*bira", sanskrit: "bhara", greek: "phoreus", latin: "ferre", germanic: "barn / bairn" },
    falsificationCondition: "Phonetic decoupling from the root *bher- through historical attestation failure.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10094",
    lemma: "gjuhë",
    category: "philological",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    meaning: {
      sq: "Organi i të folurit dhe sistemi i komunikimit; rrënjë qendrore e semantikës indoevropiane.",
      en: "The organ of speech and human communication system; central Indo-European semantic root."
    },
    claims: [{ id: "Q40104", type: "etymological", status: "SUPPORTED", description: "PIE *nghu-ā ('tongue')." }],
    matrix: { pie: "*nghu-ā", protoAlbanian: "*ngwā-", sanskrit: "jihvā", greek: "glōssa", latin: "lingua", germanic: "tuggō" },
    falsificationCondition: "Irregular sound correspondence inconsistent with satem development.",
    sources: [{ id: "Q5-14", author: "Eric Hamp", year: "1972", work: "Studies in Albanian Linguistics", url: "https://www.google.com/search?q=Eric+Hamp" }]
  },
  {
    id: "Q10097",
    lemma: "sy",
    category: "philological",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    meaning: {
      sq: "Organi i të pamurit; ruajtje e drejtpërdrejtë e trajtës së vjetër indoevropiane.",
      en: "The organ of sight; direct preservation of the old Indo-European form."
    },
    claims: [{ id: "Q40107", type: "etymological", status: "SUPPORTED", description: "PIE *okʷ- ('to see')." }],
    matrix: { pie: "*okʷ-", protoAlbanian: "*oksi", sanskrit: "akṣi", greek: "opsis", latin: "oculus", germanic: "augô" },
    falsificationCondition: "Demonstrating that the phonology reflects an accidental homophone rather than cognate inheritance.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10098",
    lemma: "ujë",
    category: "hydronymy",
    lenses: ["comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Lëngu jetësor, rrjedha ujore; korrespondim i gjerë indoevropian hidronimik.",
      en: "The life-sustaining liquid, water stream; broad Indo-European hydronymic correspondence."
    },
    claims: [{ id: "Q40108", type: "etymological", status: "SUPPORTED", description: "PIE *wed- ('water, wet')." }],
    matrix: { pie: "*wed-", protoAlbanian: "*uda", sanskrit: "udán", greek: "hōdōr", latin: "unda", germanic: "watōr" },
    falsificationCondition: "Sound shift mismatch under standard Albanian historical phonology rules.",
    sources: [{ id: "Q5-03", author: "Herman Hirt", year: "1909", work: "Indogermanische Grammatik", url: "https://archive.org/details/indogermanischeg02hirtuoft" }]
  },
  {
    id: "Q10102",
    lemma: "natë",
    category: "mythology",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Periudha e errësirës pas perëndimit të diellit; trashëgimi e drejtpërdrejtë indoevropiane.",
      en: "The period of darkness after sunset; direct Indo-European inheritance."
    },
    claims: [{ id: "Q40112", type: "etymological", status: "SUPPORTED", description: "PIE *nokʷt- ('night')." }],
    matrix: { pie: "*nokʷt-", protoAlbanian: "*natā", sanskrit: "nákti", greek: "nyx", latin: "nox", germanic: "nahts" },
    falsificationCondition: "Chronological mismatch with known Balto-Slavic sound shifts.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10105",
    lemma: "vëlla",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    meaning: {
      sq: "Term për vëllain; lidhje e ngushtë me korrespondencat baltosllave dhe indoevropiane.",
      en: "Term for brother; close connection with Balto-Slavic and Indo-European cognates."
    },
    claims: [{ id: "Q40115", type: "etymological", status: "SUPPORTED", description: "PIE *bhrāter ('brother')." }],
    matrix: { pie: "*bhrāter", protoAlbanian: "*brātrā", sanskrit: "bhrātr", greek: "phratēr", latin: "frāter", germanic: "brōþar" },
    falsificationCondition: "Proof of loan adaptation from South Slavic medieval structures.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10106",
    lemma: "buhë",
    category: "material-culture",
    lenses: ["comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Emërtim i faunës së vjetër, lidhur me shtresimet e hershme blegtorale.",
      en: "Designation of old fauna, linked to early pastoral strata."
    },
    claims: [{ id: "Q40116", type: "etymological", status: "SUPPORTED", description: "Archaic pastoral loan/retention." }],
    matrix: { pie: "Substratum", protoAlbanian: "*buhā", sanskrit: "n/a", greek: "boubalos", latin: "bubalus", germanic: "n/a" },
    falsificationCondition: "Late Ottoman or Venetian introduction documentation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },

  // --- 2. PALEO-BALKAN HYDRONYMY & TOPONYMY ---
  {
    id: "Q10096",
    lemma: "zall",
    category: "hydronymy",
    lenses: ["comparative"],
    status: "DISPUTED",
    meaning: {
      sq: "Term gjeografik për zallin, bregun e lumit, i pranishëm në hidroniminë e vjetër iliro-shqiptare.",
      en: "Geographical term for riverbank or gravel, prominent in ancient Illyrian-Albanian hydronymy."
    },
    claims: [{ id: "Q40106", type: "etymological", status: "DISPUTED", description: "Illyrian hydronymic substrate vs. Mediterranean Wanderwort." }],
    matrix: { pie: "Paleo-Balkan", protoAlbanian: "*tsal-", sanskrit: "n/a", greek: "n/a", latin: "sabulum", germanic: "n/a" },
    falsificationCondition: "Etymological derivation proven from a known medieval Venetian trade term.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10107",
    lemma: "Drin",
    category: "hydronymy",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    meaning: {
      sq: "Emri i lumit kryesor të Ballkanit Perëndimor; rrënjë e lashtë ilire e lidhur me rrjedhjen e shpejtë.",
      en: "Name of the major river of the Western Balkans; ancient Illyrian root linked to rapid flow."
    },
    claims: [{ id: "Q40117", type: "etymological", status: "SUPPORTED", description: "Illyrian *Drinus derived from PIE *drev- ('to run')." }],
    matrix: { pie: "*drev-", protoAlbanian: "*drīnos", sanskrit: "dravati", greek: "dramein", latin: "currere", germanic: "treban" },
    falsificationCondition: "Hydronymic attestation showing post-Slavic coinage origin.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10108",
    lemma: "Mat",
    category: "hydronymy",
    lenses: ["comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Emër lumi dhe rajoni (Mat); lidhet me rrënjën e vjetër për bregun ose ndarjen ujore.",
      en: "River and regional name (Mat); linked to old root for riverbank or water partition."
    },
    claims: [{ id: "Q40118", type: "etymological", status: "SUPPORTED", description: "Illyrian *Matis from PIE *mati- ('water channel')." }],
    matrix: { pie: "*mati-", protoAlbanian: "*mati", sanskrit: "mati", greek: "madē", latin: "madere", germanic: "mat" },
    falsificationCondition: "Demonstration of pure descriptive Albanian nominal creation without ancient substrate depth.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10109",
    lemma: "Ishëm",
    category: "hydronymy",
    lenses: ["philological"],
    status: "OPEN",
    meaning: {
      sq: "Hidronim bregdetar; trajtë e trashëguar e periudhës para-romake të fushës së Adriatikut.",
      en: "Coastal hydronym; inherited pre-Roman form of the Adriatic basin."
    },
    claims: [{ id: "Q40119", type: "etymological", status: "OPEN", description: "Paleo-Balkan coastal suffix adaptation." }],
    matrix: { pie: "Substratum", protoAlbanian: "*issam-", sanskrit: "n/a", greek: "n/a", latin: "isamus", germanic: "n/a" },
    falsificationCondition: "Attestation as a medieval Venetian fortification descriptor.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10110",
    lemma: "Vjosë",
    category: "hydronymy",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    meaning: {
      sq: "Lumi i lashtë Aous / Vjosë; vazhdimësi e drejtpërdrejtë fonetike nga ilirishtja e vjetër.",
      en: "Ancient river Aous / Vjosë; direct phonetic continuity from old Illyrian."
    },
    claims: [{ id: "Q40120", type: "etymological", status: "SUPPORTED", description: "Illyrian *Aōos / Vjosë regular sound shift." }],
    matrix: { pie: "Ill. *Aōos", protoAlbanian: "*vjōsā", sanskrit: "n/a", greek: "Aōos", latin: "Vojussa", germanic: "n/a" },
    falsificationCondition: "Inconsistent medieval documentation showing recent artificial naming.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },

  // --- 3. OPEN, DISPUTED & NEGATIVE CONTROLS ---
  {
    id: "Q10089",
    lemma: "dredh",
    category: "hydronymy",
    lenses: ["comparative", "philological"],
    status: "OPEN",
    meaning: {
      sq: "Lëvizje rrotulluese ose pemëtari e lidhur me toponiminë dhe shtresimin para-indoevropian të rajonit.",
      en: "Rotational movement or pomology linked to ancient Balkan topography and pre-IE substratum."
    },
    claims: [{ id: "Q40105", type: "etymological", status: "OPEN", description: "Paleo-Balkan substrate convergence." }],
    matrix: { pie: "Substratum", protoAlbanian: "*dredh-", sanskrit: "n/a", greek: "n/a", latin: "n/a", germanic: "n/a" },
    falsificationCondition: "Clear documentation of a late Slavic or Romance loan origin.",
    sources: [{ id: "Q5-04", author: "W. Meyer-Lübke", year: "1935", work: "Romanisches etymologisches Wörterbuch", url: "https://www.google.com/search?q=Meyer-Lübke" }]
  },
  {
    id: "Q10099",
    lemma: "zot",
    category: "mythology",
    lenses: ["mythology", "philological"],
    status: "OPEN",
    meaning: {
      sq: "Hyjni, zotërues; bashkim i konceptit të zotit të shtëpisë me strukturat e hershme ballkanike.",
      en: "God, master; merger of house-lord concept with early Balkan structural evolution."
    },
    claims: [{ id: "Q40109", type: "etymological", status: "OPEN", description: "Compound of *despo-potis vs native solar evolution." }],
    matrix: { pie: "*demspoti-", protoAlbanian: "*zpot-", sanskrit: "dampati", greek: "despotēs", latin: "dominus", germanic: "n/a" },
    falsificationCondition: "Proof of purely late Christian ecclesiastical loan formation.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10103",
    lemma: "zjarr",
    category: "mythology",
    lenses: ["mythology", "embodied"],
    status: "DISPUTED",
    meaning: {
      sq: "Flaka, nxehtësia, elementi i zjarrit; debat midis trashëgimisë së vjetër dhe substratit.",
      en: "Flame, heat, element of fire; ongoing debate between native inheritance and substrate origin."
    },
    claims: [{ id: "Q40113", type: "etymological", status: "DISPUTED", description: "PIE *gʷher- vs Paleo-Balkan substrate loan." }],
    matrix: { pie: "*gʷher- (disputed)", protoAlbanian: "*dzarrā", sanskrit: "gharmá", greek: "thermos", latin: "formus", germanic: "warm" },
    falsificationCondition: "Definitive phonetic proof resolving the initial palatal stop reflex.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10111",
    lemma: "femër",
    category: "kinship",
    lenses: ["comparative"],
    status: "DISPUTED",
    meaning: {
      sq: "Term për gjininë femërore; marrëdhënie e diskutueshme midis fondit latin dhe trajtës vendase.",
      en: "Term for female; disputed relationship between Latin base and native structural form."
    },
    claims: [{ id: "Q40121", type: "etymological", status: "DISPUTED", description: "Latin *femina loan vs archaic Mediterranean kinship match." }],
    matrix: { pie: "Latin loan / uncertain", protoAlbanian: "*femra", sanskrit: "n/a", greek: "thelys", latin: "femina", germanic: "n/a" },
    falsificationCondition: "Inscribing regular sound correspondences excluding Latin phonology.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10112",
    lemma: "gjarpër",
    category: "mythology",
    lenses: ["mythology", "comparative"],
    status: "SUPPORTED",
    meaning: {
      sq: "Krijesa zvarranike me rol qendror në mitologjinë e lashtë ballkanike dhe kultin e vatrës.",
      en: "Serpentine creature with central role in ancient Balkan mythology and hearth cult."
    },
    claims: [{ id: "Q40122", type: "etymological", status: "SUPPORTED", description: "PIE *serp- ('to crawl') with nasal suffix extension." }],
    matrix: { pie: "*serp-", protoAlbanian: "*gerp-ro-", sanskrit: "sarpati", greek: "herpōn", latin: "serpere", germanic: "serpan" },
    falsificationCondition: "Demonstrating that the phonetic shape is a secondary expressive coinage rather than inherited reflex.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10100",
    lemma: "balgë",
    category: "phonetics",
    lenses: ["philological"],
    status: "REFUTED",
    meaning: {
      sq: "Kontroll negativ: Shembull i ngjashmërisë mashtruese fonetike pa mbështetje krahasimtare.",
      en: "Negative control: Example of deceptive phonetic similarity lacking comparative support."
    },
    claims: [{ id: "Q40110", type: "etymological", status: "REFUTED", description: "Superficial lookalike with zero historical attestation across cognate branches." }],
    matrix: { pie: "None", protoAlbanian: "Late invention", sanskrit: "n/a", greek: "n/a", latin: "n/a", germanic: "n/a" },
    falsificationCondition: "Discovery of valid comparative links in neighboring archaic dialects.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10101",
    lemma: "gris",
    category: "material-culture",
    lenses: ["comparative"],
    status: "REFUTED",
    meaning: {
      sq: "Kontroll negativ: Hipotezë etimologjike e dështuar për shkak të shkeljes së ligjeve fonetike.",
      en: "Negative control: Failed etymological hypothesis due to sound law violation."
    },
    claims: [{ id: "Q40111", type: "etymological", status: "REFUTED", description: "Violates regular Albanian reflex development from PIE stops." }],
    matrix: { pie: "Unattested", protoAlbanian: "False reconstruction", sanskrit: "n/a", greek: "n/a", latin: "n/a", germanic: "n/a" },
    falsificationCondition: "Validation of regular sound correspondence across initial stop positions.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10104",
    lemma: "flokë",
    category: "material-culture",
    lenses: ["philological"],
    status: "REFUTED",
    meaning: {
      sq: "Kontroll negativ: Trajtë e vonë e mirëdokumentuar si huazim latin (floccus), e papërshtatshme për shtresën e vjetër IE.",
      en: "Negative control: Late form well-documented as a Latin loan (floccus), unfit for old IE layer."
    },
    claims: [{ id: "Q40114", type: "etymological", status: "REFUTED", description: "Mistakenly posited as native PIE root; proven loanword from Latin." }],
    matrix: { pie: "None (Latin loan)", protoAlbanian: "Secondary", sanskrit: "n/a", greek: "n/a", latin: "floccus", germanic: "n/a" },
    falsificationCondition: "Discovery of pre-Latin structural cognates in autonomous branch languages.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  }
];
