const { test, expect } = require("@playwright/test");

test('Validate the Hidden clicks', async ({ page }) => {
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   //    await page.goto("httpa://Google.com");
   //    await page.goBack();
   //    await page.goForward();
   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#hide-textbox").click();
   await expect(page.locator("#displayed-text")).toBeHidden();
   page.on('dialog', dialog => dialog.dismiss());
   page.locator("#confirmbtn").click();
   await page.locator("#mousehover").hover();
   const framespage = page.frameLocator("#courses-iframe");
   await framespage.locator("li a[href='lifetime-access']:visible").click();
   const textcheck = await framespage.locator(".text h2").textContent();
   console.log(textcheck.split(" ")[1]);
});
test("Screenshot & Visual comparision", async ({ page }) => {
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await expect(page.locator("#displayed-text")).toBeVisible();
   await page.locator("#displayed-text").screenshot({path:'partialScreenshot.png'});
   await page.locator("#hide-textbox").click();
   await page.screenshot({path:'screenshot.png'});
   await expect(page.locator("#displayed-text")).toBeHidden();
})
//screenshot--Store -> Screenshot ->
test.only('Visual',async({page})=>{

   await page.goto("https://www.flightaware.com/");
   expect(await page.screenshot()).toMatchSnapshot('landing.png');
})