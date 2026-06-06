const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { customtest } = require('../utils/test-base');

const{POManger}=require('../pageobjects/POManger');
//First convert Json Into to Javascript object
//Json ->String->then JS object
const dataset=JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

for(const data of dataset)
  {
  
test(`@web client App login  ${data.productName}`,async({page})=>
{
  //Create object only one time and call method 
const pomanger=new POManger(page);
console.log(await page.title());
const products=page.locator('.card-body');

const loginPage=pomanger.getLoginPage();
await loginPage.goTo();
await loginPage.validLogin(data.username,data.password)
const dashboardPage=pomanger.getDashboardPage();
await dashboardPage.searchProductAddcart(data.productName);
await dashboardPage.navigateToCart();
const checkout = pomanger.getcheckoutPage(data.productName);

// Verify product in cart page
await expect(checkout.getProductLocator()).toBeVisible();

//  Then perform checkout
await checkout.checkoutPageOperations();

await expect(checkout.confirmUserName()).toContainText(data.username);
await checkout.placeorerbutton();

await expect(checkout.confirmThankYouMsg()).toHaveText(" Thankyou for the order. ");

const orderid = await checkout.getOrderID();
console.log(orderid);
const orderspage = pomanger.getordersPage();
await orderspage.orderOperation(orderid);

const orderIDDetailsPage = await orderspage.orderDetailsPage();

expect(orderIDDetailsPage).toContain(orderid);

//To grab the text use method textContent() [const keyword]
//await page.pause();

});  
  }
customtest.only(`@web client App login Again`,async({page,testDataForOrder})=>
{
  //Create object only one time and call method 
const pomanger=new POManger(page);
console.log(await page.title());
const products=page.locator('.card-body');

const loginPage=pomanger.getLoginPage();
await loginPage.goTo();
await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password)
const dashboardPage=pomanger.getDashboardPage();
await dashboardPage.searchProductAddcart(testDataForOrder.productName);
await dashboardPage.navigateToCart();
const checkout = pomanger.getcheckoutPage(testDataForOrder.productName);

// Verify product in cart page
await expect(checkout.getProductLocator()).toBeVisible();

//  Then perform checkout
await checkout.checkoutPageOperations();

await expect(checkout.confirmUserName()).toContainText(testDataForOrder.username);
await checkout.placeorerbutton();


await expect(checkout.confirmThankYouMsg()).toHaveText(" Thankyou for the order. ");

const orderid = await checkout.getOrderID();
console.log(orderid);
const orderspage = pomanger.getordersPage();
await orderspage.orderOperation(orderid);

const orderIDDetailsPage = await orderspage.orderDetailsPage();

expect(orderIDDetailsPage).toContain(orderid);

});
