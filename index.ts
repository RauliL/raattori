import XRegExp from 'xregexp';

type Dictionary = { [key: string]: string };

type Dialect = {
  sanat: Dictionary;
  paatteet: Dictionary;
  randomit: string[];
  additionalProcess: (input: string) => string;
};

export type DialectType = 'turku' | 'manse' | 'oulu';

const dialectMapping: { [key: string]: Dialect } = {
  turku: {
    sanat: {
      "minä": "mää",
      "sinä": "sää",
      "minäkin": "määki",
      "sinäkin": "sääki",
      "hän": "se",
      he: "ne",
      "tämä": "tää",
      tuo: "toi",
      se: "hän",
      "nämä": "nämät",
      nuo: "noi",
      ne: "he",
      mukaan: "mukkan",
      "että": "et",
      mutta: "mut",
      kuin: "ku",
      sanoi: "sanos",
      eroja: "eroi",
      minulla: "mul",
      minulle: "mul",
      sinulla: "sul",
      sinulle: "sul",
      "häpeä": "häpiä",
      kuvia: "kuvei",
      katso: "kato",
      on: "o",
      ole: "ol",
      "tässä": "täsä",
      tuossa: "tosa",
      siten: "simmottos",
      miten: "kummottos",
      minullekin: "mulki",
      sinullekin: "sulki",
      minullekaan: "mulka",
      sinullekaan: "sulka",
      minun: "mun",
      sinun: "sun",
      minua: "munt",
      sinua: "sunt",
      minuksi: "munks",
      sinuksi: "sunks",
      minussa: "muns",
      sinussa: "suns",
      minuna: "muna",
      sinuna: "suna",
      minusta: "munst",
      sinusta: "sunst",
      minuun: "munsse",
      sinuun: "sunsse",
      minulta: "mult",
      sinulta: "sult",
      kissa: "katti",
      hieman: "hiukka",
      "tänään": "tänäpän",
      osaa: "ossaa",
      osaan: "ossaa",
      kun: "ku",
      miksi: "kui",
      "minäkö": "mää vai",
      "sinäkö": "sää vai",
      luona: "tykö",
      luokse: "tykö",
      kohti: "tykö",
      "vielä": "viäl",
      aina: "ain",
      ainoa: "ainova",
      askel: "askela",
      asia: "assja",
      asiaa: "assja",
      vauhti: "faartti",
      vauhtia: "faartti",
      jotakin: "jottan",
      tarvitsisi: "tarttis",
      uusien: "uusitten"
    },
    paatteet: {
      ojen: "oitten",
      ksi: "ks",
      ssa: "s",
      "ssä": "s",
      oon: "ossen",
      yyn: "yssen",
      "öön": "össen",
      seen: "sse",
      lla: "l",
      "llä": "l",
      lta: "lt",
      "ltä": "lt",
      lle: "l",
      sta: "st",
      "stä": "st",
      ita: "it",
      sia: "ssi",
      "siä": "ssi",
      isi: "is",
      siin: "ssi",
      staan: "stas",
      ssaan: "ssas",
      oaan: "oas",
      kkoja: "koi",
      ppoja: "poi",
      ttoja: "toi",
      tuja: "tui",
      lleja: "llei",
      lleen: "lles",
      tteja: "tei",
      mmoja: "mmoi",
      mmeja: "mmei",
      ppeja: "pei",
      oja: "oi",
      "öjä": "öi",
      llaan: "las",
      "llään": "läs",
      nen: "ne",
      mien: "mitte",
      sien: "sitte",
      eja: "ei",
      niita: "nei",
      aako: "aaks",
      "ääkö": "ääks",
      tui: "tus",
      tua: "tuu",
      ttien: "titten",
      kin: "ki",
      konsa: "kos",
      ytyi: "ytys",
      syi: "sys",
      syin: "sysi",
      syit: "sysit",
      "syivät": "sysivä",
      tyi: "tys",
      dyin: "tysi",
      dyit: "tysit",
      "tyivät": "tysivä",
      lyi: "lys",
      lyin: "lysi",
      lyit: "lysit",
      "lyivät": "lysivä",
      nyi: "nys",
      nyin: "nysi",
      nyit: "nysit",
      "nyivät": "nysivä",
      sui: "sus",
      suin: "susi",
      suit: "susit",
      "suivät": "susivä",
      duin: "tusi",
      duit: "tusit",
      "tuivät": "tusivä",
      lui: "lus",
      luin: "lusi",
      luit: "lusit",
      "luivät": "lusivä",
      nui: "nus",
      nuin: "nusi",
      nuit: "nusit",
      "nuivät": "nusivä",
      tiin: "tisse",
      sensa: "ses",
      "sensä": "ses",
      tta: "t",
      vati: "fati",
      vatiin: "fatisse",
      vadissa: "fatis",
      vadista: "fatist",
      vatia: "fati",
      nyt: "ny"
    },
    randomit: [
      "totanoi",
      "kyl mar sit",
      "vai kummottos",
      "simmottos sit vaa",
      "nimpal mukavast",
      "mahtaks sitä sanokka kehrata",
      "tiätty",
      "ei mar",
      "täsä ny",
      "kui mun nysse tarttis sano",
      "kui vaa",
      "mut kumminki",
      "sem pare vaa",
      "ja nii om mone muukki sanonu",
      "ei sunkka"
    ],
    additionalProcess: (input: string): string => (
      input
        .replace("D", "R")
        .replace("d", "r")
        .replace("g", "k")
        .replace("G", "K")
        .replace("b", "p")
        .replace("B", "P")
        .replace("z", "s")
        .replace("Z", "S")
        .replace("q", "k")
        .replace("Q", "K")
        .replace("yö", "yä")
        .replace("uo", "ua")
        .replace(/\bpr/, "r")
        .replace(/\bPr/, "R")
    ),
  },
  manse: {
    sanat: {
      "minä": "mää",
      "sinä": "sää",
      "minäkin": "määki",
      "sinäkin": "sääki",
      "tämä": "tää",
      tuo: "toi",
      nuo: "noi",
      he: "ne",
      "hän": "se",
      minulla: "mulla",
      minulle: "mulle",
      sinulla: "sulla",
      sinulle: "sulle",
      katso: "kato",
      myrsky: "myteri",
      laituri: "möljä",
      asti: "astikka",
      saakka: "astikka",
      avata: "avasta",
      aukaista: "avasta",
      avanto: "avento",
      ilta: "ehtoo",
      illalla: "ehtoolla",
      iltaisin: "ehtoisin",
      ei: "varmaankaa",
      en: "varmaankaa",
      ensin: "ensistää",
      erinomainen: "ernomane",
      puistokatu: "espenaati",
      haalistunut: "haljastunu",
      haalistuu: "haljastuu",
      hautausmaa: "hautuumaa",
      "näkemiin": "heiny",
      hella: "helli",
      liesi: "helli",
      hiha: "hia",
      ikuisesti: "iankaike",
      irti: "irki",
      kun: "jakka",
      kastike: "kasti",
      kastiketta: "kastia",
      hihat: "hiat",
      "hiihtää": "hihtää",
      "ymmärrätkö": "honaatko",
      "ymmärtää": "honata",
      aikaisin: "aikasee",
      varhain: "aikasee",
      ikkuna: "akkuna",
      alushousut: "aluhousut",
      kuka: "kekä",
      "ketkä": "kekkä",
      kiire: "kiiru",
      "kipinä": "kipuna",
      kokeilla: "koklata",
      kokeile: "koklaa",
      kokeilu: "koklaus",
      hame: "kolttu",
      leninki: "kolttu",
      kaunis: "koree",
      kotiin: "kotio",
      kotoa: "kotsasta",
      kumi: "kummi",
      kumpi: "kumpanenko",
      kuinka: "kunka",
      "kyllä": "kyä",
      "leipä": "kyrsä",
      pulla: "käntty",
      pullaa: "känttyä",
      "ymmärrän": "kässään",
      lajia: "laija",
      kirjasto: "lainasto",
      lampi: "lammi",
      lauantai: "lavvantai",
      "tyttö": "likka",
      nainen: "likka",
      lukko: "lukku",
      lukkoon: "lukkuun",
      lukossa: "lukussa",
      "reikä": "läpi",
      kiekko: "lötä",
      melkein: "melkee",
      "lähes": "melki",
      miten: "millai",
      millainen: "mimmone",
      mitali: "mitalli",
      miksi: "mitävaste",
      mukana: "muassa",
      "neljä": "neliä",
      niin: "nin",
      ohut: "ohkane",
      ohuen: "ohkase",
      ohutta: "ohkasta",
      oikein: "oikee",
      lainkaan: "ollenka",
      odottaa: "ortsia",
      odota: "ortsi",
      peruna: "perna",
      pipo: "pipa",
      pelti: "pelli",
      sarana: "saranta",
      taksi: "pirssi",
      "pysäyttää": "pisättää",
      "pysäytä": "pisätä",
      "pysäytti": "pisätti",
      pois: "poijes",
      nyt: "ny",
      puolella: "puale",
      pyyhe: "pyhje",
      sunnuntai: "pyhä",
      sunnuntaina: "pyhänä",
      sunnuntaisin: "pyhäsi",
      matka: "reisu",
      kaulus: "revelli",
      kaulukset: "revellit",
      lakki: "räysä",
      lanttu: "räätikkä",
      deodorantti: "rörö",
      saippua: "saipua",
      kutistua: "sikistyä",
      kutistunut: "sikistyny",
      siten: "sillai",
      silloin: "sillo",
      "siellä": "siä",
      suinkaan: "sunka",
      "kesä": "suvi",
      "kesänä": "suvena",
      "kesällä": "suvella",
      lapanen: "tumppu",
      lapaset: "tumput",
      savuke: "tupakki",
      savukkeen: "tupakin",
      luokse: "tykö",
      "tänään": "tänäpänä",
      "täällä": "täälä",
      monta: "usiampi",
      moni: "usiampi",
      valita: "valkata",
      baskeri: "vausti",
      vaatteet: "vermeet",
      ilmeisesti: "vissii",
      "yhä": "viä",
      "vielä": "viä",
      yli: "ylitte",
      "äiti": "äite",
      heikko: "heiko",
      sukset: "hikilaurat",
      huuhdella: "huiluttaa",
      huuhtelu: "huilutus",
      kruuna: "aa",
      klaava: "ii",
      kruunaa: "aata",
      klaavaa: "iitä",
      ilmaiseksi: "ilmatteeks",
      ilmainen: "ilmane",
      "linja-auto": "linjuri",
      jotkut: "jokku",
      kapea: "kapone",
      poikki: "katki",
      kauan: "kavvan",
      kevyt: "köyköne",
      kalju: "lani",
      kolo: "loko",
      laatikko: "loora",
      nukkumaan: "maate",
      ohi: "sivutte",
      "työntää": "tönää",
      "työnnä": "tönää",
      vauva: "vavva",
      "eräs": "yks",
      bussi: "onnikka"
    },
    paatteet: {
      "ään": "ää",
      aan: "aa",
      een: "ee",
      iin: "ii",
      oon: "oo",
      uun: "uu",
      yyn: "yy",
      "öön": "öö",
      nyt: "ny"
    },
    randomit: [
      "anskattoonny",
      "hälläkössevväliä",
      "nääs",
      "kattos ny",
      "meinaan",
      "näino",
      "kattonnääs",
      "ei sempualee",
      "totanoinni",
    ],
    additionalProcess: (input: string): string => (
      input
        .replace("D", "R")
        .replace("d", "r")
        .replace("g", "k")
        .replace("G", "K")
        .replace("b", "p")
        .replace("B", "P")
        .replace("z", "s")
        .replace("Z", "S")
        .replace("q", "k")
        .replace("Q", "K")
        .replace("yö", "yä")
        .replace("uo", "ua")
        .replace(/\bpr/, "r")
        .replace(/\bPr/, "R")
    ),
  },
  oulu: {
    sanat: {
      parempi: "parrein",
      syvempi: "syvvein",
      luokse: "tykö",
      luona: "tykönä",
      "tiedä": "tiijjä",
      "sinä": "nää",
      oletko: "ookko",
      bussi: "onnikka",
      "linja-auto": "onnikka",
      bujjilla: "onnikalla",
      avanto: "avento",
    },
    paatteet: {
      ssa: "sa",
      ea: "ia",
      "eä": "iä",
      tko: "kko",
      tkin: "kki",
      tkaan: "kkaan",
      "tkään": "kkään",
      ahaa: "ahhaa",
      nis: "nes",
      ris: "res",
      oissa: "osa",
      toa: "tua",
      "ssä": "sä",
    },
    randomit: [
      "semmonen",
      "en tiijä",
      "tuota",
      "nii ohan tuo",
      "em minä tiijä",
      "kyllä kais se täsä",
      "tottakait",
      "kait",
      "voi mahoton",
      "oom minä siitäki kuullu",
      "niin tuota",
    ],
    additionalProcess: (input: string): string => (
      input
        .replace("D", "R")
        .replace("d", "r")
        .replace("g", "k")
        .replace("G", "K")
        .replace("b", "p")
        .replace("B", "P")
        .replace("z", "s")
        .replace("Z", "S")
        .replace("q", "k")
        .replace("Q", "K")
        .replace("yö", "yä")
        .replace("uo", "ua")
        .replace(/\bpr/, "r")
        .replace(/\bPr/, "R")
    ),
  },
};

