
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const i18nDir = path.join(rootDir, 'i18n');
if (!fs.existsSync(i18nDir)) fs.mkdirSync(i18nDir, { recursive: true });

const localesList = [
  { code: 'uk', label: 'Українська', prev: 'Попередня', next: 'Наступна' },
  { code: 'en', label: 'English', prev: 'Previous page', next: 'Next page' },
  { code: 'de', label: 'Deutsch', prev: 'Vorherige Seite', next: 'Nächste Seite' },
  { code: 'is', label: 'Íslenska', prev: 'Fyrri síða', next: 'Næsta síða' },
  { code: 'no', label: 'Norsk', prev: 'Forrige side', next: 'Neste side' },
  { code: 'sv', label: 'Svenska', prev: 'Föregående sida', next: 'Nästa sida' },
  { code: 'fi', label: 'Suomi', prev: 'Edellinen sivu', next: 'Seuraava sivu' },
  { code: 'da', label: 'Dansk', prev: 'Forrige side', next: 'Næste side' },
  { code: 'nl', label: 'Nederlands', prev: 'Vorige pagina', next: 'Volgende pagina' }
];

const translations = {
  // ... (Base Translations preserved)
  uk: {
    hero_name: "Олександр Снігірьов",
    hero_text: "Жива Людина. Інженер. Суверен.",
    hero_tagline: "Я не ресурс. Я — творець.",
    action_letters: "Заява про Присутність",
    action_portfolio: "Дивитися Портфоліо",
    f1_title: "Суверен",
    f1_desc: "Відновлення статусу Живої Людини за Природним Правом. Відмова від фікції 'особи'.",
    f2_title: "Інженер",
    f2_desc: "Творець UCTS, Solar-H2 та Moss Tile. Будую майбутнє енергії та екології.",
    f3_title: "Той, хто вижив",
    f3_desc: "Вижив після геноциду, війни та системного гніту. Від Донбасу до європейської бюрократії.",
    timeline_title: "Хронологія Несправедливості",
    read_more_history: "Читати детальну історію →",
    full_history_title: "Детальна Хронологія Подій (1993-2024)",
    events: [
      { year: "1993-2001", title: "Пастка громадянства", desc: "Я народився на Донбасі — землі праці та великих викликів. Моє дитинство було позначене юридичною аномалією. Отримавши два паспорти (України та РФ) через розпад СРСР, я став заручником системи, яка використала цю колізію як зброю проти мого суверенітету." },
      { year: "2014", title: "Війна на Донбасі", desc: "Війна забрала у мене дім, родину та відчуття стабільності. Після 2014 року моє майно було незаконно відчужене. Це був початок мого шляху як людини, яка мусить захищати своє право на існування." },
      { year: "2017", title: "Інженерний прорив", desc: "Я не здався. Створення прототипу UCTS (Universal Carbon Transformation System) стало результатом мого прагнення перетворити руйнування на енергію. Це інженерна відповідь на екологічну кризу." },
      { year: "2021", title: "Міжнародне визнання", desc: "Патент Solar-H2 визнано інноваційним рішенням для морської галузі. Світове визнання моїх розробок підтвердило, що я на правильному шляху." },
      { year: "2023", title: "Еко-інтеграція", desc: "Розробка Moss Tile — системи природного охолодження для міст. Інтеграція технологій у природу для збалансованого та суверенного майбутнього." },
      { year: "2024", title: "Системний гніт", desc: "Сьогодні я борюся проти бюрократичного гніту в Німеччині. Позбавлення прав на медичну допомогу та пересування — це сучасна форма тортур, спрямована на зламання волі. Але я — Жива Людина, і я продовжую творити." }
    ],
    solutions_title: "Інженерні Рішення",
    manifesto_title: "Маніфест",
    manifesto: "Ми мусимо врятувати себе як людей, щоб врятувати людство. Я — зерно, що проросте.",
    port_title: "Інженерне Портфоліо",
    port_hero: "Будую інфраструктуру для суверенного майбутнього.",
    view_project: "Дивитися Проєкт",
    ucts_desc: "Перетворення токсичного червоного шламу на енергоакумулятори.",
    h2_desc: "Гібридний морський двигун (Водень + Сонце).",
    moss_desc: "Жива покрівля з моху.",
    about_title: "Про Автора",
    nav_letters: "Листи",
    nav_portfolio: "Портфоліо",
    sb_dossier: "Досьє",
    sb_story: "Історія",
    sb_letters: "Листи",
    sb_mfa: "МЗС Ісландії",
    print_doc: "Роздрукувати документ 🖨️",
    contact_title: "Контакти Суверена",
    email: "legalgreenplanet@gmail.com",
    phone: "+49 176 88173516",
    letter_mfa_title: "ДЕКЛАРАЦІЯ ПРИСУТНОСТІ ЖИВОЇ ЛЮДИНИ",
    letter_mfa_intro: "До уваги Міністерства закордонних справ Ісландії та міжнародних правозахисних організацій.",
    letter_mfa_body: `
Я, Олександр Снігірьов, цією публічною декларацією заявляю про присутність Живої Людини, наділеної духом, совістю та невід'ємними правами, отриманими за правом народження на Землі.

Ця декларація ґрунтується на **Загальній декларації прав людини ООН** (статті 1, 3, 6, 13, 14, 15) та вищому Природному Праві.

### 1. Правовий Статус
Я заявляю, що я не є "фізичною особою", "економічним ресурсом" чи будь-якою іншою юридичною фікцією, створеною державою без моєї свідомої згоди. Я дію як вільна людина, суверен свого життя. Моя присутність на цій Землі є самодостатньою, а мої права на життя, свободу та творчість є абсолютними та невідчужуваними.

### 2. Суть Претензії та Порушення Прав
Протягом останнього року я перебуваю під безпрецедентним та системним бюрократичним тиском на території Федеративної Республіки Німеччина. Цей тиск проявляється наступним чином:
- **Позбавлення свободи пересування**: Моє право на вільний вибір місця проживання та пересування безпідставно обмежене.
- **Обмеження права на життя та здоров'я**: Мені відмовлено у доступі до необхідної медичної допомоги, що створює пряму загрозу моєму здоров'ю.
- **Психологічний тиск**: Система створює умови "цифрового гетто", намагаючись змусити мене відмовитися від моїх переконань та суверенного статусу.

Ці дії є прямим порушенням фундаментальних прав людини та можуть кваліфікуватися як тортури та нелюдське поводження.

### 3. Прохання про Захист та Визнання
Я офіційно звертаюся до Уряду та Народу Республіки Ісландія, як до країни з глибокими традиціями поваги до прав людини та суверенітету особистості:
- **Прошу надати мені політичний притулок** та міжнародний захист від системного переслідування.
- **Прошу визнати мій статус Живої Людини** та забезпечити можливість реалізації моїх інженерних та творчих проєктів на благо людства.

Мої розробки (UCTS, Solar-H2) спрямовані на вирішення глобальних енергетичних та екологічних проблем. Я готовий направити свій інтелектуальний потенціал на розвиток Ісландії та Світу.

[Переглянути портфоліо інженерних рішень](../portfolio)
[Читати повну деталізовану історію переслідувань](../history)`,
    date: "Дата підписання: 5 лютого 2024 року",
    signature: "Підпис: Олександр Снігірьов, Жива Людина"
  },
  en: {
    hero_name: "Aleksandr Snigirev",
    hero_text: "Living Man. Engineer. Sovereign.",
    hero_tagline: "I am not a resource. I am a creator.",
    action_letters: "Notice of Presence",
    action_portfolio: "View Portfolio",
    f1_title: "Sovereign",
    f1_desc: "Reclaiming status as a Living Man under Natural Law. Rejection of the 'Person' fiction.",
    f2_title: "Engineer",
    f2_desc: "Creator of UCTS, Solar-H2, and Moss Tile. Building the future of energy.",
    f3_title: "Survivor",
    f3_desc: "Survived genocide, war, and systemic oppression. From Donbass to German bureaucracy.",
    timeline_title: "Timeline of Injustice",
    read_more_history: "Read detailed history →",
    full_history_title: "Detailed Chronology of Events (1993-2024)",
    events: [
      { year: "1993-2001", title: "Citizenship Trap", desc: "Born in Donbass, a land of labor and great challenges. My childhood was marked by a legal anomaly. Holding two passports (Ukraine/Russia) due to the USSR collapse, I became a hostage of a system that used this collision as a weapon against my sovereignty." },
      { year: "2014", title: "War in Donbass", desc: "War took my home, my family, and my sense of stability. After 2014, my property was illegally alienated. This was the beginning of my journey as a human who must defend his right to exist." },
      { year: "2017", title: "Engineering Breakthrough", desc: "I did not give up. Creating the UCTS prototype was the result of my desire to turn destruction into energy. This is an engineering answer to the ecological crisis." },
      { year: "2021", title: "Global Recognition", desc: "The Solar-H2 patent was recognized as an innovative solution for the maritime industry. Global recognition of my developments confirmed that I am on the right path." },
      { year: "2023", title: "Eco-Integration", desc: "Development of Moss Tile — a natural urban cooling system. Integrating technology into nature for a balanced and sovereign future." },
      { year: "2024", title: "Systemic Oppression", desc: "Today I am fighting against bureaucratic oppression in Germany. Deprivation of rights to medical assistance and movement is a modern form of torture aimed at breaking the will. But I am a Living Man, and I continue to create." }
    ],
    solutions_title: "Engineering Solutions",
    manifesto_title: "Manifesto",
    manifesto: "We must save ourselves as humans to save humanity. I am the seed.",
    port_title: "Engineering Portfolio",
    port_hero: "Building infrastructure for a sovereign future.",
    view_project: "View Project",
    ucts_desc: "Turning toxic red mud into energy storage.",
    h2_desc: "Hybrid maritime propulsion (Hydrogen + Solar).",
    moss_desc: "Living roof system (Moss).",
    about_title: "About the Author",
    nav_letters: "Letters",
    nav_portfolio: "Portfolio",
    sb_dossier: "Dossier",
    sb_story: "Story",
    sb_letters: "Letters",
    sb_mfa: "Iceland MFA",
    print_doc: "Print Document 🖨️",
    contact_title: "Sovereign Contacts",
    email: "legalgreenplanet@gmail.com",
    phone: "+49 176 88173516",
    letter_mfa_title: "DECLARATION OF PRESENCE OF A LIVING MAN",
    letter_mfa_intro: "To the Ministry of Foreign Affairs of Iceland and international human rights organizations.",
    letter_mfa_body: `
I, Aleksandr Snigirev, by this public declaration declare the presence of a Living Man, endowed with spirit, conscience, and inalienable rights received by birthright on Earth.

This declaration is based on the **UN Universal Declaration of Human Rights** (Articles 1, 3, 6, 13, 14, 15) and higher Natural Law.

### 1. Legal Status
I declare that I am not a "natural person", "economic resource", or any other legal fiction created by the state without my conscious consent. I act as a free man, sovereign of my life. My presence on this Earth is self-sufficient, and my rights to life, liberty, and creativity are absolute and inalienable.

### 2. Essence of Claim and Human Rights Violations
For the past year, I have been under unprecedented and systemic bureaucratic pressure within the Federal Republic of Germany. This pressure manifests as follows:
- **Deprivation of Freedom of Movement**: My right to free choice of residence and movement is groundlessly restricted.
- **Restriction of Right to Life and Health**: I have been denied access to necessary medical assistance, creating a direct threat to my health.
- **Psychological Pressure**: The system creates "digital ghetto" conditions, attempting to force me to renounce my beliefs and sovereign status.

These actions are direct violations of fundamental human rights and may qualify as torture and inhumane treatment.

### 3. Request for Protection and Recognition
I officially appeal to the Government and People of the Republic of Iceland, as a country with deep traditions of respect for human rights and individual sovereignty:
- **I request political asylum** and international protection from systemic persecution.
- **I request recognition of my status as a Living Man** and the opportunity to realize my engineering and creative projects for the benefit of humanity.

My developments (UCTS, Solar-H2) are aimed at solving global energy and environmental problems. I am ready to direct my intellectual potential to the development of Iceland and the World.

[View Portfolio of Engineering Solutions](../portfolio)
[Read full detailed history of persecution](../history)`,
    date: "Date of signing: February 5, 2024",
    signature: "Signature: Aleksandr Snigirev, Living Man"
  }
};

