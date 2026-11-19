import batch1 from "../corpus/mirdita/mirdita_chest_batch1.json";
import batch2 from "../corpus/mirdita/mirdita_chest_batch2.json";

// Transformojmë hyrjet e korpusit të Mirditës në formatin e kërkuar nga lentet e aplikacionit
const mirditaEntries = [...batch1.entries, ...batch2.entries].map((item) => ({
  id: item.golden_id,
  concept: item.concept,
  lemma: item.form.split(" / ")[0], // Merr formën e parë bazë për lematizim
  category: "mirdita-native",
  lenses: ["philological", "embodied"],
  status: batch1.status,
  attestations: {
    gheg: [item.form],
    tosk: item.tosk || [], // Forma toske: shtohet vetëm kur dokumentohet (më parë këtu shfaqej gabimisht koncepti anglisht)
    historical: ["Mirdita native field observation batch"]
  },
  morphology: item.morphology || "lexical form",
  phonology: item.phonology || "IPA profile pending",
  provenance: item.provenance || "Mirdita native observation"
}));

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
  // --- DINAMIKISHT TË NGARKUARA: TË GJITHA 1FALËT E MIRDITËS (BATCH 1 & 2) ---
  ...mirditaEntries,
  // --- LENTJA 1b: JEHONA E NATYRËS ---
  {
    id: "Q20001",
    concept: "TO EXTINGUISH (FIRE)",
    lemma: "shuj",
    category: "echo-of-nature",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: {
      gheg: ["shuj"],
      tosk: ["shuaj"],
      historical: ["Not yet checked in Buzuku (1555)"]
    },
    morphology: "verb, Gheg form",
    phonology: "IPA: [ʃuj]"
  },
  // --- LENTJA 1a: TRUPORE ---
  {
    id: "Q20002",
    concept: "TO EAT",
    lemma: "ha",
    category: "embodied",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: { gheg: ["ha"], tosk: ["ha"], historical: ["Not yet checked"] },
    morphology: "verb",
    phonology: "IPA: [ha]"
  },
  {
    id: "Q20003",
    concept: "TO OPEN",
    lemma: "hap",
    category: "embodied",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: { gheg: ["hap", "hapi (step)"], tosk: ["hap"], historical: ["Not yet checked"] },
    morphology: "verb",
    phonology: "IPA: [hap]"
  },
  {
    id: "Q20004",
    concept: "TO CLOSE",
    lemma: "mbyll",
    category: "embodied",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: { gheg: ["mbyll"], tosk: ["mbyll"], historical: ["Not yet checked"] },
    morphology: "verb",
    phonology: "IPA: [mbyɫ]"
  },
  {
    id: "Q20005",
    concept: "TO LAUGH",
    lemma: "qesh",
    category: "embodied",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: { gheg: ["qesh"], tosk: ["qesh"], historical: ["Not yet checked"] },
    morphology: "verb",
    phonology: "IPA: [cɛʃ]"
  },
  {
    id: "Q20006",
    concept: "TO CRY",
    lemma: "kjaj",
    category: "embodied",
    lenses: ["philological", "embodied"],
    status: "OPEN",
    attestations: { gheg: ["kjaj"], tosk: ["qaj"], historical: ["Not yet checked"] },
    morphology: "verb",
    phonology: "IPA: [kjaj]"
  },
  {
    id: "Q20007",
    concept: "HONOUR",
    lemma: "nder",
    category: "comparative",
    lenses: ["philological", "historical"],
    status: "OPEN",
    attestations: {
      gheg: ["nder", "nderi"],
      tosk: ["nder", "nderi"],
      historical: ["Buzuku 1555: ëndēr, ënderë, ënderja (TITUS 64.22, 49.63, 49.66). Te Buzuku, ë-/e- para n + bashkëtingëllore është mënyra si shkruhet n' gege: ënder 'ndër', ënde 'në', ënfalle. Formula e pagëzimit (1462) e shkruan gegnishten të shkurtër (Un, pr'emenit) / In Buzuku, ë-/e- before n + consonant is how he writes the Gheg n'; the Baptismal Formula (1462) already writes short Gheg (Un, pr'emenit)"]
    },
    morphology: "emër; femëror te Buzuku (ënderja), mashkullor sot (nderi) / noun; feminine in Buzuku, masculine today",
    phonology: "IPA: [ndɛɾ]"
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
