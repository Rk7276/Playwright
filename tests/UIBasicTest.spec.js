const {test,expect} =require('@playwright/test');

test('Browser context Playwright test',async ({browser})=>
{
//Playwright Code
//await
//For Open Fresh browser [fresh instanance]

const context = await browser.newContext();
const page=await context.newPage();//Catch all this a new variable called as page
//If u want block something API use Abort
//page.route('**/*.css',route=>route.abort());
//page.route('**/*.{jpg,png,jpeg}',route=>route.abort());
const UserName=page.locator('#username');
const Password=page.locator("[name='password']")
const SignIn=page.locator('#signInBtn');
const cardTitles=page.locator(".card-body a");
//check API response and what API calles in networks
page.on('request',request=>console.log(request.url()));
page.on('response',response=>console.log(response.url(),response.status()));

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await UserName.fill("rahulshetty ");
await Password.fill("password");
await SignIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect')
await UserName.fill("");
await UserName.fill("rahulshettyacademy");
await Password.fill("Learning@830$3mK2");
await SignIn.click();
//if u want to print first elemement so use .nth(0)or fisrt
console.log(await cardTitles.first().textContent());
console.log(await cardTitles.nth(1).textContent());
const allTitles=await cardTitles.allTextContents();
console.log(allTitles);
});
test('First Playwright test',async ({page})=>
{
//Playwright Code
//await
//For Open Fresh browser [fresh instanance]
await page.goto("https://google.com");
//get the Title and use assertion
console.log(await page.title());
await expect(page).toHaveTitle("Google");
});
