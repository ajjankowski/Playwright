import { expect, type Locator, type Page } from '@playwright/test';

export class ContatUsPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly commentsInput: Locator;
    readonly resetButton: Locator;
    readonly submitButton: Locator;
    readonly errorFields: Locator;
    readonly errorEmails: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('Email Address');
        this.commentsInput = page.getByPlaceholder('Comments');
        this.resetButton = page.getByRole('button', { name: 'RESET' });
        this.submitButton = page.getByRole('button', { name: 'SUBMIT' });
        this.errorFields = page.getByText('Error: all fields are required');
        this.errorEmails = page.getByText('Invalid email address');
        this.confirmationMessage = page.getByRole('heading', { name: 'Thank You for your Message!' });
    }

    async goto() {
        await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
        await expect(this.page).toHaveTitle(/Contact Us/);
    }

    async fillTheForm(firstName: string, lastName: string, email: string, comment: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.commentsInput.fill(comment);
    }

    async resetForm() {
        await this.resetButton.click();
    }

    async submitForm() {
        await this.submitButton.click();
    }
}
