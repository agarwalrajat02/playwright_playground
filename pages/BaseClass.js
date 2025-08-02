const { expect } = require('@playwright/test'); // ✅ Correct
const fs = require('fs');

class BaseClass {
  constructor(page) {
    this.page = page;
    this.storageFile = 'storageState.json';
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async type(selector, text) {
    await this.page.fill(selector, text);
  }

  async clearField(selector) {
    await this.page.fill(selector, '');
  }

  async clickByRole(role, name) {
    await this.page.getByRole(role, { name }).click();
  }

  async fillByRole(role, name, value) {
    await this.page.getByRole(role, { name }).fill(value);
  }

  async expectByRole(role, name, assertion) {
    await expect(this.page.getByRole(role, { name })).toHaveText(assertion);
  }

  assertion(role, name) {
    return this.page.getByRole(role, { name }); // ✅ Returns a Locator
  }

  async getText(selector) {
    return (await this.page.textContent(selector)).trim();
  }

  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async takeScreenshot(filename = 'screenshot.png') {
    await this.page.screenshot({ path: filename });
  }

  async selectOption(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async uploadFile(uploadInputSelector, filePath) {
    await this.page.waitForSelector(uploadInputSelector, { state: 'visible', timeout: 5000 });
    await this.page.setInputFiles(uploadInputSelector, filePath);
  }

  async hover(selector) {
    await this.page.hover(selector);
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }
}

module.exports = BaseClass;
