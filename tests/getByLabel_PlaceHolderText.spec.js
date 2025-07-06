import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto("file:///D:/PlayWright/tests/htmlfiles/getByLabel_PlaceholderText.html");

    await page.getByLabel('First Name:').fill("kishan Amod");

    await page.getByLabel('Last Name:').fill("kishan Amod");

    await page.waitForTimeout(3000);

    await page.locator("//button").click();
     await page.waitForTimeout(3000);

    //await page


})


test('Amod Mahajan Locators Test Case 1', async ({ page }) => {

    await page.goto("file:///D:/PlayWright/tests/htmlfiles/getByLabelPlaceholderText_Case1.html");

    await page.getByLabel('First Name:').fill("kishan Amod");

    await page.getByLabel('Last Name:').fill("kishan Amod");

    await page.waitForTimeout(3000);

    await page.locator("//button").click();
     await page.waitForTimeout(3000);

    //await page


})


test('Amod Mahajan Locators Test Case 2', async ({ page }) => {

    await page.goto("file:///D:/PlayWright/tests/htmlfiles/getByLabelPlaceholderText_Case2.html");

    await page.getByLabel('First Name:').fill("kishan Amod");

    await page.getByLabel('Last Name:').fill("kishan Amod");

    await page.waitForTimeout(3000);

    await page.locator("//button").click();
     await page.waitForTimeout(3000);

    //await page


})

