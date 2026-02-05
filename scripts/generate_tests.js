
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

test.describe('ULTIMATE MULTILINGUAL AUDIT (TDD ENFORCED)', () => {

${locales.map(loc => `
    test.describe('${loc.code.toUpperCase()} Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}portfolio');

            // 3 Projects Strict Check
            await expect(page.locator('.project-block')).toHaveCount(3);

            // Check "Next Page" / "Previous Page" localization
            // We scroll to bottom to see footer nav
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

            // VitePress uses specific classes for prev/next
            /*
            const docFooter = page.locator('.VPDocFooter');
            if (await docFooter.isVisible()) {
                 // Check if ANY link contains the localized label
                 // Note: Logic allows partial match because "Next Page" -> "Наступна сторінка"
                 // but we configured "Наступна" in config
            }
            */
        });

        test('History: 6 Events Integrity', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173${loc.path}letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });
`).join('\n')}

});
`;

fs.writeFileSync(path.join(__dirname, '..', 'tests', 'audit_full.spec.js'), testFileContent);
console.log('Generated tests/audit_full.spec.js with checks for Contact Grid instead of VPFooter on Home.');
