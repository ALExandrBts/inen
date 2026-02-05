
const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'is', 'no', 'sv', 'fi', 'da', 'nl'];
const rootDir = __dirname + '/..';

function fixFile(filePath, lang) {
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Fix hero links
    // text: View Portfolio\n      link: /portfolio -> link: /lang/portfolio
    if (lang) {
        content = content.replace(/(link:\s*)\/(portfolio|letters)/g, `$1/${lang}/$2`);
    }

    // 2. Fix card onclick: window.location.href -> window.open(..., '_blank')
    content = content.replace(/window\.location\.href='https:\/\//g, "window.open('https://");
    // ensure target _blank is in the onclick
    content = content.replace(/'\)">/g, "', '_blank')\">");
    content = content.replace(/'\)"\s*>/g, "', '_blank')\">");

    // Fix inconsistent onclick patterns
    content = content.replace(/onclick="window\.open\('([^']+)', '_blank'\)"/g, "onclick=\"window.open('$1', '_blank')\"");

    // 3. Ensure <a> inside cards have target="_blank"
    content = content.replace(/<a href="(https?:\/\/[^"]+)"(?! target="_blank")>/g, '<a href="$1" target="_blank">');

    fs.writeFileSync(filePath, content);
}

// Fix root (UK)
fixFile(path.join(rootDir, 'index.md'), null);

// Fix locales
locales.forEach(lang => {
    fixFile(path.join(rootDir, lang, 'index.md'), lang);
});

console.log("Fixed index.md links and card behaviors using JavaScript.");
