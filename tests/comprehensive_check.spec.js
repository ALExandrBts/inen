
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
	// Root = UK
	'index.md': { url: '/', lang: 'uk', nav: ['Листи', 'Портфоліо'] },
	'portfolio.md': { url: '/portfolio', lang: 'uk', nav: ['Листи', 'Портфоліо'] },

	// English
	'en/index.md': { url: '/en/', lang: 'en', nav: ['Letters', 'Portfolio'] },
	'en/portfolio.md': { url: '/en/portfolio', lang: 'en', nav: ['Letters', 'Portfolio'] },

	// Letters Check (new)
	'letters/mfa_iceland.md': { url: '/letters/mfa_iceland', lang: 'uk', nav: ['Листи', 'Портфоліо'] },

	// Specific check for IS (Icelandic) link logic
	'is/index.md': { url: '/is/', lang: 'is', nav: ['Bréf', 'Verkefni'] },

	// DE Check
	'de/index.md': { url: '/de/', lang: 'de', nav: ['Briefe', 'Portfolio'] },
};

test.describe('Strict Site Verification', () => {

	test('Broken Link Checker (Homepage)', async ({ page }) => {
		await page.goto('http://localhost:5173/');

		// Find all links
		const links = await page.evaluate(() => {
			return Array.from(document.querySelectorAll('a'))
				.map(a => a.href)
				.filter(href => href.startsWith('http://localhost:5173')); // Only internal
		});

		console.log(`Checking ${links.length} internal links on Homepage...`);
		const uniqueLinks = [...new Set(links)];

		for (const link of uniqueLinks) {
			// Check if link responds with 200
			const resp = await page.request.get(link);
			expect(resp.status(), `Broken Link Found: ${link}`).toBe(200);
		}
	});

	// Global Check: Background Gradient
	test('Verify Cosmetic Background (Gradient check)', async ({ page }) => {
		await page.goto('http://localhost:5173/');

		// Evaluate computed style
		const bgImage = await page.evaluate(() => {
			const style = window.getComputedStyle(document.body, '::before');
			return style.getPropertyValue('background-image');
		});

		expect(bgImage, 'Background should feature a gradient').toContain('gradient');
	});

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
			// We explicitly skip nav text check if we know we didn't translate config yet for some langs
			// But for UK/EN/DE/IS we expect it.
			if (['uk', 'en', 'de', 'is'].includes(lang)) {
				const navText = await page.locator('.VPNav').textContent();
				for (const item of nav) {
					expect(navText, `Missing NAV item: "${item}" on ${url} (${lang})`).toContain(item);
				}
			}

			// 3. Strict Link Verification
			const portfolioLink = page.locator(`.VPNav a[href*="portfolio"]`).first();
			if (await portfolioLink.count() > 0) {
				const href = await portfolioLink.getAttribute('href');

				if (lang === 'uk') {
					expect(href, `UK Portfolio link should be root`).not.toContain('/en/');
					expect(href, `UK Portfolio link should be root`).toContain('/portfolio');
				} else if (lang === 'en') {
					expect(href, `EN Portfolio link must have prefix`).toContain('/en/portfolio');
				} else if (lang === 'is') {
					expect(href, `IS Portfolio link must have prefix`).toContain('/is/portfolio');
				}
			}
		});
	}
});
