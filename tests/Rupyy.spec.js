const { test, expect, chromium } = require('@playwright/test');
const BaseClass = require('../pages/BaseClass');

test('Landing page of rupyy.com loads and key elements are visible', async ({ page, context }) => {
  const baseClass = new BaseClass(page);

  // 1. Go to rupyy.com
  await baseClass.navigateTo('https://rupyy.com/');
  const title = await baseClass.getPageTitle();
  expect(title).toContain('Rupyy');

  // 2. Check logo is visible
  expect(await baseClass.isVisible('img[alt="Rupyy"]')).toBe(true);

  // 3. Check main headline is present
  expect(await baseClass.isVisible('h1')).toBe(true);

  
});
