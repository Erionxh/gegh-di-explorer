// GEG 500 si faqe: çdo fjalë ka adresën e vet dhe lidhet me arkivin kur fjala ekziston atje.
import { GEG500 } from './geg500';
import { words } from './words';
import { LATIN, GREEK, TURKISH } from './layers';

const fold = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ë/g, 'e').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const plain = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[()]/g, '').trim();

const seen = {};
export const WANTED = GEG500.map(([sq, en, cat], i) => {
  let slug = fold(sq) || `w${i + 1}`;
  seen[slug] = (seen[slug] || 0) + 1;
  if (seen[slug] > 1) slug = `${slug}-${seen[slug]}`;
  return { n: i + 1, slug, sq, en, cat };
});

const archiveIndex = {};
words.forEach((w) => {
  [w.headword, ...(w.forms || []), ...(w.tosk || [])].forEach((f) => (f || '').split(/[\/,]/).forEach((x) => {
    const k = plain(x);
    if (k && !archiveIndex[k]) archiveIndex[k] = w;
  }));
});

export function archiveMatch(entry) {
  for (const part of entry.sq.split('/')) {
    const w = archiveIndex[plain(part)];
    if (w) return w;
  }
  return null;
}

export function layerMatch(entry) {
  const parts = entry.sq.split('/').map((p) => plain(p));
  const hit = (list) => list.some((r) => parts.includes(plain(String(r[0]).split(' ')[0])));
  const latin = LATIN.groups.flatMap((g) => g.words).concat(LATIN.open);
  if (hit(latin)) return ['latine', 'Shtresa latine', 'The Latin layer'];
  if (hit(GREEK.in.concat(GREEK.out, GREEK.open))) return ['greke', 'Shtresa greke', 'The Greek layer'];
  if (hit(TURKISH.flatMap((g) => g.words))) return ['turke', 'Shtresa turke', 'The Turkish layer'];
  return null;
}

export function getWanted(slug) {
  return WANTED.find((w) => w.slug === slug) || null;
}

export const CATEGORIES = [...new Set(WANTED.map((w) => w.cat))];

export const CAT_EN = {
  'Natyra dhe qielli': 'Nature and sky', 'Trupi, fytyra dhe goja': 'Body, face and mouth', 'Tingujt e natyrës': 'Sounds of nature',
  'Veprimet e para': 'First actions', 'Gjahtari': 'The hunter', 'Bariu': 'The shepherd', 'Bujku': 'The farmer',
  'Deti dhe uji': 'Sea and water', 'Ndërtuesi dhe shtëpia': 'The builder and the house', 'Familja dhe farefisi': 'Family and kin',
  'Fisi dhe ligji': 'Clan and law', 'Fjalët më të qëndrueshme': 'The most stable words',
};
