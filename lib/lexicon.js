export const lexicalCorpus = [
  {
    id: "Q10120",
    concept: "WATER",
    lemma: "uj",
    category: "physical-world",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["uj"],
      tosk: ["ujë"],
      morphology: "Nom. indef. uj / def. uji"
    },
    meaning: {
      sq: "Lëngu jetësor, rrjedha ujore; korrespondim i gjerë indoevropian hidronimik.",
      en: "The life-sustaining liquid, water stream; broad Indo-European hydronymic correspondence."
    },
    matrix: { pie: "*wed-", protoAlbanian: "*uda", sanskrit: "udán", greek: "hōdōr", latin: "unda" },
    falsificationCondition: "Sound shift mismatch under standard Albanian historical phonology rules.",
    sources: [{ id: "Q5-03", author: "Herman Hirt", year: "1909", work: "Indogermanische Grammatik", url: "https://archive.org/details/indogermanischeg02hirtuoft" }]
  },
  {
    id: "Q10121",
    concept: "FIRE",
    lemma: "zjerm",
    category: "mythology",
    lenses: ["mythology", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zjerm"],
      tosk: ["zjarr"],
      morphology: "Nom. indef. zjerm / def. zjermi"
    },
    meaning: {
      sq: "Flaka, nxehtësia, elementi i zjarrit; trajtë e gjallë gegë e ruajtur në traditë.",
      en: "Flame, heat, element of fire; living Gheg form preserved in tradition."
    },
    matrix: { pie: "*gʷher-", protoAlbanian: "*dzermā", sanskrit: "gharmá", greek: "thermos", latin: "formus" },
    falsificationCondition: "Definitive phonetic proof resolving the initial stop reflex as a secondary innovation.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10122",
    concept: "EARTH",
    lemma: "dhe",
    category: "physical-world",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhe"],
      tosk: ["dhe"],
      morphology: "Nom. indef. dhe / def. dheu"
    },
    meaning: {
      sq: "Tokë, sipërfaqja e dheut; rrënjë e vjetër e hapësirës ballkanike.",
      en: "Earth, ground; old root of the Balkan spatial sphere."
    },
    matrix: { pie: "*dhē-", protoAlbanian: "*dhē", sanskrit: "dhā-", greek: "thesis", latin: "facere" },
    falsificationCondition: "Proof of a late medieval loan adaptation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10123",
    concept: "STONE",
    lemma: "gur",
    category: "physical-world",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gur"],
      tosk: ["gur"],
      morphology: "Nom. indef. gur / def. guri"
    },
    meaning: {
      sq: "Shkëmb, gur; material bazë i toponimisë dhe ndërtimit të vjetër.",
      en: "Rock, stone; foundational material of ancient toponymy and construction."
    },
    matrix: { pie: "*gʷur-", protoAlbanian: "*gurā", sanskrit: "giri- (mountain)", greek: "baris", latin: "gravis" },
    falsificationCondition: "Irregular consonant correspondence across neighboring dialects.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10124",
    concept: "MOUNTAIN",
    lemma: "mal",
    category: "physical-world",
    lenses: ["comparative"],
    status: "OPEN",
    meaning: {
      sq: "Mal, lartësi malore; term qendror në gjeografinë fizike të hapësirës shqiptare.",
      en: "Mountain, upland; central term in the physical geography of the Albanian space."
    },
    attestations: {
      gheg: ["mal"],
      tosk: ["mal"],
      morphology: "Nom. indef. mal / def. mali"
    },
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*malis", sanskrit: "n/a", greek: "n/a", latin: "mons (unrelated)" },
    falsificationCondition: "Demonstrating a direct derivation from a known Romance topographical term.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10125",
    concept: "RIVER",
    lemma: "lum",
    category: "hydronymy",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["lum"],
      tosk: ["lumë"],
      morphology: "Nom. indef. lum / def. lumi"
    },
    meaning: {
      sq: "Rrjedha e madhe e ujit; trajtë gegë pa mbaresën e vonë zanore të standardit.",
      en: "Large water stream; Gheg form preserved without the late standard vocalic ending."
    },
    matrix: { pie: "*leu- / *lu-", protoAlbanian: "*lumo-", sanskrit: "lavah", greek: "lyein", latin: "luere" },
    falsificationCondition: "Late borrowing confirmation from neighboring Slavic river terminology.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10126",
    concept: "SEA",
    lemma: "det",
    category: "physical-world",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["det"],
      tosk: ["det"],
      morphology: "Nom. indef. det / def. deti"
    },
    meaning: {
      sq: "Deti, hapësira detare; term i trashëguar i lidhur me kufirin ujor.",
      en: "Sea, marine expanse; inherited term linked to the water boundary."
    },
    matrix: { pie: "*dheub- (deep)", protoAlbanian: "*dbtu-", sanskrit: "gahana", greek: "buthos", latin: "altus" },
    falsificationCondition: "Chronological mismatch with inland tribal expansions.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10088",
    concept: "SUN",
    lemma: "diell",
    category: "mythology",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["diell"],
      tosk: ["diell"],
      morphology: "Nom. indef. diell / def. dielli"
    },
    meaning: {
      sq: "Trupi qiellor i dritës; vazhdimësi e rrënjës së lashtë indoevropiane të ditës dhe diellit.",
      en: "Celestial body of light; continuation of the ancient Indo-European root of day and sun."
    },
    matrix: { pie: "*dyeu-", protoAlbanian: "*dī-", sanskrit: "Dyaus", greek: "Zeus / Dios", latin: "Dies" },
    falsificationCondition: "Discovery of pre-Indo-European loan strata replacing primary solar nomenclature.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10127",
    concept: "MOON",
    lemma: "hana",
    category: "mythology",
    lenses: ["mythology", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hana"],
      tosk: ["hënë"],
      morphology: "Nom. indef. hanë / def. hana"
    },
    meaning: {
      sq: "Hëna; trajtë e pastër gegë që ruan hundorinë e vjetër dhe refleksin e dritës natyrore.",
      en: "Moon; pristine Gheg form preserving ancient nasalization and natural light reflex."
    },
    matrix: { pie: "*mēn(ō)t-", protoAlbanian: "*mānsā", sanskrit: "mās-", greek: "mēn", latin: "mīnsis", germanic: "mēnōþ-" },
    falsificationCondition: "Irregular nasal development unexplained by historical Albanian phonology rules.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10128",
    concept: "TO GIVE",
    lemma: "me dhan",
    category: "philological",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dhan"],
      tosk: ["me dhënë"],
      morphology: "Infinitive construction (Gheg dialectal infinitive)"
    },
    meaning: {
      sq: "Paskajorja gegë 'me dhan'; veprimi i dhënies, rrënjë parësore indoevropiane.",
      en: "Gheg infinitive 'me dhan'; action of giving, primary Indo-European root."
    },
    matrix: { pie: "*dō-", protoAlbanian: "*dān-", sanskrit: "dāti", greek: "didōmi", latin: "dare" },
    falsificationCondition: "Demonstrating that the infinitive particle structure is a recent contact artifact.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10129",
    concept: "TO TAKE",
    lemma: "me marr",
    category: "philological",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me marr"],
      tosk: ["me marrë"],
      morphology: "Infinitive construction (Gheg dialectal infinitive)"
    },
    meaning: {
      sq: "Paskajorja gegë 'me marr'; veprimi i marrjes, ruajtje e fortë fonetike.",
      en: "Gheg infinitive 'me marr'; action of taking, robust phonetic retention."
    },
    matrix: { pie: "*smer- / *mar-", protoAlbanian: "*marr-", sanskrit: "smarati", greek: "mermera", latin: "memor" },
    falsificationCondition: "Irregular consonant cluster evolution.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10130",
    concept: "TO GO",
    lemma: "me shkue",
    category: "philological",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me shkue"],
      tosk: ["me shkuar"],
      morphology: "Infinitive construction (Gheg dialectal infinitive)"
    },
    meaning: {
      sq: "Paskajorja gegë 'me shkue'; lëvizja, drejtimi, trajtë klasike veriore.",
      en: "Gheg infinitive 'me shkue'; movement, direction, classical northern form."
    },
    matrix: { pie: "*skeu-", protoAlbanian: "*skud-", sanskrit: "cyavate", greek: "skuedh-", latin: "exuere" },
    falsificationCondition: "Proof of late lexical innovation unique to western Balkan Romance contact.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10131",
    concept: "TO STAY / REMAIN",
    lemma: "me nej / me nejt",
    category: "philological",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["me nej", "me nejt"],
      tosk: ["me ndenjur"],
      morphology: "Variant Gheg infinitive realizations requiring documentation"
    },
    meaning: {
      sq: "Format e gjalla gegë 'me nej' / 'me nejt' për qëndrimin; ruajtje e trajtës së shkurtuar dhe të plotë.",
      en: "Living Gheg forms 'me nej' / 'me nejt' for staying; preservation of truncated and full variants."
    },
    matrix: { pie: "*sed- (sit)", protoAlbanian: "*ndēn-", sanskrit: "sīdati", greek: "hezomai", latin: "sidere" },
    falsificationCondition: "Demonstrating that 'nej' is a recent contraction devoid of historical root depth.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10132",
    concept: "TO SEE",
    lemma: "me pa",
    category: "philological",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me pa"],
      tosk: ["me parë", "me pa"],
      morphology: "Infinitive construction (Gheg dialectal infinitive)"
    },
    meaning: {
      sq: "Paskajorja gegë 'me pa'; akti i të pamurit, rrënjë parësore e shqipes.",
      en: "Gheg infinitive 'me pa'; the act of seeing, primary root of Albanian."
    },
    matrix: { pie: "*per- (look/trial)", protoAlbanian: "*pā-", sanskrit: "párayati", greek: "peira", latin: "peritus" },
    falsificationCondition: "Incompatibility with regular contraction laws of historic vowels.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10133",
    concept: "TO KNOW",
    lemma: "me dit",
    category: "philological",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dit"],
      tosk: ["me ditur"],
      morphology: "Infinitive construction (Gheg dialectal infinitive)"
    },
    meaning: {
      sq: "Paskajorja gegë 'me dit'; dija, njohja, korrespondim i drejtpërdrejtë indoevropian.",
      en: "Gheg infinitive 'me dit'; knowledge, recognition, direct Indo-European correspondence."
    },
    matrix: { pie: "*gno- / *dhē-", protoAlbanian: "*dit-", sanskrit: "jānāti", greek: "gignōskō", latin: "gnōscere" },
    falsificationCondition: "Proof of secondary borrowing from medieval Slavic participial forms.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  }
];
