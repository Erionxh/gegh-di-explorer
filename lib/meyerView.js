export const fold = (s) => (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ë/g, 'e');
export const bsbUrl = (img) => `https://www.digitale-sammlungen.de/de/view/bsb11646944?page=${img}`;
let cache = null;
export async function loadMeyer() {
  if (cache) return cache;
  const r = await fetch('/meyer.json');
  cache = (await r.json()).map(([h, p, i, t, g]) => ({ h, p, i, t, g: !!g, f: fold(h + ' ' + t) }));
  return cache;
}
