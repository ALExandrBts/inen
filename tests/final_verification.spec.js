
import { test, expect } from '@playwright/test';

test.describe('Extreme Multilingual Audit (V9 Final)', () => {


    test.describe('UK Verification', () => {

        test('Full Portfolio Content (3 Projects)', async ({ page }) => {
            await page.goto('http://localhost:5173/portfolio');
            const projects = page.locator('.project-block');
            await expect(projects).toHaveCount(3);

            await expect(page.locator('h2:has-text("UCTS")').first()).toBeVisible();
            await expect(page.locator('h2:has-text("Solar-H₂ Boost")').first()).toBeVisible();
            await expect(page.locator('h2:has-text("Moss Tile")').first()).toBeVisible();
        });

        test('Full History Content (6 Events)', async ({ page }) => {
            await page.goto('http://localhost:5173/history');
            const events = page.locator('.history-block');
            await expect(events).toHaveCount(6);

            // Should contain years
            await expect(page.locator('text=1993').first()).toBeVisible();
            await expect(page.locator('text=2024').first()).toBeVisible();
        });

        test('Letter Integrity', async ({ page }) => {
            await page.goto('http://localhost:5173/letters/mfa_iceland');

            const body = page.locator('.letter-body-content');
            await expect(body).toBeVisible();

            const text = await body.textContent();
            expect(text.length).toBeGreaterThan(100);

            // Use .first() to avoid strict mode violation if phrase appears multiple times
            const keyPhrase = ('uk' === 'uk') ? 'Живої Людини' : 'Living Man';
            const phraseLocator = page.locator(`text=${keyPhrase}`);
            await expect(phraseLocator.first()).toBeVisible();
        });

        test('Contact Footer Visibility', async ({ page }) => {
            await page.goto('http://localhost:5173/');
            const email = page.locator('a[href^="mailto:legalgreenplanet"]').first();
            await expect(email).toBeVisible();
        });
    });


    test.describe('EN Verification', () => {

        test('Full Portfolio Content (3 Projects)', async ({ page }) => {
            await page.goto('http://localhost:5173/en/portfolio');
            const projects = page.locator('.project-block');
            await expect(projects).toHaveCount(3);

            await expect(page.locator('h2:has-text("UCTS")').first()).toBeVisible();
            await expect(page.locator('h2:has-text("Solar-H₂ Boost")').first()).toBeVisible();
            await expect(page.locator('h2:has-text("Moss Tile")').first()).toBeVisible();
        });

        test('Full History Content (6 Events)', async ({ page }) => {
            await page.goto('http://localhost:5173/en/history');
            const events = page.locator('.history-block');
            await expect(events).toHaveCount(6);

            // Should contain years
            await expect(page.locator('text=1993').first()).toBeVisible();
            await expect(page.locator('text=2024').first()).toBeVisible();
        });

        test('Letter Integrity', async ({ page }) => {
            await page.goto('http://localhost:5173/en/letters/mfa_iceland');

            const body = page.locator('.letter-body-content');
            await expect(body).toBeVisible();

            const text = await body.textContent();
            expect(text.length).toBeGreaterThan(100);

            // Use .first() to avoid strict mode violation if phrase appears multiple times
            const keyPhrase = ('en' === 'uk') ? 'Живої Людини' : 'Living Man';
            const phraseLocator = page.locator(`text=${keyPhrase}`);
            await expect(phraseLocator.first()).toBeVisible();
        });

        test('Contact Footer Visibility', async ({ page }) => {
            await page.goto('http://localhost:5173/en/');
            const email = page.locator('a[href^="mailto:legalgreenplanet"]').first();
            await expect(email).toBeVisible();
        });
    });


});
