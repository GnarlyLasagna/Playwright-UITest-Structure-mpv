
import { test, expect } from '@playwright/test';

test('all in one test without abstractions', async ({ page }) => {
  await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSc9MvFjv0c4lx8Fxb2RhVz1rCLT7AzWR1H9nTvb9Wt766Q8Jw/viewform');
  await expect(page.getByRole('textbox', { name: 'Name Required question' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Name Required question' }).click();
  await page.getByRole('textbox', { name: 'Name Required question' }).fill('Name');
  await page.getByRole('textbox', { name: 'Email Required question' }).click();
  await page.getByRole('textbox', { name: 'Email Required question' }).fill('email@yahoo.com');
  await page.getByRole('textbox', { name: 'Address Required question' }).click();
  await page.getByRole('textbox', { name: 'Address Required question' }).fill('123 sesame street');
  await page.getByRole('textbox', { name: 'Phone number' }).click();
  await page.getByRole('textbox', { name: 'Phone number' }).fill('123-123-1234');
  await page.locator('.e2CuFe').click();
  await page.getByText('Option').nth(5).click();
  await page.getByRole('textbox', { name: 'Date' }).fill('2026-01-10');
  await page.getByRole('radio', { name: '3' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('this is a comment\n');
  await page.locator('div').first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('radio', { name: 'Texas' }).click();
  await page.getByRole('radio', { name: 'Colby Jack' }).click();
  await page.getByRole('radio', { name: 'Mac' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('checkbox', { name: 'East' }).click();
  await page.getByRole('checkbox', { name: 'Over ear' }).click();
  await page.getByRole('checkbox', { name: 'Monopoly' }).click();
  await page.getByRole('checkbox', { name: 'Operation' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.getByText('Thanks for submitting your contact info!')).toBeVisible();

});
