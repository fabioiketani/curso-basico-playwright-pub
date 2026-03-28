import {test,  expect } from "@playwright/test";

test ('Localizando por data-test', async({page})=>{
await page.goto('https://www.saucedemo.com');
await page.getByTestId('username').fill('standard_user');
await page.getByTestId('password').fill('secret_sauce');
//await page.getByTestId('login-button').click();
await page.getByText('Login').click();
});

test ('asserts basicos', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    const color = page.getByTestId('login-button');
    await expect(color).toHaveCSS('background-color','rgb(61, 220, 145)');
    await expect(color).toHaveAttribute('value','Login');
   // await expect(color).toBeVisible();
   await expect(page.getByTestId('login-button')).toBeVisible();

});

