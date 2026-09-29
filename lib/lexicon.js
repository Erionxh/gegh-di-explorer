export const lexicalCorpus = [
  // --- TEST CASE: MULLACH + MULLAR (Build Gate 04 Observation Model) ---
  {
    id: "Q10321",
    concept: "SUMMIT / HEAP / STACK (GEOMETRIC CONE)",
    lemma: "mullar",
    category: "comparative",
    lenses: ["philological", "comparative", "embodied", "material"],
    status: "OPEN",
    attestations: {
      gheg: ["mullar"],
      tosk: ["mullar", "mullarë"],
      historical: ["Not yet established in early medieval corpus"]
    },
    morphology: "Nom. indef. mullar / def. mullari",
    phonology: "IPA: [mulaɾ]",
    archivalAsymmetry: {
      documentaryCoverage: "MODERATE",
      oralCoverage: "HIGH",
      geographicCoverage: "REGIONAL (Balkan / Alpine)",
      chronologicalCoverage: "LATE ATTESTED / ARCHAIC GEOMETRIC FORM",
      dialectalCoverage: "WIDESPREAD GHEG & TOSK",
      knownGaps: "Lack of continuous pre-Ottoman written attestations linking the root directly to ancient Celtic forms."
    }
  },
  // --- MIRDITA CHEST NATIVE OBSERVATIONS (Batch 1 & 2 Integration) ---
  {
    id: "GC-0001",
    concept: "WATER",
    lemma: "uj",
    category: "mirdita-native",
    lenses: ["philological", "embodied"],
    status: "MIRDITA_NATIVE_OBSERVATION_INITIAL_PASS_PENDING_EXPERT_REVIEW",
    attestations: {
      gheg: ["uj"],
      tosk: ["ujë"],
      historical: ["Mirdita native field observation"]
    },
    morphology: "lexical form",
    phonology: "final ë dropped",
    provenance: "Mirdita native observation"
  },
  {
    id: "GC-0002",
    concept: "FIRE",
    lemma: "zjerm",
    category: "mirdita-native",
    lenses: ["philological", "embodied"],
    status: "MIRDITA_NATIVE_OBSERVATION_INITIAL_PASS_PENDING_EXPERT_REVIEW",
    attestations: {
      gheg: ["zjerm"],
      tosk: ["zjarr"],
      historical: ["Mirdita native field observation"]
    },
    morphology: "lexical form",
    phonology: "local vocalic realization",
    provenance: "Mirdita native observation"
  },
  {
    id: "GC-0004",
    concept: "MOON",
    lemma: "hân",
    category: "mirdita-native",
    lenses: ["philological", "embodied"],
    status: "MIRDITA_NATIVE_OBSERVATION_INITIAL_PASS_PENDING_EXPERT_REVIEW",
    attestations: {
      gheg: ["hân"],
      tosk: ["hënë"],
      historical: ["Mirdita native field observation"]
    },
    morphology: "nasalized root",
    phonology: "nasalized open back/central vowel profile",
    provenance: "Mirdita native observation"
  },
  {
    id: "GC-0007",
    concept: "TOOTH",
    lemma: "dhamb",
    category: "mirdita-native",
    lenses: ["philological", "embodied"],
    status: "MIRDITA_NATIVE_OBSERVATION_SINGLE_INFORMANT",
    attestations: {
      gheg: ["dhamb"],
      tosk: ["dhëmb"],
      historical: ["Mirdita native field observation"]
    },
    morphology: "singular noun",
    phonology: "final b is weak/reduced",
    provenance: "Mirdita native observation"
  },
  // --- CONTROL / NEGATIVE TEST CASE ---
  {
    id: "Q10501",
    lemma: "balgë",
    category: "controls",
    lenses: ["philological"],
    status: "REFUTED",
    attestations: {
      gheg: ["balgë"],
      tosk: ["balgë"],
      historical: ["Not yet established"]
    },
    morphology: "Unattested paradigm",
    phonology: "IPA: [balɡə]"
  }
];
