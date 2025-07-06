import { test, expect } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getByRole_Checked.html');


    await page.waitForTimeout(3999);

    var checkedValue=await page.getByRole('checkbox',{checked:true}).getAttribute("name");

    var checkedValue1=await page.getByRole('checkbox',{checked:false}).getAttribute("name");

    console.log(checkedValue1);
    
    


})