import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('file:///D:/PlayWright/tests/htmlfiles/traditionalLocators.html') 

    await page.locator("css=input[id='username']").fill("kishan kumar pandey");


     await page.locator("css=input[id='password']").fill("kishan kumar pandey");


     await page.waitForTimeout(3999);

     await page.locator('button',{hasNotText:'login'}).first().click();


     await page.locator('fieldset',{hasNot: page.getByLabel('female')}).click();


     await page.waitForTimeout(3600);


})