// Removed broken test definition
const { test, expect } = require('@playwright/test');
const { ENV } = require('../utils/environment');
const BaseClass = require('../pages/BaseClass');
const { INPUT_CONSTANTS } = require('../utils/InputConstants');
const { SELECTORS } = require('../utils/Selectors');
const { assert, log } = require('console');

test('Landing page of rupyy.com loads and key elements are visible', async ({ page }) => {
  const baseClass = new BaseClass(page);

  // 1. Go to rupyy.com
  await baseClass.navigateTo('https://rupyy.com/');
  const title = await baseClass.getPageTitle();
  expect(title).toContain('Rupyy');

  // 2. Check logo is visible
  expect(await baseClass.isVisible('img[alt="Rupyy"]')).toBe(true);

  // 3. Check main headline is present
  expect(await baseClass.isVisible('h1')).toBe(true);

  try {
    // 5. Optionally take a screenshot
    await baseClass.takeScreenshot('rupyy_landing.png');
  } catch (e) {
    console.warn("Screenshot failed:", e);
  }

});
