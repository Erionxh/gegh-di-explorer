// Fjalori i vendeve (gazetteer) për zgjedhjen e vendit te "Zani yt".
// Tri nivele: krahina e madhe › zona (krahinë historike, bajrak ose njësi) › fshati.
// Lista nuk është e plotë dhe nuk është klasifikim dialektor: është vetëm ndihmë për të shkruar.
// Kushdo mund ta shkruajë vetë vendin kur nuk e gjen. Zonat e reja shtohen nga regjistrimet.

export const PLACES = [
  { r: 'Mirdita', areas: [
    { a: 'Oroshi', v: ['Orosh'] },
    { a: 'Spaçi', v: ['Spaç'] },
    { a: 'Kushneni', v: ['Kushnen'] },
    { a: 'Fani', v: ['Fan', 'Ndërfanë'] },
    { a: 'Dibrri', v: [] },
    { a: 'Kthella', v: ['Kthellë'] },
    { a: 'Selita', v: ['Selitë'] },
    { a: 'Rrësheni', v: ['Rrëshen', 'Gëziq', 'Mashterkor'] },
    { a: 'Rubiku', v: ['Rubik'] },
    { a: 'Kaçinari', v: ['Kaçinar'] },
  ] },
  { r: 'Puka', areas: [
    { a: 'Puka', v: ['Pukë', 'Gjegjan', 'Qelëz', 'Qerret', 'Rrapë'] },
    { a: 'Fushë-Arrëzi', v: ['Fushë-Arrëz', 'Qafë-Mali', 'Iballë', 'Blerim', 'Fierzë'] },
  ] },
  { r: 'Shkodra', areas: [
    { a: 'Qyteti i Shkodrës', v: ['Shkodër'] },
    { a: 'Rrethinat e Shkodrës', v: ['Ana e Malit', 'Bërdicë', 'Dajç', 'Guri i Zi', 'Postribë', 'Velipojë', 'Rrethina'] },
    { a: 'Zadrima', v: ['Vau i Dejës', 'Bushat', 'Hajmel', 'Vig-Mnelë'] },
    { a: 'Shllaku dhe Temali', v: ['Shllak', 'Temal'] },
  ] },
  { r: 'Dukagjini', areas: [
    { a: 'Shala', v: ['Theth', 'Abat', 'Lotaj', 'Nderlysaj'] },
    { a: 'Shoshi', v: ['Shosh'] },
    { a: 'Pulti', v: ['Plan', 'Xhan', 'Bruçaj'] },
  ] },
  { r: 'Malësia e Madhe', areas: [
    { a: 'Kelmendi', v: ['Tamarë', 'Selcë', 'Vermosh', 'Vukël', 'Nikç'] },
    { a: 'Kastrati', v: ['Bajzë', 'Kastrat'] },
    { a: 'Hoti', v: ['Rrapshë', 'Hot'] },
    { a: 'Shkreli', v: ['Shkrel', 'Bzhetë'] },
    { a: 'Gruda dhe Triepshi (Mal i Zi)', v: ['Tuz'] },
    { a: 'Fusha e Koplikut', v: ['Koplik', 'Gruemirë', 'Qendër'] },
  ] },
  { r: 'Tropoja', areas: [
    { a: 'Tropoja', v: ['Bajram Curri', 'Tropojë', 'Bujan', 'Bytyç', 'Llugaj', 'Margegaj', 'Valbonë'] },
    { a: 'Nikaj-Mërturi', v: ['Lekbibaj', 'Curraj', 'Nikaj', 'Mërtur'] },
  ] },
  { r: 'Hasi', areas: [
    { a: 'Hasi', v: ['Krumë', 'Golaj', 'Fajza', 'Gjinaj'] },
  ] },
  { r: 'Kukësi', areas: [
    { a: 'Kukësi', v: ['Kukës', 'Kolsh', 'Grykë-Çajë', 'Malzi', 'Tërthore', 'Arrën'] },
    { a: 'Luma', v: ['Bicaj', 'Shtiqën', 'Ujmisht', 'Kalis', 'Topojan', 'Surroj'] },
    { a: 'Gora (pjesa në Shqipëri)', v: ['Shishtavec', 'Zapod'] },
  ] },
  { r: 'Lezha', areas: [
    { a: 'Lezha dhe bregu', v: ['Lezhë', 'Shëngjin', 'Balldre', 'Dajç', 'Shënkoll', 'Zejmen'] },
    { a: 'Kallmeti dhe Blinishti', v: ['Kallmet', 'Blinisht'] },
    { a: 'Malet e Lezhës', v: ['Ungrej', 'Kolsh'] },
  ] },
  { r: 'Kurbini', areas: [
    { a: 'Kurbini', v: ['Laç', 'Mamurras', 'Milot', 'Fushë-Kuqe'] },
  ] },
  { r: 'Mati', areas: [
    { a: 'Mati', v: ['Burrel', 'Baz', 'Derjan', 'Komsi', 'Lis', 'Rukaj', 'Ulëz', 'Macukull'] },
    { a: 'Klosi', v: ['Klos', 'Gurrë', 'Suç', 'Xibër'] },
  ] },
  { r: 'Dibra', areas: [
    { a: 'Peshkopia dhe Dibra e Vogël', v: ['Peshkopi', 'Maqellarë', 'Melan', 'Tomin', 'Sllovë', 'Kastriot', 'Muhurr', 'Selishtë', 'Arras', 'Fushë-Çidhën'] },
    { a: 'Kalaja e Dodës', v: ['Kala e Dodës', 'Zall-Reç', 'Zall-Dardhë'] },
    { a: 'Lura', v: ['Lurë', 'Luzni'] },
    { a: 'Bulqiza', v: ['Bulqizë', 'Fushë-Bulqizë', 'Gjoricë', 'Martanesh', 'Ostren', 'Shupenzë', 'Trebisht', 'Zerqan'] },
    { a: 'Dibra e Madhe (Maqedoni e Veriut)', v: ['Dibër (Debar)'] },
  ] },
  { r: 'Kosova / Dardania', areas: [
    { a: 'Rrafshi i Dukagjinit', v: ['Gjakovë', 'Pejë', 'Deçan', 'Junik', 'Istog', 'Klinë', 'Rahovec'] },
    { a: 'Prizreni dhe Opoja', v: ['Prizren', 'Dragash', 'Suharekë', 'Malishevë'] },
    { a: 'Drenica', v: ['Skënderaj', 'Gllogoc'] },
    { a: 'Prishtina dhe Llapi', v: ['Prishtinë', 'Podujevë', 'Obiliq', 'Fushë-Kosovë', 'Lipjan'] },
    { a: 'Kosova lindore (Anamorava)', v: ['Gjilan', 'Kamenicë', 'Viti'] },
    { a: 'Mitrovica', v: ['Mitrovicë', 'Vushtrri'] },
    { a: 'Ferizaj', v: ['Ferizaj', 'Kaçanik', 'Shtime'] },
  ] },
  { r: 'Lugina e Preshevës', areas: [
    { a: 'Lugina e Preshevës', v: ['Preshevë', 'Bujanoc', 'Medvegjë'] },
  ] },
  { r: 'Maqedonia e Veriut', areas: [
    { a: 'Shkupi', v: ['Shkup'] },
    { a: 'Pollogu', v: ['Tetovë', 'Gostivar'] },
    { a: 'Kërçova', v: ['Kërçovë'] },
    { a: 'Struga dhe Ohri', v: ['Strugë', 'Ohër'] },
    { a: 'Kumanova', v: ['Kumanovë'] },
  ] },
  { r: 'Mali i Zi', areas: [
    { a: 'Ulqini', v: ['Ulqin'] },
    { a: 'Tuzi', v: ['Tuz'] },
    { a: 'Plava dhe Gucia', v: ['Plavë', 'Guci'] },
    { a: 'Tivari', v: ['Tivar'] },
  ] },
  { r: 'Shqipëria e Mesme', areas: [
    { a: 'Tirana', v: ['Tiranë'] },
    { a: 'Kruja', v: ['Krujë', 'Fushë-Krujë'] },
    { a: 'Durrësi', v: ['Durrës', 'Shijak'] },
    { a: 'Kavaja', v: ['Kavajë', 'Rrogozhinë'] },
    { a: 'Elbasani', v: ['Elbasan', 'Cërrik', 'Peqin', 'Belsh', 'Gramsh'] },
    { a: 'Librazhdi', v: ['Librazhd', 'Përrenjas'] },
  ] },
  { r: 'Toskëria', areas: [
    { a: 'Myzeqeja', v: ['Fier', 'Lushnjë', 'Divjakë'] },
    { a: 'Berati dhe Skrapari', v: ['Berat', 'Kuçovë', 'Çorovodë', 'Poliçan'] },
    { a: 'Korça', v: ['Korçë', 'Pogradec', 'Kolonjë', 'Devoll'] },
    { a: 'Përmeti dhe Tepelena', v: ['Përmet', 'Tepelenë'] },
  ] },
  { r: 'Labëria dhe jugu', areas: [
    { a: 'Labëria', v: ['Vlorë', 'Himarë', 'Kurvelesh'] },
    { a: 'Gjirokastra', v: ['Gjirokastër', 'Libohovë'] },
    { a: 'Delvina dhe Saranda', v: ['Delvinë', 'Sarandë', 'Konispol'] },
  ] },
  { r: 'Çamëria', areas: [] },
  { r: 'Arbëreshët (Itali)', areas: [] },
  { r: 'Arvanitët (Greqi)', areas: [] },
  { r: 'Diaspora', areas: [] },
];

export const REGION_NAMES = PLACES.map((p) => p.r);

// Kthen sugjerimet për fshatin, sipas krahinës dhe zonës së zgjedhur.
export function villagesFor(region, area) {
  const p = PLACES.find((x) => x.r === region);
  if (!p) return [];
  const list = area ? p.areas.filter((a) => a.a === area) : p.areas;
  return [...new Set(list.flatMap((a) => a.v))].sort((x, y) => x.localeCompare(y, 'sq'));
}

export function areasFor(region) {
  const p = PLACES.find((x) => x.r === region);
  return p ? p.areas.map((a) => a.a) : [];
}

// Teksti që ruhet: "Fshati · Zona · Krahina" (vetëm pjesët që janë plotësuar).
export function placeLabel({ village, area, region }) {
  return [village, area, region].map((s) => (s || '').trim()).filter(Boolean)
    .filter((s, i, arr) => arr.indexOf(s) === i).join(' · ');
}
