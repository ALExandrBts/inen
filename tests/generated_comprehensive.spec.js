
import { test, expect } from '@playwright/test';

test.describe('Extreme Multilingual Audit (150+ Checks)', () => {


    test.describe('UK Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Листи');
            expect(navText).toContain('Портфоліо');
        });

        
        test.describe('Route: /', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/');
                if ('/' !== '/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Досьє');
                    expect(sidebarText).toContain('Листи');
                }
            });

            test('Layout Integrity: /', async ({ page }) => {
                await page.goto('http://localhost:5173/');
                if ('/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/' === '/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /', async ({ page }) => {
                await page.goto('http://localhost:5173/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('uk' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/uk/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/uk/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on / leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/portfolio');
                if ('/portfolio' !== '/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Досьє');
                    expect(sidebarText).toContain('Листи');
                }
            });

            test('Layout Integrity: /portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/portfolio');
                if ('/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/portfolio' === '/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('uk' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/uk/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/uk/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/letters/mfa_iceland');
                if ('/letters/mfa_iceland' !== '/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Досьє');
                    expect(sidebarText).toContain('Листи');
                }
            });

            test('Layout Integrity: /letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/letters/mfa_iceland');
                if ('/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/letters/mfa_iceland' === '/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('uk' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/uk/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/uk/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('EN Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/en/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Letters');
            expect(navText).toContain('Portfolio');
        });

        
        test.describe('Route: /en/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/en/');
                if ('/en/' !== '/en/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Letters');
                }
            });

            test('Layout Integrity: /en/', async ({ page }) => {
                await page.goto('http://localhost:5173/en/');
                if ('/en/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/en/' === '/en/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /en/', async ({ page }) => {
                await page.goto('http://localhost:5173/en/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('en' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/en/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/en/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /en/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /en/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/en/portfolio');
                if ('/en/portfolio' !== '/en/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Letters');
                }
            });

            test('Layout Integrity: /en/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/en/portfolio');
                if ('/en/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/en/portfolio' === '/en/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /en/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/en/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('en' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/en/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/en/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /en/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /en/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/en/letters/mfa_iceland');
                if ('/en/letters/mfa_iceland' !== '/en/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Letters');
                }
            });

            test('Layout Integrity: /en/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/en/letters/mfa_iceland');
                if ('/en/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/en/letters/mfa_iceland' === '/en/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /en/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/en/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('en' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/en/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/en/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /en/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('DE Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/de/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Briefe');
            expect(navText).toContain('Portfolio');
        });

        
        test.describe('Route: /de/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/de/');
                if ('/de/' !== '/de/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Akte');
                    expect(sidebarText).toContain('Briefe');
                }
            });

            test('Layout Integrity: /de/', async ({ page }) => {
                await page.goto('http://localhost:5173/de/');
                if ('/de/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/de/' === '/de/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /de/', async ({ page }) => {
                await page.goto('http://localhost:5173/de/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('de' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/de/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/de/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /de/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /de/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/de/portfolio');
                if ('/de/portfolio' !== '/de/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Akte');
                    expect(sidebarText).toContain('Briefe');
                }
            });

            test('Layout Integrity: /de/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/de/portfolio');
                if ('/de/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/de/portfolio' === '/de/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /de/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/de/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('de' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/de/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/de/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /de/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /de/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/de/letters/mfa_iceland');
                if ('/de/letters/mfa_iceland' !== '/de/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Akte');
                    expect(sidebarText).toContain('Briefe');
                }
            });

            test('Layout Integrity: /de/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/de/letters/mfa_iceland');
                if ('/de/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/de/letters/mfa_iceland' === '/de/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /de/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/de/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('de' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/de/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/de/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /de/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('IS Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/is/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Bréf');
            expect(navText).toContain('Verkefni');
        });

        
        test.describe('Route: /is/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/is/');
                if ('/is/' !== '/is/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Skjöl');
                    expect(sidebarText).toContain('Bréf');
                }
            });

            test('Layout Integrity: /is/', async ({ page }) => {
                await page.goto('http://localhost:5173/is/');
                if ('/is/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/is/' === '/is/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /is/', async ({ page }) => {
                await page.goto('http://localhost:5173/is/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('is' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/is/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/is/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /is/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /is/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/is/portfolio');
                if ('/is/portfolio' !== '/is/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Skjöl');
                    expect(sidebarText).toContain('Bréf');
                }
            });

            test('Layout Integrity: /is/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/is/portfolio');
                if ('/is/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/is/portfolio' === '/is/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /is/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/is/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('is' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/is/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/is/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /is/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /is/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/is/letters/mfa_iceland');
                if ('/is/letters/mfa_iceland' !== '/is/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Skjöl');
                    expect(sidebarText).toContain('Bréf');
                }
            });

            test('Layout Integrity: /is/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/is/letters/mfa_iceland');
                if ('/is/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/is/letters/mfa_iceland' === '/is/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /is/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/is/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('is' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/is/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/is/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /is/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('NO Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/no/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Brev');
            expect(navText).toContain('Portefølje');
        });

        
        test.describe('Route: /no/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/no/');
                if ('/no/' !== '/no/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /no/', async ({ page }) => {
                await page.goto('http://localhost:5173/no/');
                if ('/no/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/no/' === '/no/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /no/', async ({ page }) => {
                await page.goto('http://localhost:5173/no/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('no' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/no/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/no/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /no/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /no/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/no/portfolio');
                if ('/no/portfolio' !== '/no/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /no/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/no/portfolio');
                if ('/no/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/no/portfolio' === '/no/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /no/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/no/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('no' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/no/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/no/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /no/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /no/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/no/letters/mfa_iceland');
                if ('/no/letters/mfa_iceland' !== '/no/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /no/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/no/letters/mfa_iceland');
                if ('/no/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/no/letters/mfa_iceland' === '/no/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /no/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/no/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('no' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/no/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/no/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /no/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('SV Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/sv/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Brev');
            expect(navText).toContain('Portfölj');
        });

        
        test.describe('Route: /sv/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/');
                if ('/sv/' !== '/sv/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Handlingar');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /sv/', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/');
                if ('/sv/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/sv/' === '/sv/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /sv/', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('sv' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/sv/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/sv/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /sv/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /sv/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/portfolio');
                if ('/sv/portfolio' !== '/sv/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Handlingar');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /sv/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/portfolio');
                if ('/sv/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/sv/portfolio' === '/sv/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /sv/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('sv' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/sv/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/sv/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /sv/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /sv/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/letters/mfa_iceland');
                if ('/sv/letters/mfa_iceland' !== '/sv/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Handlingar');
                    expect(sidebarText).toContain('Brev');
                }
            });

            test('Layout Integrity: /sv/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/letters/mfa_iceland');
                if ('/sv/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/sv/letters/mfa_iceland' === '/sv/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /sv/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/sv/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('sv' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/sv/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/sv/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /sv/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('FI Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/fi/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Kirjeet');
            expect(navText).toContain('Portfolio');
        });

        
        test.describe('Route: /fi/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/');
                if ('/fi/' !== '/fi/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Asiakirjat');
                    expect(sidebarText).toContain('Kirjeet');
                }
            });

            test('Layout Integrity: /fi/', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/');
                if ('/fi/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/fi/' === '/fi/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /fi/', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('fi' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/fi/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/fi/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /fi/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /fi/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/portfolio');
                if ('/fi/portfolio' !== '/fi/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Asiakirjat');
                    expect(sidebarText).toContain('Kirjeet');
                }
            });

            test('Layout Integrity: /fi/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/portfolio');
                if ('/fi/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/fi/portfolio' === '/fi/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /fi/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('fi' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/fi/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/fi/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /fi/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /fi/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/letters/mfa_iceland');
                if ('/fi/letters/mfa_iceland' !== '/fi/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Asiakirjat');
                    expect(sidebarText).toContain('Kirjeet');
                }
            });

            test('Layout Integrity: /fi/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/letters/mfa_iceland');
                if ('/fi/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/fi/letters/mfa_iceland' === '/fi/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /fi/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/fi/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('fi' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/fi/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/fi/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /fi/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('DA Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/da/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Breve');
            expect(navText).toContain('Portefølje');
        });

        
        test.describe('Route: /da/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/da/');
                if ('/da/' !== '/da/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dokumenter');
                    expect(sidebarText).toContain('Breve');
                }
            });

            test('Layout Integrity: /da/', async ({ page }) => {
                await page.goto('http://localhost:5173/da/');
                if ('/da/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/da/' === '/da/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /da/', async ({ page }) => {
                await page.goto('http://localhost:5173/da/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('da' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/da/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/da/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /da/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /da/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/da/portfolio');
                if ('/da/portfolio' !== '/da/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dokumenter');
                    expect(sidebarText).toContain('Breve');
                }
            });

            test('Layout Integrity: /da/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/da/portfolio');
                if ('/da/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/da/portfolio' === '/da/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /da/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/da/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('da' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/da/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/da/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /da/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /da/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/da/letters/mfa_iceland');
                if ('/da/letters/mfa_iceland' !== '/da/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dokumenter');
                    expect(sidebarText).toContain('Breve');
                }
            });

            test('Layout Integrity: /da/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/da/letters/mfa_iceland');
                if ('/da/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/da/letters/mfa_iceland' === '/da/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /da/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/da/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('da' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/da/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/da/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /da/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


    test.describe('NL Deep Verification', () => {

        test('Navigation Labels Check', async ({ page }) => {
            await page.goto('http://localhost:5173/nl/', { waitUntil: 'networkidle' });
            const navText = await page.locator('.VPNavBar').textContent();
            expect(navText).toContain('Brieven');
            expect(navText).toContain('Portfolio');
        });

        
        test.describe('Route: /nl/', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/');
                if ('/nl/' !== '/nl/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brieven');
                }
            });

            test('Layout Integrity: /nl/', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/');
                if ('/nl/'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/nl/' === '/nl/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /nl/', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('nl' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/nl/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/nl/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /nl/ leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /nl/portfolio', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/portfolio');
                if ('/nl/portfolio' !== '/nl/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brieven');
                }
            });

            test('Layout Integrity: /nl/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/portfolio');
                if ('/nl/portfolio'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/nl/portfolio' === '/nl/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /nl/portfolio', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/portfolio');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('nl' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/nl/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/nl/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /nl/portfolio leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
        
        test.describe('Route: /nl/letters/mfa_iceland', () => {
            test('Status & Sidebar Visibility', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/letters/mfa_iceland');
                if ('/nl/letters/mfa_iceland' !== '/nl/') {
                    const sidebar = page.locator('.VPSidebar');
                    await expect(sidebar).toBeVisible();
                    const sidebarText = await sidebar.textContent();
                    expect(sidebarText).toContain('Dossier');
                    expect(sidebarText).toContain('Brieven');
                }
            });

            test('Layout Integrity: /nl/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/letters/mfa_iceland');
                if ('/nl/letters/mfa_iceland'.includes('portfolio')) {
                    await expect(page.locator('.project-list')).toBeVisible();
                    const blocks = page.locator('.project-block');
                    await expect(blocks.first()).toBeVisible();
                } else if ('/nl/letters/mfa_iceland' === '/nl/') {
                    await expect(page.locator('.home-container')).toBeVisible();
                }
            });

            test('Link Prefix Check: /nl/letters/mfa_iceland', async ({ page }) => {
                await page.goto('http://localhost:5173/nl/letters/mfa_iceland');
                const internalLinks = await page.evaluate(() => {
                    return Array.from(document.querySelectorAll('a'))
                        .filter(a => {
                          const isTranslator = !!a.closest('.translations') || !!a.closest('[class*="Translation"]');
                          const isSocial = !!a.closest('.social-links');
                          return !isTranslator && !isSocial;
                        })
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.startsWith('/') && !h.startsWith('//'));
                });

                if ('nl' !== 'uk') {
                    for (const link of internalLinks) {
                        if (link === '/' || link === '/index.html') continue;

                        if (!link.includes('/nl/')) {
                            // Link failed if it belongs to another local but not the current one
                            const otherLocales = ['/en/', '/de/', '/is/', '/no/', '/sv/', '/fi/', '/da/', '/nl/'].filter(l => l !== '/nl/');
                            for (const ol of otherLocales) {
                                expect(link, `NON-COMPLIANT LINK: ${link} on /nl/letters/mfa_iceland leaks to ${ol}`).not.toContain(ol);
                            }
                        }
                    }
                }
            });
        });
        
    });


});
