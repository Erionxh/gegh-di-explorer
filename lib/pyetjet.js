// Pyetjet e Kuvenit: pyetje të vërteta nga GEG 1.0, për t'u ndarë. Përgjigjet janë të vërteta, te "Përgjigjet tuaja".
export const PYETJET = [
  { id: 'fli', link: ['/gatimet', 'Gatimet', 'Food'],
    sq: { t: 'Pse quhet flija «fli»? Si bëhet te ju?', b: 'Fli është fjalë e vjetër shqipe për «flijim, ofertë». Tradita e lidh flinë me Verëzën dhe me Diellin. A e keni dëgjuar këtë lidhje nga pleqtë? Dhe si bëhet te ju: me saç, sa shtresa, me kajmak apo me gjalpë, për çfarë rasti?' },
    en: { t: 'Why is flija called “fli”? How is it made where you are?', b: 'Fli is an old Albanian word for “sacrifice, offering”. Tradition links flija to the spring feast of Verëza and to the Sun. Have you heard that link from the elders? And how is it made where you are: under a saç, how many layers, with cream or butter, for what occasion?' } },
  { id: 'emri-fshatit', link: ['/vendet', 'Emrat e vendeve', 'The names of places'],
    sq: { t: 'Si e thoshin pleqtë emrin e fshatit tuaj?', b: 'Shpesh emri në hartë nuk është ai që thonë pleqtë. Shkruani emrin zyrtar dhe si e shqiptojnë të moshuarit. Edhe emrat e arave, kroneve dhe majave përreth janë ari.' },
    en: { t: 'How did the elders say the name of your village?', b: 'The name on the map is often not the one the elders say. Write the official name and how the old people pronounce it. The names of the fields, springs and peaks around it are gold too.' } },
  { id: 'vendi-shenjte', link: ['/vendet-e-shenjta', 'Vendet e shenjta', 'Sacred places'],
    sq: { t: 'Cili është vendi i shenjtë i fshatit tuaj?', b: 'Një kishë e rrënuar, një teqe, një varr, një lis, një krua. Si quhet, kush shkonte atje dhe kur? A shkonin bashkë njerëz të feve të ndryshme?' },
    en: { t: 'What is the sacred place of your village?', b: 'A ruined church, a tekke, a grave, an oak, a spring. What is it called, who went there and when? Did people of different faiths go together?' } },
  { id: 'kafeja', link: ['/gatimet', 'Gatimet', 'Food'],
    sq: { t: 'Kafe turke apo greke? Dhe si e porosisnin pleqtë?', b: 'E njëjta kafe, dy emra fqinjë. E ne si e quajmë? Dhe si e porosisnin pleqtë: me sheqer «shumë», «mesatare», «pak», «pa»? Çfarë fjalësh kishin për xhezven, filxhanin, shkumën?' },
    en: { t: 'Turkish or Greek coffee? And how did the elders order it?', b: 'The same coffee, two neighbours’ names. What do we call it? And how did the elders order it: sugar “a lot”, “medium”, “a little”, “none”? What words did they have for the pot, the cup, the foam?' } },
  { id: 'shuj', link: ['/fjalet', 'Fjalët që kërkojmë', 'The words we seek'],
    sq: { t: 'Shuj apo shuaj? Si e thoni ju?', b: 'Në shumë fshatra të Mirditës thuhet «shuj» (zjarrin, dritën), në standard «shuaj». Si e thonë te ju? Shkruani fshatin dhe kush e thoshte: gjyshja, babai, ju vetë.' },
    en: { t: 'Shuj or shuaj? How do you say it?', b: 'In many Mirdita villages people say “shuj” (the fire, the light); standard Albanian says “shuaj”. How is it said where you are? Write the village and who said it: grandmother, father, yourself.' } },
  { id: 'dasma', link: ['/rrethi-i-jetes', 'Rrethi i jetës', 'The circle of life'],
    sq: { t: 'Çfarë gatuhej dhe këndohej në dasmë te ju?', b: 'Nga fejesa te nusja që del nga shtëpia: çfarë bëhej, çfarë gatuhej, cilat këngë këndoheshin? Çfarë ka ndryshuar sot?' },
    en: { t: 'What was cooked and sung at weddings where you are?', b: 'From the engagement to the bride leaving home: what was done, what was cooked, which songs were sung? What has changed today?' } },
];
export const getPyetja = (id) => PYETJET.find((x) => x.id === id);
