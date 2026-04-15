const { test, expect,request } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { beforeEach } = require('node:test');

const {APIUtils}=require("./utils/APIUtils");
const loginPayload={userEmail: "Test7276@gmail.com",userPassword: "Rushi@1234"}
const orderPayload={orders:[{country: "Azerbaijan", productOrderedId: "6960eae1c941646b7a8b3ed3"} ]}

let token;
let orderID;
let response;
test.beforeAll(async ()=>
{
    //LOGIN API
const apiContext=await request.newContext();
const apiutils=new APIUtils(apiContext,loginPayload)
response=await apiutils.createOrder(orderPayload);


});

test('client App login',async({page})=>
{
    //we are adding token in Local Storgae

await  page.addInitScript(value =>{
window.localStorage.setItem('token',value);
},response.token)
await page.goto("https://rahulshettyacademy.com/client/");

//ZARA COAT 3
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
if(response.orderID.includes(orderRecordsRowsID)) //if(OrderID.includes(orderRecordsRowsID))--if we use no need to trim and replace orderiD
{
//click view button in the same row
  await OrderRows.nth(i).locator("button:has-text('View')").click();
    break;
}
 }
 const orderIDDetailsPage =await page.locator(" div .col-text").textContent();
 await page.pause();
expect(response.orderID.includes(orderIDDetailsPage)).toBeTruthy();
//To grab the text use method textContent() [const keyword]
//await page.pause();

});