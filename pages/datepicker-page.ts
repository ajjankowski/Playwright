import { expect, type Locator, type Page } from '@playwright/test';

export class Datepicker {
    readonly page: Page;
    readonly callendarButton: Locator;
    readonly dateToPick: Locator;
    readonly pickedDate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.callendarButton = page.getByRole('textbox');
        this.dateToPick = page.getByRole('cell', { name: '18' });
        this.pickedDate = page.locator('.form-control');
    }

    async goto() {
        await this.page.goto('https://webdriveruniversity.com/Datepicker/index.html');
        await expect(this.page).toHaveTitle('WebDriver | Datepicker');
    }

    async pickDate() {
        await this.callendarButton.click();
        await this.dateToPick.click();
    }
}
