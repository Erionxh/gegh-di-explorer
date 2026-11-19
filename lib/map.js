// Shtresat e Hartës. Koordinatat janë të përafërta (qendra e fshatit/qytetit).
// Map layers. Coordinates are approximate (village/town centre).

export const LAYERS = [
  { id: 'voices', color: '#2f7d4f', sq: 'Zërat e sotëm (Kujtesa)', en: "Today's voices (Kujtesa)" },
  { id: 'scholars', color: '#1d2a44', sq: 'Studiuesit e vjetër', en: 'The old scholars' },
  { id: 'images', color: '#b8892b', sq: 'Fotografi dhe vizatime', en: 'Photographs and drawings' },
  { id: 'dna', color: '#8a3b5c', sq: 'ADN e lashtë', en: 'Ancient DNA' },
];

export const POINTS = [
  { layer: 'voices', lat: 41.77, lng: 19.89, place: 'Mirditë', sq: 'K-0001 · „Guri i kufinit” – incizimi i parë i arkivit (19.11.2026).', en: 'K-0001 · "Guri i kufinit" (the boundary stone) – the archive’s first recording (19 Nov 2026).' },
  { layer: 'scholars', lat: 42.068, lng: 19.512, place: 'Shkodër', sq: 'J. G. von Hahn, konsull austriak (1850): gramatikë, fjalor, zakone – Albanesische Studien (1854).', en: 'J. G. von Hahn, Austrian consul (1850s): grammar, dictionary, customs – Albanesische Studien (1854).' },
  { layer: 'scholars', lat: 41.86, lng: 20.0, place: 'Orosh, Mirditë', sq: 'F. Nopcsa: shtëpi, veshje dhe vegla të Mirditës – Bauten, Trachten und Geräte Nordalbaniens (1925).', en: 'F. Nopcsa: houses, costumes and tools of Mirdita – Bauten, Trachten und Geräte Nordalbaniens (1925).' },
  { layer: 'scholars', lat: 42.39, lng: 19.77, place: 'Theth, Shalë', sq: 'Edith Durham: udhëtimet në malësi, Kanuni, fiset – High Albania (1909).', en: 'Edith Durham: highland journeys, the Kanun, the tribes – High Albania (1909).' },
  { layer: 'scholars', lat: 41.86, lng: 20.02, place: 'Mirditë', sq: 'Ekspedita e Harvardit 1929: C. S. Coon dhe Stavre Frashëri – Përmes Mirditës në dimër (1930).', en: 'Harvard expedition 1929: C. S. Coon and Stavre Frashëri – Through Mirdita in Winter (1930).' },
  { layer: 'images', lat: 42.067, lng: 19.509, place: 'Shkodër', sq: 'Studio Marubi (nga vitet 1850): qindra mijëra negativë me njerëz të veriut. Muzeu Kombëtar i Fotografisë Marubi.', en: 'Marubi studio (from the 1850s): hundreds of thousands of negatives of people of the north. Marubi National Museum of Photography.' },
  { layer: 'images', lat: 42.39, lng: 19.77, place: 'Theth, Shalë', sq: 'Vizatimet e Edith Durham për veshjet dhe njerëzit e malësisë (1909) – domen publik.', en: 'Edith Durham’s drawings of highland costumes and people (1909) – public domain.' },
];

export const PENDING = {
  sq: ['ADN e lashtë: vendet e gjenomeve nga Davranoglou et al. 2026 dhe Olalde et al. 2023 do të shtohen nga të dhënat shtesë të studimeve.', 'Atlasi dialektologjik i gjuhës shqipe: referencë dhe lidhje, jo kopje (e drejtë autori).'],
  en: ['Ancient DNA: genome sites from Davranoglou et al. 2026 and Olalde et al. 2023 will be added from the studies’ supplementary data.', 'Albanian dialect atlas: reference and link, not a copy (copyright).'],
};
