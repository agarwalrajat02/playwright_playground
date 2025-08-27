// playwright.config.js
import { defineConfig, devices } from '@playwright/test';
import ENV from './utils/environment.js';

// detect CI
const IS_CI = !!process.env.CI;

export default defineConfig({
  reporter: [['line'], ['allure-playwright']],
  timeout: 60_000,
  expect: { timeout: 5_000 },

  use: {
    baseURL: ENV.BASE_URL, // 👈 picked from environment.js
    headless: true,
    actionTimeout: 15_000,
    trace: IS_CI ? 'retain-on-failure' : 'on-first-retry',
    video: IS_CI ? 'retain-on-failure' : 'off',
    screenshot: 'only-on-failure',
  },

  retries: IS_CI ? 2 : 0,
  fullyParallel: true,
  workers: IS_CI ? 4 : undefined,

  // ✅ CI: Only prod + chromium
  projects: IS_CI
    ? [
        {
          name: 'chromium-prod',
          use: {
            ...devices['Desktop Chrome'],
            browserName: 'chromium',
            baseURL: 'https://www.rupyy.com', // hardcoded prod for CI
          },
        },
      ]
    : [
        // ✅ Local: choose env/browser from CLI (default = ENV from env file)
        { name: 'chromium', use: { ...devices['Desktop Chrome'], browserName: 'chromium' } },
        { name: 'firefox',  use: { ...devices['Desktop Firefox'], browserName: 'firefox' } },
        { name: 'webkit',   use: { ...devices['Desktop Safari'],  browserName: 'webkit' } },
      ],

  testDir: './tests',
});

/*
🔹 Nightly Matrix (commented for now)
import { configs } from './utils/environment.js';
const browsers = [
  { name: 'chromium', device: devices['Desktop Chrome'] },
  { name: 'firefox',  device: devices['Desktop Firefox'] },
  { name: 'webkit',   device: devices['Desktop Safari'] },
];
const nightlyProjects = Object.entries(configs).flatMap(([env, cfg]) =>
  browsers.map(b => ({
    name: `${b.name}-${env}`,
    use: { ...b.device, browserName: b.name, baseURL: cfg.BASE_URL },
  }))
);
*/
