import { test, expect } from '@playwright/test';
import { DropdownCheckboxRadio } from '../pages/dropdown-checkbox-radio-page.js';

test('dropdown menu', async ({ page }) => {
  const dropdownCheckboxRadio = new DropdownCheckboxRadio(page);
  await dropdownCheckboxRadio.goto();

  await dropdownCheckboxRadio.selectFromDropdown1('C#');
  expect(await dropdownCheckboxRadio.dropdown1Checked.innerText()).toBe('C#');
  await dropdownCheckboxRadio.selectFromDropdown1('JAVA');
  expect(await dropdownCheckboxRadio.dropdown1Checked.innerText()).toBe('JAVA');
  await dropdownCheckboxRadio.selectFromDropdown1('Python');
  expect(await dropdownCheckboxRadio.dropdown1Checked.innerText()).toBe('Python');
  await dropdownCheckboxRadio.selectFromDropdown1('SQL');
  expect(await dropdownCheckboxRadio.dropdown1Checked.innerText()).toBe('SQL');

  await dropdownCheckboxRadio.selectFromDropdown2('Maven');
  expect(await dropdownCheckboxRadio.dropdown2Checked.innerText()).toBe('Maven');
  await dropdownCheckboxRadio.selectFromDropdown2('Eclipse');
  expect(await dropdownCheckboxRadio.dropdown2Checked.innerText()).toBe('Eclipse');
  await dropdownCheckboxRadio.selectFromDropdown2('TestNG');
  expect(await dropdownCheckboxRadio.dropdown2Checked.innerText()).toBe('TestNG');
  await dropdownCheckboxRadio.selectFromDropdown2('JUnit');
  expect(await dropdownCheckboxRadio.dropdown2Checked.innerText()).toBe('JUnit');

  await dropdownCheckboxRadio.selectFromDropdown3('CSS');
  expect(await dropdownCheckboxRadio.dropdown3Checked.innerText()).toBe('CSS');
  await dropdownCheckboxRadio.selectFromDropdown3('HTML');
  expect(await dropdownCheckboxRadio.dropdown3Checked.innerText()).toBe('HTML');
  await dropdownCheckboxRadio.selectFromDropdown3('JavaScript');
  expect(await dropdownCheckboxRadio.dropdown3Checked.innerText()).toBe('JavaScript');
  await dropdownCheckboxRadio.selectFromDropdown3('JQuery');
  expect(await dropdownCheckboxRadio.dropdown3Checked.innerText()).toBe('JQuery');

  await page.close();
});

test('checkboxes', async ({ page }) => {
  const dropdownCheckboxRadio = new DropdownCheckboxRadio(page);
  await dropdownCheckboxRadio.goto();
  await dropdownCheckboxRadio.checkbox1.check();
  await dropdownCheckboxRadio.checkbox2.check();
  await dropdownCheckboxRadio.checkbox4.check();
  await dropdownCheckboxRadio.checkbox2.uncheck();
  await dropdownCheckboxRadio.checkbox4.uncheck();
  await expect(dropdownCheckboxRadio.checkbox1).toBeChecked();
  await expect(dropdownCheckboxRadio.checkbox2).not.toBeChecked();
  await expect(dropdownCheckboxRadio.checkbox3).toBeChecked();
  await expect(dropdownCheckboxRadio.checkbox4).not.toBeChecked();
  await page.close();
});

test('radio buttons', async ({ page }) => {
  const dropdownCheckboxRadio = new DropdownCheckboxRadio(page);
  await dropdownCheckboxRadio.goto();
  await dropdownCheckboxRadio.radio1Green.check();
  await expect(dropdownCheckboxRadio.radio1Green).toBeChecked();
  await dropdownCheckboxRadio.radio2Blue.check();
  await expect(dropdownCheckboxRadio.radio2Blue).toBeChecked();
  await dropdownCheckboxRadio.radio3Yellow.check();
  await expect(dropdownCheckboxRadio.radio3Yellow).toBeChecked();
  await dropdownCheckboxRadio.radio4Orange.check();
  await expect(dropdownCheckboxRadio.radio4Orange).toBeChecked();
  await dropdownCheckboxRadio.radio5Purple.check();
  await expect(dropdownCheckboxRadio.radio5Purple).toBeChecked();
  await page.close();
});
