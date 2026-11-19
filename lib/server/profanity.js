// Filtri i fjalëve të rënda. Vetëm serveri e përdor. Nuk e refuzon postimin: e mban për shqyrtim.
// Fjalët e zakonshme (gomar, qen, budalla) dhe mallkimet tradicionale („T'u shoftë fara”) NUK mbahen:
// janë pjesë e gjuhës që po regjistrojmë.

const fold = (s) => String(s || '').toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/ë/g, 'e').replace(/ç/g, 'c')
  .replace(/[1!|]/g, 'i').replace(/0/g, 'o').replace(/3/g, 'e').replace(/4|@/g, 'a').replace(/5|\$/g, 's')
  .replace(/[*_.\-']/g, '')
  .replace(/(.)\1{2,}/g, '$1$1');

// Fjalë të plota (pas palosjes). Ruajmë format, jo vetëm rrënjët, që të mos kapim fjalë të pafajshme.
const WORDS = new Set([
  'mut', 'muti', 'mutin', 'mutes', 'mutqin', 'mutra',
  'kar', 'kari', 'karin', 'karit', 'kara',
  'pidh', 'pidhi', 'pidhin', 'pidhit', 'pidhrobsh',
  'bythqir', 'bythqira', 'bythelepires',
  'kurve', 'kurva', 'kurven', 'kurves', 'kurvat', 'kurveri', 'kurvar',
  'bushter', 'bushtra', 'bushtren', 'bushtre',
  'pizeveng', 'robqir', 'naneqir', 'moterqir',
  'qifsha', 'qifshin', 'qifte', 'qi', 'qij', 'qire', 'qirja',
  'magjup', 'magjupe', 'magjupi',
]);
// Rrënjë të gjata që s'kanë kuptim të pafajshëm.
const STEMS = ['pidh', 'qifsh', 'bythqir', 'kurv', 'bushtr', 'pizeveng', 'mutqin', 'naneqir', 'moterqir', 'robqir'];
// „qi” vetëm nuk mjafton (është edhe shkurtim); mbahet vetëm kur vjen me nanën/motrën/robt/fisin.
const FAMILY = /\b(t)?qi(fsha|j)?\s+(nanen|nenen|motren|robt|fisin|faren|familjen)\b/;

export function checkText(...parts) {
  const raw = parts.filter(Boolean).join(' ');
  const t = fold(raw);
  if (FAMILY.test(t)) return { held: true, reason: 'family_insult' };
  const tokens = t.split(/[^a-z]+/).filter(Boolean);
  for (const w of tokens) {
    if (w === 'qi' || w === 'qij') continue; // vetëm në frazë (shih FAMILY)
    if (WORDS.has(w)) return { held: true, reason: 'word' };
    if (w.length >= 5 && STEMS.some((s) => w.startsWith(s))) return { held: true, reason: 'word' };
  }
  // Fjalë të ndara me hapësira: „k u r v e”
  for (const run of t.match(/(?:\b[a-z]\b[^a-z]*){3,}/g) || []) {
    const sq = run.replace(/[^a-z]/g, '');
    if (WORDS.has(sq) || STEMS.some((s) => sq.startsWith(s))) return { held: true, reason: 'spaced' };
  }
  // Shumë shkronja të mëdha ose lidhje: mbaje për shqyrtim
  if ((raw.match(/https?:\/\//g) || []).length > 2) return { held: true, reason: 'links' };
  return { held: false };
}
