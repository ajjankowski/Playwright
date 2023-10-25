import { test, expect } from '@playwright/test';
import { StoreMain } from '../pages/store-main-page.js';

const firstName: string = 'John';
const lastName: string = 'Doe';
const email: string = 'john.doe@test.com';
const wrongEmail: string = 'john.doe';
const phone: string = '+123456789';
const address: string = 'Sunny Street 35';
const countryID: string = '223';
const zoneID: string = '3625';
const city: string = 'South Park';
const postalCode: string = '12345';


test('store-main', async ({ page }) => {
  const storeMain = new StoreMain(page);

  await storeMain.pickShoes();
  await expect(storeMain.shoesCartValue).toBeVisible();
  await storeMain.pickArmaniShirt();
  await expect(storeMain.shirtCartValue).toBeVisible();
  await storeMain.pickPerfumes();
  await expect(storeMain.perfumeCartValue).toBeVisible();

  await expect(storeMain.shoesCheckout).toBeVisible();
  await expect(storeMain.shirtCheckout).toBeVisible();
  await expect(storeMain.perfumeCheckout).toBeVisible();
  await storeMain.checkoutAsGuest();

  await storeMain.checkForm();
  await expect(storeMain.alertFirstName).toBeVisible();
  await expect(storeMain.alertLastName).toBeVisible();
  await expect(storeMain.alertEmail).toBeVisible();
  await expect(storeMain.alertAddress).toBeVisible();
  await expect(storeMain.alertCity).toBeVisible();
  await expect(storeMain.alertRegion).toBeVisible();
  await expect(storeMain.alertPostalCode).toBeVisible();

  await storeMain.fillForm(firstName, lastName, wrongEmail, phone, address, countryID, zoneID, city, postalCode);
  await storeMain.checkForm();
  await expect(storeMain.wrongEmailAlert).toBeVisible();
  await storeMain.fillForm(firstName, lastName, email, phone, address, countryID, zoneID, city, postalCode);
  await storeMain.checkForm();
  await storeMain.confirmOrder();
  await expect(storeMain.confirmationMessage).toBeVisible();

  await page.close();
});
