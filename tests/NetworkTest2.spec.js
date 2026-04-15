const { test, request,expect } = require('@playwright/test')

test('security test request intercept', async ({ page }) => {
    //login and reach orders page
    const UserEmail = page.locator('#userEmail');
    const UserPassword = page.locator("[formcontrolname='userPassword']")
    const LoginBtn = page.locator('#login');
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());
    await UserEmail.fill("RK@Test.com");
    await UserPassword.fill("aDMIN@12345");
    await LoginBtn.click();
    await page.waitForLoadState('networkidle');

    await page.locator("[routerlink='/dashboard/myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69da0ebff86ba51a655b200' }));
    await page.locator("button:has-text('view')").first().click();
     await expect(page.locator(".blink_me").last()).toHaveText("You are not authorize to view this order");

    //await page.pause();



});
