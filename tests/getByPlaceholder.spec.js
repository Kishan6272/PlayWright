import { test, expect } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto("file:///D:/PlayWright/tests/htmlfiles/placeholder.html");
    // place holder only match few words untill exact true
   // await page.getByPlaceholder('full name',{exact:false}).fill("kishan kumnar pandhye");

    await page.getByPlaceholder(/full name/i).fill("kishan kumar pandey");
})
