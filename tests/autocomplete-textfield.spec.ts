import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
  await expect(page).toHaveTitle('WebDriver | Contact Us');
  await page.getByPlaceholder('Food Item').fill('chi');
  await page.locator('//div[@id=\'myInputautocomplete-list\']//div[2]').click();
  expect(await page.locator('#myInput').inputValue()).toBe('Chips');
  await page.close();
});
