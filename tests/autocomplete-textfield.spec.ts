import { test, expect } from '@playwright/test';
import { AutocompleteTextfieldPage } from '../pages/autocomplete-textfield-page.js';

test('test', async ({ page }) => {
  const autocompleteTextfieldPage = new AutocompleteTextfieldPage(page);
  await autocompleteTextfieldPage.goto();
  await autocompleteTextfieldPage.foodItem.fill('chi');
  await autocompleteTextfieldPage.pickSecondItemOnList();
  expect(await autocompleteTextfieldPage.pickedItem.inputValue()).toBe('Chips');
  await page.close();
});
