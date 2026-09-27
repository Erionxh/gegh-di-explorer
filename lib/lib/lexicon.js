export const lexicalCorpus = [
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
    claims: [
      {
        id: "Q40099-B2",
        type: "etymological",
        status: "SUPPORTED",
        description: "Direct continuation of PIE *dyeu- through regular phonetic development in Albanian."
      }
    ],
    matrix: {
      pie: "*dyeu-",
      protoAlbanian: "*dī-",
      sanskrit: "Dyaus",
      greek: "Zeus / Dios",
      latin: "Dies / Iuppiter",
      germanic: "Tiwaz",
      slavic: "Denь"
    },
    falsificationCondition: "Discovery of pre-Indo-European loan strata replacing primary solar nomenclature.",
    sources: [
      { id: "Q5-01", author: "G. Meyer", year: "1891", work: "Etymologisches Wörterbuch", url: "https://archive.org/details/etymologischeswo00meyeuoft" },
      { id: "Q5-02", author: "Eqrem Çabej", year: "1976", work: "Studime etimologjike", url: "https://www.google.com/search?q=Eqrem+Cabej+Studime+etimologjike" }
    ]
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
    claims: [
      {
        id: "Q40100-C1",
        type: "etymological",
        status: "SUPPORTED",
        description: "Paleo-Balkan substrate retention unique to the Albanian branch."
      }
    ],
    matrix: {
      pie: "Substratum / Paleo-Balkan",
      protoAlbanian: "*moterā",
      sanskrit: "svāsar-",
      greek: "adelphē",
      latin: "soror",
      germanic: "swister",
      slavic: "sestra"
    },
    falsificationCondition: "Demonstration of a regular borrowing source from neighboring Romance or Slavic dialects.",
    sources: [
      { id: "Q5-08", author: "Eqrem Çabej", year: "1960", work: "Studime gjuhësore II", url: "https://www.google.com/search?q=Eqrem+Cabej" }
    ]
  },
  {
    id: "Q10095",
    lemma: "MAL (Negative Control)",
    category: "hydronymy",
    lenses: ["comparative"],
    status: "REFUTED",
    meaning: {
      sq: "Shembull kontrolli: ngjashmëri sipërfaqësore fonetike që dështon në provën kronologjike dhe krahasimtare.",
      en: "Control example: superficial phonetic similarity that fails chronological and comparative testing."
    },
    claims: [
      {
        id: "Q40105-X",
        type: "etymological",
        status: "REFUTED",
        description: "Attempted direct tie to illusory Mediterranean substrates; proven independent or late secondary development."
      }
    ],
    matrix: {
      pie: "Unresolved / Secondary",
      protoAlbanian: "Late innovation",
      sanskrit: "n/a",
      greek: "n/a",
      latin: "mons (unrelated)",
      germanic: "n/a",
      slavic: "n/a"
    },
    falsificationCondition: "Sufficient comparative attestation across core satem/kentum branches verifying inherited PIE status.",
    sources: [
      { id: "Q5-12", author: "Vladimir Orel", year: "1998", work: "Albanian Etymological Dictionary", url: "https://www.google.com/search?q=Vladimir+Orel" }
    ]
  }
];
