export const lakomec = {
  slug: 'lakomec',
  title: 'Lakomec',
  originalTitle: "L'Avare",
  author: 'Molière',
  authorSlug: 'moliere',
  year: 1668,

  basics: {
    literaryKind: 'Drama',
    literaryGenre: 'Komedie (komedie charakterů)',
    literaryPeriod: 'Francouzský klasicismus 17. století, období vlády Ludvíka XIV. („Velké století“).',
    note: 'Premiéra 9. září 1668 v pařížském divadle Palais-Royal. Na rozdíl od dobového vkusu, který upřednostňoval veršovanou komedii, je Lakomec napsán v próze.',
  },

  authorInfo: {
    lifespan: '15. ledna 1622, Paříž – 17. února 1673, Paříž',
    bio: [
      'Molière (vlastním jménem Jean-Baptiste Poquelin) odmítl otcovo přání stát se královským čalouníkem a roku 1643 spoluzaložil divadelní společnost Illustre théâtre.',
      'Od roku 1661 požíval přízně Ludvíka XIV. a jeho společnost působila jako „králova trupa“ v pařížském Palais-Royal.',
      'Zemřel krátce po čtvrtém představení své poslední hry Zdravý nemocný, ve které navzdory vážné nemoci sám hrál hlavní roli.',
    ],
    otherWorks: [
      'Tartuffe (1664)',
      'Don Juan (1665)',
      'Misantrop (1666)',
      'Měšťák šlechticem (Le Bourgeois gentilhomme, 1670)',
      'Učené ženy (Les Femmes savantes, 1672)',
    ],
    context: 'Francouzský dramatik, herec a ředitel divadelní společnosti, klíčová postava francouzského klasicismu za vlády Ludvíka XIV.',
  },

  theme: {
    summary: 'Komedie zobrazuje, jak posedlost penězi dokáže zničit i ty nejbližší rodinné a citové vztahy.',
    mainIdea:
      'Satira na lidskou chamtivost a její ničivý dopad na rodinu. Harpagonova lakota ho staví proti vlastním dětem a nakonec ho připraví o schopnost radovat se z čehokoli jiného než z peněz samotných – zatímco ostatní postavy na konci najdou lásku i rodinu, Harpagon zůstává spokojen jen s navrácenou pokladnicí.',
  },

  plot: [
    'Bohatý ovdovělý Harpagon zakopal na zahradě truhlu s deseti tisíci zlaťáky a žije v neustálém strachu, že mu ji někdo ukradne. Zároveň plánuje výhodné sňatky bez ohledu na city svých dětí: sám se chce oženit s mladou Marianou, dceru Elišku chce bez věna provdat za starého, ale majetného Anselma, a syna Kleanta oženit s bohatou vdovou.',
    'Eliška je ale zamilovaná do Valéra, mladíka ušlechtilého původu, který ji kdysi zachránil před utonutím a z lásky k ní se nechal najmout jako Harpagonův správce, aby jí mohl být nablízku. Kleant zase miluje tutéž Marianu, o kterou usiluje i jeho vlastní otec – ani jeden zprvu neví, že je jeho sokem právě ten druhý.',
    'Kleant zoufale potřebuje patnáct tisíc franků na pomoc Marianě a její nemocné matce, a tak si je půjčí od lichváře za nevýhodných podmínek – teprve pak zjistí, že oním lichvářem je jeho vlastní otec.',
    'Dohazovačka Frosina se snaží Harpagona přesvědčit, že ho Mariana miluje navzdory věkovému rozdílu. Harpagon uspořádá večeři, na které má být podepsána svatební smlouva – při ní si Mariana a Kleant uvědomí, že se navzájem milují, a Kleant tajně stáhne otci z prstu drahocenný prsten, aby ho mohl Marianě věnovat jako vlastní dar.',
    'Zamilovaní žádají Frosinu o pomoc, jak Harpagonovi jeho svatební plány rozmluvit. Kleant se v domnění, že je otec ochoten ustoupit, svěří se svou láskou k Marianě přímo Harpagonovi – ten vybuchne zuřivým hněvem a syna proklíná.',
    'V tu chvíli sluha ohlásí, že Harpagonova pokladnice byla ukradena (ukradl ji Kleantův mazaný sluha La Flèche, v českém překladu často zvaný Čipera). Zdrcený Harpagon propadá zoufalství a hrozí i sebevraždou – v jedné z nejslavnějších scén hry se obrací přímo na publikum s otázkou, kdo je zloděj.',
    'Harpagon povolá policii k vyšetřování. Kuchař a kočí Mistr Jakub ze msty falešně obviní Valéra, který v domnění, že je řeč o jeho tajném vztahu s Eliškou, začne mluvit o své lásce k ní – čímž vznikne zmatek, protože Harpagon si stále myslí, že se přiznává ke krádeži.',
    'Vše rozetne příchod Anselma: ukáže se, že Valér i Mariana jsou ve skutečnosti jeho dávno ztracené děti (přeživší ztroskotání lodi) a Anselm je ve skutečnosti neapolský šlechtic Don Thomas D\'Alburcy.',
    'Díky tomuto odhalení nic nebrání šťastným koncům: Kleant si smí vzít Marianu (a otci vrátí půjčené peníze), Valér s Eliščiným požehnáním získá Elišku, Anselm uhradí veškeré svatební náklady – a Harpagonovi, který mezitím dostal zpět svou pokladnici, nakonec vůbec nevadí, že přišel o nevěstu i o dceřina a synova sňatku podle svých představ, protože mu stačí mít zpátky své peníze.',
  ],

  characters: [
    { name: 'Harpagon', desc: 'Bohatý ovdovělý lakomec kolem šedesátky, lichvář. Ochoten kvůli penězům obětovat štěstí vlastních dětí i vlastní city.' },
    { name: 'Kleant', desc: 'Harpagonův syn, zamilovaný do Mariany; kvůli lásce se dostane do finančních potíží a nakonec zjistí, že si peníze půjčil od vlastního otce.' },
    { name: 'Eliška', desc: 'Harpagonova dcera, zamilovaná do Valéra; odmítá otcův plán provdat ji bez věna za starého Anselma.' },
    { name: 'Valér', desc: 'Mladík ušlechtilého (ve skutečnosti neapolského šlechtického) původu, který se z lásky k Elišce nechal najmout jako Harpagonův správce.' },
    { name: 'Mariana', desc: 'Mladá, chudá dívka pečující o nemocnou matku; miluje Kleanta, nikoli Harpagona, o jehož ruku usiluje.' },
    { name: 'Anselm', desc: 'Zprvu představený jako bohatý ženich pro Elišku, nakonec odhalen jako neapolský šlechtic Don Thomas D\'Alburcy a skutečný otec Valéra i Mariany.' },
    { name: 'Frosina', desc: 'Vychytralá dohazovačka a intrikánka, která se snaží manipulovat všemi stranami ve svůj prospěch.' },
    { name: 'La Flèche (Čipera)', desc: 'Kleantův mazaný sluha, který Harpagonovi ukradne pokladnici se zlaťáky – spouští tím vrchol zápletky.' },
  ],

  composition:
    'Pět dějství napsaných v próze (neobvyklé pro dobovou komedii, která se obvykle psala veršem) s nerovnoměrným počtem výstupů (5, 5, 9, 7 a 6). Rychlý spád kombinuje fraškovité prvky s charakterovou komedií soustředěnou na jedinou ústřední vlastnost hlavní postavy – lakotu.',

  narrator:
    'Jde o drama, nemá tedy tradičního vypravěče jako próza – děj se odehrává výhradně v dialozích postav a scénických poznámkách (didaskaliích). Molière navíc pracuje s metadivadelními prvky: Harpagon se ve slavné scéně po krádeži přímo obrací k publiku v hledišti s otázkou, kdo je zloděj, čímž boří iluzi čtvrté stěny.',

  styleLanguage:
    'Ostrý, satirický dialog kombinující frašku s charakterovou komedií. Jméno Harpagon je odvozeno z řeckého slova pro hák/hákovité čelisti (harpagē) – narážka na jeho „chapadlovitou“ chamtivost. Postava mazaného sluhy má kořeny v tradici commedia dell\'arte a v předloze, kterou Molière použil.',

  excerpt: {
    quote: '„Au voleur! Au voleur! À l\'assassin! Au meurtrier!“\n„Zloději! Chyťte zloděje! Vraha! Vraha!“',
    source: 'Harpagonův monolog po zjištění krádeže pokladnice, IV. dějství',
    note: 'Jedna z nejslavnějších komických scén francouzského divadla – Harpagon v zoufalství osloví přímo diváky v hledišti a obviní z krádeže „celé město i předměstí“, čímž Molière boří iluzi divadelní scény a dosahuje vrcholně groteskního efektu.',
  },

  context: {
    points: [
      'Molière čerpal z antické komedie Aulularia (Hrnec zlata) římského autora Plauta (asi 200 let př. n. l.) – převzal odtud postavu lakomce i motiv zakopaného pokladu.',
      'Hra vznikla za vlády Ludvíka XIV., kdy Molièrova divadelní společnost požívala královské přízně a působila jako oficiální „králova trupa“.',
      'Molière zemřel 17. února 1673 krátce po čtvrtém představení své poslední hry Zdravý nemocný (Le Malade imaginaire), ve které navzdory horečce a vážné nemoci sám hrál hlavní roli; na jevišti dostal záchvat kašle s krví, po představení zkolaboval a téhož večera zemřel.',
      'Jméno Harpagon zlidovělo natolik, že se ve francouzštině i dalších jazycích stalo obecným synonymem pro lakomce.',
      'Hra měla obrovský mezinárodní vliv – anglické adaptace (Thomas Shadwell 1672, Henry Fielding 1732), italské operní zpracování i moderní filmové adaptace (např. s Louisem de Funès, 1980).',
    ],
  },

  quiz: [
    {
      question: 'V jakém roce měl Lakomec premiéru?',
      options: ['1664', '1666', '1668', '1673'],
      correctIndex: 2,
      explanation: 'Premiéra se konala 9. září 1668 v pařížském divadle Palais-Royal.',
    },
    {
      question: 'Je Lakomec napsán veršem, nebo prózou?',
      options: ['Veršem, jako většina Molièrových her', 'Prózou, neobvykle pro dobovou komedii', 'Kombinací verše a prózy', 'Ani jedno, jde o pantomimu'],
      correctIndex: 1,
      explanation: 'Na rozdíl od dobového vkusu, který upřednostňoval veršovanou komedii, je Lakomec napsán v próze.',
    },
    {
      question: 'Kdo ukradne Harpagonovi pokladnici se zlaťáky?',
      options: ['Valér', 'Kleant', 'La Flèche (Čipera), Kleantův sluha', 'Mistr Jakub'],
      correctIndex: 2,
      explanation: 'Pokladnici ukradne Kleantův mazaný sluha La Flèche, v českém překladu často nazývaný Čipera.',
    },
    {
      question: 'Kdo se na konci hry ukáže být skutečným otcem Valéra a Mariany?',
      options: ['Harpagon', 'Anselm', 'Mistr Jakub', 'Frosina'],
      correctIndex: 1,
      explanation: 'Anselm je odhalen jako neapolský šlechtic Don Thomas D\'Alburcy, ztracený otec Valéra i Mariany.',
    },
    {
      question: 'Za jakých okolností Molière zemřel?',
      options: [
        'Na lovu s Ludvíkem XIV.',
        'Krátce po představení, ve kterém hrál navzdory vážné nemoci',
        'Na cestách po Itálii',
        'Ve vězení po sporu s církví',
      ],
      correctIndex: 1,
      explanation: 'Zemřel 17. února 1673, večer po čtvrtém představení Zdravého nemocného, ve kterém navzdory nemoci sám hrál hlavní roli.',
    },
  ],

  flashcards: [
    { term: 'Harpagon', definition: 'Lakomý ovdovělý lichvář, hlavní postava hry.' },
    { term: 'Kleant', definition: 'Harpagonův syn, zamilovaný do Mariany.' },
    { term: 'Eliška', definition: 'Harpagonova dcera, zamilovaná do Valéra.' },
    { term: 'Valér', definition: 'Sluha ušlechtilého původu, zachránil Elišku před utonutím.' },
    { term: 'Anselm', definition: 'Nakonec odhalen jako otec Valéra a Mariany, neapolský šlechtic.' },
    { term: 'Aulularia', definition: 'Antická komedie Plauta, předloha pro Lakomce.' },
    { term: 'Próza', definition: 'Neobvyklá forma pro dobovou komedii, kterou Molière v Lakomci použil místo verše.' },
    { term: 'Zdravý nemocný', definition: 'Poslední Molièrova hra, po jejímž představení roku 1673 zemřel.' },
  ],

  sources: [
    { label: 'Lakomec – Wikipedie (cs)', url: 'https://cs.wikipedia.org/wiki/Lakomec' },
    { label: 'The Miser – Wikipedia (en)', url: 'https://en.wikipedia.org/wiki/The_Miser' },
    { label: 'Molière – Wikipedie (cs)', url: 'https://cs.wikipedia.org/wiki/Moli%C3%A8re' },
  ],
}
