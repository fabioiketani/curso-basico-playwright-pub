import test, { expect } from "@playwright/test";

test ('Visitando Pagina do Playwright', async({page})=>{
await page.goto('https://playwright.dev');
//await page.locator('.getStarted_Sjon').click();
//await page.getByText('Get Started').click();
const text =  page.getByText('enables reliable end-to-end testing for modern web apps.');

await expect(text).toBeVisible()
});