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
    tosk: [item.concept.toLowerCase()], // Referencë krahasuese konceptuale
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
