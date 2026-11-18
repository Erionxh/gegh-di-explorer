import batch1 from "../corpus/mirdita/mirdita_chest_batch1.json";
import batch2 from "../corpus/mirdita/mirdita_chest_batch2.json";
import { lexicalCorpus } from "./lexicon";

// Një listë e vetme fjalësh për faqet publike dhe për arkivin e studiuesve.
// Burimi: korpusi i Mirditës (batch 1 + 2) dhe hyrjet e veçanta në lib/lexicon.js.

function fromCorpus(e, batchName) {
  const comp = e.comparative_data || null;
  return {
    id: e.golden_id,
    concept: e.concept,
    forms: e.form.split(" / ").map((f) => f.trim()),
    headword: e.form.split(" / ")[0].trim(),
    morphology: e.morphology || null,
    phonology: e.phonology || null,
    provenance: e.provenance || null,
    region: "Mirdita",
    batch: batchName,
    claim: comp
      ? {
          protoAlbanian: comp.proto_albanian || null,
          pieRoot: comp.pie_root || null,
          cognates: comp.cognates || [],
          note: comp.diagnostic_status || null,
          status: comp.review ? comp.review.status : "OPEN",
          reviewNote: comp.review ? comp.review.note : null,
          reviewed: comp.review ? comp.review.reviewed : null,
          superseded: comp.superseded || null,
        }
      : null,
  };
}

const corpusWords = [
  ...batch1.entries.map((e) => fromCorpus(e, batch1.batch)),
  ...batch2.entries.map((e) => fromCorpus(e, batch2.batch)),
];

// Hyrjet e veçanta (p.sh. mullar) nga lib/lexicon.js që nuk janë në korpus.
const specialWords = lexicalCorpus
  .filter((item) => !item.id.startsWith("GC-"))
  .map((item) => ({
    id: item.id,
    concept: item.concept || "",
    forms: item.attestations?.gheg || [item.lemma],
    headword: item.lemma,
    morphology: item.morphology || null,
    phonology: item.phonology || null,
    provenance: item.attestations?.historical?.join("; ") || null,
    region: "—",
    batch: item.category,
    claim: null,
    caseStatus: item.status,
    asymmetry: item.archivalAsymmetry || null,
  }));

export const words = [...specialWords, ...corpusWords];

export function getWord(id) {
  return words.find((w) => w.id === id) || null;
}

export function wordIds() {
  return words.map((w) => w.id);
}
