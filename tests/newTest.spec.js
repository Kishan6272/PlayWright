import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://google.com/');

  await page.getByLabel('Search',{exact:true}).fill("cypress by tester talk");

  await page.getByLabel('Search',{exact:true}).click();

  await page.waitForTimeout(2000);

  // Expect a title "to contain" a substring.
  
});


test('has titl1111e', async ({ page }) => {
  await page.goto('https://github.com/login');

  //src="https://avatars.githubusercontent.com/u/103111769?v=4"

  //await page.getByAltText('https://avatars.githubusercontent.com/u/103111769?v=4').click();

  await page.getByTestId('username').fill('kishanpandey6272@gmail.com');

  await page.getByTestId('current-password').fill('hjgghjhkhkh7677r76@');


 
  // Expect a title "to contain" a substring.
  
});

test('kljljlj',async ({page})=>{
await page.goto('https://www.youtube.com/@testerstalk/videos');



await page.getByTitle('Cypress By Tester Talk').click();

await page.waitForTimeout(3000);

})


test('kljljyyiuylj',async ({page})=>{
await page.goto('https://www.youtube.com/');

//    //input[@name='search_query']



await page.locator("xpath=//input[@name='search_query']").click();
await page.locator("css=[name='search_query']").fill("java script by testre talk");
await page.locator("xpath=//input[@name='search_query']").press('Enter');


await page.waitForTimeout(3000);

})