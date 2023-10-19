import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Datepicker/index.html');
  await expect(page).toHaveTitle('WebDriver | Datepicker');
  await page.getByRole('textbox').click();
  await page.getByRole('cell', { name: '18' }).click();
  expect(await page.locator('.form-control').inputValue()).toBe('10-18-2023');
  await page.close();
});
