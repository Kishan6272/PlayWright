import { test, expect } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/traditionalLocators.html');

    await page.waitForTimeout(1000);

//    await expect(  page.locator("#username")).toBeVisible();

   
//    await expect(  page.locator("#username")).toBeVisible();

  // await expect(page.locator("class=submit-button")).toBeVisible();

  const count= await page.locator("input").count();

  console.log(`total input element : ${count}`);

  await expect(page.locator("text=Settings")).toBeVisible();

  await expect(page.locator("//input[@placeholder='Enter your username']")).toBeVisible();

  await page.locator("#username").fill("jhgjgjhgj");

  await page.waitForTimeout(3000);


})