
const fs = require('fs');
const path = require('path');

const rootDir = __dirname + '/..';

const translations = {
  de: {
    port_title: "Ingenieur-Portfolio",
    hero: "Infrastruktur für eine souveräne Zukunft",
    view_project: "Projekt ansehen",
    ucts_desc: "Umwandlung von Rotschlamm in Energiespeicher.",
    h2_desc: "Hybrider Schiffsantrieb (Wasserstoff + Solar).",
    moss_desc: "Lebendes Dachsystem aus Moos.",
    about_title: "Über den Autor",
    about_link: "Zur Hauptseite",
  },
  is: {
    port_title: "Verkefnasafn Verkfræðings",
    hero: "Innviðir fyrir sjálfbæra framtíð",
    view_project: "Skoða verkefni",
    ucts_desc: "Umbreyting rauðleirs í orkugeymslu.",
    h2_desc: "Tvinnknúningur skipa (Vetni + Sól).",
    moss_desc: "Lifandi þakkerfi úr mosa.",
    about_title: "Um höfundinn",
    about_link: "Aftur á forsíðu",
  },
  no: {
    port_title: "Ingeniørportefølje",
    hero: "Infrastruktur for en suveren fremtid",
    view_project: "Se prosjekt",
    ucts_desc: "Omdanning av rødslam til energilagring.",
    h2_desc: "Hybrid skipsfremdrift (Hydrogen + Sol).",
    moss_desc: "Levende taksystem av mose.",
    about_title: "Om forfatteren",
    about_link: "Tilbake til forsiden",
  },
  sv: {
    port_title: "Ingenjörsportfölj",
    hero: "Infrastruktur för en suverän framtid",
    view_project: "Visa projekt",
    ucts_desc: "Omvandling av rödslam till energilagring.",
    h2_desc: "Hybridfartygsdrift (Väte + Sol).",
    moss_desc: "Levande taksystem av mossa.",
    about_title: "Om författaren",
    about_link: "Tillbaka till startsidan",
  },
  fi: {
    port_title: "Insinööriportfolio",
    hero: "Infrastruktuuri itsenäistä tulevaisuutta varten",
    view_project: "Katso projekti",
    ucts_desc: "Punaliejun muuttaminen energian varastoinniksi.",
    h2_desc: "Hybridilaivojen käyttövoima (Vety + Aurinko).",
    moss_desc: "Elävä sammalkattojärjestelmä.",
    about_title: "Tekijästä",
    about_link: "Takaisin etusivulle",
  },
  da: {
    port_title: "Ingeniørportefølje",
    hero: "Infrastruktur til en suveræn fremtid",
    view_project: "Se projekt",
    ucts_desc: "Omdannelse af rødslam til energilagring.",
    h2_desc: "Hybrid skibsfremdrift (Brint + Sol).",
    moss_desc: "Levende tagsystem af mos.",
    about_title: "Om forfatteren",
    about_link: "Tilbage til forsiden",
  },
  nl: {
    port_title: "Ingenieursportfolio",
    hero: "Infrastructuur voor een soevereine toekomst",
    view_project: "Bekijk project",
    ucts_desc: "Conversie van rode modder naar energieopslag.",
    h2_desc: "Hybride scheepsvoortstuwing (Waterstof + Zon).",
    moss_desc: "Levend daksysteem van mos.",
    about_title: "Over de auteur",
    about_link: "Terug naar startpagina",
  },
  en: {
    port_title: "Engineering Portfolio",
    hero: "Building the infrastructure for a sovereign, sustainable future.",
    view_project: "View Project",
    ucts_desc: "Turning toxic industrial waste (Red Mud) into high-performance thermal energy storage.",
    h2_desc: "Hybrid Maritime Propulsion. A retrofit kit for river barges.",
    moss_desc: "Living Roof System. Bio-composite lightweight tiles.",
    about_title: "About the Author",
    about_link: "Back to Home",
  }
};

const generatePortfolio = (lang, t) => `---
layout: doc
title: ${t.port_title}
---

# ${t.port_title}

<div class="portfolio-intro">
  <p class="lead">${t.hero}</p>
</div>

<div class="project-grid">

  <div class="project-card ucts" onclick="window.open('https://ucts.solutions', '_blank')">
    <div class="project-header">
      <span class="badgeb">Clean Energy</span>
      <h2>UCTS</h2>
    </div>
    <p class="desc">${t.ucts_desc}</p>
    <ul class="specs">
      <li>🌡️ <b>1000°C</b></li>
      <li>💰 <b>$13.6/kWh</b></li>
      <li>♻️ <b>100%</b> Recycled</li>
    </ul>
    <a href="https://ucts.solutions" target="_blank" class="btn">${t.view_project} →</a>
  </div>

  <div class="project-card h2gen" onclick="window.open('https://h2gen.legalgreenplanet.tech', '_blank')">
    <div class="project-header">
      <span class="badgeg">Transport</span>
      <h2>Solar-H₂ Boost</h2>
    </div>
    <p class="desc">${t.h2_desc}</p>
    <ul class="specs">
      <li>🚢 <b>-30%</b> Fuel</li>
      <li>⚡ <b>+7%</b> Torque</li>
      <li>📉 <b>-80%</b> Emissions</li>
    </ul>
    <a href="https://h2gen.legalgreenplanet.tech" target="_blank" class="btn">${t.view_project} →</a>
  </div>

  <div class="project-card moss" onclick="window.open('https://moss.legalgreenplanet.tech', '_blank')">
    <div class="project-header">
      <span class="badgeq">Construction</span>
      <h2>Moss Tile</h2>
    </div>
    <p class="desc">${t.moss_desc}</p>
    <ul class="specs">
      <li>🏠 <b>Lightweight</b></li>
      <li>🌿 <b>Carbon</b> Negative</li>
      <li>❄️ <b>Nordic</b></li>
    </ul>
    <a href="https://moss.legalgreenplanet.tech" target="_blank" class="btn">${t.view_project} →</a>
  </div>

</div>

<hr style="margin: 4rem 0; border: 0; border-top: 1px solid var(--vp-c-divider);" />

## ${t.about_title}

<div class="about-card">
  <p>Aleksandr Snigirev. Living Man. Engineer. Sovereign.</p>
  <a href="/${lang}/" class="link">${t.about_link} →</a>
</div>
`;

Object.keys(translations).forEach(lang => {
  const t = translations[lang];
  const content = generatePortfolio(lang, t);
  const filePath = path.join(rootDir, lang, 'portfolio.md');
  fs.writeFileSync(filePath, content);
  console.log(`Generated Portfolio: ${filePath}`);
});