['de', 'is', 'no', 'sv', 'fi', 'da', 'nl'].forEach(code => {
  translations[code] = JSON.parse(JSON.stringify(translations.en));
});

const generateIndex = (lang, t) => {
  let timelineHtml = t.events.map(ev => `
<div class="event">
  <div class="year">${ev.year}</div>
  <div class="content"><h3 class="no-hash">${ev.title}</h3><p>${ev.desc}</p></div>
</div>`).join('\n');

  return `---
layout: home
title: ${t.hero_name}
hero:
  name: "${t.hero_name}"
  text: "${t.hero_text}"
  tagline: "${t.hero_tagline}"
  image:
    src: /assets/alexander.jpeg
  actions:
    - theme: brand
      text: "${t.action_letters}"
      link: ./letters/mfa_iceland
    - theme: alt
      text: "${t.action_portfolio}"
      link: ./portfolio
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

<div class="home-container">
<div class="timeline">
${timelineHtml}
</div>
<div style="text-align: center; margin-top: 2rem;"><a href="./history" class="link">${t.read_more_history}</a></div>
</div>

## ${t.solutions_title}

<div class="home-container">
<div class="grid">
  <div class="card" onclick="window.open('https://ucts.solutions', '_blank')"><h3>UCTS</h3><p>${t.ucts_desc}</p></div>
  <div class="card" onclick="window.open('https://h2gen.legalgreenplanet.tech', '_blank')"><h3>Solar-H₂ Boost</h3><p>${t.h2_desc}</p></div>
  <div class="card" onclick="window.open('https://moss.legalgreenplanet.tech', '_blank')"><h3>Moss Tile</h3><p>${t.moss_desc}</p></div>
</div>

<div class="contact-grid" style="margin-top: 3rem;">
  <a href="mailto:${t.email}" class="contact-card"><span>✉️ Email</span><b>${t.email}</b></a>
  <a href="tel:${t.phone.replace(/\s/g, '')}" class="contact-card"><span>📱 Phone</span><b>${t.phone}</b></a>
</div>

</div>
`;
};

