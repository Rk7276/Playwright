const { test, expect } = require('@playwright/test');

test('Event Hub Assignment', async ({ page }) => {

  //  Login
  await page.goto("https://eventhub.rahulshettyacademy.com/login");
  await page.getByPlaceholder("you@email.com").fill("test7276@gmail.com");
  await page.locator("#password").fill("Admin@12345");
  await page.locator("#login-btn").click();

  await expect(page.locator('span:has-text("Browse Events →")')).toBeVisible();

  //  Navigate to Admin Events
  await page.getByRole('button', { name: /Admin/i }).click();
  await page.locator("[href='/admin/events']").first().click();

  // Create Event
  const eventName = `Test Event ${Date.now()}`;

  await page.locator("#event-title-input").fill(eventName);
  await page.getByPlaceholder("Describe the event…").fill("TESTING");
  await page.selectOption('#category', { value: 'Sports' });
  await page.locator("#city").fill("Latur");
  await page.locator("#venue").fill("TT");
  await page.locator('input[type="datetime-local"]').fill('2027-01-01T10:30');
  await page.getByPlaceholder("0.00").fill("100");
  await page.locator("#total-seats").fill("50");

  await page.locator("button[type='submit']").click();
await expect(page.getByText(/Event created/i)).toBeVisible();
  //  Navigate to Events Page
  await page.locator("#nav-events").click();

  //  Wait for UI
  await page.locator(".grid-cols-1").first().waitFor();

  //  Get All Events
  const allEvents = page.locator('div.p-4.flex.flex-col.flex-1');

  //  Find Created Event
  const eventCard = allEvents.filter({ hasText: eventName }).first();

  await expect(eventCard).toBeVisible({ timeout: 10000 });

  //  Get Seats Before Booking
  const seatText = await eventCard.locator('span:has-text("seats available")').textContent();

  const seatsBeforeBooking = parseInt(seatText);
  console.log("Seats Before:", seatsBeforeBooking);

  //  Click Book Now
  await eventCard.locator('[data-testid="book-now-btn"]').click();

  //  Validate Default Ticket Count
  await expect(page.locator("#ticket-count")).toHaveText("1");

  //  Fill Booking Details
  await page.locator("#customerName").fill("Rishi");
  await page.locator("#customer-email").fill("TEST23@test.com");
  await page.getByLabel("phone").fill("9883828222");

  await page.locator("button[type='submit']").click();

  //  Capture Booking Reference
  const bookingRefElement = page.locator('.booking-ref').first();
  await expect(bookingRefElement).toBeVisible();

  const bookingRef = (await bookingRefElement.textContent()).trim();
  console.log("Booking Ref:", bookingRef);

  //  Go to View My Bookings
  await page.getByRole('button', { name: 'View My Bookings' }).click();

  await expect(page).toHaveURL(/\/bookings/);

  //  Validate Booking in List
  const bookingCards = page.locator('#booking-card');

  await expect(bookingCards.first()).toBeVisible();

  const matchedCard = bookingCards.filter({has: page.locator('.booking-ref', { hasText: bookingRef })});

  await expect(matchedCard.first()).toBeVisible();

  await expect(matchedCard).toContainText(eventName);

  //  Step 8: Verify Seat Reduction
  await page.goto('https://eventhub.rahulshettyacademy.com/events');

  const allEventsAfter = page.locator('div.p-4.flex.flex-col.flex-1');

  await expect(allEventsAfter.first()).toBeVisible();

  const eventCardAfter = allEventsAfter.filter({ hasText: eventName }).first();

  await expect(eventCardAfter).toBeVisible();

  const seatTextAfter = await eventCardAfter.locator('span:has-text("seats available")').textContent();

  const seatsAfterBooking = parseInt(seatTextAfter);

  console.log("Seats After:", seatsAfterBooking);

  //  Final Assertion
  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);

});