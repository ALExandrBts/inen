
const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'is', 'no', 'sv', 'fi', 'da', 'nl'];
const rootDir = __dirname + '/..';

function fixFile(filePath, lang) {
	if (!fs.existsSync(filePath)) return;

	let content = fs.readFileSync(filePath, 'utf-8');

	// Fix inconsistent onclick patterns idempotently
	// 1. Remove excessive _blank
	content = content.replace(/, '_blank'(, '_blank')+/g, ", '_blank'");

	// 2. Ensure target _blank is in the onclick
	// Match window.open('some_url', '_blank') and ensure it doesn't have duplicates
	// This is handled by step 1, but let's ensure it's there for single urls
	content = content.replace(/window\.open\('([^']+)'\)/g, "window.open('$1', '_blank')");

	// 3. Ensure <a> inside cards have target="_blank"
	content = content.replace(/<a href="(https?:\/\/[^"]+)"(?! target="_blank")>/g, '<a href="$1" target="_blank">');

	fs.writeFileSync(filePath, content);
}

// Fix root (UK)
fixFile(path.join(rootDir, 'index.md'), null);

// Fix locales
locales.forEach(lang => {
	fixFile(path.join(rootDir, lang, 'index.md'), lang);
	fixFile(path.join(rootDir, lang, 'portfolio.md'), lang);
});

console.log("Fixed index.md links and card behaviors idempotently.");
