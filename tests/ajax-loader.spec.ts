import { test, expect } from '@playwright/test';
import { AjaxLoaderPage } from '../pages/ajax-loader-page.js';

test('test', async ({ page }) => {
  const ajaxLoaderPage = new AjaxLoaderPage(page);
  await ajaxLoaderPage.goto();
  await ajaxLoaderPage.clickAfterWait();
  await expect(ajaxLoaderPage.confirmationMessage).toBeVisible();
  await ajaxLoaderPage.closeMessage();
  await expect(ajaxLoaderPage.clickMeButton).toBeVisible();
  await page.close();
});
