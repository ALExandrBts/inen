
const fs = require('fs');
const path = require('path');

const rootDir = __dirname + '/..';

const translations = {
    de: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Lebendiger Mensch. Ingenieur. Souverän.",
        hero_tagline: "Ich bin keine Ressource. Ich bin ein Schöpfer.",
        action_letters: "Anwesenheitserklärung",
        action_portfolio: "Portfolio ansehen",
        f1_title: "Der Souverän",
        f1_desc: "Rückforderung des Status als Lebendiger Mensch nach Naturrecht. Ablehnung der 'Persona'-Fiktion.",
        f2_title: "Der Ingenieur",
        f2_desc: "Schöpfer von UCTS, Solar-H2 und Moss Tile. Ich baue die Zukunft der Energie.",
        f3_title: "Der Überlebende",
        f3_desc: "Überlebender von Genozid und Krieg. Vom Donbass bis zur deutschen Bürokratie.",
        timeline_title: "Zeitlinie der Ungerechtigkeit",
        manifesto: "Wir müssen uns als Menschen retten, um die Menschheit zu retten."
    },
    is: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Lifandi Maður. Verkfræðingur. Fullvalda.",
        hero_tagline: "Ég er ekki auðlind. Ég er skapari.",
        action_letters: "Tilkynning um Nærveru",
        action_portfolio: "Skoða Verkefni",
        f1_title: "Fullvalda",
        f1_desc: "Endurheimt stöðu sem Lifandi Maður samkvæmt Náttúrulögum. Höfnun á 'Persónu' skáldskapnum.",
        f2_title: "Verkfræðingurinn",
        f2_desc: "Höfundur UCTS, Solar-H2 og Moss Tile. Byggi framtíð orku og vistfræði.",
        f3_title: "Sá sem lifði af",
        f3_desc: "Lifði af þjóðarmorð, stríð og kúgun. Frá Donbass til Þýskalands.",
        timeline_title: "Tímalína Óréttlætis",
        manifesto: "Við verðum að bjarga okkur sjálfum sem mönnum til að bjarga mannkyninu."
    },
    no: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Levende Menneske. Ingeniør. Suveren.",
        hero_tagline: "Jeg er ikke en ressurs. Jeg er en skaper.",
        action_letters: "Nærværserklæring",
        action_portfolio: "Se Portefølje",
        f1_title: "Den Suverene",
        f1_desc: "Gjenvinning av status som Levende Menneske under Naturrett. Avvisning av 'Persona'-fiksjonen.",
        f2_title: "Ingeniøren",
        f2_desc: "Skaper av UCTS, Solar-H2 og Moss Tile. Jeg bygger fremtidens energi.",
        f3_title: "Overlevende",
        f3_desc: "Overlevende fra folkemord og krig. Fra Donbass til tysk byråkrati.",
        timeline_title: "Urettferdighetens Tidslinje",
        manifesto: "Vi må redde oss selv som mennesker for å redde menneskeheten."
    },
    sv: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Levande Människa. Ingenjör. Suverän.",
        hero_tagline: "Jag är inte en resurs. Jag är en skapare.",
        action_letters: "Närvaroförklaring",
        action_portfolio: "Visa Portfölj",
        f1_title: "Den Suveräna",
        f1_desc: "Återtagande av status som Levande Människa under Naturrätt. Avvisande av 'Persona'-fiktionen.",
        f2_title: "Ingenjören",
        f2_desc: "Skapare av UCTS, Solar-H2 und Moss Tile. Jag bygger energins framtid.",
        f3_title: "Överlevare",
        f3_desc: "Överlevare av folkmord och krig. Från Donbass till tysk byråkrati.",
        timeline_title: "Orättvisans Tidslinje",
        manifesto: "Vi måste rädda oss själva som människor för att rädda mänskligheten."
    },
    fi: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Elävä Ihminen. Insinööri. Itsenäinen.",
        hero_tagline: "En ole resurssi. Olen luoja.",
        action_letters: "Läsnäoloilmoitus",
        action_portfolio: "Katso Portfolio",
        f1_title: "Itsenäinen",
        f1_desc: "Luonnonmukaisten oikeuksien palauttaminen elävänä ihmisenä. 'Persona'-fiktion hylkääminen.",
        f2_title: "Insinööri",
        f2_desc: "UCTS:n, Solar-H2:n ja Moss Tilen luoja. Rakennan energian tulevaisuutta.",
        f3_title: "Selviytyjä",
        f3_desc: "Kansanmurhasta ja sodasta selviytynyt. Donbassista Saksan byrokratiaan.",
        timeline_title: "Epäoikeudenmukaisuuden Aikajana",
        manifesto: "Meidän on pelastettava itsemme ihmisinä pelastaaksemme ihmiskunnan."
    },
    da: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Levende Menneske. Ingeniør. Suveræn.",
        hero_tagline: "Jeg er ikke en ressource. Jeg er en skaber.",
        action_letters: "Nærværserklæring",
        action_portfolio: "Se Portefølje",
        f1_title: "Den Suveræne",
        f1_desc: "Genvinding af status som Levende Menneske under Naturret. Afvisning af 'Persona'-fiktionen.",
        f2_title: "Ingeniøren",
        f2_desc: "Skaber af UCTS, Solar-H2 og Moss Tile. Jeg bygger fremtidens energi.",
        f3_title: "Overlevende",
        f3_desc: "Overlevende fra folkedrab og krig. Fra Donbass til tysk bureaukrati.",
        timeline_title: "Uretfærdighedens Tidslinje",
        manifesto: "Vi skal redde os selv som mennesker for at redde menneskeheden."
    },
    nl: {
        hero_name: "Aleksandr Snigirev",
        hero_text: "Levend Mens. Ingenieur. Soeverein.",
        hero_tagline: "Ik ben geen hulpbron. Ik ben een schepper.",
        action_letters: "Aanwezigheidsverklaring",
        action_portfolio: "Bekijk Portfolio",
        f1_title: "De Soeverein",
        f1_desc: "Herstel van de status als Levend Mens onder Natuurrecht. Verwerping van de 'Persona'-fictie.",
        f2_title: "De Ingenieur",
        f2_desc: "Schepper van UCTS, Solar-H2 en Moss Tile. Ik bouw aan de toekomst van energie.",
        f3_title: "De Overlevende",
        f3_desc: "Overlevende van genocide en oorlog. Van de Donbas tot de Duitse bureaucratie.",
        timeline_title: "Tijdlijn van Onrecht",
        manifesto: "We moeten onszelf redden als mensen om de mensheid te redden."
    }
};

