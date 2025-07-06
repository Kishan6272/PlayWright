import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://google.com')


    await page.locator("[aria-label='Search']").first().click();

    // press entre

    await page.locator("[aria-label='Search']").first().fill('palywright by testers talk');

    
    //await page.locator("[aria-label='Google Search']").first().click();

    await page.getByLabel('Google Search').first().click();

    await page.waitForTimeout(10000);

    // press ctr + a


    // press tab 

    // press delete
})


test('has datepicker', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');

    const frame1= page.frameLocator('//iframe');

    //console.log(frame1);

    await page.waitForTimeout(3000);

   const elem= frame1.locator('#datepicker').first();
   elem.click();
    //frame1.locator('.hasDatepicker').fill('12/12/2022');



})