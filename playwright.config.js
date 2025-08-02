import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['line'],
    ['allure-playwright']
  ],

  timeout: 60000,          // 60s for the entire test

  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    actionTimeout: 30000,  // 30s for each action like `click`
    headless: false,
  },

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },
  ],
});
