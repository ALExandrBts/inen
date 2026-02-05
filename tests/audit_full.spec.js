
import { test, expect } from '@playwright/test';

// Using port 4173 (Preview Mode) as it's more stable for CI/CD checks than Dev
const BASE_URL = 'http://localhost:4173';

test.describe('ULTIMATE MULTILINGUAL AUDIT (V12 Timeline Restoration)', () => {


    test.describe('UK Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/');

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
            await page.goto(BASE_URL + '/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('uk' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('EN Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/en/');

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
            await page.goto(BASE_URL + '/en/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('en' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/en/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('DE Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/de/');

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
            await page.goto(BASE_URL + '/de/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('de' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/de/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('IS Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/is/');

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
            await page.goto(BASE_URL + '/is/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('is' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/is/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('NO Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/no/');

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
            await page.goto(BASE_URL + '/no/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('no' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/no/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('SV Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/sv/');

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
            await page.goto(BASE_URL + '/sv/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('sv' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/sv/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('FI Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/fi/');

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
            await page.goto(BASE_URL + '/fi/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('fi' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/fi/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('DA Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/da/');

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
            await page.goto(BASE_URL + '/da/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('da' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/da/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('NL Audit', () => {

        test('Home: Timeline Visuals', async ({ page }) => {
            await page.goto(BASE_URL + '/nl/');

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
            await page.goto(BASE_URL + '/nl/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            const keyPhrase = ('nl' === 'uk') ? 'Жива Людина' : 'Living Man';
            await expect(sigBlock).toContainText(keyPhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto(BASE_URL + '/nl/letters/mfa_iceland');
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


});
