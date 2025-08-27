// tests/HomePage.spec.js
import { test, expect } from '@playwright/test';
import BaseClass from '../pages/BaseClass.js';


test.describe.configure({ mode: 'parallel' });

test.describe('Rupyy Home Page', () => {
  test.beforeEach(async ({ page }) => {
    const base = new BaseClass(page);
    await base.navigateTo('/');
  });

  test('Page title and logo are visible', async ({ page }) => {
    await expect(page).toHaveTitle(/Rupyy/i);
    await expect(page.locator('img[alt="Rupyy"]')).toBeVisible();
  });

  test('Main heading and CTA button are present', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('button', { name: /apply|get started|check/i })).toBeVisible();
  });

  test('Navigation links are visible and clickable', async ({ page }) => {
    const navLinks = page.locator('header a[href]:not([href^="#"])');

    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    await expect(navLinks.first()).toBeVisible();
    await navLinks.first().click({ trial: true }); // doesn’t actually navigate
  });

  test('Logo redirects to homepage', async ({ page, baseURL }) => {
    // ✅ Better: scope to header and match by href instead of long title
    await page.locator('header a[href="/"]').click();
    await expect(page).toHaveURL(baseURL + '/');
  });
});
