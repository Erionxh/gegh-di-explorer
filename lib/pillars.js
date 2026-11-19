// Tetë shtyllat e kështjellës GEG. Çdo shtyllë ka faqen e vet: /shtyllat/[id]
// Kushtetuta është draft v0.1: e shkruar nga parimet themeluese, pret miratimin e bordit.

export const PILLAR_ORDER = ['kushtetuta', 'arkitektura', 'taksonomia', 'korpusi', 'deshmia', 'qeverisja', 'kerkimi', 'nderfaqja'];

export const PILLARS = {
  kushtetuta: {
    n: 1,
    sq: {
      name: 'Kushtetuta',
      metaphor: 'Kodi i ndërtimit të kështjellës',
      question: 'Cilat janë rregullat që nuk i ndryshon dot askush sipas qejfit, as themeluesi?',
      lead: 'Kushtetuta është themeli mbi të cilin ngrihet gjithçka tjetër. Nuk thotë çfarë është e vërtetë për gegnishten. Thotë si e kërkojmë të vërtetën: me burim, me prova, hapur, dhe me të drejtën për t\'u gabuar e për t\'u korrigjuar.',
      draft: 'Draft v0.1. E shkruar nga pesë parimet themeluese. Hyn në fuqi kur ta miratojë bordi; deri atëherë është propozim i hapur për komente.',
      articlesTitle: 'Nenet',
      articles: [
        ['Qëllimi', 'GEG dokumenton gegnishten ashtu siç flitet dhe siç është shkruar, duke filluar nga Mirdita. Mirdita e para, jo e vetmja: çdo krahinë, çdo zë dhe diaspora janë të mirëpritura. Qëllimi është të zbulojmë çfarë tregojnë provat, jo të provojmë një tezë të vendosur që më parë.'],
        ['Hapja', 'Materiali, metoda dhe kodi janë të hapura. Kushdo mund t\'i lexojë, t\'i kontrollojë dhe t\'i përdorë, me citim të burimit.'],
        ['Rregulli i burimit', 'Pa burim, pa vlerësim. Asnjë pretendim nuk merr status "i mbështetur" pa një burim të kontrolluar: autori, vepra, faqja, ose regjistrimi me vendin dhe kohën.'],
        ['Vëzhgimi nuk është interpretim', 'Ajo që tha folësi ruhet ashtu siç erdhi dhe nuk korrigjohet kurrë. Shpjegimi historik i saj është hipotezë, objekt më vete, që mund të ndryshojë.'],
        ['Përmbysja', 'Çdo hipotezë shkruan edhe çfarë do ta rrëzonte. Hipoteza e rrëzuar nuk fshihet: mbetet në arkiv me arsyet, që askush të mos e rizbulojë si të re.'],
        ['Mosmarrëveshja ruhet', 'Kur ka shpjegime që konkurrojnë, ato qëndrojnë krah për krah, secili me provat e veta. Kështjella nuk e mbyll debatin me forcë.'],
        ['Pavarësia shkencore', 'Asnjë person, institucion, parti a sponsor nuk vendos çfarë është e vërtetë. As themeluesi, as bordi. Statusi del nga provat, me arsye të shkruara.'],
        ['Pëlqimi dhe dinjiteti', 'Zëri i dikujt ruhet vetëm me pëlqimin e tij. Regjistrimet mbeten private derisa të shqyrtohen. Kontribuesi mund të kërkojë heqjen e kontributit të vet.'],
        ['Historia', 'Çdo ndryshim ruhet me datë dhe arsye. Gabimi i ndrequr mbetet i dukshëm si "i korrigjuar". Asgjë nuk ndryshohet në heshtje.'],
        ['Ndryshimi i Kushtetutës', 'Kushtetuta ndryshohet vetëm nga bordi, publikisht, me arsyen e shkruar, dhe versioni i vjetër ruhet. Pragun e votës e cakton bordi në mbledhjen e tij të parë. Themeluesi ruan që procedura të ndiqet, jo përmbajtjen e shkencës.'],
        ['Mbijetesa', 'Projekti ndërtohet që të jetojë pa themeluesin e tij: kodi, të dhënat dhe rregullat nuk varen nga një njeri i vetëm.'],
      ],
      sections: [
        ['Pesë parimet nga dalin nenet', ['Mblidh para se të përfundosh.', 'Ruaj dëshminë origjinale.', 'Ndaj vëzhgimin nga interpretimi.', 'Lejo mosmarrëveshjen dhe përmbysjen.', 'Mbaje infrastrukturën të hapur.']],
      ],
      now: ['Rregulli i burimit zbatohet tashmë: dosjet e fjalëve tregojnë "Pa burim ende" kur nuk ka burim të kontrolluar.', 'Regjistrimet e Kujtesës ruhen private dhe presin shqyrtimin.', 'Çdo ndryshim në faqe ruhet në historinë e GitHub-it.'],
      next: ['Miratimi nga bordi i parë.', 'Faqe komentesh për çdo nen, para miratimit.'],
    },
    en: {
      name: 'The Constitution',
      metaphor: 'The building code of the castle',
      question: 'Which rules can nobody change at will, not even the founder?',
      lead: 'The Constitution is the foundation everything else stands on. It does not say what is true about Gheg. It says how we look for the truth: with sources, with evidence, in the open, and with the right to be wrong and to be corrected.',
      draft: 'Draft v0.1. Written from the five founding principles. It comes into force when the board approves it; until then it is an open proposal for comments.',
      articlesTitle: 'The articles',
      articles: [
        ['Purpose', 'GEG documents Gheg as it is spoken and as it has been written, starting with Mirdita. Mirdita first, not the only one: every region, every voice and the diaspora are welcome. The aim is to find out what the evidence shows, not to prove a thesis decided in advance.'],
        ['Openness', 'The material, the method and the code are open. Anyone may read, check and use them, citing the source.'],
        ['The source rule', 'No source, no validation. No claim becomes "supported" without a checked source: author, work, page, or a recording with its place and time.'],
        ['Observation is not interpretation', 'What a speaker said is kept as it came and is never corrected. Its historical explanation is a hypothesis, a separate object, which may change.'],
        ['Falsifiability', 'Every hypothesis also states what would refute it. A refuted hypothesis is not deleted: it stays in the archive with the reasons, so nobody rediscovers it as new.'],
        ['Disagreement is preserved', 'When explanations compete, they stand side by side, each with its own evidence. The castle does not close a debate by force.'],
        ['Scientific independence', 'No person, institution, party or sponsor decides what is true. Not the founder, not the board. Status comes from the evidence, with written reasons.'],
        ['Consent and dignity', 'A person\'s voice is kept only with their consent. Recordings stay private until reviewed. A contributor may ask for their contribution to be removed.'],
        ['History', 'Every change is kept with a date and a reason. A corrected error stays visible as "corrected". Nothing changes silently.'],
        ['Amending the Constitution', 'The Constitution is changed only by the board, in public, with the reason written down, and the old version is kept. The board sets the voting threshold at its first meeting. The founder guards the procedure, not the content of the science.'],
        ['Survival', 'The project is built to live without its founder: the code, the data and the rules do not depend on any single person.'],
      ],
      sections: [
        ['The five principles the articles come from', ['Collect before concluding.', 'Preserve the original evidence.', 'Separate observation from interpretation.', 'Allow disagreement and falsification.', 'Keep the infrastructure open.']],
      ],
      now: ['The source rule already applies: word dossiers show "Needs a source" when there is no checked source.', 'Kujtesa recordings are stored privately and wait for review.', 'Every change to the site is kept in the GitHub history.'],
      next: ['Approval by the first board.', 'A comments page for each article, before approval.'],
    },
    links: [['/metodologjia', 'Si funksionon makina', 'How the machine works']],
  },

  arkitektura: {
    n: 2,
    sq: {
      name: 'Arkitektura',
      metaphor: 'Plani inxhinierik',
      question: 'Ku ruhet çdo gjë, si lidhet me të tjerat, dhe si nuk humbet asgjë?',
      lead: 'Arkitektura është skeleti teknik: çdo fjalë, çdo regjistrim, çdo burim dhe çdo hipotezë ka identitetin e vet (një ID) dhe lidhjet e veta. Kështu një fjalë e Mirditës mund të lidhet me faqen e Meyer-it, me një zë nga Kujtesa dhe me një pikë në hartë, pa i përzier ato.',
      sections: [
        ['Objektet kryesore', ['Njësia leksikore: fjala, kuptimi, forma gege.', 'Dëshmia: regjistrim, dorëshkrim, tekst i botuar, me vendin dhe kohën.', 'Hipoteza: nga vjen fjala, kush e propozoi, çfarë do ta rrëzonte.', 'Burimi: autori, vepra, viti, faqja.', 'Ligji tingullor: një korrespondencë që përsëritet nëpër fjalë.']],
        ['Rregullat e ndërtimit', ['Çdo objekt ka një ID që nuk ndryshon kurrë (p.sh. K-0001 për kujtimin e parë).', 'Vëzhgimi dhe hipoteza janë objekte të ndara.', 'Çdo ndryshim ka version.', 'Të dhënat mund të eksportohen në formate të hapura.']],
      ],
      now: ['Faqja: kod i hapur në GitHub, publikohet automatikisht.', 'Kujtesa: regjistrimet ruhen në një bazë të dhënash me arkiv privat zërash.', 'Fjalët dhe burimet: skedarë të strukturuar me ID.'],
      next: ['Kalimi drejt një modeli të plotë me entitete të lidhura (në stilin Wikibase), me lidhje mes fjalës, dëshmisë, hipotezës dhe burimit.', 'API e hapur për studiuesit.'],
    },
    en: {
      name: 'Architecture',
      metaphor: 'The engineering plan',
      question: 'Where is everything kept, how does it connect, and how is nothing lost?',
      lead: 'The architecture is the technical skeleton: every word, every recording, every source and every hypothesis has its own identity (an ID) and its own links. That way a Mirdita word can be linked to a page in Meyer, a voice from Kujtesa and a point on the map, without mixing them up.',
      sections: [
        ['The main objects', ['Lexical unit: the word, its meaning, its Gheg form.', 'Attestation: a recording, manuscript or published text, with place and time.', 'Hypothesis: where the word comes from, who proposed it, what would refute it.', 'Source: author, work, year, page.', 'Sound law: a correspondence that repeats across words.']],
        ['Building rules', ['Every object has an ID that never changes (e.g. K-0001 for the first memory).', 'Observation and hypothesis are separate objects.', 'Every change is versioned.', 'The data can be exported in open formats.']],
      ],
      now: ['The site: open code on GitHub, published automatically.', 'Kujtesa: recordings stored in a database with a private voice archive.', 'Words and sources: structured files with IDs.'],
      next: ['A move to a full linked-entity model (Wikibase-style), linking word, attestation, hypothesis and source.', 'An open API for researchers.'],
    },
    links: [['/studiuesit', 'Arkivi i studiuesve', 'The scholars\' archive']],
  },

  taksonomia: {
    n: 3,
    sq: {
      name: 'Taksonomia',
      metaphor: 'Rregullimi i dhomave dhe i koleksioneve',
      question: 'Si i klasifikojmë gjërat, që dy njerëz të flasin për të njëjtën gjë?',
      lead: 'Taksonomia është fjalori i përbashkët i kështjellës: si quhen dialektet dhe krahinat, cilat janë kategoritë e fjalëve, periudhat historike, dhe mbi të gjitha statuset që tregojnë gjendjen e provave për çdo pretendim.',
      statusesTitle: 'Statuset',
      sections: [
        ['Çfarë klasifikohet', ['Dialektet dhe nëndialektet: Mirdita, Shkodra, Malësia, Dukagjini, Dibra, Kosova / Dardania, Arbëreshët dhe të tjerët.', 'Kategoritë e fjalëve: natyra, trupi, tingujt e natyrës, veprimet e para, gjahtari, bariu, bujku, deti, shtëpia, familja, fisi dhe ligji.', 'Periudhat: nga dëshmitë e para të shkruara (Buzuku 1555) deri te zërat e sotëm.', 'Statuset epistemike, më poshtë.']],
      ],
      now: ['Lista GEG 500 me kategoritë e veta.', 'Shtatë statuse, të përdorura në arkiv dhe në dosje.', 'Lista e krahinave në formularin e Kujtesës.'],
      next: ['Kodet e tipareve dialektore (tinguj, forma, fjalë).', 'Periudhat historike me kufij të caktuar.'],
    },
    en: {
      name: 'Taxonomy',
      metaphor: 'The arrangement of rooms and collections',
      question: 'How do we classify things, so that two people mean the same thing?',
      lead: 'The taxonomy is the castle\'s shared vocabulary: what the dialects and regions are called, the word categories, the historical periods and, above all, the statuses that show the state of the evidence for every claim.',
      statusesTitle: 'The statuses',
      sections: [
        ['What is classified', ['Dialects and sub-dialects: Mirdita, Shkodra, Malësia, Dukagjini, Dibra, Kosova / Dardania, the Arbëresh and others.', 'Word categories: nature, body, nature sounds, first actions, hunter, shepherd, farmer, sea, home, family, tribe and law.', 'Periods: from the first written records (Buzuku 1555) to today\'s voices.', 'Epistemic statuses, below.']],
      ],
      now: ['The GEG 500 list with its categories.', 'Seven statuses, used in the archive and the dossiers.', 'The list of regions in the Kujtesa form.'],
      next: ['Codes for dialect features (sounds, forms, words).', 'Historical periods with fixed boundaries.'],
    },
    links: [['/metodologjia#statuset', 'Statuset te metodologjia', 'Statuses in the methodology']],
  },

  korpusi: {
    n: 4,
    sq: {
      name: 'Korpusi',
      metaphor: 'Materiali i ruajtur brenda',
      question: 'Çfarë kemi në të vërtetë, të mbledhur dhe të ruajtur?',
      lead: 'Korpusi është lënda e parë: fjalët, shprehjet, regjistrimet, dorëshkrimet, tekstet e botuara, vëzhgimet nga terreni. Pa korpus, çdo teori është ajër.',
      sections: [
        ['Çfarë hyn', ['Zëra: kujtime të regjistruara nga folës të gegnishtes, në Shqipëri, Kosovë, rajon dhe diasporë.', 'Lista GEG 500: fjalët bazë të jetës malore, me format e Mirditës.', 'Tekste të vjetra: Buzuku, Bogdani, Budi dhe të tjerët.', 'Studime: Meyer, Hahn, Jokl, Çabej, Demiraj, Orel e të tjerë, në bibliotekën e burimeve.', 'Fotografi dhe vizatime nga udhëtarët dhe studiuesit e vjetër.']],
        ['Rregulli i korpusit', ['Asgjë nuk "zbukurohet": ruhet siç erdhi.', 'Çdo copë ka burimin, vendin dhe kohën.']],
      ],
      now: ['Kujtimi i parë (K-0001) i ruajtur me zë.', 'Lista GEG 500, me shënime nga Meyer 1891 për fjalët e para.', 'Mbi 30 vepra në bibliotekën e burimeve.'],
      next: ['Kalimi i plotë i Meyer 1891 për të gjitha fjalët e listës.', 'Më shumë zëra, nga çdo fshat e qytet.'],
    },
    en: {
      name: 'The corpus',
      metaphor: 'The material stored inside',
      question: 'What do we actually have, collected and preserved?',
      lead: 'The corpus is the raw material: words, expressions, recordings, manuscripts, published texts, field observations. Without a corpus, every theory is thin air.',
      sections: [
        ['What goes in', ['Voices: recorded memories from Gheg speakers in Albania, Kosova, the region and the diaspora.', 'The GEG 500 list: the core words of mountain life, with their Mirdita forms.', 'Old texts: Buzuku, Bogdani, Budi and others.', 'Studies: Meyer, Hahn, Jokl, Çabej, Demiraj, Orel and others, in the sources library.', 'Photographs and drawings by early travellers and scholars.']],
        ['The corpus rule', ['Nothing is "improved": it is kept as it came.', 'Every piece has its source, place and time.']],
      ],
      now: ['The first memory (K-0001) stored with its voice.', 'The GEG 500 list, with Meyer 1891 notes for the first words.', 'Over 30 works in the sources library.'],
      next: ['A full Meyer 1891 pass for every word on the list.', 'More voices, from every village and town.'],
    },
    links: [['/kujtesa', 'Shto një kujtim', 'Add a memory'], ['/burimet', 'Biblioteka e burimeve', 'The sources library']],
  },

  deshmia: {
    n: 5,
    sq: {
      name: 'Dëshmia',
      metaphor: 'Themelet dhe dokumentet pas çdo guri',
      question: 'Kush e thotë, ku e thotë, dhe a mund ta kontrollojë dikush tjetër?',
      lead: 'Dëshmia është zinxhiri që lidh çdo pretendim me burimin e vet. Nëse dikush thotë se një fjalë vjen nga një rrënjë e lashtë, kështjella pyet: cili autor, cila vepër, cila faqe? Nëse thotë se kështu flitet në një fshat: cili zë, kur, kush e dëgjoi?',
      sections: [
        ['Si duket një dëshmi e plotë', ['Për një libër: autori, vepra, viti, faqja (p.sh. Meyer 1891, s.v. "dhëmb", f. N).', 'Për një regjistrim: fjala, fshati ose qyteti, krahina, shteti, kur u dëgjua, pëlqimi.', 'Për një hipotezë: kush e propozoi, mbi çfarë provash, çfarë do ta rrëzonte, argumentet kundër.']],
        ['Rregulli i burimit', ['Pa burim, pa vlerësim. Pretendimi pa burim mbetet "Pa burim ende", sado bukur të tingëllojë.']],
      ],
      now: ['Çdo burim në bibliotekë ka ID-në e vet dhe lidhet nga faqet e lenteve.', 'Shënimet nga Meyer citojnë faqen e PDF-së.'],
      next: ['Lidhja e çdo pretendimi me burimin e vet brenda dosjes së fjalës.', 'Përgjigjet e studiuesve të mëvonshëm (Çabej e të tjerë) krah pretendimeve të Meyer-it.'],
    },
    en: {
      name: 'Evidence',
      metaphor: 'The foundations and the paperwork behind every stone',
      question: 'Who says so, where, and can someone else check it?',
      lead: 'Evidence is the chain that ties every claim to its source. If someone says a word comes from an ancient root, the castle asks: which author, which work, which page? If they say it is spoken this way in a village: which voice, when, who heard it?',
      sections: [
        ['What complete evidence looks like', ['For a book: author, work, year, page (e.g. Meyer 1891, s.v. "dhëmb", p. N).', 'For a recording: the word, the village or town, region, country, when it was heard, consent.', 'For a hypothesis: who proposed it, on what evidence, what would refute it, the arguments against.']],
        ['The source rule', ['No source, no validation. A claim without a source stays "Needs a source", however good it sounds.']],
      ],
      now: ['Every source in the library has its own ID and is linked from the lens pages.', 'The Meyer notes cite the PDF page.'],
      next: ['Linking every claim to its source inside the word dossier.', 'Later scholars\' answers (Çabej and others) next to Meyer\'s claims.'],
    },
    links: [['/burimet', 'Biblioteka e burimeve', 'The sources library']],
  },

  qeverisja: {
    n: 6,
    sq: {
      name: 'Qeverisja',
      metaphor: 'Kujdestaria e kështjellës',
      question: 'Kush e mbron integritetin e sistemit, pa e kontrolluar të vërtetën?',
      lead: 'Çelësat i ka bordi, jo një njeri. Qeverisja vendos si hyjnë kontributet, si shqyrtohen, si ndryshohen rregullat, dhe si ruhet projekti nga presioni i çdokujt, përfshirë themeluesin.',
      seatsTitle: 'Bordi i nëntë',
      seatsNote: 'Vendet janë të hapura. Anëtarët e parë do të zgjidhen sipas disiplinës, jo sipas njohjes.',
      seats: [
        ['Gjuhësi historike', 'Ligjet tingullore, rindërtimi, krahasimi me gjuhët e tjera indoevropiane.'],
        ['Dialektologji gege', 'Njohja e gegnishtes së gjallë, nga Mirdita deri në Kosovë dhe më tej.'],
        ['Arkeologji', 'Vendbanime, varre, kultura materiale. Kufiri: gërmimi nuk provon gjuhën.'],
        ['Gjenetikë e popullsive', 'ADN-ja e lashtë dhe e sotme. Kufiri: gjenetika nuk provon gjuhën.'],
        ['Antropologji dhe etnomuzikë', 'Kanuni, fisi, këngët, lahuta, ritet, kujtesa e komunitetit.'],
        ['Statistikë dhe matematikë', 'Testet, mostrat, shmangia e zgjedhjes së anshme të të dhënave.'],
        ['Arkitekturë IT', 'Ruajtja e të dhënave, versionet, hapja, siguria.'],
        ['Përfaqësues i diasporës', 'Zëri i shqiptarëve jashtë vendit, që e mbajnë gjuhën gjallë larg shtëpisë.'],
        ['Themeluesi, roja e Kushtetutës', 'Një votë. Ruan që procedura të ndiqet. Nuk vendos çfarë është e vërtetë.'],
      ],
      sections: [
        ['Shqyrtimi i zërave', ['Çdo regjistrim i Kujtesës shqyrtohet para se të bëhet publik.', 'Shqyrtuesit: një folës i gegnishtes së krahinës dhe një gjuhëtar ose shkrimtar, nën rregullat e bordit. Jo themeluesi vetëm.', 'Shqyrtimi kontrollon pëlqimin, cilësinë dhe të dhënat. Nuk "korrigjon" të folurën.']],
        ['Çfarë nuk bën bordi', ['Nuk shpall një etimologji të vërtetë me votë.', 'Nuk fsheh hipotezat e rrëzuara ose mosmarrëveshjet.', 'Nuk ndryshon Kushtetutën në heshtje.']],
      ],
      now: ['Vendet e bordit janë të hapura.', 'Regjistrimet presin shqyrtuesit.'],
      next: ['Zgjedhja e anëtarëve të parë.', 'Mbledhja e parë: miratimi i Kushtetutës dhe pragu i votës.', 'Faqja e shqyrtimit për shqyrtuesit.'],
    },
    en: {
      name: 'Governance',
      metaphor: 'The custodianship of the castle',
      question: 'Who protects the integrity of the system, without controlling the truth?',
      lead: 'The keys belong to a board, not one person. Governance decides how contributions come in, how they are reviewed, how the rules change, and how the project is protected from pressure by anyone, the founder included.',
      seatsTitle: 'The board of nine',
      seatsNote: 'The seats are open. The first members will be chosen by discipline, not by acquaintance.',
      seats: [
        ['Historical linguistics', 'Sound laws, reconstruction, comparison with the other Indo-European languages.'],
        ['Gheg dialectology', 'Knowledge of living Gheg, from Mirdita to Kosova and beyond.'],
        ['Archaeology', 'Settlements, graves, material culture. The limit: an excavation does not prove a language.'],
        ['Population genetics', 'Ancient and modern DNA. The limit: genetics does not prove a language.'],
        ['Anthropology & ethnomusicology', 'The Kanun, the tribe, songs, the lahuta, rites, community memory.'],
        ['Statistics & mathematics', 'Tests, samples, avoiding biased selection of the data.'],
        ['IT architecture', 'Data storage, versioning, openness, security.'],
        ['Diaspora representative', 'The voice of Albanians abroad, who keep the language alive far from home.'],
        ['Founder, guardian of the Constitution', 'One vote. Guards the procedure. Does not decide what is true.'],
      ],
      sections: [
        ['Reviewing the voices', ['Every Kujtesa recording is reviewed before it becomes public.', 'Reviewers: a Gheg speaker from the region and a linguist or writer, under the board\'s rules. Not the founder alone.', 'Review checks consent, quality and the details. It does not "correct" the speech.']],
        ['What the board does not do', ['It does not declare an etymology true by vote.', 'It does not hide refuted hypotheses or disagreements.', 'It does not change the Constitution silently.']],
      ],
      now: ['The board seats are open.', 'Recordings are waiting for reviewers.'],
      next: ['Choosing the first members.', 'First meeting: approving the Constitution and the voting threshold.', 'A review page for the reviewers.'],
    },
    links: [['/shtyllat/kushtetuta', 'Lexo Kushtetutën', 'Read the Constitution']],
  },

  kerkimi: {
    n: 7,
    sq: {
      name: 'Kërkimi',
      metaphor: 'Njerëzit që e studiojnë dhe e zgjerojnë kështjellën',
      question: 'Si kthehet materiali në njohuri që mund t\'i rezistojë kritikës?',
      lead: 'Kërkimi është puna shkencore mbi korpusin: krahasimi, rindërtimi, testimi i hipotezave dhe botimi. Kjo bëhet nëpër gjashtë lentet, secila me standardin e vet të provës.',
      sections: [
        ['Si testohet një hipotezë', ['Shkruhet më parë: çfarë pretendohet dhe çfarë do ta rrëzonte.', 'Lista e fjalëve dhe burimet caktohen para se të shihen të dhënat, që të mos zgjidhen vetëm fjalët që "duken mirë".', 'Rezultati, pozitiv ose negativ, publikohet.']],
        ['Shembull: protokolli "Skenari C"', ['Pyetja: a ruan gegnishtja më shumë fjalë të trashëguara, dhe në familje fjalësh më të lidhura, se gjuhët krahasuese?', 'Testohet në dy pjesë të ndara, me hipotezë zero për secilën.', 'Nuk teston "cila gjuhë është më e vjetër": degët e një familjeje kanë pasur të njëjtën kohë që nga ndarja.', 'Statusi: draft, ende pa të dhëna.']],
      ],
      now: ['Gjashtë lentet me faqet e tyre.', 'Krahasimi me zë i fjalëve të lashta (ujë, emër, natë, pi, dhëmb).', 'Protokolli i Skenarit C, draft.'],
      next: ['Përfundimi dhe testimi i Skenarit C.', 'Kalimi i plotë i Meyer 1891.'],
    },
    en: {
      name: 'Research',
      metaphor: 'The people who study and extend the castle',
      question: 'How does material become knowledge that can survive criticism?',
      lead: 'Research is the scientific work on the corpus: comparison, reconstruction, hypothesis testing and publication. It happens through the six lenses, each with its own standard of evidence.',
      sections: [
        ['How a hypothesis is tested', ['It is written down first: what is claimed and what would refute it.', 'The word list and sources are fixed before looking at the data, so that only words that "look good" are not picked.', 'The result, positive or negative, is published.']],
        ['Example: the "Scenario C" protocol', ['The question: does Gheg keep more inherited words, in more connected word families, than the comparison languages?', 'Tested in two separate parts, with a null hypothesis for each.', 'It does not test "which language is older": branches of one family have had the same time since the split.', 'Status: draft, no data yet.']],
      ],
      now: ['The six lenses with their own pages.', 'Spoken comparison of ancient words (water, name, night, drink, tooth).', 'The Scenario C protocol, in draft.'],
      next: ['Finishing and testing Scenario C.', 'A full Meyer 1891 pass.'],
    },
    links: [['/#lentet', 'Gjashtë lentet', 'The six lenses']],
  },

  nderfaqja: {
    n: 8,
    sq: {
      name: 'Ndërfaqja publike',
      metaphor: 'Udhërrëfyesi që të pret te porta',
      question: 'Si hyn një njeri i zakonshëm, ose një studiues, në kështjellë?',
      lead: 'Kjo faqe është udhërrëfyesi. Kështjella e vërtetë janë të dhënat dhe rregullat; faqja është dera dhe harta për t\'u orientuar brenda. Ka dy dyer: një për kujtesën e njerëzve, një për studiuesit.',
      sections: [
        ['Çfarë gjen sot', ['Kujtesa: lër një fjalë, një shprehje ose zërin tënd.', 'Fjalët: çdo fjalë ka dosjen e vet.', 'Harta: zërat, studiuesit e vjetër, fotografitë, dhe së shpejti ADN-ja.', 'Studiuesit: arkivi me statuset.', 'Burimet: biblioteka e veprave.', 'Gjashtë lentet dhe tetë shtyllat.']],
        ['Rregullat e ndërfaqes', ['Dy gjuhë: shqip dhe anglisht.', 'Të lexueshme nga telefoni.', 'Asnjë pretendim pa statusin e vet të dukshëm.']],
      ],
      now: ['Faqja është e gjallë, në BETA.'],
      next: ['Forumi i komunitetit, pas arkitekturës.', 'Shtresa e ADN-së në hartë.'],
    },
    en: {
      name: 'Public interface',
      metaphor: 'The guide who meets you at the gate',
      question: 'How does an ordinary person, or a scholar, get into the castle?',
      lead: 'This site is the guide. The real castle is the data and the rules; the site is the door and the map for finding your way inside. It has two doors: one for people\'s memory, one for scholars.',
      sections: [
        ['What you find today', ['Kujtesa: leave a word, an expression or your voice.', 'Words: every word has its own dossier.', 'Map: voices, early scholars, photographs, and soon DNA.', 'Scholars: the archive with statuses.', 'Sources: the library of works.', 'The six lenses and the eight pillars.']],
        ['Interface rules', ['Two languages: Albanian and English.', 'Readable on a phone.', 'No claim without its visible status.']],
      ],
      now: ['The site is live, in BETA.'],
      next: ['The community forum, after the architecture.', 'The DNA layer on the map.'],
    },
    links: [['/harta', 'Harta', 'The map'], ['/kujtesa', 'Kujtesa', 'Kujtesa']],
  },
};
