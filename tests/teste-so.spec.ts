import test, {expect} from "@playwright/test"


test.only ('teste so', async ({page}) => {
await page.goto('https:www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user1') ;
await page.getByTestId('password').fill('secret_sauce');
const nome = await page.locator('.submit-button.btn_action');
await nome.click();
const nome2 = await page.locator('.error-button');
await expect.soft(nome2).toBeVisible();
await expect.soft(nome2).toHaveCSS('color','rgb(255, 255, 255)');
await expect.soft(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
await expect.soft(page.locator('.error-message-container')).toHaveCSS('display','flex')
})