const generatePortfolio = (lang, t) => `---
layout: doc
title: ${t.port_title}
---

# ${t.port_title}

<div class="portfolio-page">
<p class="lead">${t.port_hero}</p>
<div class="project-list">
  <div class="project-block"><h2>UCTS</h2><p>${t.ucts_desc}</p><a href="https://ucts.solutions" target="_blank" class="btn">${t.view_project} →</a></div>
  <div class="project-block"><h2>Solar-H₂ Boost</h2><p>${t.h2_desc}</p><a href="https://h2gen.legalgreenplanet.tech" target="_blank" class="btn">${t.view_project} →</a></div>
  <div class="project-block"><h2>Moss Tile</h2><p>${t.moss_desc}</p><a href="https://moss.legalgreenplanet.tech" target="_blank" class="btn">${t.view_project} →</a></div>
</div>

<hr style="margin-top: 3rem;"/>
<div class="contact-footer">
  <p>${t.contact_title}</p>
  <a href="mailto:${t.email}">${t.email}</a> | <a href="tel:${t.phone}">${t.phone}</a>
</div>
</div>`;

const generateLetter = (lang, t) => `---
layout: doc
title: ${t.letter_mfa_title}
---

# ${t.letter_mfa_title}

<div class="letter-print-container vp-doc">
<p><b>${t.letter_mfa_intro}</b></p>
<div class="letter-body-content">

${t.letter_mfa_body}

</div>

<div class="letter-signature" style="margin-top: 3rem; border-top: 1px solid #ccc; padding-top: 1rem;">
<p>${t.date}</p>
<p><b>${t.signature}</b></p>
</div>

<div class="no-print" style="margin-top: 2rem;">
<a href="javascript:window.print()" class="link">${t.print_doc}</a>
</div>
</div>`;