const generateIndex = (lang, t) => `---
layout: home
title: ${t.hero_name}

hero:
  name: "${t.hero_name}"
  text: "${t.hero_text}"
  tagline: "${t.hero_tagline}"
  image:
    src: /assets/alexander.jpeg
    alt: ${t.hero_name}
  actions:
    - theme: brand
      text: ${t.action_letters}
      link: /${lang}/letters/mfa_iceland
    - theme: alt
      text: ${t.action_portfolio}
      link: /${lang}/portfolio

features:
  - title: "${t.f1_title}"
    details: "${t.f1_desc}"
    icon: ⚖️
  - title: "${t.f2_title}"
    details: "${t.f2_desc}"
    icon: 🛠️
  - title: "${t.f3_title}"
    details: "${t.f3_desc}"
    icon: 🔥
---

## ${t.timeline_title}

<div class="timeline">
  <div class="event">
    <div class="year">1993-2001</div>
    <div class="content">
      <p>Caught in the collapse of the USSR.</p>
    </div>
  </div>
  <div class="event">
    <div class="year">2014</div>
    <div class="content">
      <p>War in Donbass.</p>
    </div>
  </div>
  <div class="event">
    <div class="year">2024</div>
    <div class="content">
      <p>Systemic oppression and bureaucratic torture.</p>
    </div>
  </div>
</div>

<div id="portfolio" style="margin-top: 4rem;"></div>

## Manifesto

> "${t.manifesto}"

---

*Contact:* [GitHub](https://github.com/ALExandrBts)
`;

Object.keys(translations).forEach(lang => {
    const t = translations[lang];
    const content = generateIndex(lang, t);
    const filePath = path.join(rootDir, lang, 'index.md');
    fs.writeFileSync(filePath, content);
    console.log(`Generated Index: ${filePath}`);
});
