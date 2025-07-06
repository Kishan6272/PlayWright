import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://facebook.com/');

  await page.getByText('Create new account').click();

  await page.getByLabel('First name').fill('kishannnn klumm ahj');
  await page.getByLabel('Surname').fill('kishan@123');

  const dropDownDay=page.getByLabel('Day');
  dropDownDay.selectOption('15');

  const dropDownMonth=page.getByLabel('Month');
  dropDownMonth.selectOption('10');

  const dropDownYear=page.getByLabel('Year');
  dropDownYear.selectOption('1994');

  await page.locator("//label[contains(text(),'Female')]").click();

  await page.getByLabel('Mobile number or email address').fill("kishanpandeghu@gmai.com");

  await page.getByLabel('New password').fill("password@123");

  //await page.getByText('Sign Up').click();

 await page.getByLabel('Already have an account?').click();

//   await page.getByLabel('Search',{exact:true}).click();

  await page.waitForTimeout(2000);

  // Expect a title "to contain" a substring.
  
});
