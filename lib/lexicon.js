export const lexicalCorpus = [
  // --- TEST CASE: MULLACH ↔ MULLAR (Build Gate 04 Observation Model) ---
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
      historical: ["Not yet established in early medieval corpus"],
      morphology: "Nom. indef. mullar / def. mullari",
      phonology: "IPA: [muɫaɾ]"
    },
    archivalAsymmetry: {
      documentaryCoverage: "MODERATE",
      oralCoverage: "HIGH",
      geographicCoverage: "REGIONAL (Balkan / Alpine)",
      chronologicalCoverage: "LATE ATTESTED / ARCHAEIC GEOMETRIC FORM",
      dialectalCoverage: "WIDESPREAD GHEG & TOSK",
      knownGaps: "Lack of continuous pre-Ottoman written attestations linking the root directly to ancient Celtic forms."
    },
    evidenceConstellation: {
      streams: {
        PHILOLOGICAL: {
          state: "OPEN",
          description: "Historical phonological pathway and lateral sound law mapping between Albanian and Celtic (cf. Irish mullach) not yet formally closed out in standard handbooks."
        },
        COMPARATIVE: {
          state: "OPEN",
          description: "Requires broader comparative distribution testing across European mountainous and pastoral lexical strata."
        },
        EMBODIED: {
          state: "OBSERVATION_SUPPORTED",
          description: "Striking formal and semantic correspondence. Both lexical items map the exact same human cognitive category: a physical, vertical, pointed accumulation (whether an elevated topographic peak or a stacked conical rick of hay)."
        },
        MATERIAL_CULTURAL: {
          state: "OBSERVATION_SUPPORTED",
          description: "Stack/heap and agricultural conical structuring provide a concrete material-semantic parallel between Irish topographic usage and Albanian pastoral stacking."
        },
        ARCHAEOGENETIC: {
          state: "NO_RELEVANT_EVIDENCE",
          description: "Genetics and population history cannot directly adjudicate this specific lexical pair or micro-topographic naming convention."
        }
      },
      relationships: [
        { type: "CONVERGENCE", streams: ["EMBODIED", "MATERIAL_CULTURAL"], note: "High semantic and geometric alignment." },
        { type: "UNDERSPECIFIED", streams: ["PHILOLOGICAL", "COMPARATIVE"], note: "Historical relationship remains unresolved pending further phonological work." }
      ]
    },
    claims: [
      { id: "C-10321-1", type: "etymological", status: "OPEN", description: "Hypothesized shared ancient European or areal descriptor for conical elevations and structured heaps." }
    ],
    falsificationCondition: "Proving that the phonetic similarities are entirely accidental and that the semantic overlap arose independently within the last 500 years.",
    whyRationale: "GEGH preserves the real observation (formal, geometric, and semantic similarity) while keeping the historical relationship strictly OPEN until a sound law is established.",
    sources: [
      { id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" },
      { id: "Q5-15", author: "P. Ó Dónaill", year: "1977", work: "Foclóir Gaeilge-Béarla (Irish Dictionary - mullach)", url: "https://www.teanglann.ie/en/fgb/mullach" }
    ]
  },

  // --- CORE REFERENCE ENTRIES (Carried forward from Gate 03 with Constellation support) ---
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
    archivalAsymmetry: {
      documentaryCoverage: "HIGH",
      oralCoverage: "HIGH",
      geographicCoverage: "PAN-ALBANIAN",
      chronologicalCoverage: "DEEP INDO-EUROPEAN",
      dialectalCoverage: "UNIVERSAL",
      knownGaps: "None significant for core root."
    },
    evidenceConstellation: {
      streams: {
        PHILOLOGICAL: { state: "SUPPORTED", description: "Regular sound law reflection of PIE *kara- / *kardh-." },
        COMPARATIVE: { state: "SUPPORTED", description: "Robust cognate network across Sanskrit śīrṣan and Greek karanon." },
        EMBODIED: { state: "SUPPORTED", description: "Primary anatomical body architecture mapping." },
        MATERIAL_CULTURAL: { state: "NO_RELEVANT_EVIDENCE", description: "Non-diagnostic." },
        ARCHAEOGENETIC: { state: "OPEN", description: "Compatible with long-term regional continuity frameworks." }
      },
      relationships: [{ type: "CONVERGENCE", streams: ["PHILOLOGICAL", "COMPARATIVE", "EMBODIED"] }]
    },
    claims: [{ id: "C-10201-1", type: "etymological", status: "SUPPORTED", description: "Inherited from old Indo-European root structures." }],
    falsificationCondition: "Sound shift discrepancy against regular development of ancient voiceless stops.",
    whyRationale: "Evidence shows stable internal phonological reflexes across dialects matching regular sound laws without borrowing vectors.",
    sources: [{ id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej" }]
  },

  // --- NEGATIVE CONTROL TEST CASE ---
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
    archivalAsymmetry: {
      documentaryCoverage: "NONE",
      oralCoverage: "NONE",
      geographicCoverage: "NONE",
      chronologicalCoverage: "N/A",
      dialectalCoverage: "NONE",
      knownGaps: "Complete absence across all textual and living corpora."
    },
    evidenceConstellation: {
      streams: {
        PHILOLOGICAL: { state: "REFUTED", description: "Fails all comparative sound laws and lacks textual attestation." },
        COMPARATIVE: { state: "REFUTED", description: "Zero cognate links across branch nodes." },
        EMBODIED: { state: "NO_RELEVANT_EVIDENCE", description: "Non-diagnostic." },
        MATERIAL_CULTURAL: { state: "NO_RELEVANT_EVIDENCE", description: "Non-diagnostic." },
        ARCHAEOGENETIC: { state: "NO_RELEVANT_EVIDENCE", description: "Non-diagnostic." }
      },
      relationships: [{ type: "CONFLICT", streams: ["PHILOLOGICAL"] }]
    },
    claims: [{ id: "C-10501-1", type: "etymological", status: "REFUTED", description: "Superficial lookalike with zero historical attestation across cognate branches." }],
    falsificationCondition: "Discovery of valid comparative links in neighboring archaic dialects.",
    whyRationale: "Negative control: Fails all comparative sound laws and lacks attestation in textual corpora.",
    sources: [{ id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }]
  }
];
