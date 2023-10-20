import { expect, type Locator, type Page } from '@playwright/test';

export class AjaxLoaderPage {
    readonly page: Page;
    readonly clickMeButton: Locator;
    readonly confirmationMessage: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.clickMeButton = page.locator('#button1');
        this.confirmationMessage = page.getByRole('heading', { name: 'Well Done For Waiting....!!!' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    async goto() {
        await this.page.goto('https://webdriveruniversity.com/Ajax-Loader/index.html');
        await expect(this.page).toHaveTitle('WebDriver | Ajax-Loader');
    }

    async clickAfterWait() {
        await this.clickMeButton.click();
    }

    async closeMessage() {
        await this.closeButton.click();
    }
}
