import { test } from '@playwright/test';

test ('test', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.locator('body').press('Enter');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('START QA MARCOS FRANCO');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'Marcos Franco - Start QA @' }).click();
    await page.locator('#page-header span').filter({ hasText: 'Marcos Franco - Start QA' }).click();
});