export const lexicalCorpus = [
  // --- POPULATION 1: CORE GHEG LEXICAL UNITS (1 - 40) ---
  {
    id: "Q10201",
    concept: "HEAD",
    lemma: "krye",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["krye"],
      tosk: ["krye"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. krye / def. kryet",
      phonology: "IPA: [kryɛ]"
    },
    claims: [{ id: "C-10201-1", type: "etymological", status: "SUPPORTED", description: "Inherited from old Indo-European root structures." }],
    matrix: { pie: "*kara- / *kardh-", protoAlbanian: "*krūja", sanskrit: "śīrṣan", greek: "karanon", latin: "Not yet established" },
    falsificationCondition: "Sound shift discrepancy against regular development of ancient voiceless stops.",
    whyRationale: "Evidence shows stable internal phonological reflexes across dialects matching regular sound laws without borrowing vectors.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10202",
    concept: "NOSE",
    lemma: "hundë",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hundë", "hunë"],
      tosk: ["hundë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. hundë / hunë (Gheg nasalized variant)",
      phonology: "IPA: [hundə] / [hunə]"
    },
    claims: [{ id: "C-10202-1", type: "etymological", status: "SUPPORTED", description: "Gheg form preserves northern nasalization reflex." }],
    matrix: { pie: "*nas- / *knu-", protoAlbanian: "*nāndā", sanskrit: "nāsā", greek: "rhis", latin: "nāris" },
    falsificationCondition: "Proof of recent analogical nasalization without historical root depth.",
    whyRationale: "The alternation between hundë and hunë tracks perfectly with regular Gheg loss of intervocalic/cluster nasals before obstruents.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10203",
    concept: "HAND",
    lemma: "dorë",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dorë"],
      tosk: ["dorë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dorë / def. dora",
      phonology: "IPA: [dɔrə]"
    },
    claims: [{ id: "C-10203-1", type: "etymological", status: "SUPPORTED", description: "Direct continuation of core Indo-European body architecture." }],
    matrix: { pie: "*ghē(r)- / *ghor-", protoAlbanian: "*dōrā", sanskrit: "hástah", greek: "kheir", latin: "Not yet established" },
    falsificationCondition: "Inconsistent sound law correspondence for dental stop reflections.",
    whyRationale: "Phonetic shifts conform to standard satem developments with robust cross-dialectal attestation.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10204",
    concept: "EYE",
    lemma: "sy",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["sy", "syri"],
      tosk: ["sy", "syri"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. sy / def. syri",
      phonology: "IPA: [sy]"
    },
    claims: [{ id: "C-10204-1", type: "etymological", status: "SUPPORTED", description: "PIE *okʷ- ('to see')." }],
    matrix: { pie: "*okʷ-", protoAlbanian: "*oksi", sanskrit: "akṣi", greek: "opsis", latin: "oculus" },
    falsificationCondition: "Demonstrating that phonology reflects an accidental homophone rather than cognate inheritance.",
    whyRationale: "Regular historical palatalization of labiovelars before front vowels yields the standard Albanian reflex.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10205",
    concept: "MOUTH",
    lemma: "gojë",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gojë"],
      tosk: ["gojë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gojë / def. goja",
      phonology: "IPA: [ɡɔjə]"
    },
    claims: [{ id: "C-10205-1", type: "etymological", status: "SUPPORTED", description: "Balkan-Indo-European lexical retention." }],
    matrix: { pie: "*gaug- / *gust-", protoAlbanian: "*gaubjā", sanskrit: "gala", greek: "Not yet established", latin: "gustare" },
    falsificationCondition: "Irregular palatalization reflex inconsistent with standard phonology rules.",
    whyRationale: "Retained across isolated mountain dialects, bypassing secondary Romance replacement.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10206",
    concept: "TOOTH",
    lemma: "dhëmb",
    category: "body",
    lenses: ["embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhëmb"],
      tosk: ["dhëmb"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dhëmb / def. dhëmbi",
      phonology: "IPA: [ðəmb]"
    },
    claims: [{ id: "C-10206-1", type: "etymological", status: "SUPPORTED", description: "PIE participial dental root extension." }],
    matrix: { pie: "*dont- / *dent-", protoAlbanian: "*danta", sanskrit: "dát", greek: "odous", latin: "dens" },
    falsificationCondition: "Phonetic mismatch in the voiced dental fricative reflex.",
    whyRationale: "Consistent dental stop voicing and nasal preservation match archaic branch parameters.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10207",
    concept: "TONGUE / LANGUAGE",
    lemma: "gjuhë",
    category: "body",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gjuhë"],
      tosk: ["gjuhë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gjuhë / def. gjuhja",
      phonology: "IPA: [ɟuhə]"
    },
    claims: [{ id: "C-10207-1", type: "etymological", status: "SUPPORTED", description: "PIE *nghu-ā ('tongue')." }],
    matrix: { pie: "*nghu-ā", protoAlbanian: "*ngwā-", sanskrit: "jihvā", greek: "glōssa", latin: "lingua" },
    falsificationCondition: "Irregular sound correspondence inconsistent with satem development.",
    whyRationale: "Phonetic evolution follows exact trajectories established for satem nasalized velars.",
    sources: [{ id: "Q5-14", author: "Eric Hamp", year: "1972", work: "Studies in Albanian Linguistics", url: "https://www.google.com/search?q=Eric+Hamp" }]
  },
  {
    id: "Q10208",
    concept: "HEART",
    lemma: "zemër",
    category: "body",
    lenses: ["embodied", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zemër"],
      tosk: ["zemër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zemër / def. zemra",
      phonology: "IPA: [zɛmər]"
    },
    claims: [{ id: "C-10208-1", type: "etymological", status: "SUPPORTED", description: "PIE *kērd- ('heart')." }],
    matrix: { pie: "*kērd- / *krd-", protoAlbanian: "*kērmetā", sanskrit: "hṛd-", greek: "kardia", latin: "cor" },
    falsificationCondition: "Irregular development of initial voiceless stop clusters.",
    whyRationale: "Well-attested across old texts with predictable metathesis and suffix extension.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10209",
    concept: "SISTER",
    lemma: "motër",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["motër"],
      tosk: ["motër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. motër / def. motra",
      phonology: "IPA: [mɔtər]"
    },
    claims: [{ id: "C-10209-1", type: "etymological", status: "SUPPORTED", description: "Paleo-Balkan independent kinship retention." }],
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*moterā", sanskrit: "svāsar-", greek: "adelphē", latin: "soror" },
    falsificationCondition: "Proof of a regular loan source in neighboring medieval languages.",
    whyRationale: "Preserved independently of standard Indo-European soror terms, pointing to substrate continuity.",
    sources: [{ id: "Q5-08", author: "Eqrem Çabej", year: "1960", work: "Studime gjuhësore II", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10210",
    concept: "BROTHER",
    lemma: "vëlla",
    category: "kinship",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["vëlla"],
      tosk: ["vëlla"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. vëlla / def. vëllai",
      phonology: "IPA: [vəɫa]"
    },
    claims: [{ id: "C-10210-1", type: "etymological", status: "SUPPORTED", description: "PIE *bhrāter ('brother')." }],
    matrix: { pie: "*bhrāter", protoAlbanian: "*brātrā", sanskrit: "bhrātr", greek: "phratēr", latin: "frāter" },
    falsificationCondition: "Proof of loan adaptation from South Slavic medieval structures.",
    whyRationale: "Phonological simplification of the original cluster follows internal Albanian phonetic drift.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10211",
    concept: "TO DO / MAKE",
    lemma: "me ba",
    category: "verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me ba"],
      tosk: ["me bërë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ba]"
    },
    claims: [{ id: "C-10211-1", type: "etymological", status: "SUPPORTED", description: "Native root connected with production and agency." }],
    matrix: { pie: "*bhau- / *bhu-", protoAlbanian: "*bā-", sanskrit: "bhavati", greek: "phuō", latin: "fīere" },
    falsificationCondition: "Demonstrating that 'ba' is a late contraction of 'bërë' without historical depth.",
    whyRationale: "Gheg infinitive marker and root contraction reflect archaic northern morphological habits.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10212",
    concept: "TO GIVE",
    lemma: "me dhan",
    category: "verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dhan"],
      tosk: ["me dhënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ðan]"
    },
    claims: [{ id: "C-10212-1", type: "etymological", status: "SUPPORTED", description: "PIE *dō- ('to give')." }],
    matrix: { pie: "*dō-", protoAlbanian: "*dān-", sanskrit: "dāti", greek: "didōmi", latin: "dare" },
    falsificationCondition: "Demonstrating that the infinitive particle structure is a recent contact artifact.",
    whyRationale: "Direct inheritance verified through comparative modal paradigms.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10213",
    concept: "TO TAKE",
    lemma: "me marr",
    category: "verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me marr"],
      tosk: ["me marrë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ mar]"
    },
    claims: [{ id: "C-10213-1", type: "etymological", status: "SUPPORTED", description: "Robust phonetic retention of PIE root *smer-." }],
    matrix: { pie: "*smer- / *mar-", protoAlbanian: "*marr-", sanskrit: "smarati", greek: "mermera", latin: "memor" },
    falsificationCondition: "Irregular consonant cluster evolution.",
    whyRationale: "Maintains clear historical links across conservative branch nodes.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10214",
    concept: "TO GO",
    lemma: "me shkue",
    category: "verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me shkue"],
      tosk: ["me shkuar"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ ʃkuɛ]"
    },
    claims: [{ id: "C-10214-1", type: "etymological", status: "SUPPORTED", description: "Classical northern motion verb derivation." }],
    matrix: { pie: "*skeu-", protoAlbanian: "*skud-", sanskrit: "cyavate", greek: "skuedh-", latin: "exuere" },
    falsificationCondition: "Proof of late lexical innovation unique to western Balkan Romance contact.",
    whyRationale: "Northern dialect retention confirms preservation of archaic participial structures.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10215",
    concept: "TO COME",
    lemma: "me ardhë",
    category: "verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me ardhë"],
      tosk: ["me ardhur"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ aɾðə]"
    },
    claims: [{ id: "C-10215-1", type: "etymological", status: "SUPPORTED", description: "Connection to directional arrival roots." }],
    matrix: { pie: "*are- / *ad-", protoAlbanian: "*ard-", sanskrit: "ṛchati", greek: "erkhesthai", latin: "advenire" },
    falsificationCondition: "Sound shift inconsistency with ancient sonorant dental clusters.",
    whyRationale: "Phonetic shifts align with predictable resonant developments.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10216",
    concept: "TO STAY / REMAIN",
    lemma: "me nej / me nejt",
    category: "verbs",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["me nej", "me nejt"],
      tosk: ["me ndenjur"],
      historical: ["Not yet established"],
      morphology: "Variant Gheg infinitive realizations",
      phonology: "IPA: [mɛ nɛj] / [mɛ nɛjt]"
    },
    claims: [{ id: "C-10216-1", type: "etymological", status: "OPEN", description: "Derivative of PIE *sed- ('to sit')." }],
    matrix: { pie: "*sed-", protoAlbanian: "*ndēn-", sanskrit: "sīdati", greek: "hezomai", latin: "sidere" },
    falsificationCondition: "Demonstrating that 'nej' is a recent contraction devoid of historical root depth.",
    whyRationale: "Dual variants require further corpus validation across old Gheg literary sources.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10217",
    concept: "TO SEE",
    lemma: "me pa",
    category: "verbs",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me pa"],
      tosk: ["me parë", "me pa"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ pa]"
    },
    claims: [{ id: "C-10217-1", type: "etymological", status: "SUPPORTED", description: "Primary visual perception root of Albanian." }],
    matrix: { pie: "*per-", protoAlbanian: "*pā-", sanskrit: "párayati", greek: "peira", latin: "peritus" },
    falsificationCondition: "Incompatibility with regular contraction laws of historic vowels.",
    whyRationale: "Vocalic contraction follows strict historical phonetic pathways.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10218",
    concept: "TO KNOW",
    lemma: "me dit",
    category: "verbs",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me dit"],
      tosk: ["me ditur"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ dit]"
    },
    claims: [{ id: "C-10218-1", type: "etymological", status: "SUPPORTED", description: "Direct Indo-European cognitive root correspondence." }],
    matrix: { pie: "*gno- / *dhē-", protoAlbanian: "*dit-", sanskrit: "jānāti", greek: "gignōskō", latin: "gnōscere" },
    falsificationCondition: "Proof of secondary borrowing from medieval Slavic participial forms.",
    whyRationale: "Root preservation shows archaic Indo-European cognitive semantics.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10219",
    concept: "TO SPEAK / SAY",
    lemma: "me thanë",
    category: "verbs",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me thanë"],
      tosk: ["me thënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ θanə]"
    },
    claims: [{ id: "C-10219-1", type: "etymological", status: "SUPPORTED", description: "Verbal root for utterance and speech." }],
    matrix: { pie: "*kens- / *kwan-", protoAlbanian: "*than-", sanskrit: "śaṃsati", greek: "kenos", latin: "cēnsere" },
    falsificationCondition: "Phonological mismatch in the voiceless interdental fricative reflex.",
    whyRationale: "Interdental realization maps directly to historical phonology standards.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10220",
    concept: "TO EAT",
    lemma: "me hangër",
    category: "verbs",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["me hangër"],
      tosk: ["me ngrënë"],
      historical: ["Not yet established"],
      morphology: "Gheg infinitive construction",
      phonology: "IPA: [mɛ haŋɡər]"
    },
    claims: [{ id: "C-10220-1", type: "etymological", status: "SUPPORTED", description: "PIE *ed- ('to eat') with nasal expansion." }],
    matrix: { pie: "*ed-", protoAlbanian: "*eng-", sanskrit: "atti", greek: "edō", latin: "edere", germanic: "etan" },
    falsificationCondition: "Irregular nasal stop cluster insertion.",
    whyRationale: "Gheg form preserves archaic nasal infix structure missing in standard Tosk.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10120",
    concept: "WATER",
    lemma: "uj",
    category: "environment",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["uj"],
      tosk: ["ujë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. uj / def. uji",
      phonology: "IPA: [uj]"
    },
    claims: [{ id: "C-10120-1", type: "etymological", status: "SUPPORTED", description: "PIE *wed- ('water, wet')." }],
    matrix: { pie: "*wed-", protoAlbanian: "*uda", sanskrit: "udán", greek: "hōdōr", latin: "unda" },
    falsificationCondition: "Sound shift mismatch under standard Albanian historical phonology rules.",
    whyRationale: "Basic hydronymic term with ubiquitous Indo-European cognate network.",
    sources: [{ id: "Q5-03", author: "Herman Hirt", year: "1909", work: "Indogermanische Grammatik", url: "https://archive.org/details/indogermanischeg02hirtuoft" }]
  },
  {
    id: "Q10121",
    concept: "FIRE",
    lemma: "zjerm",
    category: "environment",
    lenses: ["mythology", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zjerm"],
      tosk: ["zjarr"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zjerm / def. zjermi",
      phonology: "IPA: [zjɛrm]"
    },
    claims: [{ id: "C-10121-1", type: "etymological", status: "SUPPORTED", description: "PIE *gʷher- ('warm, hot')." }],
    matrix: { pie: "*gʷher-", protoAlbanian: "*dzermā", sanskrit: "gharmá", greek: "thermos", latin: "formus" },
    falsificationCondition: "Definitive phonetic proof resolving the initial stop reflex as a secondary innovation.",
    whyRationale: "Gheg terminal liquid retention reflects older nominal stem formations.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10122",
    concept: "EARTH",
    lemma: "dhe",
    category: "environment",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhe"],
      tosk: ["dhe"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dhe / def. dheu",
      phonology: "IPA: [ðɛ]"
    },
    claims: [{ id: "C-10122-1", type: "etymological", status: "SUPPORTED", description: "PIE spatial rooting." }],
    matrix: { pie: "*dhē-", protoAlbanian: "*dhē", sanskrit: "dhā-", greek: "thesis", latin: "facere" },
    falsificationCondition: "Proof of a late medieval loan adaptation.",
    whyRationale: "Stable monosyllabic retention across all primary dialects.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10123",
    concept: "STONE",
    lemma: "gur",
    category: "environment",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gur"],
      tosk: ["gur"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gur / def. guri",
      phonology: "IPA: [ɡuɾ]"
    },
    claims: [{ id: "C-10123-1", type: "etymological", status: "SUPPORTED", description: "PIE *gʷur- ('heavy, stone')." }],
    matrix: { pie: "*gʷur-", protoAlbanian: "*gurā", sanskrit: "giri-", greek: "baris", latin: "gravis" },
    falsificationCondition: "Irregular consonant correspondence across neighboring dialects.",
    whyRationale: "Essential geological terminology showing regular historical sound shifts.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10124",
    concept: "MOUNTAIN",
    lemma: "mal",
    category: "environment",
    lenses: ["comparative"],
    status: "OPEN",
    attestations: {
      gheg: ["mal"],
      tosk: ["mal"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mal / def. mali",
      phonology: "IPA: [mal]"
    },
    claims: [{ id: "C-10124-1", type: "etymological", status: "OPEN", description: "Paleo-Balkan physical substrate retention." }],
    matrix: { pie: "Substratum / Paleo-Balkan", protoAlbanian: "*malis", sanskrit: "n/a", greek: "n/a", latin: "mons (unrelated)" },
    falsificationCondition: "Demonstrating a direct derivation from a known Romance topographical term.",
    whyRationale: "Evidence insufficient to establish direction of transmission between Illyrian and Latin strata.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10125",
    concept: "RIVER",
    lemma: "lum",
    category: "environment",
    lenses: ["comparative", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["lum"],
      tosk: ["lumë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. lum / def. lumi",
      phonology: "IPA: [lum]"
    },
    claims: [{ id: "C-10125-1", type: "etymological", status: "SUPPORTED", description: "PIE *leu- ('to flow, wash')." }],
    matrix: { pie: "*leu- / *lu-", protoAlbanian: "*lumo-", sanskrit: "lavah", greek: "lyein", latin: "luere" },
    falsificationCondition: "Late borrowing confirmation from neighboring Slavic river terminology.",
    whyRationale: "Gheg form omits secondary standard vocalic ending, preserving ancient root shape.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10126",
    concept: "SEA",
    lemma: "det",
    category: "environment",
    lenses: ["comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["det"],
      tosk: ["det"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. det / def. deti",
      phonology: "IPA: [dɛt]"
    },
    claims: [{ id: "C-10126-1", type: "etymological", status: "SUPPORTED", description: "PIE *dheub- ('deep')." }],
    matrix: { pie: "*dheub-", protoAlbanian: "*dbtu-", sanskrit: "gahana", greek: "buthos", latin: "altus" },
    falsificationCondition: "Chronological mismatch with inland tribal expansions.",
    whyRationale: "Semantic shift from deep inland water/abyss to open sea matches historical geographic migration.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10088",
    concept: "SUN",
    lemma: "diell",
    category: "environment",
    lenses: ["philological", "comparative", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["diell"],
      tosk: ["diell"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. diell / def. dielli",
      phonology: "IPA: [diɛɫ]"
    },
    claims: [{ id: "C-10088-1", type: "etymological", status: "SUPPORTED", description: "PIE *dyeu- ('sky, bright day')." }],
    matrix: { pie: "*dyeu-", protoAlbanian: "*dī-", sanskrit: "Dyaus", greek: "Zeus / Dios", latin: "Dies" },
    falsificationCondition: "Discovery of pre-Indo-European loan strata replacing primary solar nomenclature.",
    whyRationale: "Direct continuation of primary Indo-European solar deity nomenclature.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10127",
    concept: "MOON",
    lemma: "hana",
    category: "environment",
    lenses: ["mythology", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hana"],
      tosk: ["hënë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. hanë / def. hana",
      phonology: "IPA: [hana]"
    },
    claims: [{ id: "C-10127-1", type: "etymological", status: "SUPPORTED", description: "PIE *mēn(ō)t- ('moon, month')." }],
    matrix: { pie: "*mēn(ō)t-", protoAlbanian: "*mānsā", sanskrit: "mās-", greek: "mēn", latin: "mīnsis" },
    falsificationCondition: "Irregular nasal development unexplained by historical Albanian phonology rules.",
    whyRationale: "Pristine Gheg form preserving ancient nasalization absent in standard Tosk.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10102",
    concept: "NIGHT",
    lemma: "natë",
    category: "environment",
    lenses: ["philological", "comparative"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["natë"],
      tosk: ["natë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. natë / def. nata",
      phonology: "IPA: [natə]"
    },
    claims: [{ id: "C-10102-1", type: "etymological", status: "SUPPORTED", description: "PIE *nokʷt- ('night')." }],
    matrix: { pie: "*nokʷt-", protoAlbanian: "*natā", sanskrit: "nákti", greek: "nyx", latin: "nox" },
    falsificationCondition: "Chronological mismatch with known Balto-Slavic sound shifts.",
    whyRationale: "Direct inherited nocturnal term with regular consonant simplification.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },

  // --- POPULATION 2: COMPARATIVE / PHILOLOGICAL CASES (41 - 60) ---
  {
    id: "Q10301",
    concept: "FIRE / HEAT",
    lemma: "zjarr",
    category: "comparative",
    lenses: ["philological", "mythology"],
    status: "DISPUTED",
    attestations: {
      gheg: ["zjerm"],
      tosk: ["zjarr"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zjarr / def. zjarri",
      phonology: "IPA: [zjaɾ]"
    },
    claims: [
      { id: "C-10301-1", type: "etymological", status: "SUPPORTED", description: "Inherited from PIE *gʷher-." },
      { id: "C-10301-2", type: "substrate", status: "DISPUTED", description: "Proposed Paleo-Balkan areal wanderwort." }
    ],
    matrix: { pie: "*gʷher-", protoAlbanian: "*dzermā", sanskrit: "gharmá", greek: "thermos", latin: "formus" },
    falsificationCondition: "Definitive phonetic proof resolving the initial stop reflex as a secondary innovation.",
    whyRationale: "Competing hypotheses between direct PIE inheritance and areal Balkan substrate borrowing create ongoing scholarly friction.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10302",
    concept: "GOD / MASTER",
    lemma: "zot",
    category: "comparative",
    lenses: ["mythology", "philological"],
    status: "OPEN",
    attestations: {
      gheg: ["zot"],
      tosk: ["zot"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zot / def. zoti",
      phonology: "IPA: [zɔt]"
    },
    claims: [
      { id: "C-10302-1", type: "etymological", status: "OPEN", description: "Compound of *demspoti- ('house lord')." },
      { id: "C-10302-2", type: "substrate", status: "OPEN", description: "Native pre-Christian solar/lordship title." }
    ],
    matrix: { pie: "*demspoti-", protoAlbanian: "*zpot-", sanskrit: "dampati", greek: "despotēs", latin: "dominus" },
    falsificationCondition: "Proof of purely late Christian ecclesiastical loan formation.",
    whyRationale: "Semantic contraction from master of the house to supreme deity requires deeper attestation in pre-Ottoman corpuses.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10303",
    concept: "GRAVEL / RIVERBANK",
    lemma: "zall",
    category: "comparative",
    lenses: ["philological"],
    status: "DISPUTED",
    attestations: {
      gheg: ["zall"],
      tosk: ["zall"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zall / def. zalli",
      phonology: "IPA: [zal]"
    },
    claims: [
      { id: "C-10303-1", type: "substrate", status: "DISPUTED", description: "Illyrian hydronymic substrate reflex." },
      { id: "C-10303-2", type: "loan", status: "DISPUTED", description: "Mediterranean Wanderwort / Romance borrowing." }
    ],
    matrix: { pie: "Paleo-Balkan", protoAlbanian: "*tsal-", sanskrit: "n/a", greek: "n/a", latin: "sabulum (disputed)" },
    falsificationCondition: "Etymological derivation proven from a known medieval Venetian trade term.",
    whyRationale: "Toponymic distribution suggests ancient substrate, but phonetic overlap with Romance terms leaves open debate.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10304",
    concept: "RIVER DRIN",
    lemma: "Drin",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["Drin"],
      tosk: ["Drin"],
      historical: ["Drinus (Classical sources)"],
      morphology: "Proper hydronym",
      phonology: "IPA: [dɾin]"
    },
    claims: [{ id: "C-10304-1", type: "etymological", status: "SUPPORTED", description: "Illyrian *Drinus derived from PIE *drev- ('to run')." }],
    matrix: { pie: "*drev-", protoAlbanian: "*drīnos", sanskrit: "dravati", greek: "dramein", latin: "currere" },
    falsificationCondition: "Hydronymic attestation showing post-Slavic coinage origin.",
    whyRationale: "Continuous classical attestation from antiquity matches regular phonetic evolution into modern Gheg and Tosk.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10305",
    concept: "RIVER MAT",
    lemma: "Mat",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["Mat"],
      tosk: ["Mat"],
      historical: ["Matis (Ancient geography)"],
      morphology: "Proper hydronym / region",
      phonology: "IPA: [mat]"
    },
    claims: [{ id: "C-10305-1", type: "etymological", status: "SUPPORTED", description: "Illyrian *Matis from PIE *mati- ('water channel')." }],
    matrix: { pie: "*mati-", protoAlbanian: "*mati", sanskrit: "mati", greek: "madē", latin: "madere" },
    falsificationCondition: "Demonstration of pure descriptive Albanian nominal creation without ancient substrate depth.",
    whyRationale: "Core regional river name preserved in central Albanian tribal heartlands with ancient hydronymic roots.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10306",
    concept: "COASTAL RIVER VJOSË",
    lemma: "Vjosë",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["Vjosë"],
      tosk: ["Vjosë"],
      historical: ["Aōos (Ancient Greek sources)"],
      morphology: "Proper hydronym",
      phonology: "IPA: [vjɔsə]"
    },
    claims: [{ id: "C-10306-1", type: "etymological", status: "SUPPORTED", description: "Illyrian *Aōos / Vjosë regular sound shift." }],
    matrix: { pie: "Ill. *Aōos", protoAlbanian: "*vjōsā", sanskrit: "n/a", greek: "Aōos", latin: "Vojussa" },
    falsificationCondition: "Inconsistent medieval documentation showing recent artificial naming.",
    whyRationale: "Phonetic adaptation from Greek historical records of the ancient Aōos river matches regular sound laws.",
    sources: [{ id: "Q5-10", author: "Hans Krahe", year: "1955", work: "Die Sprache der alten Illyrier", url: "https://www.google.com/search?q=Hans+Krahe" }]
  },
  {
    id: "Q10307",
    concept: "SERPENT / DRAGON",
    lemma: "gjarpër",
    category: "comparative",
    lenses: ["mythology", "philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gjarpër"],
      tosk: ["gjarpër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gjarpër / def. gjarpri",
      phonology: "IPA: [ɟaɾpəɾ]"
    },
    claims: [{ id: "C-10307-1", type: "etymological", status: "SUPPORTED", description: "PIE *serp- ('to crawl') with nasal suffix extension." }],
    matrix: { pie: "*serp-", protoAlbanian: "*gerp-ro-", sanskrit: "sarpati", greek: "herpōn", latin: "serpere" },
    falsificationCondition: "Demonstrating that the phonetic shape is a secondary expressive coinage rather than inherited reflex.",
    whyRationale: "Retains the archaic root combined with unique Balkan nominal extensions.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10308",
    concept: "WIND / STORM",
    lemma: "erë",
    category: "comparative",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["erë"],
      tosk: ["erë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. erë / def. era",
      phonology: "IPA: [ɛɾə]"
    },
    claims: [
      { id: "C-10308-1", type: "etymological", status: "OPEN", description: "PIE *wes- / *enh2- ('blow, wind')." }
    ],
    matrix: { 
      pie: "*enh2-", 
      protoAlbanian: "*anra", 
      sanskrit: "aniti", 
      greek: "anemos", 
      latin: "animus" 
    },
    falsificationCondition: "Proof of secondary borrowing from Romance meteorological terms.",
    whyRationale: "Vocalic development allows multiple comparative Indo-European candidates.",
    sources: [
      { id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }
    ]
  },
  {
    id: "Q10309",
    concept: "WOLF",
    lemma: "ujk",
    category: "comparative",
    lenses: ["philological", "mythology"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["ujk"],
      tosk: ["ujk"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. ujk / def. ujku",
      phonology: "IPA: [ujk]"
    },
    claims: [{ id: "C-10309-1", type: "etymological", status: "SUPPORTED", description: "PIE *wl̥kʷo- ('wolf')." }],
    matrix: { pie: "*wl̥kʷo-", protoAlbanian: "*ulka", sanskrit: "vṛka-", greek: "lykos", latin: "lupus" },
    falsificationCondition: "Irregular velar stop development under satem phonology rules.",
    whyRationale: "Classic satem vs centum comparative benchmark with regular Albanian sound shifts.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10310",
    concept: "BEAR",
    lemma: "ari",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["ari", "arushë"],
      tosk: ["ari"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. ari / def. ari",
      phonology: "IPA: [aɾi]"
    },
    claims: [{ id: "C-10310-1", type: "etymological", status: "SUPPORTED", description: "PIE *r̥tkos ('bear')." }],
    matrix: { pie: "*r̥tkos", protoAlbanian: "*arkos", sanskrit: "ṛkṣa-", greek: "arktos", latin: "ursus" },
    falsificationCondition: "Proof of southern Balkan areal taboo replacement.",
    whyRationale: "Regular loss of initial syllable and cluster simplification matches historical phonology.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10311",
    concept: "TREE / WOOD",
    lemma: "dru",
    category: "comparative",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dru"],
      tosk: ["dru"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dru / def. druri",
      phonology: "IPA: [dɾu]"
    },
    claims: [{ id: "C-10311-1", type: "etymological", status: "SUPPORTED", description: "PIE *drew- ('tree, wood')." }],
    matrix: { pie: "*drew-", protoAlbanian: "*drū-", sanskrit: "dāru", greek: "drys", latin: "durus" },
    falsificationCondition: "Irregular diphthong reflex under standard dialect splits.",
    whyRationale: "Direct inheritance of the core Indo-European forestry root.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10312",
    concept: "BIRD",
    lemma: "zog",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["zog"],
      tosk: ["zog"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. zog / def. zogu",
      phonology: "IPA: [zɔɡ]"
    },
    claims: [{ id: "C-10312-1", type: "etymological", status: "SUPPORTED", description: "Derivative of PIE *ger- / *gʷg- sound symbolic or animal root." }],
    matrix: { pie: "*gʷēi- / substrate", protoAlbanian: "*dzoga", sanskrit: "n/a", greek: "oion", latin: "avis" },
    falsificationCondition: "Proof of late medieval onomatopoeic coinage.",
    whyRationale: "Well-established root across northern and southern dialects with stable nominal paradigm.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10313",
    concept: "GUEST / STRANGER",
    lemma: "mik",
    category: "comparative",
    lenses: ["philological"],
    status: "DISPUTED",
    attestations: {
      gheg: ["mik"],
      tosk: ["mik"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mik / def. miku",
      phonology: "IPA: [mik]"
    },
    claims: [
      { id: "C-10313-1", type: "etymological", status: "SUPPORTED", description: "Inherited Indo-European hospitality root." },
      { id: "C-10313-2", type: "loan", status: "DISPUTED", description: "Early Slavic loan (*mikъ)." }
    ],
    matrix: { pie: "*smiko- (small/friendly)", protoAlbanian: "*mik-", sanskrit: "sma-", greek: "meilos", latin: "amicus (indirect)" },
    falsificationCondition: "Slavic chronological contact overlap proving absolute borrowing origin.",
    whyRationale: "Semantic evolution between friend and guest generates debate over native vs borrowed status.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10314",
    concept: "BLOOD",
    lemma: "gjak",
    category: "comparative",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["gjak"],
      tosk: ["gjak"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. gjak / def. gjaku",
      phonology: "IPA: [ɟak]"
    },
    claims: [{ id: "C-10314-1", type: "etymological", status: "SUPPORTED", description: "PIE *yekʷ- ('liver/blood fluid') or expressive root." }],
    matrix: { pie: "*yekʷ-", protoAlbanian: "*yakā", sanskrit: "yakṛt", greek: "hēpar", latin: "iecur" },
    falsificationCondition: "Irregular initial palatal stop development.",
    whyRationale: "Central term in Albanian customary law (Kanun) with deep philological roots.",
    sources: [{ id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" }]
  },
  {
    id: "Q10315",
    concept: "BREAD",
    lemma: "bukë",
    category: "comparative",
    lenses: ["philological"],
    status: "DISPUTED",
    attestations: {
      gheg: ["bukë"],
      tosk: ["bukë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. bukë / def. buka",
      phonology: "IPA: [bukə]"
    },
    claims: [
      { id: "C-10315-1", type: "substrate", status: "DISPUTED", description: "Paleo-Balkan agricultural substrate term." },
      { id: "C-10315-2", type: "loan", status: "DISPUTED", description: "Latin *bucca ('mouth/morsel') semantic shift." }
    ],
    matrix: { pie: "Substratum / Latin match", protoAlbanian: "*bukkā", sanskrit: "n/a", greek: "boukkē", latin: "bucca" },
    falsificationCondition: "Proof of pre-Roman agricultural use independent of Latin presence.",
    whyRationale: "One of the most intensely debated cultural terms: native substrate vs. Latin semantic transfer.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10316",
    concept: "CHEESE",
    lemma: "djathë",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["djathë"],
      tosk: ["djathë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. djathë / def. djathi",
      phonology: "IPA: [ɟaθə]"
    },
    claims: [{ id: "C-10316-1", type: "etymological", status: "SUPPORTED", description: "PIE *io- / *dhyā- ('to coagulate/sour')." }],
    matrix: { pie: "*dhyā-", protoAlbanian: "*dyātā", sanskrit: "dadhí", greek: "thōmos", latin: "jus" },
    falsificationCondition: "Irregular dental fricative development.",
    whyRationale: "Strong comparative cognate network with Indo-Eastern dairy terminology (Sanskrit dadhí).",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10317",
    concept: "MILK",
    lemma: "qumësht",
    category: "comparative",
    lenses: ["philological"],
    status: "DISPUTED",
    attestations: {
      gheg: ["qumësht"],
      tosk: ["qumësht"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. qumësht / def. qumështi",
      phonology: "IPA: [qumɛʃt]"
    },
    claims: [
      { id: "C-10317-1", type: "etymological", status: "DISPUTED", description: "Latin *mulsum / *emulsus adaptation." },
      { id: "C-10317-2", type: "substrate", status: "DISPUTED", description: "Archaic pastoral Mediterranean wanderwort." }
    ],
    matrix: { pie: "Uncertain / Latin source", protoAlbanian: "*mult-", sanskrit: "n/a", greek: "amelgō", latin: "mulgere" },
    falsificationCondition: "Phonological proof separating the initial cluster from Romance developments.",
    whyRationale: "Widely treated as an early pastoral loan from Latin, though morphological reshaping remains distinct.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10318",
    concept: "SALT",
    lemma: "kripë",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["kripë"],
      tosk: ["kripë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. kripë / def. kripa",
      phonology: "IPA: [kɾipə]"
    },
    claims: [{ id: "C-10318-1", type: "etymological", status: "SUPPORTED", description: "PIE *krei- / *skrip- ('crushed/grainy mineral')." }],
    matrix: { pie: "*krei-", protoAlbanian: "*skripa", sanskrit: "krīṇāti", greek: "krimnon", latin: "scrupus" },
    falsificationCondition: "Proof of secondary Slavic lexical replacement.",
    whyRationale: "Retains a unique Balto-Slavic and Paleo-Balkan mineral correspondence.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10319",
    concept: "IRON / METAL",
    lemma: "hekur",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["hekur"],
      tosk: ["hekur"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. hekur / def. hekuri",
      phonology: "IPA: [hɛkuɾ]"
    },
    claims: [{ id: "C-10319-1", type: "etymological", status: "SUPPORTED", description: "Early Germanic loan (*īsarną) or metalworking substrate." }],
    matrix: { pie: "Early Germanic contact", protoAlbanian: "*isarnu", sanskrit: "n/a", greek: "sidēros", latin: "ferrum", germanic: "īsarną" },
    falsificationCondition: "Chronological impossibility with early iron-age northern trade routes.",
    whyRationale: "Exemplifies early non-Latin northern European loan contact strata.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10320",
    concept: "VILLAGE / COMMUNITY",
    lemma: "fshat",
    category: "comparative",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["fshat"],
      tosk: ["fshat"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. fshat / def. fshati",
      phonology: "IPA: [fʃat]"
    },
    claims: [{ id: "C-10320-1", type: "etymological", status: "SUPPORTED", description: "Latin *fossātus ('ditch/fortified settlement')." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*fossātu", sanskrit: "n/a", greek: "fossa", latin: "fossātus" },
    falsificationCondition: "Discovery of pre-Roman native settlement terminology.",
    whyRationale: "Classic well-documented Latin loan illustrating rural administrative structuring under Roman contact.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },

  // --- POPULATION 3: DIALECTAL / HISTORICAL CASES (61 - 80) ---
  {
    id: "Q10401",
    concept: "HORSE",
    lemma: "kalë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["kalë"],
      tosk: ["kalë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. kalë / def. kali",
      phonology: "IPA: [kalə]"
    },
    claims: [{ id: "C-10401-1", type: "etymological", status: "SUPPORTED", description: "Latin caballus loan replacing older equine terms." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*kaballu", sanskrit: "aśva-", greek: "hippos", latin: "caballus" },
    falsificationCondition: "Proof of direct PIE equine term survival in northern dialects.",
    whyRationale: "Demonstrates how Latin administrative/military vocabulary successfully displaced native stock in specific domains.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10402",
    concept: "BEE",
    lemma: "bletë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["bletë"],
      tosk: ["bletë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. bletë / def. bleta",
      phonology: "IPA: [blɛtə]"
    },
    claims: [{ id: "C-10402-1", type: "etymological", status: "SUPPORTED", description: "Paleo-Balkan pastoral retention for honey production." }],
    matrix: { pie: "Substratum / Regional", protoAlbanian: "*melitā", sanskrit: "madhu", greek: "melissa", latin: "apis" },
    falsificationCondition: "Direct derivation from late Slavic apiculture terminology.",
    whyRationale: "Key indicator of ancient Balkan arboriculture and apiculture terminology.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10403",
    concept: "APPLE",
    lemma: "mollë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["mollë"],
      tosk: ["mollë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mollë / def. molla",
      phonology: "IPA: [mɔɫə]"
    },
    claims: [{ id: "C-10403-1", type: "etymological", status: "SUPPORTED", description: "PIE *mēlum / Mediterranean fruit nomenclature." }],
    matrix: { pie: "*malom", protoAlbanian: "*malā", sanskrit: "n/a", greek: "melon", latin: "malum" },
    falsificationCondition: "Proof of secondary borrowing through post-classical Romance trade.",
    whyRationale: "Fundamental orchard terminology shared across ancient Mediterranean linguistic layers.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10404",
    concept: "WHEAT",
    lemma: "grurë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["grurë"],
      tosk: ["grurë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. grurë / def. gruri",
      phonology: "IPA: [ɡɾuɾə]"
    },
    claims: [{ id: "C-10404-1", type: "etymological", status: "SUPPORTED", description: "PIE *gʷhrēu- ('to grind/grain')." }],
    matrix: { pie: "*gʷhrēu-", protoAlbanian: "*grurā", sanskrit: "dhānā", greek: "achurōn", latin: "granum" },
    falsificationCondition: "Irregular cluster metathesis ruling out direct inheritance.",
    whyRationale: "Core agricultural grain terminology preserved with regular phonological shifts.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10405",
    concept: "CHICKEN / HEN",
    lemma: "pulë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["pulë"],
      tosk: ["pulë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. pulë / def. pula",
      phonology: "IPA: [pulə]"
    },
    claims: [{ id: "C-10405-1", type: "etymological", status: "SUPPORTED", description: "Latin pullus loan ('young animal/fowl')." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*pullu", sanskrit: "n/a", greek: "pōlos", latin: "pullus" },
    falsificationCondition: "Discovery of pre-Latin poultry terminology in northern dialects.",
    whyRationale: "Standard Latin loan designating domesticated avian fauna.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10406",
    concept: "SHEEP / FLOCK",
    lemma: "del",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dele"],
      tosk: ["dele"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dele / def. delja",
      phonology: "IPA: [dɛlɛ]"
    },
    claims: [{ id: "C-10406-1", type: "etymological", status: "SUPPORTED", description: "PIE *dhēl- ('female animal/milker')." }],
    matrix: { pie: "*dhēl-", protoAlbanian: "*deljā", sanskrit: "dhēnu-", greek: "thēleia", latin: "felare" },
    falsificationCondition: "Proof of Romance pastoral borrowing.",
    whyRationale: "Core pastoral vocabulary showing high preservation across mountain transhumance networks.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10407",
    concept: "GOAT",
    lemma: "dhi",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dhi"],
      tosk: ["dhi"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dhi / def. dhia",
      phonology: "IPA: [ði]"
    },
    claims: [{ id: "C-10407-1", type: "etymological", status: "SUPPORTED", description: "PIE *dhēigh- or expressive animal call." }],
    matrix: { pie: "*ghī-", protoAlbanian: "*ghījā", sanskrit: "hina", greek: "aix", latin: "haedus" },
    falsificationCondition: "Irregular initial dental fricative development.",
    whyRationale: "Essential component of Mediterranean highland pastoral lexicon.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10408",
    concept: "BULL / OX",
    lemma: "dem",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["dem"],
      tosk: ["dem"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. dem / def. demi",
      phonology: "IPA: [dɛm]"
    },
    claims: [{ id: "C-10408-1", type: "etymological", status: "SUPPORTED", description: "Balkan-Romance or substrate bovine term." }],
    matrix: { pie: "Substratum / Romance", protoAlbanian: "*damo-", sanskrit: "damya-", greek: "damalē", latin: "domare" },
    falsificationCondition: "Proof of direct inheritance from unshifted PIE bovine roots.",
    whyRationale: "Reflects regional agricultural and draft animal naming practices.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10409",
    concept: "HOUSE / HOME",
    lemma: "shtëpi",
    category: "dialectal",
    lenses: ["philological", "embodied"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["shtëpi"],
      tosk: ["shtëpi"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. shtëpi / def. shtëpia",
      phonology: "IPA: [ʃtəˈpi]"
    },
    claims: [{ id: "C-10409-1", type: "etymological", status: "SUPPORTED", description: "Latin hospitium ('guest house / lodging') semantic shift." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*hospitiu", sanskrit: "n/a", greek: "xenon", latin: "hospitium" },
    falsificationCondition: "Discovery of native pre-Roman domestic dwelling terminology.",
    whyRationale: "Fascinating semantic evolution where Latin hospitality quarters became the primary word for home.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10410",
    concept: "TOWN / FORTRESS",
    lemma: "kala",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["kala"],
      tosk: ["kala"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. kala / def. kalaja",
      phonology: "IPA: [kaˈla]"
    },
    claims: [{ id: "C-10410-1", type: "etymological", status: "SUPPORTED", description: "Ottoman-Turkish loan (kale) replacing older fortification terms." }],
    matrix: { pie: "Turkic / Ottoman loan", protoAlbanian: "Recent layer", sanskrit: "n/a", greek: "kastron", latin: "castrum", turkish: "kale" },
    falsificationCondition: "Attestation in pre-Ottoman medieval texts as a native form.",
    whyRationale: "Represents the later historical Ottoman administrative contact stratum.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10411",
    concept: "ROAD / PATH",
    lemma: "rugë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["rugë"],
      tosk: ["rugë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. rugë / def. rruga",
      phonology: "IPA: [ɾuɡə]"
    },
    claims: [{ id: "C-10411-1", type: "etymological", status: "SUPPORTED", description: "Latin rupta ('broken track / military road') loan." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*rupta", sanskrit: "n/a", greek: "stratos", latin: "via rupta" },
    falsificationCondition: "Proof of pre-Roman native road network terminology.",
    whyRationale: "Illustrates Roman engineering impact on local transit vocabulary.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10412",
    concept: "KING / LEADER",
    lemma: "mbret",
    category: "dialectal",
    lenses: ["philological", "mythology"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["mbret"],
      tosk: ["mbret"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mbret / def. mbreti",
      phonology: "IPA: [mbɾɛt]"
    },
    claims: [{ id: "C-10412-1", type: "etymological", status: "SUPPORTED", description: "Latin imperator loan via contraction." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*imperatore", sanskrit: "rājan", greek: "basileus", latin: "imperator" },
    falsificationCondition: "Discovery of native Indo-European regal titles in ancient Illyrian epigraphy.",
    whyRationale: "Dramatic phonetic reduction of Latin imperator into modern mbret.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10413",
    concept: "CHURCH",
    lemma: "kishë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["kishë"],
      tosk: ["kishë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. kishë / def. kisha",
      phonology: "IPA: [kiʃə]"
    },
    claims: [{ id: "C-10413-1", type: "etymological", status: "SUPPORTED", description: "Early Christian ecclesiastical loan from Vulgar Latin/Greek (*ekklēsia)." }],
    matrix: { pie: "Ecclesiastical loan", protoAlbanian: "*ekklēsia", sanskrit: "n/a", greek: "ekklēsia", latin: "ecclesia" },
    falsificationCondition: "Proof of pre-Christian native religious architecture terminology.",
    whyRationale: "Markers of early Christianization contact vectors.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10414",
    concept: "PRIEST",
    lemma: "prift",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["prift"],
      tosk: ["prift"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. prift / def. prifti",
      phonology: "IPA: [pɾift]"
    },
    claims: [{ id: "C-10414-1", type: "etymological", status: "SUPPORTED", description: "Latin presbyter loan adaptation." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*presbyteru", sanskrit: "n/a", greek: "presbyteros", latin: "presbyter" },
    falsificationCondition: "Attestation as an indigenous pre-Christian ritual title.",
    whyRationale: "Phonetic evolution from Latin presbyter into Albanian prift follows strict historical sound laws.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10415",
    concept: "FRIEND / COMRADE",
    lemma: "shok",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["shok"],
      tosk: ["shok"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. shok / def. shoku",
      phonology: "IPA: [ʃɔk]"
    },
    claims: [{ id: "C-10415-1", type: "etymological", status: "SUPPORTED", description: "Early Slavic loan (*sokъ / associate) or native root match." }],
    matrix: { pie: "Slavic contact layer", protoAlbanian: "*soku", sanskrit: "n/a", greek: "hetairos", latin: "socius" },
    falsificationCondition: "Proof of pre-Slavic attestation in Illyrian personal names.",
    whyRationale: "Common social vocabulary acquired through medieval Slavic coexistence.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10416",
    concept: "PEN / WRITING TOOL",
    lemma: "pendë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["pendë"],
      tosk: ["pendë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. pendë / def. penda",
      phonology: "IPA: [pɛndə]"
    },
    claims: [{ id: "C-10416-1", type: "etymological", status: "SUPPORTED", description: "Latin penna loan ('feather/quill')." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*penna", sanskrit: "n/a", greek: "pteron", latin: "penna" },
    falsificationCondition: "Discovery of native writing instrument terms from antiquity.",
    whyRationale: "Latin loan adapted for avian feathers and subsequently writing instruments.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10417",
    concept: "BOOK",
    lemma: "libër",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["libër"],
      tosk: ["libër"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. libër / def. libri",
      phonology: "IPA: [liːbəɾ]"
    },
    claims: [{ id: "C-10417-1", type: "etymological", status: "SUPPORTED", description: "Latin liber loan ('inner bark / book')." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*libru", sanskrit: "n/a", greek: "biblion", latin: "liber" },
    falsificationCondition: "Proof of pre-literate indigenous codex terminology.",
    whyRationale: "Standard cultural loan for literary items.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10418",
    concept: "SCHOOL",
    lemma: "shkollë",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["shkollë"],
      tosk: ["shkollë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. shkollë / def. shkolla",
      phonology: "IPA: [ʃkɔɫə]"
    },
    claims: [{ id: "C-10418-1", type: "etymological", status: "SUPPORTED", description: "Latin schola / Greek scholē loan." }],
    matrix: { pie: "Graeco-Latin loan", protoAlbanian: "*skola", sanskrit: "n/a", greek: "scholē", latin: "schola" },
    falsificationCondition: "Discovery of native educational institution nomenclature.",
    whyRationale: "Standard Mediterranean educational vocabulary integration.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10419",
    concept: "TEACHER",
    lemma: "mësues",
    category: "dialectal",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["mësues"],
      tosk: ["mësues"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. mësues / def. mësuesi",
      phonology: "IPA: [məˈsu.ɛs]"
    },
    claims: [{ id: "C-10419-1", type: "etymological", status: "SUPPORTED", description: "Internal derivation from verb mësoj ('to learn/teach')." }],
    matrix: { pie: "Native internal derivation", protoAlbanian: "*mats-", sanskrit: "n/a", greek: "didaskalos", latin: "magister" },
    falsificationCondition: "Proof of borrowing from medieval ecclesiastical titles.",
    whyRationale: "Native agent noun formation built on indigenous verbal roots.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10420",
    concept: "SONG",
    lemma: "këngë",
    category: "dialectal",
    lenses: ["philological", "mythology"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["këngë"],
      tosk: ["këngë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. këngë / def. kënga",
      phonology: "IPA: [kəŋɡə]"
    },
    claims: [{ id: "C-10420-1", type: "etymological", status: "SUPPORTED", description: "Latin cantica loan ('songs/poetry')." }],
    matrix: { pie: "Latin loan", protoAlbanian: "*cantika", sanskrit: "gāyati", greek: "aoidē", latin: "cantica" },
    falsificationCondition: "Discovery of pre-Roman native epic poetry terminology.",
    whyRationale: "Latin loan adopted into traditional Gheg and Tosk epic oral performance vocabulary.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },

  // --- POPULATION 4: NEGATIVE CONTROLS / STRESS TESTS (81 - 100) ---
  {
    id: "Q10501",
    lemma: "balgë",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["balgë"],
      tosk: ["balgë"],
      historical: ["Not yet established"],
      morphology: "Unattested paradigm",
      phonology: "IPA: [balɡə]"
    },
    claims: [{ id: "C-10501-1", type: "etymological", status: "REFUTED", description: "Superficial lookalike with zero historical attestation across cognate branches." }],
    matrix: { pie: "None", protoAlbanian: "Late artificial invention", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Discovery of valid comparative links in neighboring archaic dialects.",
    whyRationale: "Negative control: Fails all comparative sound laws and lacks attestation in textual corpora.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10502",
    lemma: "gris",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["gris"],
      tosk: ["gris"],
      historical: ["Not yet established"],
      morphology: "False etymological construct",
      phonology: "IPA: [ɡris]"
    },
    claims: [{ id: "C-10502-1", type: "etymological", status: "REFUTED", description: "Violates regular Albanian reflex development from PIE stops." }],
    matrix: { pie: "Unattested", protoAlbanian: "False reconstruction", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Validation of regular sound correspondence across initial stop positions.",
    whyRationale: "Negative control: Fails strict sound correspondence criteria under rigorous philological filtering.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10503",
    lemma: "flokë",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["flokë"],
      tosk: ["flokë"],
      historical: ["Well-documented Latin loan"],
      morphology: "Nom. indef. flokë / def. floka",
      phonology: "IPA: [flɔkə]"
    },
    claims: [{ id: "C-10503-1", type: "etymological", status: "REFUTED", description: "Mistakenly posited as native PIE root; proven loanword from Latin floccus." }],
    matrix: { pie: "None (Latin loan floccus)", protoAlbanian: "Secondary layer", sanskrit: "n/a", greek: "trix", latin: "floccus" },
    falsificationCondition: "Discovery of pre-Latin structural cognates in autonomous branch languages.",
    whyRationale: "Negative control for antiquity: While the word is valid Albanian, treating it as an inherited PIE root is refuted by Latin documentation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10504",
    lemma: "trisk",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["trisk"],
      tosk: ["trisk"],
      historical: ["Not yet established"],
      morphology: "Unattested",
      phonology: "IPA: [tɾisk]"
    },
    claims: [{ id: "C-10504-1", type: "etymological", status: "REFUTED", description: "Speculative lookalike with zero comparative validity." }],
    matrix: { pie: "None", protoAlbanian: "Artificial", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Attestation in primary dialect records.",
    whyRationale: "Negative control designed to test the system's ability to reject unfounded folk-etymological speculation.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10505",
    lemma: "skorp",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["skorp"],
      tosk: ["skorp"],
      historical: ["Not yet established"],
      morphology: "Unattested",
      phonology: "IPA: [skɔɾp]"
    },
    claims: [{ id: "C-10505-1", type: "etymological", status: "REFUTED", description: "Fails phonological plausibility tests for Albanian root structures." }],
    matrix: { pie: "None", protoAlbanian: "Unattested", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Demonstrating consistent phonotactic distribution.",
    whyRationale: "Negative control measuring automated rejection of phonotactically illegal reconstructions.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10506",
    lemma: "brumë",
    category: "controls",
    lenses: ["philological"],
    status: "DISPUTED",
    attestations: {
      gheg: ["brumë"],
      tosk: ["brumë"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. brumë / def. brumi",
      phonology: "IPA: [bɾumə]"
    },
    claims: [
      { id: "C-10506-1", type: "etymological", status: "SUPPORTED", description: "PIE *bhreu- ('to brew/ferment')." },
      { id: "C-10506-2", type: "loan", status: "DISPUTED", description: "Alternative Romance dough-making terminology." }
    ],
    matrix: { pie: "*bhreu-", protoAlbanian: "*bruma", sanskrit: "bhunakti", greek: "phreap", latin: "fervere" },
    falsificationCondition: "Proof of late Slavic dough terminology adoption.",
    whyRationale: "Borderline case where semantic divergence between fermentation and dough creates scholarly dispute.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },
  {
    id: "Q10507",
    lemma: "kos",
    category: "controls",
    lenses: ["philological"],
    status: "OPEN",
    attestations: {
      gheg: ["kos"],
      tosk: ["kos"],
      historical: ["Not yet established"],
      morphology: "Nom. indef. kos / def. kosi",
      phonology: "IPA: [kɔs]"
    },
    claims: [
      { id: "C-10507-1", type: "substrate", status: "OPEN", description: "Paleo-Balkan dairy substrate term." },
      { id: "C-10507-2", type: "loan", status: "OPEN", description: "Turkic / Balkan areal Wanderwort." }
    ],
    matrix: { pie: "Substratum / Areal", protoAlbanian: "*koso-", sanskrit: "n/a", greek: "oxos", latin: "acetum" },
    falsificationCondition: "Proving direct descent from unshifted PIE dairy roots.",
    whyRationale: "Open question regarding whether fermented milk terminology predates Ottoman contact in the Balkans.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10508",
    lemma: "raki",
    category: "controls",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["raki"],
      tosk: ["raki"],
      historical: ["Late Ottoman trade introduction"],
      morphology: "Nom. indef. raki / def. rakia",
      phonology: "IPA: [raˈki]"
    },
    claims: [{ id: "C-10508-1", type: "etymological", status: "SUPPORTED", description: "Ottoman-Arabic loan (ʿaraq) for distilled spirits." }],
    matrix: { pie: "Recent contact", protoAlbanian: "None", sanskrit: "n/a", greek: "raki", latin: "n/a", arabic: "ʿaraq" },
    falsificationCondition: "Attestation in pre-medieval Illyrian distillation records.",
    whyRationale: "Clear control demonstrating modern cultural loanwords cleanly separated from deep Indo-European roots.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10509",
    lemma: "tunel",
    category: "controls",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["tunel"],
      tosk: ["tunel"],
      historical: ["Modern internationalism"],
      morphology: "Nom. indef. tunel / def. tuneli",
      phonology: "IPA: [tuˈnɛl]"
    },
    claims: [{ id: "C-10509-1", type: "etymological", status: "SUPPORTED", description: "Modern internationalism / French-Italian technical loan." }],
    matrix: { pie: "Modern internationalism", protoAlbanian: "None", sanskrit: "n/a", greek: "n/a", latin: "n/a" },
    falsificationCondition: "Attestation in classical antiquity.",
    whyRationale: "Control entry for modern technological loanwords entering the language in the 20th century.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10510",
    lemma: "telefon",
    category: "controls",
    lenses: ["philological"],
    status: "SUPPORTED",
    attestations: {
      gheg: ["telefon"],
      tosk: ["telefon"],
      historical: ["Modern internationalism"],
      morphology: "Nom. indef. telefon / def. telefoni",
      phonology: "IPA: [tɛlɛˈfɔn]"
    },
    claims: [{ id: "C-10510-1", type: "etymological", status: "SUPPORTED", description: "Modern internationalism from Greek tele + phone." }],
    matrix: { pie: "Modern internationalism", protoAlbanian: "None", sanskrit: "n/a", greek: "tele + phōnē", latin: "n/a" },
    falsificationCondition: "Attestation in medieval literature.",
    whyRationale: "Explicit control for technological vocabulary to test boundary limits of comparative filters.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10511",
    lemma: "autos",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["autos"],
      tosk: ["autos"],
      historical: ["Unattested folk construct"],
      morphology: "Artificial",
      phonology: "IPA: [awtɔs]"
    },
    claims: [{ id: "C-10511-1", type: "etymological", status: "REFUTED", description: "Unattested pseudo-Greek reconstruction with zero currency." }],
    matrix: { pie: "None", protoAlbanian: "Pseudo-science", sanskrit: "n/a", greek: "autos", latin: "n/a" },
    falsificationCondition: "Attestation in verified lexicographical sources.",
    whyRationale: "Negative control measuring system rejection of amateur pseudo-etymological fabrications.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10512",
    lemma: "fakto",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["fakto"],
      tosk: ["fakto"],
      historical: ["Unattested"],
      morphology: "False paradigm",
      phonology: "IPA: [faktɔ]"
    },
    claims: [{ id: "C-10512-1", type: "etymological", status: "REFUTED", description: "Ungrammatical artificial stem lacking historical attestation." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "n/a", latin: "factum" },
    falsificationCondition: "Verification in standard morphological tables.",
    whyRationale: "Negative control testing structural rejection of malformed morphological units.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10513",
    lemma: "lumen",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["lumen"],
      tosk: ["lumen"],
      historical: ["Latin contamination construct"],
      morphology: "False blend",
      phonology: "IPA: [luˈmɛn]"
    },
    claims: [{ id: "C-10513-1", type: "etymological", status: "REFUTED", description: "Spurious blend of native 'lum' and Latin 'lumen' without historical backing." }],
    matrix: { pie: "None", protoAlbanian: "Contaminated form", sanskrit: "n/a", greek: "n/a", latin: "lumen" },
    falsificationCondition: "Proof of genuine dialectal blending in historical texts.",
    whyRationale: "Negative control preventing artificial hybridization between native nouns and Latin lookalikes.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10514",
    lemma: "solis",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["solis"],
      tosk: ["solis"],
      historical: ["Unattested"],
      morphology: "False root",
      phonology: "IPA: [sɔlis]"
    },
    claims: [{ id: "C-10514-1", type: "etymological", status: "REFUTED", description: "Spurious Latinate extraction violating Albanian phonotactics." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "n/a", latin: "sol" },
    falsificationCondition: "Attestation in regional glossaries.",
    whyRationale: "Negative control evaluating automated boundary filters against Latinate contamination.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10515",
    lemma: "nativa",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["nativa"],
      tosk: ["nativa"],
      historical: ["Unattested"],
      morphology: "False construct",
      phonology: "IPA: [naˈti.va]"
    },
    claims: [{ id: "C-10515-1", type: "etymological", status: "REFUTED", description: "Purely theoretical lexical filler with zero attestation." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "n/a", latin: "nativus" },
    falsificationCondition: "Presence in historical lexicography.",
    whyRationale: "Negative control confirming that empty or filler placeholders are correctly flagged as refuted/unattested.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10516",
    lemma: "astra",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["astra"],
      tosk: ["astra"],
      historical: ["Unattested"],
      morphology: "False root",
      phonology: "IPA: [asˈtɾa]"
    },
    claims: [{ id: "C-10516-1", type: "etymological", status: "REFUTED", description: "Speculative Indo-European star lookalike without phonetic grounding." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "astron", latin: "astrum" },
    falsificationCondition: "Regular sound law validation.",
    whyRationale: "Negative control measuring strict rejection of ungrounded international lookalikes.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10517",
    lemma: "borea",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["borea"],
      tosk: ["borea"],
      historical: ["Unattested"],
      morphology: "False root",
      phonology: "IPA: [bɔˈɾɛ.a]"
    },
    claims: [{ id: "C-10517-1", type: "etymological", status: "REFUTED", description: "Borrowing from classical northern wind personification without naturalized phonology." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "boreas", latin: "boreas" },
    falsificationCondition: "Dialectal attestation as a living meteorological term.",
    whyRationale: "Negative control testing system handling of unassimilated classical Greek loan terms.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10518",
    lemma: "hydra",
    category: "controls",
    lenses: ["philological", "mythology"],
    status: "REFUTED",
    attestations: {
      gheg: ["hydra"],
      tosk: ["hydra"],
      historical: ["Unattested native form"],
      morphology: "False construct",
      phonology: "IPA: [ˈhy.dɾa]"
    },
    claims: [{ id: "C-10518-1", type: "etymological", status: "REFUTED", description: "Direct international mythological import lacking native sound shifts." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "hydra", latin: "hydra" },
    falsificationCondition: "Attestation in traditional folklore serpent naming.",
    whyRationale: "Negative control separating native serpentine folklore (gjarpër/kuçedër) from imported classical names.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10519",
    lemma: "terra",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["terra"],
      tosk: ["terra"],
      historical: ["Unattested native form"],
      morphology: "False root",
      phonology: "IPA: [tɛra]"
    },
    claims: [{ id: "C-10519-1", type: "etymological", status: "REFUTED", description: "Latin terra unadapted to Albanian dental/liquid phonetic rules." }],
    matrix: { pie: "None", protoAlbanian: "None", sanskrit: "n/a", greek: "gē", latin: "terra" },
    falsificationCondition: "Proof of regular phonological borrowing into Albanian.",
    whyRationale: "Negative control ensuring raw unadapted Latin lemmas (like terra instead of dhe) do not pollute the native root ledger.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  },
  {
    id: "Q10520",
    lemma: "nulla",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["nulla"],
      tosk: ["nulla"],
      historical: ["System null control"],
      morphology: "System null",
      phonology: "IPA: [nuɫa]"
    },
    claims: [{ id: "C-10520-1", type: "etymological", status: "REFUTED", description: "Absolute null control designed to test boundary error handling." }],
    matrix: { pie: "None", protoAlbanian: "System control", sanskrit: "n/a", greek: "n/a", latin: "nullus" },
    falsificationCondition: "System operational failure.",
    whyRationale: "Ultimate system test control verifying that hard refutations and null-state error bounds function safely.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  }
];
