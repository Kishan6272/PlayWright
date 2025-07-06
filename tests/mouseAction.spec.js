import { test, expect } from '@playwright/test';

test('Mouse Action in playwright', async ({ page }) => {


      await page.goto('https://google.com/');

      await page.locator("//input[@value='I'm Feeling Lucky']").first().click();

      await page.waitForTimeout(3000);

})