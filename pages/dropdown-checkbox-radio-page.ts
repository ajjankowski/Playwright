import { expect, type Locator, type Page } from '@playwright/test';

export class DropdownCheckboxRadio {
    readonly page: Page;
    readonly dropdown1: Locator;
    readonly dropdown1Checked: Locator;
    readonly dropdown2: Locator;
    readonly dropdown2Checked: Locator;
    readonly dropdown3: Locator;
    readonly dropdown3Checked: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
    readonly checkbox3: Locator;
    readonly checkbox4: Locator;
    readonly radio1Green: Locator;
    readonly radio2Blue: Locator;
    readonly radio3Yellow: Locator;
    readonly radio4Orange: Locator;
    readonly radio5Purple: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdown1 = page.locator('#dropdowm-menu-1');
        this.dropdown1Checked = page.locator('#dropdowm-menu-1 option:checked');
        this.dropdown2 = page.locator('#dropdowm-menu-2');
        this.dropdown2Checked = page.locator('#dropdowm-menu-2 option:checked');
        this.dropdown3 = page.locator('#dropdowm-menu-3');
        this.dropdown3Checked = page.locator('#dropdowm-menu-3 option:checked');
        this.checkbox1 = page.getByLabel('Option 1');
        this.checkbox2 = page.getByLabel('Option 2');
        this.checkbox3 = page.getByLabel('Option 3');
        this.checkbox4 = page.getByLabel('Option 4');
        this.radio1Green = page.locator('input[name="color"]').nth(0);
        this.radio2Blue = page.locator('input[name="color"]').nth(1);
        this.radio3Yellow = page.locator('input[name="color"]').nth(2);
        this.radio4Orange = page.locator('input[name="color"]').nth(3);
        this.radio5Purple = page.locator('input[name="color"]').nth(4);
    }

    async goto() {
        await this.page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        await expect(this.page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');
    }

    async selectFromDropdown1(select: string) {
        await this.dropdown1.selectOption(select);
    }

    async selectFromDropdown2(select: string) {
        await this.dropdown2.selectOption(select);
    }

    async selectFromDropdown3(select: string) {
        await this.dropdown3.selectOption(select);
    }
}
