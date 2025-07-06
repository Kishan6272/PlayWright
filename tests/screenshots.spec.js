import { test, expect } from '@playwright/test';

test('take Screenshot in playwright',async ({ page }) => {
  await page.goto('https://youtube.com/@testerstalk');


  await page.screenshot({path: './tests/SCreenShot/elem1.png'});

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);


  await page.waitForTimeout(2000);
});