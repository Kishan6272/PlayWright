import { test, expect } from '@playwright/test';

test('Amod Mahajan Locators', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getByRole_Disabled.html');

  var disInnerText=  await page.getByRole('button',{disabled:true}).innerText();

  console.log(disInnerText);

  var countButton=await page.getByRole('button',{name:'Disabled',exact:true}).count();

  console.log(countButton);




})


test('getByRole Expanded', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getByRole_Expanded.html');

    var btnText=await page.getByRole('button',{expanded:'false'}).innerText();

    console.log(btnText);

  




})


test('getByRole Hidden Elem', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/getBByRole_hiddenElem.html');

    var btnText=await page.getByRole('button',{includeHidden:true}).count();

    console.log(btnText);

  




})


test('getByRole - level ', async ({ page }) => {

    await page.goto('file:///D:/PlayWright/tests/htmlfiles/GetByRole_Level.html');

    var btnText=await page.getByRole('heading').count();

    console.log(btnText);

  




})