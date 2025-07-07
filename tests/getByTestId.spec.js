import { test, expect } from '@playwright/test';

import { selectors } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getByTestId.html');

   //let testVal=await page.getByTestId('login-button').innerText();

   //console.log(testVal);

   selectors.setTestIdAttribute('data-qa');

  console.log(await page.getByTestId('register-button').innerText())
})