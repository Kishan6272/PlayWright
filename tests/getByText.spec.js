import { test, expect } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {
    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getByText.html');

    await expect(page.getByText('Hello World',{exact: true} )).toBeVisible();

     await expect(page.getByText(/^Today is \d{4}-\d{2}-\d{2}$/)).toBeVisible();

     console.log(new Date().toISOString());
     let today=new Date().toISOString().split('T')[0];

     //await expect(page.getByText(`Today is ${today}`)).toBeVisible();

     await expect(page.getByText("   Trimmed text here   ",{exact:true})).toBeVisible();

      await expect(page.getByText("  This is a paragraph  with multiple lines and some extra     spaces.",{exact:true})).toBeVisible();
})