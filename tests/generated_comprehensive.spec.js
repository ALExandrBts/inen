
import { test, expect } from '@playwright/test';

test.describe('Multilingual Integrity', () => {


    test.describe('UK Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Листи"').toContain('Листи');
            expect(navText, 'Nav should contain "Портфоліо"').toContain('Портфоліо');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on uk: ${link}`).toBe(200);

                // Localization check
                if ('uk' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on uk should be localized`).toContain('/uk/');
                }
            }
        });

        
        test('Smoke Test: /portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/portfolio');
            expect(resp.status()).toBe(200);
        });
        
        
        test('Smoke Test: /letters/mfa_iceland', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/letters/mfa_iceland');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('EN Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/en/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Letters"').toContain('Letters');
            expect(navText, 'Nav should contain "Portfolio"').toContain('Portfolio');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on en: ${link}`).toBe(200);

                // Localization check
                if ('en' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on en should be localized`).toContain('/en/');
                }
            }
        });

        
        test('Smoke Test: /en/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/en/portfolio');
            expect(resp.status()).toBe(200);
        });
        
        
        test('Smoke Test: /en/letters/mfa_iceland', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/en/letters/mfa_iceland');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('DE Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/de/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Briefe"').toContain('Briefe');
            expect(navText, 'Nav should contain "Portfolio"').toContain('Portfolio');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on de: ${link}`).toBe(200);

                // Localization check
                if ('de' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on de should be localized`).toContain('/de/');
                }
            }
        });

        
        test('Smoke Test: /de/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/de/portfolio');
            expect(resp.status()).toBe(200);
        });
        
        
        test('Smoke Test: /de/letters/germany_appeal', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/de/letters/germany_appeal');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('IS Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/is/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Bréf"').toContain('Bréf');
            expect(navText, 'Nav should contain "Verkefni"').toContain('Verkefni');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on is: ${link}`).toBe(200);

                // Localization check
                if ('is' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on is should be localized`).toContain('/is/');
                }
            }
        });

        
        test('Smoke Test: /is/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/is/portfolio');
            expect(resp.status()).toBe(200);
        });
        
        
        test('Smoke Test: /is/letters/mfa_iceland', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/is/letters/mfa_iceland');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('NO Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/no/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Portefølje"').toContain('Portefølje');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on no: ${link}`).toBe(200);

                // Localization check
                if ('no' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on no should be localized`).toContain('/no/');
                }
            }
        });

        
        test('Smoke Test: /no/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/no/portfolio');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('SV Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Portfölj"').toContain('Portfölj');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on sv: ${link}`).toBe(200);

                // Localization check
                if ('sv' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on sv should be localized`).toContain('/sv/');
                }
            }
        });

        
        test('Smoke Test: /sv/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/sv/portfolio');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('FI Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Portfolio"').toContain('Portfolio');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on fi: ${link}`).toBe(200);

                // Localization check
                if ('fi' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on fi should be localized`).toContain('/fi/');
                }
            }
        });

        
        test('Smoke Test: /fi/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/fi/portfolio');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('DA Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/da/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Portefølje"').toContain('Portefølje');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on da: ${link}`).toBe(200);

                // Localization check
                if ('da' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on da should be localized`).toContain('/da/');
                }
            }
        });

        
        test('Smoke Test: /da/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/da/portfolio');
            expect(resp.status()).toBe(200);
        });
        
    });


    test.describe('NL Locale', () => {

        test('Navigation & Links', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/', { waitUntil: 'networkidle' });

            // 1. Check Nav Items
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText, 'Nav should contain "Portfolio"').toContain('Portfolio');

            // 2. Check internal links, EXCLUDING language switcher
            const links = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .filter(a => !a.closest('.VPLy') && !a.closest('.VPLocalSearch') && !a.closest('.VPNavScreenTranslations'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http://localhost:5173'));
            });

            for (const link of links) {
                const resp = await page.request.get(link);
                expect(resp.status(), `Broken link on nl: ${link}`).toBe(200);

                // Localization check
                if ('nl' !== 'uk' && (link.includes('portfolio') || link.includes('letters'))) {
                    // It should contain the locale prefix, unless it's a known non-localized link
                    expect(link, `Link ${link} on nl should be localized`).toContain('/nl/');
                }
            }
        });

        
        test('Smoke Test: /nl/portfolio', async ({ page }) => {
            const resp = await page.goto('http://localhost:5173/nl/portfolio');
            expect(resp.status()).toBe(200);
        });
        
    });


});
