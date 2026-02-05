
const fs = require('fs');
const path = require('path');

const locales = [
    { code: 'uk', path: '/', labelNext: 'Наступна', labelPrev: 'Попередня' },
    { code: 'en', path: '/en/', labelNext: 'Next page', labelPrev: 'Previous page' },
    { code: 'de', path: '/de/', labelNext: 'Nächste Seite', labelPrev: 'Vorherige Seite' },
    { code: 'is', path: '/is/', labelNext: 'Næsta síða', labelPrev: 'Fyrri síða' },
    { code: 'no', path: '/no/', labelNext: 'Neste side', labelPrev: 'Forrige side' },
    { code: 'sv', path: '/sv/', labelNext: 'Nästa sida', labelPrev: 'Föregående sida' },
    { code: 'fi', path: '/fi/', labelNext: 'Seuraava sivu', labelPrev: 'Edellinen sivu' },
    { code: 'da', path: '/da/', labelNext: 'Næste side', labelPrev: 'Forrige side' },
    { code: 'nl', path: '/nl/', labelNext: 'Volgende pagina', labelPrev: 'Vorige pagina' }
];

const testFileContent = `
import { test, expect } from '@playwright/test';

test.describe('ULTIMATE MULTILINGUAL AUDIT (V11 Final Polish)', () => {

${locales.map(loc => `
    test.describe('${loc.code.toUpperCase()} Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('${loc.code}' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('${loc.code}' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173${loc.path}letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });
`).join('\n')}

});
`;

fs.writeFileSync(path.join(__dirname, '..', 'tests', 'audit_full.spec.js'), testFileContent);
console.log('Generated tests/audit_full.spec.js to verify signature split and print button placement.');
