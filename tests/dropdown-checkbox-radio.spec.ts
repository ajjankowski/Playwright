import { test, expect } from '@playwright/test';

test('dropdown menu', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');
  await page.locator('#dropdowm-menu-1').selectOption('c#');
  expect(await page.locator('#dropdowm-menu-1 option:checked').innerText()).toBe('C#');
  await page.locator('#dropdowm-menu-1').selectOption('java');
  expect(await page.locator('#dropdowm-menu-1 option:checked').innerText()).toBe('JAVA');
  await page.locator('#dropdowm-menu-1').selectOption('python');
  expect(await page.locator('#dropdowm-menu-1 option:checked').innerText()).toBe('Python');
  await page.locator('#dropdowm-menu-1').selectOption('sql');
  expect(await page.locator('#dropdowm-menu-1 option:checked').innerText()).toBe('SQL');
  await page.locator('#dropdowm-menu-2').selectOption('maven');
  expect(await page.locator('#dropdowm-menu-2 option:checked').innerText()).toBe('Maven');
  await page.locator('#dropdowm-menu-2').selectOption('eclipse');
  expect(await page.locator('#dropdowm-menu-2 option:checked').innerText()).toBe('Eclipse');
  await page.locator('#dropdowm-menu-2').selectOption('testng');
  expect(await page.locator('#dropdowm-menu-2 option:checked').innerText()).toBe('TestNG');
  await page.locator('#dropdowm-menu-2').selectOption('junit');
  expect(await page.locator('#dropdowm-menu-2 option:checked').innerText()).toBe('JUnit');
  await page.locator('#dropdowm-menu-3').selectOption('css');
  expect(await page.locator('#dropdowm-menu-3 option:checked').innerText()).toBe('CSS');
  await page.locator('#dropdowm-menu-3').selectOption('html');
  expect(await page.locator('#dropdowm-menu-3 option:checked').innerText()).toBe('HTML');
  await page.locator('#dropdowm-menu-3').selectOption('javascript');
  expect(await page.locator('#dropdowm-menu-3 option:checked').innerText()).toBe('JavaScript');
  await page.locator('#dropdowm-menu-3').selectOption('jquery');
  expect(await page.locator('#dropdowm-menu-3 option:checked').innerText()).toBe('JQuery');
  await page.close();
});

test('checkboxes', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');
  await page.getByLabel('Option 1').check();
  await page.getByLabel('Option 2').check();
  await page.getByLabel('Option 4').check();
  await page.getByLabel('Option 2').uncheck();
  await page.getByLabel('Option 4').uncheck();
  await expect(page.getByLabel('Option 1')).toBeChecked();
  await expect(page.getByLabel('Option 2')).not.toBeChecked();
  await expect(page.getByLabel('Option 3')).toBeChecked();
  await expect(page.getByLabel('Option 4')).not.toBeChecked();
  await page.close();
});

test('radio buttons', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');
  await page.locator('input[name="color"]').nth(0).check();
  await expect(page.locator('input[name="color"]').nth(0)).toBeChecked();
  await page.locator('input[name="color"]').nth(1).check();
  await expect(page.locator('input[name="color"]').nth(1)).toBeChecked();
  await page.locator('input[name="color"]').nth(2).check();
  await expect(page.locator('input[name="color"]').nth(2)).toBeChecked();
  await page.locator('input[name="color"]').nth(3).check();
  await expect(page.locator('input[name="color"]').nth(3)).toBeChecked();
  await page.locator('input[name="color"]').nth(4).check();
  await expect(page.locator('input[name="color"]').nth(4)).toBeChecked();
  await page.close();
});
