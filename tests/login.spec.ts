import {test,expect} from "@playwright/test";

test.describe('Normal Flow',async()=>{
    test.beforeAll(async()=>{
        console.log('Começando testes de login');
    });
    test ('Login success',async({page})=>{    
        await page.goto('https://www.saucedemo.com/');
        await page.locator('input#user-name').fill('standard_user');
        await page.locator('input#password').fill('secret_sauce');
        await page.locator('input#login-button').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByTestId('item-4-title-link')).toBeVisible();
    });
});

test.describe('Alternative Flow', async()=>{
    test.beforeAll(async()=>{
        console.log('Começando testes falhas de login');
    });
    test.afterEach(async()=>{
        console.log('terminando cada um dos testes falhas de login');
    });
    test.afterAll(async()=>{
        console.log('terminando testes falhas de login');
    });
    test.beforeEach(async({page})=>{
        await page.goto('https://www.saucedemo.com/');
    });
    test ('Locked user',async({page})=>{     
        await page.locator('input#user-name').fill('locked_out_user');
        await page.locator('input#password').fill('secret_sauce');
        await page.locator('input#login-button').click();
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
    });

    test ('Wrong password',async({page})=>{
        
        await page.locator('input#user-name').fill('standard_user');
        await page.locator('input#password').fill('secret_sauce1');
        await page.locator('input#login-button').click();
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    });
});
