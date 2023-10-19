import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Ajax-Loader/index.html');
  await expect(page).toHaveTitle('WebDriver | Ajax-Loader');
  await page.getByText('CLICK ME!').click();
  await expect(page.getByRole('heading', { name: 'Well Done For Waiting....!!!' })).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByText('CLICK ME!')).toBeVisible();
  await page.close();
});