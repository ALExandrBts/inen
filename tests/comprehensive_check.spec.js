
import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// Improved helper to extract strictly visible content
function extractPhrases(content, count = 5) {
	// 1. Remove Frontmatter
	let text = content.replace(/^---[\s\S]*?---/, '');

	// 2. Remove Style and Script blocks completely
	text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ');
	text = text.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ');

	// 3. Remove all HTML tags
	text = text.replace(/<\/?[^>]+(>|$)/g, ' ');

	// 4. Remove Markdown Links [text](url) -> text
	// We want to keep the text part but remove the URL part
	text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');

	// 5. Remove images ![alt](url) -> alt
	text = text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1');

	// 6. Remove special chars
	text = text.replace(/[#*>\-`=_~\[\]]/g, ' ')
		.replace(/[.,:;()"'!?|]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();

	// 7. Filter valid words
	// Must be > 5 chars, no numbers, no partial tags
	const words = text.split(' ').filter(w => {
		return w.length > 5 &&
			!w.includes('http') &&
			!w.includes('=') &&
			!/\d/.test(w); // No numbers to avoid random dates/versions mismatch
	});

	const uniqueWords = [...new Set(words)];

	if (uniqueWords.length < count) return uniqueWords;

	// Deterministic sampling
	const phrases = [];
	const step = Math.floor(uniqueWords.length / count);
	for (let i = 0; i < count; i++) {
		phrases.push(uniqueWords[i * step]);
	}
	return phrases;
}

const FILES_TO_URLS = {
	'index.md': '/',
	'portfolio.md': '/portfolio',
	'uk/index.md': '/uk/',
	'de/index.md': '/de/',
	'is/index.md': '/is/',
	'no/index.md': '/no/',
	'sv/index.md': '/sv/',
	'fi/index.md': '/fi/',
	'da/index.md': '/da/',
	'nl/index.md': '/nl/',
	'letters/mfa_iceland.md': '/letters/mfa_iceland',
	'letters/germany_appeal.md': '/letters/germany_appeal',
	'letters/mfa_contacts.md': '/letters/mfa_contacts'
};

test.describe('Comprehensive Site Verification', () => {

	for (const [filePath, urlPath] of Object.entries(FILES_TO_URLS)) {
		test(`Verify ${urlPath} (Source: ${filePath})`, async ({ page }) => {
			const fullPath = path.join(process.cwd(), filePath);

			if (!fs.existsSync(fullPath)) {
				console.warn(`File not found: ${fullPath} - skipping test`);
				return;
			}

			console.log(`Testing: ${urlPath}`);

			const content = fs.readFileSync(fullPath, 'utf-8');
			const phrases = extractPhrases(content);
			console.log(`Expected phrases for ${urlPath}:`, phrases);

			const response = await page.goto(`http://localhost:5173${urlPath}`);
			expect(response.status(), `HTTP Status for ${urlPath}`).toBe(200);

			// Structure Check
			await expect(page.locator('#app')).toBeVisible();

			const pageText = await page.textContent('body');
			const lowerPageText = pageText.toLowerCase();

			for (const phrase of phrases) {
				if (phrase.length > 3) {
					expect(lowerPageText, `Missing phrase: "${phrase}" on ${urlPath}`).toContain(phrase.toLowerCase());
				}
			}
		});
	}
});
