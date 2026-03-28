import {test,expect} from "@playwright/test";

test ('Login success',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('input#user-name').fill('standard_user');
await page.locator('input#password').fill('secret_sauce');
await page.locator('input#login-button').click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page.getByTestId('item-4-title-link')).toBeVisible();
})

test ('Locked user',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('input#user-name').fill('locked_out_user');
await page.locator('input#password').fill('secret_sauce');
await page.locator('input#login-button').click();
await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
})

test ('wrong password',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.locator('input#user-name').fill('standard_user');
await page.locator('input#password').fill('secret_sauce1');
await page.locator('input#login-button').click();
await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();


})