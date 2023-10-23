import { test, expect } from '@playwright/test';
import { ContatUsPage } from '../pages/contact-us-page.js';

const firstName: string = 'John';
const lastName: string = 'Doe';
const emailCorrect: string = 'john.doe@test.com';
const emailIncorrect: string = 'john.doe@';
const comment: string = 'test comment';
const commentEmpty: string = '';

test('contact us reset', async ({ page }) => {
  const contatUsPage = new ContatUsPage(page);
  await contatUsPage.goto();
  await contatUsPage.fillTheForm(firstName, lastName, emailCorrect, comment);
  await contatUsPage.resetForm();
  await expect(contatUsPage.firstNameInput).not.toHaveText(firstName);
  await expect(contatUsPage.lastNameInput).not.toHaveText(lastName);
  await expect(contatUsPage.emailInput).not.toHaveText(emailCorrect);
  await expect(contatUsPage.commentsInput).not.toHaveText(comment);
  await page.close();
});

test('contact us partial form submit error', async ({ page }) => {
  const contatUsPage = new ContatUsPage(page);
  await contatUsPage.goto();
  await contatUsPage.fillTheForm(firstName, lastName, emailCorrect, commentEmpty);
  await contatUsPage.submitForm();
  await expect(contatUsPage.errorFields).toBeVisible();
  await page.close();
});

test('contact us invalid email', async ({ page }) => {
  const contatUsPage = new ContatUsPage(page);
  await contatUsPage.goto();
  await contatUsPage.fillTheForm(firstName, lastName, emailIncorrect, comment);
  await contatUsPage.submitForm();
  await expect(contatUsPage.errorEmails).toBeVisible();
  await page.close();
});

test('contact us correct data', async ({ page }) => {
  const contatUsPage = new ContatUsPage(page);
  await contatUsPage.goto();
  await contatUsPage.fillTheForm(firstName, lastName, emailCorrect, comment);
  await contatUsPage.submitForm();
  await expect(contatUsPage.confirmationMessage).toBeVisible();
  await page.close();
});
