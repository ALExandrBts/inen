
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

// Using port 4173 (Preview Mode) as it's more stable for CI/CD checks than Dev
const BASE_URL = 'http://localhost:4173';

test.describe('ULTIMATE MULTILINGUAL AUDIT (V12 Timeline Restoration)', () => {

${locales.map(loc => `
    test.describe('${loc.code.toUpperCase()} Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '${loc.path}');

            // 1. Check if timeline container exists
            const timeline = page.locator('.timeline');
            await expect(timeline).toBeVisible();

            // 2. Check CSS property for border (The Line)
            const borderLeftWidth = await timeline.evaluate((el) => {
                return window.getComputedStyle(el).borderLeftWidth;
            });
            expect(borderLeftWidth).not.toBe('0px');

            // 3. Check for dots
            const events = page.locator('.event');
            await expect(events).toHaveCount(6);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto(BASE_URL + '${loc.path}letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('${loc.code}' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '${loc.path}letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });
`).join('\n')}

});
`;

fs.writeFileSync(path.join(__dirname, '..', 'tests', 'audit_full.spec.js'), testFileContent);
console.log('Generated tests/audit_full.spec.js for Port 4173.');
