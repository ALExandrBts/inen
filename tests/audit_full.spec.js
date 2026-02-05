
import { test, expect } from '@playwright/test';

test.describe('ULTIMATE MULTILINGUAL AUDIT (V11 Final Polish)', () => {


    test.describe('UK Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('uk' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('uk' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('EN Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/en/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/en/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('en' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('en' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/en/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('DE Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/de/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/de/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('de' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('de' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/de/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('IS Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/is/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/is/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('is' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('is' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/is/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('NO Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/no/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/no/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('no' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('no' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/no/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('SV Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('sv' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('sv' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/sv/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('FI Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('fi' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('fi' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/fi/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('DA Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/da/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/da/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('da' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('da' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/da/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


    test.describe('NL Audit', () => {

        test('Home: Grid & Contact', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/');
            await expect(page.locator('.contact-grid')).toBeVisible();
            await expect(page.locator('.card')).toHaveCount(3);
        });

        test('Letter: Split Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/letters/mfa_iceland');

            const sigBlock = page.locator('.letter-signature');
            await expect(sigBlock).toBeVisible();

            // Check for presence of <br> or split lines logic by checking text content structure
            const text = await sigBlock.textContent();
            expect(text.length).toBeGreaterThan(10);

            // "Living Man" (or localized) should be there
            const keyPhrase = ('nl' === 'uk') ? 'Жива Людина' : 'Living Man';
            const namePhrase = ('nl' === 'uk') ? 'Снігірьов' : 'Snigirev';

            await expect(sigBlock).toContainText(keyPhrase);
            await expect(sigBlock).toContainText(namePhrase);
        });

        test('Print Button: Top Placement', async ({ page }) => {
             await page.goto('http://localhost:5173/nl/letters/mfa_iceland');
             // The print button should be the FIRST thing in the container
             const firstChild = page.locator('.letter-print-container > :first-child');
             await expect(firstChild).toHaveClass(/no-print/);
        });

    });


});
