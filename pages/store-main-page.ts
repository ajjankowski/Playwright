import { expect, type Locator, type Page } from '@playwright/test';

export class StoreMain {
    readonly page: Page;
    readonly shoes: Locator;
    readonly shoesCartValue: Locator;
    readonly addToCart: Locator;
    readonly armaniFilter: Locator;
    readonly shirt: Locator;
    readonly shirtCartValue: Locator;
    readonly searchInput: Locator;
    readonly perfume: Locator;
    readonly perfumeCartValue: Locator;
    readonly checkoutButton: Locator;
    readonly guestCheckoutOption: Locator;
    readonly continueCheckoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly countryPick: Locator;
    readonly zonePick: Locator;
    readonly cityInput: Locator;
    readonly postalCodeInput: Locator;
    readonly wrongEmailAlert: Locator;
    readonly alertFirstName: Locator;
    readonly alertLastName: Locator;
    readonly alertEmail: Locator;
    readonly alertAddress: Locator;
    readonly alertCity: Locator;
    readonly alertRegion: Locator;
    readonly alertPostalCode: Locator;
    readonly continueButton: Locator;
    readonly confirmButton: Locator;
    readonly confirmationMessage: Locator;
    readonly shoesCheckout: Locator;
    readonly shirtCheckout: Locator;
    readonly perfumeCheckout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoes = page.getByRole('link', { name: 'Womens high heel point toe stiletto sandals ankle strap court shoes' });
        this.shoesCartValue = page.getByRole('link', { name: '1 Items - $26.00' });
        this.addToCart = page.getByRole('link', { name: 'Add to Cart' });
        this.armaniFilter = page.getByRole('link', { name: 'Giorgio Armani' });
        this.shirt = page.getByRole('link', { name: 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie' });
        this.shirtCartValue = page.getByRole('link', { name: '2 Items - $58.00' });
        this.searchInput = page.getByPlaceholder('Search Keywords');
        this.perfume = page.getByRole('link', { name: 'Obsession Night Perfume' });
        this.perfumeCartValue = page.getByRole('link', { name: '3 Items - $97.00' });
        this.checkoutButton = page.locator('#cart_checkout1');
        this.guestCheckoutOption = page.getByLabel('Guest Checkout');
        this.continueCheckoutButton = page.getByRole('button', { name: 'Continue' });
        this.firstNameInput = page.locator('#guestFrm_firstname');
        this.lastNameInput = page.locator('#guestFrm_lastname');
        this.emailInput = page.locator('#guestFrm_email');
        this.phoneInput = page.locator('#guestFrm_telephone');
        this.addressInput = page.locator('#guestFrm_address_1');
        this.countryPick = page.locator('#guestFrm_country_id');
        this.zonePick = page.locator('#guestFrm_zone_id');
        this.cityInput = page.locator('#guestFrm_city');
        this.postalCodeInput = page.locator('#guestFrm_postcode');
        this.wrongEmailAlert = page.getByText('E-Mail Address does not appear to be valid!');
        this.alertFirstName = page.getByText('First Name must be greater than 3 and less than 32 characters!');
        this.alertLastName = page.getByText('Last Name must be greater than 3 and less than 32 characters!');
        this.alertEmail = page.getByText('E-Mail Address does not appear to be valid!');
        this.alertAddress = page.getByText('Address 1 must be greater than 3 and less than 128 characters!');
        this.alertCity = page.getByText('City must be greater than 3 and less than 128 characters!');
        this.alertRegion = page.getByText('Please select a region / state!');
        this.alertPostalCode = page.getByText('Zip/postal code must be between 3 and 10 characters!');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.confirmButton = page.getByRole('button', { name: 'Confirm Order' });
        this.confirmationMessage = page.getByText('Your Order Has Been Processed!');
        this.shoesCheckout = page.getByRole('link', { name: 'Womens high heel point toe stiletto sandals ankle strap court shoes' });
        this.shirtCheckout = page.getByRole('link', { name: 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie' });
        this.perfumeCheckout = page.getByRole('link', { name: 'Obsession Night Perfume' });
    }

    async goto() {
        await this.page.goto('https://automationteststore.com/');
        await expect(this.page).toHaveTitle('A place to practice your automation skills!');
    }

    async pickShoes() {
        await this.goto();
        await this.shoes.click();
        await this.addToCart.click();
    }

    async pickArmaniShirt() {
        await this.goto();
        await this.armaniFilter.click();
        await this.shirt.click();
        await this.addToCart.click();
    }

    async pickPerfumes() {
        await this.goto();
        await this.searchInput.fill('perfume');
        await this.searchInput.press('Enter');
        await this.perfume.click();
        await this.addToCart.click();
    }

    async checkoutAsGuest() {
        await this.checkoutButton.click();
        await this.guestCheckoutOption.check();
        await this.continueCheckoutButton.click();
    }

    async fillForm(firstName: string, lastName: string, email: string, phone: string, address: string,
        countryID: string, zoneID: string, city: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.addressInput.fill(address);
        await this.countryPick.selectOption(countryID);
        await this.zonePick.selectOption(zoneID);
        await this.cityInput.fill(city);
        await this.postalCodeInput.fill(postalCode);
    }

    async checkForm() {
        await this.continueButton.click();
    }

    async confirmOrder() {
        await this.confirmButton.click();
    }
}
