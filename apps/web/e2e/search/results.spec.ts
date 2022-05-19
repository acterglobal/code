import { test, expect } from '@playwright/test'

test('should land on the search page', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('h6')
  const acterHeading = await page.locator('h6').allInnerTexts()
  await expect(acterHeading).toContain('Aarhus C Company')
})
