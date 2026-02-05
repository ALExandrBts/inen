import { test, expect } from '@playwright/test'

const BASE_URL = 'http://localhost:5173'

test.describe('Timeline Component (High-End)', () => {

    test('renders correctly with 6 events (Ukrainian)', async ({ page }) => {
        await page.goto(`${BASE_URL}/test-timeline`)

        // Wait for timeline to be visible
        const timeline = page.locator('.timeline')
        await expect(timeline).toBeVisible()

        // Check that we have exactly 6 events
        const events = page.locator('.event')
        await expect(events).toHaveCount(6)

        // Verify timeline has the vertical line (border-left)
        const borderWidth = await timeline.evaluate((el) => {
            return window.getComputedStyle(el).borderLeftWidth
        })
        expect(borderWidth).not.toBe('0px')
    })

    test('has staggered animation delays', async ({ page }) => {
        await page.goto(`${BASE_URL}/test-timeline`)

        const events = page.locator('.event')
        await expect(events).toHaveCount(6)

        // Check that first event has 0s delay, second has 0.1s, etc.
        for (let i = 0; i < 3; i++) {
            const event = events.nth(i)
            const delay = await event.getAttribute('style')
            expect(delay).toContain(`animation-delay: ${i * 0.1}s`)
        }
    })

    test('displays correct year and content', async ({ page }) => {
        await page.goto(`${BASE_URL}/test-timeline`)

        // First event should be 2024 (Emigration to Iceland)
        const firstEvent = page.locator('.event').first()
        await expect(firstEvent.locator('.year')).toContainText('2024')

        // Last event should be 2012
        const lastEvent = page.locator('.event').last()
        await expect(lastEvent.locator('.year')).toContainText('2012')
    })

    test('has dots (::before pseudo-elements)', async ({ page }) => {
        await page.goto(`${BASE_URL}/test-timeline`)

        const firstEvent = page.locator('.event').first()

        // Check computed ::before pseudo-element exists
        const hasDot = await firstEvent.evaluate((el) => {
            const before = window.getComputedStyle(el, '::before')
            return before.getPropertyValue('content') !== 'none' &&
                before.getPropertyValue('background-color') !== 'rgba(0, 0, 0, 0)'
        })

        expect(hasDot).toBe(true)
    })

    test('supports localization (Ukrainian content)', async ({ page }) => {
        await page.goto(`${BASE_URL}/test-timeline`)

        const events = page.locator('.event')
        await expect(events).toHaveCount(6)

        // Check Ukrainian content (partial match to avoid exact string comparison)
        const firstEvent = events.first()
        await expect(firstEvent).toContainText('2024')
        await expect(firstEvent).toContainText('Ісланд') // "Ісландії"
    })
})
