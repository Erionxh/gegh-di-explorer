// Sound comparison: Mirdita word next to the oldest recorded languages.
// alb = how to read it with Albanian letters (stress on the accented vowel).
// Audio is synthetic (espeak-ng), from the scholars' reconstructed pronunciation.
// Nobody has heard Hittite or Sanskrit spoken: the sound is a best estimate.
// Sources: Orel 1998; Demiraj 1997; Pokorny via the Indo-European Lexicon (UT Austin).

export const LANGS = {
  sq: { sq: 'Mirdita', en: 'Mirdita' },
  hit: { sq: 'Hititisht', en: 'Hittite' },
  san: { sq: 'Sanskritisht', en: 'Sanskrit' },
  grc: { sq: 'Greqisht e vjetër', en: 'Ancient Greek' },
  lat: { sq: 'Latinisht', en: 'Latin' },
};

export const ANCIENT = {
  WATER: { key: 'water', root: '*wódr̥', rows: [
    ['sq', 'uj', 'uj'], ['hit', 'wātar', 'uátar'], ['san', 'udán', 'udán'], ['grc', 'ὕδωρ (hýdōr)', 'hýdor'], ['lat', 'aqua', 'ákua', 'rrënjë tjetër / different root'],
  ], extra: { sq: 'Latinishtja e ka këtë rrënjë vetëm te unda, por me kuptimin valë. Për ujin përdor aqua, nga një rrënjë tjetër.', en: 'Latin keeps this root only in unda, but meaning wave. For water it uses aqua, from a different root.' } },
  NAME: { key: 'name', root: '*h₁nómn̥', rows: [
    ['sq', 'emën', 'émën'], ['hit', 'lāman', 'láman'], ['san', 'nā́man', 'náman'], ['grc', 'ὄνομα (ónoma)', 'ónoma'], ['lat', 'nōmen', 'nómen'],
  ] },
  NIGHT: { key: 'night', root: '*nókʷts', rows: [
    ['sq', 'nat', 'nat'], ['hit', 'nekuz', 'nékuz', 'mbrëmje / evening'], ['san', 'nákt-', 'nákt'], ['grc', 'νύξ (nýx)', 'nyks'], ['lat', 'nox', 'noks'],
  ] },
  DRINK: { key: 'drink', root: '*peh₃-', rows: [
    ['sq', 'me pi', 'pi'], ['san', 'píbati', 'píbati'], ['grc', 'πίνω (pínō)', 'píno'], ['lat', 'bibō', 'bíbo'],
  ] },
  TOOTH: { key: 'tooth', root: '*ǵómbʰos', rows: [
    ['sq', 'dhamb', 'dhamb'], ['san', 'jámbha-', 'xhámbha', 'nofull, dhëmb / jaw, tooth'], ['grc', 'γόμφος (gómphos)', 'gómfos', 'dhëmballë, kunj / molar, peg'],
  ] },
};
