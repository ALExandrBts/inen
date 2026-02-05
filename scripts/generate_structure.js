
const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'is', 'no', 'sv', 'fi', 'da', 'nl']; // 'uk' is root, handled separately
const rootDir = path.join(__dirname, '..');

const letters = ['mfa_iceland.md', 'mfa_contacts.md', 'germany_appeal.md']; // List of known letters

// Base content to copy from if target doesn't exist
// Prefer English source if available, otherwise root (Ukrainian)
const getSourcePath = (filename) => {
    const enPath = path.join(rootDir, 'en', 'letters', filename);
    if (fs.existsSync(enPath)) return enPath;

    // Fallback to root letters (Ukrainian usually)
    const rootPath = path.join(rootDir, 'letters', filename);
    if (fs.existsSync(rootPath)) return rootPath;

    return null;
};

// Ensure basic letters exist in root
if (!fs.existsSync(path.join(rootDir, 'letters'))) {
    fs.mkdirSync(path.join(rootDir, 'letters'));
}

console.log('--- Structure Generation Started ---');

locales.forEach(lang => {
    const langDir = path.join(rootDir, lang);
    const lettersDir = path.join(langDir, 'letters');

    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir);
        console.log(`Created locale dir: ${lang}`);
    }

    if (!fs.existsSync(lettersDir)) {
        fs.mkdirSync(lettersDir);
        console.log(`Created letters dir for: ${lang}`);
    }

    // 1. Ensure Index exists
    const indexTarget = path.join(langDir, 'index.md');
    if (!fs.existsSync(indexTarget)) {
        // Copy root index as fallback
        fs.copyFileSync(path.join(rootDir, 'index.md'), indexTarget);
        console.log(`Created index.md for ${lang}`);
    }

    // 2. Ensure Portfolio exists
    const portfolioTarget = path.join(langDir, 'portfolio.md');
    if (!fs.existsSync(portfolioTarget)) {
        fs.copyFileSync(path.join(rootDir, 'portfolio.md'), portfolioTarget);
        console.log(`Created portfolio.md for ${lang}`);
    }

    // 3. Ensure Letters exist
    letters.forEach(letter => {
        const source = getSourcePath(letter);
        const target = path.join(lettersDir, letter);

        if (source && !fs.existsSync(target)) {
            fs.copyFileSync(source, target);
            console.log(`Generated ${letter} for ${lang}`);
        } else if (!source) {
            console.warn(`Warning: Source for ${letter} not found!`);
        }
    });
});

console.log('--- Structure Generation Complete ---');
