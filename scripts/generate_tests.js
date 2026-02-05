
const fs = require('fs');
const path = require('path');

const locales = [
    { code: 'uk', path: '/', nav: ['Листи', 'Портфоліо'], pages: ['/portfolio', '/letters/mfa_iceland'] },
    { code: 'en', path: '/en/', nav: ['Letters', 'Portfolio'], pages: ['/en/portfolio', '/en/letters/mfa_iceland'] },
    { code: 'de', path: '/de/', nav: ['Briefe', 'Portfolio'], pages: ['/de/portfolio', '/de/letters/germany_appeal'] },
    { code: 'is', path: '/is/', nav: ['Bréf', 'Verkefni'], pages: ['/is/portfolio', '/is/letters/mfa_iceland'] },
    { code: 'no', path: '/no/', nav: ['Portefølje'], pages: ['/no/portfolio'] },
    { code: 'sv', path: '/sv/', nav: ['Portfölj'], pages: ['/sv/portfolio'] },
    { code: 'fi', path: '/fi/', nav: ['Portfolio'], pages: ['/fi/portfolio'] },
    { code: 'da', path: '/da/', nav: ['Portefølje'], pages: ['/da/portfolio'] },
    { code: 'nl', path: '/nl/', nav: ['Portfolio'], pages: ['/nl/portfolio'] }
];

const testFileContent = `
import { test, expect } from '@playwright/test';

test.describe('Multilingual Integrity', () => {

${locales.map(loc => `
    test.describe('${loc.code.toUpperCase()} Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            ${loc.nav.map(w => `expect(navText, 'Nav should contain "${w}"').toContain('${w}');`).join('\n            ')}

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), \`Broken link on ${loc.code}: \${link}\`).toBe(200);

                // Localization check
                if ('${loc.code}' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, \`Link \${link} on ${loc.code} should be localized\`).toContain('/${loc.code}/');
                }
            }
        });

        ${loc.pages.map(p => `
        test('Smoke Test: ${p}', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173${p}');
            expect(resp.status()).toBe(200);
        });
        `).join('\n        ')}
    });
`).join('\n')}

});
`;

fs.writeFileSync(path.join(__dirname, '..', 'tests', 'generated_comprehensive.spec.js'), testFileContent);
console.log('Generated tests/generated_comprehensive.spec.js');
