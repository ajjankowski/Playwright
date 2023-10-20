import { test, expect } from '@playwright/test';
import { Datepicker } from '../pages/datepicker-page.js';

test('test', async ({ page }) => {
  const datepicker = new Datepicker(page);
  await datepicker.goto();
  await datepicker.pickDate();
  expect(await datepicker.pickedDate.inputValue()).toBe('10-18-2023');
  await page.close();
});