const getReplace = (input: string, sanat: Dictionary): string | null => (
  sanat[input.trim().toLocaleLowerCase()] ?? null
);

const replaceEnding = (input: string, paatteet: Dictionary): string => {
  for (const paate in paatteet) {
    const pattern = new RegExp(`${paate}$`, 'g');

    if (input.match(paate)) {
      return input.replace(paate, paatteet[paate]);
    }
  }

  return input;
};

const getWords = (input: string): string[] => (
  input.split(XRegExp('(?=^|$|[^\\p{L}])'))
);

const capitalizeFirstLetter = (input: string): string => (
  `${input.charAt(0).toUpperCase()}${input.slice(1)}`
);

const lowerFirstLetter = (input: string): string => (
  `${input.charAt(0).toLowerCase()}${input.slice(1)}`
);

const isFirstCapital = (input: string): boolean => {
  const trimmed = input.trim();

  return input[0] === input[0].toUpperCase();
};

const replaceWord = (input: string, replacement: string): string => {
  const trimmed = input.trim();

  return input.replace(
    trimmed,
    trimmed[0] === trimmed[0].toUpperCase()
      ? capitalizeFirstLetter(replacement)
      : replacement,
  );
};

const postProcess = (input: string, randomit: string[]): string | null => {
  if (Math.random() >= 0.083) {
    return null;
  }

  const randomi = randomit[Math.floor(Math.random() * randomit.length)];

  return ` ${input === '.' ? capitalizeFirstLetter(randomi) : randomi}`;
};

export default (input: string, dialect: DialectType = 'turku'): string => {
  const mapping = dialectMapping[dialect.toLowerCase()];
  let e = false;
  const result: string[] = [];

  if (!mapping) {
    throw new TypeError(`Unrecognized dialect: ${dialect}`);
  }

  getWords(input ?? '').forEach((word) => {
    if (e) {
      word = word.replace(word.trim(), lowerFirstLetter(word.trim()));
      e = false;
    }

    const replacement = getReplace(word, mapping.sanat);
    if (replacement) {
      word = replaceWord(word, replacement);
    }

    word = replaceEnding(word, mapping.paatteet);
    word = mapping.additionalProcess(word);
    result.push(word);

    const processed = postProcess(word, mapping.randomit);
    if (processed) {
      if (isFirstCapital(processed)) {
        e = true;
      }
      result.push(processed);
    }
  });

  return result.join('');
};
