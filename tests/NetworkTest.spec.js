const { test, expect,request } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { beforeEach } = require('node:test');

const { APIUtils } = require("../utils/APIUtils");
const loginPayload={userEmail: "Test7276@gmail.com",userPassword: "Rushi@1234"}
const orderPayload={orders:[{country: "Azerbaijan", productOrderedId: "6960eae1c941646b7a8b3ed3"} ]}
const fakePayloadOrders={data:[],message:"No Orders"}
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

test('Place the Order',async({page})=>
{
    //we are adding token in Local Storgae

await  page.addInitScript(value =>{
window.localStorage.setItem('token',value);
},response.token)
await page.goto("https://rahulshettyacademy.com/client/");
//below API at last if u put /* [* if use at the end it accept any thing]
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
   async  route=>
{
    const response=await page.request.fetch(route.request());
    let body=JSON.stringify(fakePayloadOrders);
    route.fulfill(
        {
response,body,
        }
    )
//Intercepting response--API response->{Playwright fakeresponse}browser->render data on front end 

});
//ZARA COAT 3
const Ordersbtn=page.locator("button[routerlink='/dashboard/myorders']");
await Ordersbtn.click();
await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
await page.pause();

await page.waitForLoadState('networkidle');
//await page.locator(".table-bordered tr").first().waitFor();
//get all rows
const OrderRows=page.locator(".ng-star-inserted tbody tr");
const OrderRowsCount=await OrderRows.count();
 
});