export const lexicalCorpus = [
  // --- EXISTING GHEG BASELINE ---
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
  },

  // --- NEW ANATOMY & KINSHIP BATCH ---
  {
    id: "Q10134",
    concept: "HEAD",
    lemma: "krye",
    category: "philological",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["krye"],
      tosk: ["krye"],
      morphology: "Nom. indef. krye / def. kryet"
    },
    meaning: {
      sq: "Koka, pjesa e sipërme e trupit; term qendror për udhëheqjen dhe strukturën trupore.",
      en: "Head, upper part of the body; central term for leadership and physical structure."
    },
    matrix: { pie: "*kara- / *kardh-", protoAlbanian: "*krūja", sanskrit: "śīrṣan", greek: "karanon", latin: "carrus (unrelated)" },
    falsificationCondition: "Sound shift discrepancy against regular development of ancient voiceless stops.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10135",
    concept: "NOSE",
    lemma: "hundë / hunë",
    category: "philological",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hundë", "hunë"],
      tosk: ["hundë"],
      morphology: "Nom. indef. hundë / hunë (Gheg nasalized variant)"
    },
    meaning: {
      sq: "Hunda; trajtë e gjallë gegë 'hunë' që ruan hundorinë karakteristike veriore.",
      en: "Nose; living Gheg form 'hunë' preserving characteristic northern nasalization."
    },
    matrix: { pie: "*nas- / *knu-", protoAlbanian: "*nāndā", sanskrit: "nāsā", greek: "rhis", latin: "nāris", germanic: "nasō" },
    falsificationCondition: "Proof of recent analogical nasalization without historical root depth.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10136",
    concept: "MOUTH",
    lemma: "gojë",
    category: "philological",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gojë"],
      tosk: ["gojë"],
      morphology: "Nom. indef. gojë / def. goja"
    },
    meaning: {
      sq: "Goji, organ i të folurit dhe i ushqimit; trashëgimi e vjetër ballkanike-indoevropiane.",
      en: "Mouth, organ of speech and nourishment; old Balkan-Indo-European inheritance."
    },
    matrix: { pie: "*gaug- / *gust-", protoAlbanian: "*gaubjā", sanskrit: "gala (throat)", greek: "stoma", latin: "gustare" },
    falsificationCondition: "Irregular palatalization reflex inconsistent with standard phonology rules.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10137",
    concept: "TOOTH",
    lemma: "dhëmb",
    category: "philological",
    lenses: ["embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhëmb"],
      tosk: ["dhëmb"],
      morphology: "Nom. indef. dhëmb / def. dhëmbi"
    },
    meaning: {
      sq: "Dhëmbi; strukturë skeletore e gojës, korrespondim i qartë indoevropian.",
      en: "Tooth; skeletal structure of the mouth, clear Indo-European correspondence."
    },
    matrix: { pie: "*dont- / *dent-", protoAlbanian: "*danta", sanskrit: "dát", greek: "odous", latin: "dens", germanic: "tunþuz" },
    falsificationCondition: "Phonetic mismatch in the voiced dental fricative reflex.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10138",
    concept: "FOOT / LEG",
    lemma: "këmbë",
    category: "philological",
    lenses: ["embodied", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["këmbë"],
      tosk: ["këmbë"],
      morphology: "Nom. indef. këmbë / def. këmba"
    },
    meaning: {
      sq: "Këmba; gjymtyrë lëvizjeje, me zhvillim të veçantë semantik në shqipe.",
      en: "Foot/leg; limb of locomotion, with specialized semantic evolution in Albanian."
    },
    matrix: { pie: "*kamp- / *knemb-", protoAlbanian: "*kambā", sanskrit: "kampe", greek: "kampē", latin: "cambire", germanic: "hamfs" },
    falsificationCondition: "Demonstrating that the nasal cluster is a late medieval Romance borrowing.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10139",
    concept: "HEART",
    lemma: "zemër",
    category: "philological",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zemër"],
      tosk: ["zemër"],
      morphology: "Nom. indef. zemër / def. zemra"
    },
    meaning: {
      sq: "Zemra, qendra emocionale dhe jetësore; ruajtje e rrënjës së vjetër të korpusit IE.",
      en: "Heart, emotional and vital center; preservation of the old IE corpus root."
    },
    matrix: { pie: "*kērd- / *krd-", protoAlbanian: "*kērmetā", sanskrit: "hṛd-", greek: "kardia", latin: "cor", germanic: "hertan" },
    falsificationCondition: "Irregular development of the initial voiceless stop cluster.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10140",
    concept: "MOTHER",
    lemma: "nënë",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["nënë"],
      tosk: ["nënë"],
      morphology: "Nom. indef. nënë / def. nëna"
    },
    meaning: {
      sq: "Nëna, termi bazë i familjes; fjalë fëminore universale me reflektim të hershëm.",
      en: "Mother, core family term; universal nursery word with early historical reflection."
    },
    matrix: { pie: "*nna / *nan-", protoAlbanian: "*nānā", sanskrit: "nānā", greek: "nēnnē", latin: "nonna", germanic: "nana" },
    falsificationCondition: "Proof of recent nursery-word convergence without systemic sound laws.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10141",
    concept: "FATHER",
    lemma: "atë",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["atë"],
      tosk: ["atë"],
      morphology: "Nom. indef. atë / def. ati"
    },
    meaning: {
      sq: "Ati, babai; term i trashëguar i strukturës patriarkale indoevropiane.",
      en: "Father; inherited term of the patriarchal Indo-European structure."
    },
    matrix: { pie: "*atta", protoAlbanian: "*attā", sanskrit: "atta", greek: "atta", latin: "attus", germanic: "atta" },
    falsificationCondition: "Attestation as a late ecclesiastical loan from liturgical languages.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10142",
    concept: "BROTHER",
    lemma: "vëlla",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["vëlla"],
      tosk: ["vëlla"],
      morphology: "Nom. indef. vëlla / def. vëllai"
    },
    meaning: {
      sq: "Vëllai; term i trashëguar i linjës së gjakut dhe organizimit fisnor.",
      en: "Brother; inherited term of bloodline and tribal organization."
    },
    matrix: { pie: "*bhrāter", protoAlbanian: "*brātrā", sanskrit: "bhrātr", greek: "phratēr", latin: "frāter", germanic: "brōþar" },
    falsificationCondition: "Proof of loan adaptation from South Slavic medieval structures.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10143",
    concept: "SON / BOY",
    lemma: "djalë",
    category: "kinship",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["djalë"],
      tosk: ["djalë"],
      morphology: "Nom. indef. djalë / def. djali"
    },
    meaning: {
      sq: "Djali, i riu; term qendror i trashëgimisë familjare në hapësirën shqiptare.",
      en: "Boy, son, youth; central term of family heritage in the Albanian space."
    },
    matrix: { pie: "*g(h)el- (to shine/grow)", protoAlbanian: "*gali-", sanskrit: "harī", greek: "chloros", latin: "galbanus" },
    falsificationCondition: "Demonstrating a late Balkan Romance substrate derivation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10144",
    concept: "DAUGHTER / GIRL",
    lemma: "vajzë",
    category: "kinship",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["vajzë", "goca"],
      tosk: ["vajzë"],
      morphology: "Nom. indef. vajzë / def. vajza"
    },
    meaning: {
      sq: "Vajza; term i përhapur për fëmijën femër, me histori komplekse leksikore rajonale.",
      en: "Girl, daughter; widespread term for female child with complex regional lexical history."
    },
    matrix: { pie: "Substratum / Regional innovation", protoAlbanian: "*vagi-", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Clear documentation of a modern dialectal neologism.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  }
];