const generateHistory = (lang, t) => `---
layout: doc
title: ${t.full_history_title}
---

# ${t.full_history_title}

<div class="history-detail vp-doc">
${t.events.map(ev => `
<div class="history-block">

### ${ev.year} — ${ev.title}

${ev.desc}

</div>
`).join('\n')}
</div>`;

// Build Loop
localesList.forEach(loc => {
  const lang = loc.code;
  const t = translations[lang];
  const baseDir = (lang === 'uk') ? rootDir : path.join(rootDir, lang);
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

  fs.writeFileSync(path.join(baseDir, 'index.md'), generateIndex(lang, t));
  fs.writeFileSync(path.join(baseDir, 'portfolio.md'), generatePortfolio(lang, t));
  fs.writeFileSync(path.join(baseDir, 'history.md'), generateHistory(lang, t));
  const lettersDir = path.join(baseDir, 'letters');
  if (!fs.existsSync(lettersDir)) fs.mkdirSync(lettersDir, { recursive: true });
  fs.writeFileSync(path.join(lettersDir, 'mfa_iceland.md'), generateLetter(lang, t));
});

// Config ...
let localeItems = localesList.map(loc => {
  const t = translations[loc.code];
  const b = (loc.code === 'uk') ? '' : '/' + loc.code;
  return `
    ${loc.code === 'uk' ? 'root' : loc.code}: {
      label: '${loc.label}',
      lang: '${loc.code}',
      ${loc.code !== 'uk' ? `link: '/${loc.code}/',` : ''}
      themeConfig: {
        docFooter: { prev: '${loc.prev}', next: '${loc.next}' }, // LOCALIZED FOOTER NAV
        nav: [
            { text: '${t.nav_letters}', link: '${b}/letters/mfa_iceland' },
            { text: '${t.nav_portfolio}', link: '${b}/portfolio' }
        ],
        sidebar: [
            { text: '${t.sb_dossier}', items: [
                { text: '${t.sb_story}', link: '${b}/history' },
                { text: '${t.nav_portfolio}', link: '${b}/portfolio' }
            ]},
            { text: '${t.sb_letters}', items: [{ text: '${t.sb_mfa}', link: '${b}/letters/mfa_iceland' }] }
        ]
      }
    }`;
});

fs.writeFileSync(path.join(rootDir, '.vitepress', 'config.mts'), `import { defineConfig } from 'vitepress'\nexport default defineConfig({ title: "Олександр Снігірьов", locales: {${localeItems.join(',')}}, themeConfig: { socialLinks: [{ icon: 'github', link: 'https://github.com/ALExandrBts/inen' }] } })`);
fs.writeFileSync(path.join(rootDir, '.vitepress', 'public', 'CNAME'), '1810.legalgreenplanet.tech');
console.log('Build SYSTEM UPDATED: Localized docFooter, Signature Block, Full Content.');
