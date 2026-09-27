export const lexicalCorpus = [
  // --- A. BASIC HUMAN VOCABULARY (1-10) ---
  {
    id: "Q10201",
    concept: "HEAD",
    lemma: "krye",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["krye"],
      tosk: ["krye"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. krye / def. kryet",
      phonology: "IPA: [kryɛ]"
    },
    claims: [
      { id: "C-10201-1", type: "etymological", status: "SUPPORTED", description: "Inherited from old Indo-European root structures." }
    ],
    matrix: { pie: "*kara- / *kardh-", protoAlbanian: "*krūja", sanskrit: "śīrṣan", greek: "karanon", latin: "Not yet established" },
    falsificationCondition: "Sound shift discrepancy against regular development of ancient voiceless stops.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10202",
    concept: "NOSE",
    lemma: "hundë",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hundë", "hunë"],
      tosk: ["hundë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. hundë / hunë (Gheg nasalized variant)",
      phonology: "IPA: [hundə] / [hunə]"
    },
    claims: [
      { id: "C-10202-1", type: "etymological", status: "SUPPORTED", description: "Gheg form preserves northern nasalization reflex." }
    ],
    matrix: { pie: "*nas- / *knu-", protoAlbanian: "*nāndā", sanskrit: "nāsā", greek: "rhis", latin: "nāris" },
    falsificationCondition: "Proof of recent analogical nasalization without historical root depth.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10203",
    concept: "HAND",
    lemma: "dorë",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dorë"],
      tosk: ["dorë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dorë / def. dora",
      phonology: "IPA: [dɔrə]"
    },
    claims: [
      { id: "C-10203-1", type: "etymological", status: "SUPPORTED", description: "Direct continuation of core Indo-European body architecture." }
    ],
    matrix: { pie: "*ghē(r)- / *ghor-", protoAlbanian: "*dōrā", sanskrit: "hástah", greek: "kheir", latin: "Not yet established" },
    falsificationCondition: "Inconsistent sound law correspondence for dental stop reflections.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10204",
    concept: "EYE",
    lemma: "sy",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["sy", "syri"],
      tosk: ["sy", "syri"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. sy / def. syri",
      phonology: "IPA: [sy]"
    },
    claims: [
      { id: "C-10204-1", type: "etymological", status: "SUPPORTED", description: "PIE *okʷ- ('to see')." }
    ],
    matrix: { pie: "*okʷ-", protoAlbanian: "*oksi", sanskrit: "akṣi", greek: "opsis", latin: "oculus" },
    falsificationCondition: "Demonstrating that phonology reflects an accidental homophone rather than cognate inheritance.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10205",
    concept: "MOUTH",
    lemma: "gojë",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gojë"],
      tosk: ["gojë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gojë / def. goja",
      phonology: "IPA: [ɡɔjə]"
    },
    claims: [
      { id: "C-10205-1", type: "etymological", status: "SUPPORTED", description: "Balkan-Indo-European lexical retention." }
    ],
    matrix: { pie: "*gaug- / *gust-", protoAlbanian: "*gaubjā", sanskrit: "gala", greek: "Not yet established", latin: "gustare" },
    falsificationCondition: "Irregular palatalization reflex inconsistent with standard phonology rules.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10206",
    concept: "TOOTH",
    lemma: "dhëmb",
    category: "human-vocabulary",
    lenses: ["embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhëmb"],
      tosk: ["dhëmb"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dhëmb / def. dhëmbi",
      phonology: "IPA: [ðəmb]"
    },
    claims: [
      { id: "C-10206-1", type: "etymological", status: "SUPPORTED", description: "PIE participial dental root extension." }
    ],
    matrix: { pie: "*dont- / *dent-", protoAlbanian: "*danta", sanskrit: "dát", greek: "odous", latin: "dens" },
    falsificationCondition: "Phonetic mismatch in the voiced dental fricative reflex.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10207",
    concept: "TONGUE / LANGUAGE",
    lemma: "gjuhë",
    category: "human-vocabulary",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gjuhë"],
      tosk: ["gjuhë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gjuhë / def. gjuhja",
      phonology: "IPA: [ɟuhə]"
    },
    claims: [
      { id: "C-10207-1", type: "etymological", status: "SUPPORTED", description: "PIE *nghu-ā ('tongue')." }
    ],
    matrix: { pie: "*nghu-ā", protoAlbanian: "*ngwā-", sanskrit: "jihvā", greek: "glōssa", latin: "lingua" },
    falsificationCondition: "Irregular sound correspondence inconsistent with satem development.",
    sources: [{ id: "Q5-14", author: "Eric Hamp", year: "1972", work: "Studies in Albanian Linguistics", url: "https://www.google.com/search?q=Eric+Hamp" }]
  },
  {
    id: "Q10208",
    concept: "HEART",
    lemma: "zemër",
    category: "human-vocabulary",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zemër"],
      tosk: ["zemër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zemër / def. zemra",
      phonology: "IPA: [zɛmər]"
    },
    claims: [
      { id: "C-10208-1", type: "etymological", status: "SUPPORTED", description: "PIE *kērd- ('heart')." }
    ],
    matrix: { pie: "*kērd- / *krd-", protoAlbanian: "*kērmetā", sanskrit: "hṛd-", greek: "kardia", latin: "cor" },
    falsificationCondition: "Irregular development of initial voiceless stop clusters.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10209",
    concept: "SISTER",
    lemma: "motër",
    category: "human-vocabulary",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["motër"],
      tosk: ["motër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. motër / def. motra",
      phonology: "IPA: [mɔtər]"
    },
    claims: [
      { id: "C-10209-1", type: "etymological", status: "SUPPORTED", description: "Paleo-Balkan independent kinship retention." }
    ],
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*moterā", sanskrit: "svāsar-", greek: "adelphē", latin: "soror" },
    falsificationCondition: "Proof of a regular loan source in neighboring medieval languages.",
    sources: [{ id: "Q5-08", author: "Eqrem Çabej", year: "1960", work: "Studime gjuhësore II", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10210",
    concept: "BROTHER",
    lemma: "vëlla",
    category: "human-vocabulary",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["vëlla"],
      tosk: ["vëlla"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. vëlla / def. vëllai",
      phonology: "IPA: [vəɫa]"
    },
    claims: [
      { id: "C-10210-1", type: "etymological", status: "SUPPORTED", description: "PIE *bhrāter ('brother')." }
    ],
    matrix: { pie: "*bhrāter", protoAlbanian: "*brātrā", sanskrit: "bhrātr", greek: "phratēr", latin: "frāter" },
    falsificationCondition: "Proof of loan adaptation from South Slavic medieval structures.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },

  // --- B. FUNDAMENTAL VERBS (11-20) ---
  {
    id: "Q10211",
    concept: "TO DO / MAKE",
    lemma: "me ba",
    category: "fundamental-verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me ba"],
      tosk: ["me bërë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ba]"
    },
    claims: [
      { id: "C-10211-1", type: "etymological", status: "SUPPORTED", description: "Native root connected with production and agency." }
    ],
    matrix: { pie: "*bhau- / *bhu-", protoAlbanian: "*bā-", sanskrit: "bhavati", greek: "phuō", latin: "fīere" },
    falsificationCondition: "Demonstrating that 'ba' is a late contraction of 'bërë' without historical depth.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10212",
    concept: "TO GIVE",
    lemma: "me dhan",
    category: "fundamental-verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dhan"],
      tosk: ["me dhënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ðan]"
    },
    claims: [
      { id: "C-10212-1", type: "etymological", status: "SUPPORTED", description: "PIE *dō- ('to give')." }
    ],
    matrix: { pie: "*dō-", protoAlbanian: "*dān-", sanskrit: "dāti", greek: "didōmi", latin: "dare" },
    falsificationCondition: "Demonstrating that the infinitive particle structure is a recent contact artifact.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10213",
    concept: "TO TAKE",
    lemma: "me marr",
    category: "fundamental-verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me marr"],
      tosk: ["me marrë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ mar]"
    },
    claims: [
      { id: "C-10213-1", type: "etymological", status: "SUPPORTED", description: "Robust phonetic retention of PIE root *smer-." }
    ],
    matrix: { pie: "*smer- / *mar-", protoAlbanian: "*marr-", sanskrit: "smarati", greek: "mermera", latin: "memor" },
    falsificationCondition: "Irregular consonant cluster evolution.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10214",
    concept: "TO GO",
    lemma: "me shkue",
    category: "fundamental-verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me shkue"],
      tosk: ["me shkuar"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ʃkuɛ]"
    },
    claims: [
      { id: "C-10214-1", type: "etymological", status: "SUPPORTED", description: "Classical northern motion verb derivation." }
    ],
    matrix: { pie: "*skeu-", protoAlbanian: "*skud-", sanskrit: "cyavate", greek: "skuedh-", latin: "exuere" },
    falsificationCondition: "Proof of late lexical innovation unique to western Balkan Romance contact.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10215",
    concept: "TO COME",
    lemma: "me ardhë",
    category: "fundamental-verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me ardhë"],
      tosk: ["me ardhur"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ aɾðə]"
    },
    claims: [
      { id: "C-10215-1", type: "etymological", status: "SUPPORTED", description: "Connection to directional arrival roots." }
    ],
    matrix: { pie: "*are- / *ad-", protoAlbanian: "*ard-", sanskrit: "ṛchati", greek: "erkhesthai", latin: "advenire" },
    falsificationCondition: "Sound shift inconsistency with ancient sonorant dental clusters.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10216",
    concept: "TO STAY / REMAIN",
    lemma: "me nej / me nejt",
    category: "fundamental-verbs",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["me nej", "me nejt"],
      tosk: ["me ndenjur"],
      historical: ["Not yet established"],
      morphology: "Variant Gheg infinitive realizations",
      phonology: "IPA: [mɛ nɛj] / [mɛ nɛjt]"
    },
    claims: [
      { id: "C-10216-1", type: "etymological", status: "OPEN", description: "Derivative of PIE *sed- ('to sit')." }
    ],
    matrix: { pie: "*sed-", protoAlbanian: "*ndēn-", sanskrit: "sīdati", greek: "hezomai", latin: "sidere" },
    falsificationCondition: "Demonstrating that 'nej' is a recent contraction devoid of historical root depth.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10217",
    concept: "TO SEE",
    lemma: "me pa",
    category: "fundamental-verbs",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me pa"],
      tosk: ["me parë", "me pa"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ pa]"
    },
    claims: [
      { id: "C-10217-1", type: "etymological", status: "SUPPORTED", description: "Primary visual perception root of Albanian." }
    ],
    matrix: { pie: "*per-", protoAlbanian: "*pā-", sanskrit: "párayati", greek: "peira", latin: "peritus" },
    falsificationCondition: "Incompatibility with regular contraction laws of historic vowels.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10218",
    concept: "TO KNOW",
    lemma: "me dit",
    category: "fundamental-verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dit"],
      tosk: ["me ditur"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ dit]"
    },
    claims: [
      { id: "C-10218-1", type: "etymological", status: "SUPPORTED", description: "Direct Indo-European cognitive root correspondence." }
    ],
    matrix: { pie: "*gno- / *dhē-", protoAlbanian: "*dit-", sanskrit: "jānāti", greek: "gignōskō", latin: "gnōscere" },
    falsificationCondition: "Proof of secondary borrowing from medieval Slavic participial forms.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10219",
    concept: "TO SPEAK / SAY",
    lemma: "me thanë",
    category: "fundamental-verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me thanë"],
      tosk: ["me thënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ θanə]"
    },
    claims: [
      { id: "C-10219-1", type: "etymological", status: "SUPPORTED", description: "Verbal root for utterance and speech." }
    ],
    matrix: { pie: "*kens- / *kwan-", protoAlbanian: "*than-", sanskrit: "śaṃsati", greek: "kenos", latin: "cēnsere" },
    falsificationCondition: "Phonological mismatch in the voiceless interdental fricative reflex.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10220",
    concept: "TO EAT",
    lemma: "me hangër",
    category: "fundamental-verbs",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me hangër"],
      tosk: ["me ngrënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ haŋɡər]"
    },
    claims: [
      { id: "C-10220-1", type: "etymological", status: "SUPPORTED", description: "PIE *ed- ('to eat') with nasal expansion." }
    ],
    matrix: { pie: "*ed-", protoAlbanian: "*eng-", sanskrit: "atti", greek: "edō", latin: "edere", germanic: "etan" },
    falsificationCondition: "Irregular nasal stop cluster insertion.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },

  // --- C. NATURAL WORLD (21-30) ---
  {
    id: "Q10120",
    concept: "WATER",
    lemma: "uj",
    category: "natural-world",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["uj"],
      tosk: ["ujë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. uj / def. uji",
      phonology: "IPA: [uj]"
    },
    claims: [
      { id: "C-10120-1", type: "etymological", status: "SUPPORTED", description: "PIE *wed- ('water, wet')." }
    ],
    matrix: { pie: "*wed-", protoAlbanian: "*uda", sanskrit: "udán", greek: "hōdōr", latin: "unda" },
    falsificationCondition: "Sound shift mismatch under standard Albanian historical phonology rules.",
    sources: [{ id: "Q5-03", author: "Herman Hirt", year: "1909", work: "Indogermanische Grammatik", url: "https://archive.org/details/indogermanischeg02hirtuoft" }]
  },
  {
    id: "Q10121",
    concept: "FIRE",
    lemma: "zjerm",
    category: "natural-world",
    lenses: ["mythology", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zjerm"],
      tosk: ["zjarr"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zjerm / def. zjermi",
      phonology: "IPA: [zjɛrm]"
    },
    claims: [
      { id: "C-10121-1", type: "etymological", status: "SUPPORTED", description: "PIE *gʷher- ('warm, hot')." }
    ],
    matrix: { pie: "*gʷher-", protoAlbanian: "*dzermā", sanskrit: "gharmá", greek: "thermos", latin: "formus" },
    falsificationCondition: "Definitive phonetic proof resolving the initial stop reflex as a secondary innovation.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10122",
    concept: "EARTH",
    lemma: "dhe",
    category: "natural-world",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhe"],
      tosk: ["dhe"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dhe / def. dheu",
      phonology: "IPA: [ðɛ]"
    },
    claims: [
      { id: "C-10122-1", type: "etymological", status: "SUPPORTED", description: "PIE spatial rooting." }
    ],
    matrix: { pie: "*dhē-", protoAlbanian: "*dhē", sanskrit: "dhā-", greek: "thesis", latin: "facere" },
    falsificationCondition: "Proof of a late medieval loan adaptation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10123",
    concept: "STONE",
    lemma: "gur",
    category: "natural-world",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gur"],
      tosk: ["gur"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gur / def. guri",
      phonology: "IPA: [ɡuɾ]"
    },
    claims: [
      { id: "C-10123-1", type: "etymological", status: "SUPPORTED", description: "PIE *gʷur- ('heavy, stone')." }
    ],
    matrix: { pie: "*gʷur-", protoAlbanian: "*gurā", sanskrit: "giri-", greek: "baris", latin: "gravis" },
    falsificationCondition: "Irregular consonant correspondence across neighboring dialects.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10124",
    concept: "MOUNTAIN",
    lemma: "mal",
    category: "natural-world",
    lenses: ["comparative"],
    status: "OPEN",
    attestations: {
      gheg: ["mal"],
      tosk: ["mal"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mal / def. mali",
      phonology: "IPA: [mal]"
    },
    claims: [
      { id: "C-10124-1", type: "etymological", status: "OPEN", description: "Paleo-Balkan physical substrate retention." }
    ],
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*malis", sanskrit: "n/a", greek: "n/a", latin: "mons (unrelated)" },
    falsificationCondition: "Demonstrating a direct derivation from a known Romance topographical term.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10125",
    concept: "RIVER",
    lemma: "lum",
    category: "natural-world",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["lum"],
      tosk: ["lumë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. lum / def. lumi",
      phonology: "IPA: [lum]"
    },
    claims: [
      { id: "C-10125-1", type: "etymological", status: "SUPPORTED", description: "PIE *leu- ('to flow, wash')." }
    ],
    matrix: { pie: "*leu- / *lu-", protoAlbanian: "*lumo-", sanskrit: "lavah", greek: "lyein", latin: "luere" },
    falsificationCondition: "Late borrowing confirmation from neighboring Slavic river terminology.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10126",
    concept: "SEA",
    lemma: "det",
    category: "natural-world",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["det"],
      tosk: ["det"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. det / def. deti",
      phonology: "IPA: [dɛt]"
    },
    claims: [
      { id: "C-10126-1", type: "etymological", status: "SUPPORTED", description: "PIE *dheub- ('deep')." }
    ],
    matrix: { pie: "*dheub-", protoAlbanian: "*dbtu-", sanskrit: "gahana", greek: "buthos", latin: "altus" },
    falsificationCondition: "Chronological mismatch with inland tribal expansions.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10088",
    concept: "SUN",
    lemma: "diell",
    category: "natural-world",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["diell"],
      tosk: ["diell"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. diell / def. dielli",
      phonology: "IPA: [diɛɫ]"
    },
    claims: [
      { id: "C-10088-1", type: "etymological", status: "SUPPORTED", description: "PIE *dyeu- ('sky, bright day')." }
    ],
    matrix: { pie: "*dyeu-", protoAlbanian: "*dī-", sanskrit: "Dyaus", greek: "Zeus / Dios", latin: "Dies" },
    falsificationCondition: "Discovery of pre-Indo-European loan strata replacing primary solar nomenclature.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10127",
    concept: "MOON",
    lemma: "hana",
    category: "natural-world",
    lenses: ["mythology", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hana"],
      tosk: ["hënë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. hanë / def. hana",
      phonology: "IPA: [hana]"
    },
    claims: [
      { id: "C-10127-1", type: "etymological", status: "SUPPORTED", description: "PIE *mēn(ō)t- ('moon, month')." }
    ],
    matrix: { pie: "*mēn(ō)t-", protoAlbanian: "*mānsā", sanskrit: "mās-", greek: "mēn", latin: "mīnsis" },
    falsificationCondition: "Irregular nasal development unexplained by historical Albanian phonology rules.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10102",
    concept: "NIGHT",
    lemma: "natë",
    category: "natural-world",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["natë"],
      tosk: ["natë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. natë / def. nata",
      phonology: "IPA: [natə]"
    },
    claims: [
      { id: "C-10102-1", type: "etymological", status: "SUPPORTED", description: "PIE *nokʷt- ('night')." }
    ],
    matrix: { pie: "*nokʷt-", protoAlbanian: "*natā", sanskrit: "nákti", greek: "nyx", latin: "nox" },
    falsificationCondition: "Chronological mismatch with known Balto-Slavic sound shifts.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  }
];
