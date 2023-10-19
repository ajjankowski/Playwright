import { test, expect } from '@playwright/test';

const firstName: string = "John";
const lastName: string = "Doe";
const emailCorrect: string = "john.doe@test.com";
const emailIncorrect: string = "john.doe@";
const comment: string = "test comment";

test('contact us reset', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
  await expect(page).toHaveTitle(/Contact Us/);
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('Email Address').fill(emailCorrect);
  await page.getByPlaceholder('Comments').fill(comment);
  await page.getByRole('button', { name: 'RESET' }).click();
  await expect(page.getByPlaceholder('First Name')).not.toHaveText(firstName);
  await expect(page.getByPlaceholder('Last Name')).not.toHaveText(lastName);
  await expect(page.getByPlaceholder('Email Address')).not.toHaveText(emailCorrect);
  await expect(page.getByPlaceholder('Comments')).not.toHaveText(comment);
  await page.close();
});

test('contact us partial form submit error', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
  await expect(page).toHaveTitle(/Contact Us/);
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('Email Address').fill(emailCorrect);
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await expect(page.getByText('Error: all fields are required')).toBeVisible();
  await page.close();
});

test('contact us invalid email', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
  await expect(page).toHaveTitle(/Contact Us/);
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('Email Address').fill(emailIncorrect);
  await page.getByPlaceholder('Comments').fill(comment);
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await expect(page.getByText('Invalid email address')).toBeVisible();
  await page.close();
});

test('contact us correct data', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
  await expect(page).toHaveTitle(/Contact Us/);
  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Last Name').fill(lastName);
  await page.getByPlaceholder('Email Address').fill(emailCorrect);
  await page.getByPlaceholder('Comments').fill(comment);
  await page.getByRole('button', { name: 'SUBMIT' }).click();
  await expect(page.getByRole('heading', {name: 'Thank You for your Message!'})).toBeVisible();
  await page.close();
});
