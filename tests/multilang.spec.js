import { test, expect } from '@playwright/test';

// Critical phrases that must appear in every language version
const CRITICAL_PHRASES = {
    en: ['Living Man', 'Natural Law'],
    uk: ['Жива Людина', 'Природне Право'],
    de: ['Lebendiger Mensch', 'Naturrecht'],
    is: ['Lifandi Maður', 'Náttúrulög'],
    no: ['Levende Mann', 'Naturrett'],
    sv: ['Levande Man', 'Naturrätt'],
    fi: ['Elävä Mies', 'Luonnonoikeus'],
    da: ['Levende Mand', 'Naturret'],
    nl: ['Levende Man', 'Natuurrecht']
};

const PATHS = {
    en: '/',
    uk: '/uk/',
    de: '/de/',
    is: '/is/',
    no: '/no/',
    sv: '/sv/',
    fi: '/fi/',
    da: '/da/',
    nl: '/nl/'
};

for (const [lang, path] of Object.entries(PATHS)) {
    test(`Content check for ${lang}`, async ({ page }) => {
        // Note: This test assumes the dev server is running locally or we are checking built HTML
        // For now, we are defining the logic. In a real CI pipeline, we'd serve the 'dist' folder.
        // Since we don't have a running server in this exact context yet, this file
        // serves as the Template for the E2E verification step.

        // Placeholder assertion logic
        console.log(`Checking ${lang} at ${path} for phrases: ${CRITICAL_PHRASES[lang]}`);

        // Example (pseudo-code):
        // await page.goto(`http://localhost:5173${path}`);
        // const content = await page.textContent('body');
        // for (const phrase of CRITICAL_PHRASES[lang]) {
        //   expect(content).toContain(phrase);
        // }
    });
}
