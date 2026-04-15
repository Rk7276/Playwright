const { test, expect } = require('@playwright/test');

async function loginAndGoToBooking(page) {
  //Login
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  await page.getByPlaceholder("you@email.com").fill("test7276@gmail.com");
  await page.locator("#password").fill("Admin@12345");
  await page.locator("#login-btn").click();
   await expect(page.locator('span:has-text("Browse Events →")')).toBeVisible();

}
test('Single ticket booking is eligible for refund', async ({ page }) => {

await loginAndGoToBooking(page);
 await page.goto("https://eventhub.rahulshettyacademy.com/events");

  await page.locator("#event-card").first().locator("#book-now-btn").click();
   //  Fill Booking Details
  await page.locator("#customerName").fill("Rishi");
  await page.locator("#customer-email").fill("TEST23@test.com");
  await page.getByLabel("phone").fill("9883828222");

  //await page.locator("button[type='submit']").click();
    await page.locator("#confirm-booking").click();


// Step 3 — Go to View bookings Details 
  await page.getByText("View My Bookings").click();
 await expect(page).toHaveURL(/\/bookings/);
const allbookingdetails = page.locator('[data-testid="booking-card"]');
await allbookingdetails.first().getByRole('link',{name:'View Details'}).click();

  await expect(page.getByText("Booking Information")).toBeVisible();

 // Step 4 — Booking ref validation
const bookingRef = await page.locator('span.font-mono.font-bold').textContent();
const eventTitle = await page.locator("main h1").textContent();
 expect(bookingRef.trim()[0]).toBe(eventTitle.trim()[0]);

//Step 5 — Check refund eligibility
await page.locator("#check-refund-btn").click();
const spinner = page.locator("#refund-spinner");

  await expect(spinner).toBeVisible();
  await expect(spinner).toBeHidden({ timeout: 6000 });

   // Step 6 — Validate result
     const result = page.locator("#refund-result");
await expect(result).toBeVisible();
  await expect(result).toContainText("Eligible for refund.");
  await expect(page.getByText('Eligible for refund.')).toBeVisible();
    await expect(page.getByText(' Single-ticket bookings qualify for a full refund.')).toBeVisible();

});
test('Group ticket booking is NOT eligible for refund', async ({ page }) => {

  await loginAndGoToBooking(page);

  // Step 2 — Book event with 3 tickets
  await page.goto("https://eventhub.rahulshettyacademy.com/events");

    await page.locator("#event-card").first().locator("#book-now-btn").click();

  // Increase tickets to 3
  const incrementBtn = page.locator('button:has-text("+")');
  await incrementBtn.click();
  await incrementBtn.click();

  await page.locator("#customerName").fill("Rishi");
  await page.locator("#customer-email").fill("TEST23@test.com");
  await page.getByLabel("phone").fill("9883828222");
  await page.locator("#confirm-booking").click();


  // Step 3 — Go to View bookings Details 
  await page.getByText("View My Bookings").click();
 await expect(page).toHaveURL(/\/bookings/);
const allbookingdetails = page.locator('[data-testid="booking-card"]');
await allbookingdetails.first().getByRole('link',{name:'View Details'}).click();

  await expect(page.getByText("Booking Information")).toBeVisible();

 // Step 4 — Booking ref validation
const bookingRef = await page.locator('span.font-mono.font-bold').textContent();
const eventTitle = await page.locator("main h1").textContent();
 expect(bookingRef.trim()[0]).toBe(eventTitle.trim()[0]);

//Step 5 — Check refund eligibility
await page.locator("#check-refund-btn").click();
const spinner = page.locator("#refund-spinner");

  await expect(spinner).toBeVisible();
  await expect(spinner).toBeHidden({ timeout: 6000 });

  // Step 6 — Validate result
  const result = page.locator("#refund-result");

  await expect(result).toBeVisible();
  await expect(result).toContainText("Not eligible for refund");
  await expect(result).toContainText("Group bookings (3 tickets) are non-refundable");
});
