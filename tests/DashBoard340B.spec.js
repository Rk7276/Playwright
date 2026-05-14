const { test, expect } = require('@playwright/test');
 const ceName = 'River Valley Health'; // or exact visible text

test('Verify DashBoard screen', async ({ page }) => {
    await page.goto("https://demo-portal.340bdirectplus.com/login");
    await page.locator("#exampleInputEmail1").fill("jagadeesh.Pamulapati@340Bdirect.com");
    await page.locator("#exampleInputPassword1").fill("passwordpassword");
    await page.locator("input[type='checkbox']").click();

    // Wait for API after login
    const responsePromise = page.waitForResponse(response =>
        response.url().endsWith('/1546'));

    await page.getByRole('button', { hasText: 'Login' }).click();

    await page.waitForLoadState('networkidle');
    //const UI= page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")
    //await UI.waitFor();
    // Assert
    const response = await responsePromise;
    await page.waitForTimeout(2000);
    console.log(response.url(), response.status());
    // assertion
    expect(response.status()).toBe(200);
  
    await page.getByText('Program Details', { exact: true }).click();
    await page.getByText('Configuration Overview', { exact: true }).click();
    await page.waitForLoadState('networkidle');
    const ceidDrop = page.locator("div[name='ceId']");
    ceidDrop.waitFor();
    await ceidDrop.click();
    await page.getByRole('option', { name: ceName }).click();
    //await page.getByRole('option', { name: /River/i }).click();
     const searchbtn = page.getByRole('button', { name: 'Search' });
  await searchbtn.waitFor({ state: 'visible' });
    await searchbtn.click();
  const row = page.locator('tbody tr').filter({ hasText: ceName });
await expect(row).toBeVisible();
await expect(page.locator('.loaderWrapper')).toBeHidden();
await page.getByRole('listitem').filter({
  hasText: 'Covered Entity Locations'
}).click();
//await page.getByText("Covered Entity Locations").click();
await page.waitForLoadState('networkidle');
await page.getByRole('option', { name: ceName }).click();
 await searchbtn.waitFor({ state: 'visible' });
await searchbtn.click();

});
