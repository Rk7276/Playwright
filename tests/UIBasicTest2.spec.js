const { test, expect } = require('@playwright/test');

test('RsClient Playwright test',async({page})=>
{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
console.log(await page.title());
const UserEmail=page.locator('#userEmail');
const UserPassword=page.locator("[formcontrolname='userPassword']")
const LoginBtn=page.locator('#login');
const products=page.locator('.card-body b');
await UserEmail.fill("Test7276@gmail.com");
await UserPassword.fill("Rushi@1234");  
await LoginBtn.click();
console.log(await products.first().textContent());
await page.waitForLoadState('networkidle');
//await products.waitFor();//this is only works when locator return only one elements

const titles=await products.allTextContents();
console.log(titles);
});
test('UI Controls',async ({page})=>
{
const UserName=page.locator('#username');
const Password=page.locator("[name='password']")
const SignIn=page.locator('#signInBtn');
const cardTitles=page.locator(".card-body a");
const documentsLink=page.locator("[href*='documents-request']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await UserName.fill("rahulshettyacademy");
await Password.fill("Learning@830$3mK2");
const dropdown=page.locator("select.form-control");
await dropdown.selectOption("Consultant");
await page.locator("span.radiotextsty").last().click();

//await SignIn.click();S
await page.locator("#okayBtn").click();
//asseration
await expect(page.locator("input[value='user']")).toBeChecked();
console.log(await page.locator("input[value='user']").isChecked());
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
//expect(await page.locator('#terms').isChecked()).toBeFalsy();
await expect(page.locator('#terms')).not.toBeChecked();
await expect(documentsLink).toHaveAttribute("class","blinkingText");
//await page.pause();
});
test('Child Window handle',async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); 
   const UserName=page.locator('#username');
   const documentsLink=page.locator("[href*='documents-request']");
   //after click on link its open in new tab so that before we have to use waitForEvent
   //Whenever u think a set of steps needs to be paralley gone and wait until this steps successfully completed then those steps u need to wrap in one Array
   const [newPage]=await Promise.all(
   [
    context.waitForEvent('page'),//listen for any new page [Pending ,rejected,fulfilled-status of operation]
   documentsLink.click(),
   ])
//Q1.What if u have dependency that multiple steps in ur playwright script need to go asyncronisly 
// for syncronse we known that we have await but for asyncronous together paralley how u can control 
// making sure those two are fullfilled before processing next?
//Ans-use await Promise.all();

const text= await newPage.locator("[class='im-para red']").textContent();
const arrayText=text.split("@")
const domain=arrayText[1].split(" ")[0]
console.log(domain);
await page.locator('#username').fill(domain);
//await page.pause();
console.log(await page.locator('#username').inputValue());
//textContents()will work onpy when text attache dto dom when page open for that then use inputValue()


});
