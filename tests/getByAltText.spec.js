import test, { expect } from '@playwright/test';

test("getByAltText-Examples", async({page}) => {
    await page.goto('https://www.cvshealth.com/');
   let avlText= await page.getByAltText("CVS Health logo").nth(1).getAttribute('alt');

   console.log(avlText);
});


test("get By alt", async({page}) => {
    await page.goto('file:///D:/PlayWright/tests/htmlfiles/area.html');
  let href1= await page.getByAltText("North America").getAttribute('href');


   //console.log(avlText);
   await page.goto(href1);
}); 