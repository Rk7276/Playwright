const { devices } = require("@playwright/test");

const config = ({
  testDir: './tests',
  //for retrying the failed test cases we can use the retries property and we can set the value as per our requirement  
  retries: 1,
  //if we want to run the test in parallel then we can increase the workers but for now we will keep it 1
  workers: 1,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  projects: [
    {
      name:'safari',
      use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    ...devices['iPhone 13'],
      }
  },
  {
  name:'chrome',
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    ignoreHTTPSErrors: true
  }}
]
});

module.exports = config;

//Chrome-chromium //firefox-firefox //safari-webkit