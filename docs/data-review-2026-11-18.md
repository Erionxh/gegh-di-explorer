# Rishikimi i të dhënave / Data review — 18.11.2026

Rishikim i parë i shtresës krahasuese, sipas rregullit **GOLD-INV-03 (pa burim, pa vlerësim)**
dhe **GEGH-INV-22 (asnjë pretendim lashtësie pa dëshmi)**.

First review of the comparative layer, under **GOLD-INV-03 (no source, no validation)**
and **GEGH-INV-22 (no claim of antiquity without evidence)**.

Asgjë nuk u fshi pa gjurmë: pretendimet e korrigjuara ruhen në fushën `superseded`.
Nothing was removed without a trace: corrected claims are kept under `superseded`.

## Korrigjime / Corrections (`review.status: CORRECTED`)

| ID | Fjala | Problemi | Çfarë u bë |
|---|---|---|---|
| GC-0004 | hân (hënë) | Rrënja *mēns- dhe Latin mēnsis, Greek mēn i përkasin fjalës **muaj** „muaj”, jo **hënë** | Etimologjia shënohet OPEN (e debatuar) |
| GC-0022 | dhamb (dhëmb) | *dont- (Latin dēns, English tooth) është rrënjë tjetër | Propozimi standard: *ǵómbʰos „dhëmb, kunj” (Sanskrit jámbha-, Greek gómphos, OE camb), OPEN deri në citim |
| GC-0027 | gjak | „Romanian ceac (?)” pa asnjë bazë | U hoq; etimologjia mbetet e pasigurt |
| GC-0065 | grue | „Old Irish briar (?)” dhe rrënja spekulative pa bazë | U hoqën; OPEN |
| data.js | MOTËR | Rrënja „Substratum” dhe format e „motrës” (soror, sestra) — gabim | *méh₂tēr „nënë” → shqip „motër” (zhvendosje kuptimi) |
| data.js | VESH | „slavic: oblati” nuk është kognat | U hoq |

## Të hapura, duan burim / Open, need a source (`NEEDS_SOURCE` / `DISPUTED`)

uj, zjerm, mir/majr, madh (rrënja u saktësua në *meǵh₂-), krye (lidhja me *krew- e diskutueshme).

Në `lib/data.js` statusi `supported` u kthye në `open` për të katër hyrjet: burimet janë ende
lidhje kërkimi Google, jo faqe të verifikuara.

## Gabim në ndërfaqe / Interface bug

`lib/lexicon.js` shfaqte konceptin anglisht si formë toske (p.sh. Tosk: „water”).
Tani forma toske shfaqet vetëm kur dokumentohet.

## Hapi tjetër / Next step

Për çdo hyrje: një burim i vërtetë (autor, vepër, faqe), i kontrolluar, para se statusi të ndryshojë.
For every entry: a real source (author, work, page), checked, before any status changes.
