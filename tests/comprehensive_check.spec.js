
import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// Improved helper to extract strictly visible content
function extractPhrases(content, count = 5) {
	let text = content.replace(/^---[\s\S]*?---/, '');
	text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ');
	text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ');
	text = text.replace(/<\/?[^>]+(>|$)/g, ' ');
	text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
	text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1');
	text = text.replace(/[#*>\-`=_~\[\]]/g, ' ')
		.replace(/[.,:;()"'!?|]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	const words = text.split(' ').filter(w => w.length > 5 && !w.includes('http') && !w.includes('=') && !/\d/.test(w));
	const uniqueWords = [...new Set(words)];
	if (uniqueWords.length < count) return uniqueWords;
	const phrases = [];
	const step = Math.floor(uniqueWords.length / count);
	for (let i = 0; i < count; i++) {
		phrases.push(uniqueWords[i * step]);
	}
	return phrases;
}

const FILES_TO_URLS = {
	// Root is Ukrainian
	'index.md': { url: '/', lang: 'uk', nav: ['Листи', 'Портфоліо'] },
	'portfolio.md': { url: '/portfolio', lang: 'uk', nav: ['Листи', 'Портфоліо'] },

	// English explicitly at /en/
	'en/index.md': { url: '/en/', lang: 'en', nav: ['Letters', 'Portfolio'] },
	'en/portfolio.md': { url: '/en/portfolio', lang: 'en', nav: ['Letters', 'Portfolio'] },

	// Other locales
	'uk/index.md': { url: '/uk/', lang: 'uk', nav: ['Листи', 'Портфоліо'] },
	'de/index.md': { url: '/de/', lang: 'de', nav: ['Briefe', 'Portfolio'] },
	'is/index.md': { url: '/is/', lang: 'is', nav: ['Bréf', 'Verkefni'] },
	'no/index.md': { url: '/no/', lang: 'no', nav: ['Portefølje'] },
	'sv/index.md': { url: '/sv/', lang: 'sv', nav: ['Portfölj'] },
	'fi/index.md': { url: '/fi/', lang: 'fi', nav: ['Portfolio'] },
	'da/index.md': { url: '/da/', lang: 'da', nav: ['Portefølje'] },
	'nl/index.md': { url: '/nl/', lang: 'nl', nav: ['Portfolio'] }
};

test.describe('Strict Site Verification', () => {

	for (const [filePath, config] of Object.entries(FILES_TO_URLS)) {
		const { url, lang, nav } = config;

		test(`Verify ${url} (${lang}) - Content & Navigation`, async ({ page }) => {
			const fullPath = path.join(process.cwd(), filePath);

			if (!fs.existsSync(fullPath)) {
				console.warn(`File not found: ${fullPath} - skipping test`);
				return;
			}

			console.log(`Testing: ${url} [${lang}]`);

			const content = fs.readFileSync(fullPath, 'utf-8');
			const phrases = extractPhrases(content);

			const response = await page.goto(`http://localhost:5173${url}`);
			expect(response.status(), `HTTP Status for ${url}`).toBe(200);

			await expect(page.locator('#app')).toBeVisible();

			// 1. Content Verification
			const pageText = await page.textContent('body');
			const lowerPageText = pageText.toLowerCase();

			for (const phrase of phrases) {
				if (phrase.length > 3) {
					expect(lowerPageText, `Missing content phrase: "${phrase}" on ${url}`).toContain(phrase.toLowerCase());
				}
			}

			// 2. Strict Navigation Verification
			if (nav && nav.length > 0) {
				const navText = await page.locator('.VPNav').textContent();
				for (const item of nav) {
					expect(navText, `Missing NAV item: "${item}" on ${url} (${lang})`).toContain(item);
				}
			}

			// 3. Strict Link Verification
			if (lang !== 'en' && url !== '/' && url !== '/portfolio' && url !== '/uk/') {
				// Skip root/uk redundancy check for now, focus on foreign langs
				const portfolioLink = page.locator(`.VPNav a[href*="portfolio"]`).first();
				if (await portfolioLink.count() > 0) {
					const href = await portfolioLink.getAttribute('href');
					expect(href, `Portfolio link on ${url} should start with /${lang}/`).toContain(`/${lang}/`);
				}
			}
		});
	}
});
