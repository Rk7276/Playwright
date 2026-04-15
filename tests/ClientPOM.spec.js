const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const {LoginPage}=require('../pageobjects/LoginPage');
test('client App login',async({page})=>
{
const productName='ZARA COAT 3';  
console.log(await page.title());
const username='Test7276@gmail.com';
const password='Rushi@1234';

const loginPage=new LoginPage(page);
loginPage.goTo();
loginPage.validLogin(username,password)
const products=page.locator('.card-body');

await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const titles=await products.allTextContents();
console.log(titles); 
//ZARA COAT 3

const count =await products.count();
for(let i=0;i<count;++i)
{
if(await products.nth(i).locator("b").textContent()==productName)
{
    //add to cart 
    await products.nth(i).locator("text= Add To Cart").click();
// await products.nth(i).locator("button:has-text('Add To Cart')").click();
    break;
}
}   
await page.locator("[routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();

const bool=page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("button:has-text('Checkout')").click();
await page.locator("[placeholder='Select Country']").pressSequentially('Ind');
const dropdown =page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount =await dropdown.locator("button").count();
for(let i=0;i<optionsCount;i++)
{
   const text=await dropdown.locator("button").nth(i).textContent();
   if(text.trim()=="Indonesia") 
   {
    await dropdown.locator("button").nth(i).click();
    break;
   }
}
await expect(page.locator(".user__name")).toContainText(email);
await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const OrderID = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).replace(/\|/g, '')   // remove pipes
.trim();              // remove spaces
console.log(OrderID);

const Ordersbtn=page.locator("button[routerlink='/dashboard/myorders']");
await Ordersbtn.click();
await page.waitForLoadState('networkidle');
await page.locator(".table-bordered tr").first().waitFor();
//get all rows
const OrderRows=page.locator(".ng-star-inserted tbody tr");
const OrderRowsCount=await OrderRows.count();
 for(let i=0;i<OrderRowsCount;i++)
 {
const orderRecordsRowsID=(await OrderRows.nth(i).locator("th").textContent()).trim();
if(orderRecordsRowsID===OrderID) //if(OrderID.includes(orderRecordsRowsID))--if we use no need to trim and replace orderiD
{
//click view button in the same row
  await OrderRows.nth(i).locator("button:has-text('View')").click();
    break;
}
 }
 const orderIDDetailsPage =await page.locator(" div .col-text").textContent();
expect(OrderID==orderIDDetailsPage).toBeTruthy();


//To grab the text use method textContent() [const keyword]
//await page.pause();

});