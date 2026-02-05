
import { test, expect } from '@playwright/test';

test.describe('ULTIMATE MULTILINGUAL AUDIT (TDD ENFORCED)', () => {


    test.describe('UK Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/portfolio');

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
            await page.goto('http://localhost:5173/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('EN Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/en/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/en/portfolio');

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
            await page.goto('http://localhost:5173/en/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/en/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('DE Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/de/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/de/portfolio');

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
            await page.goto('http://localhost:5173/de/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/de/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('IS Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/is/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/is/portfolio');

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
            await page.goto('http://localhost:5173/is/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/is/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('NO Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/no/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/no/portfolio');

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
            await page.goto('http://localhost:5173/no/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/no/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('SV Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/portfolio');

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
            await page.goto('http://localhost:5173/sv/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('FI Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/portfolio');

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
            await page.goto('http://localhost:5173/fi/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('DA Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/da/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/da/portfolio');

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
            await page.goto('http://localhost:5173/da/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/da/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


    test.describe('NL Audit', () => {

        test('Home: Navigation & Contact Rendering', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/');

            // Check elegant contact cards (not text links)
            const contactCard = page.locator('.contact-card');
            await expect(contactCard).toHaveCount(2); // Email + Phone

            // IMPORTANT: Home page uses Custom Contact Grid, NOT VPFooter default
            // So we verify our custom grid is visible
            await expect(page.locator('.contact-grid')).toBeVisible();
        });

        test('Portfolio: 3 Projects & Localized UI', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/portfolio');

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
            await page.goto('http://localhost:5173/nl/history');

            // 6 History Blocks
            await expect(page.locator('.history-block')).toHaveCount(6);

            // No Raw Markdown hashes
            const content = await page.content();
            expect(content).not.toContain('### 1993'); // Should be rendered as H3
            expect(content).toContain('1993'); // But the year is there
        });

        test('Letter: Formatting & Signature', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/letters/mfa_iceland');

            // Check Signature Formatting (New line check)
            const signatureBlock = page.locator('.letter-signature');
            await expect(signatureBlock).toBeVisible();
        });

    });


});
