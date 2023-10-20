import { expect, type Locator, type Page } from '@playwright/test';

export class AutocompleteTextfieldPage {
    readonly page: Page;
    readonly foodItem: Locator;
    readonly secondItemOnList: Locator;
    readonly pickedItem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.foodItem = page.getByPlaceholder('Food Item');
        this.secondItemOnList = page.locator('//div[@id=\'myInputautocomplete-list\']//div[2]');
        this.pickedItem = page.locator('#myInput');
    }

    async goto() {
        await this.page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
        await expect(this.page).toHaveTitle('WebDriver | Contact Us');
    }

    async pickSecondItemOnList() {
        await this.secondItemOnList.click();
    }
}
