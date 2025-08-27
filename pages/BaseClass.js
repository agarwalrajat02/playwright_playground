// ESM version of your BaseClass
export default class BaseClass {
  constructor(page) {
    this.page = page;
    this.storageFile = 'storageState.json';
  }

  async navigateTo(urlOrPath) {
    await this.page.goto(urlOrPath, { waitUntil: 'domcontentloaded' });
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
    return this.page.title();
  }

  async isVisible(selector) {
    return this.page.isVisible(selector);
  }
}
