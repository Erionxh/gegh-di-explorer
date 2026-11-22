// Kontrollon që skedari është vërtet audio (nga bajtët e parë, jo nga emri që deklaron shfletuesi).
export function sniffAudio(buf) {
  const b = buf.subarray(0, 16);
  const s = (i, str) => [...str].every((c, k) => b[i + k] === c.charCodeAt(0));
  if (b[0] === 0x1a && b[1] === 0x45 && b[2] === 0xdf && b[3] === 0xa3) return { ok: true, ext: 'webm', type: 'audio/webm' };
  if (s(0, 'OggS')) return { ok: true, ext: 'ogg', type: 'audio/ogg' };
  if (s(4, 'ftyp')) return { ok: true, ext: 'm4a', type: 'audio/mp4' };
  if (s(0, 'RIFF') && s(8, 'WAVE')) return { ok: true, ext: 'wav', type: 'audio/wav' };
  if (s(0, 'ID3') || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0)) return { ok: true, ext: 'mp3', type: 'audio/mpeg' };
  return { ok: false };
}
