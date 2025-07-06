import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
   await page.goto('https://jqueryui.com/droppable/');

   const iframe=await page.locator('.demo-frame');
  const srcElem= iframe.locator("[id='draggable']");

  console.log(srcElem.allTextContents());

  const desElem=iframe.locator("[id='droppable']");


  await srcElem.dragTo(desElem);

await page.waitForTimeout(3000);


})