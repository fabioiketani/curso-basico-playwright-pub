import test from "@playwright/test";

test ('Visitando Pagina do Playwright', async({page})=>{
await page.goto('https://playwright.dev');
//await page.locator('.getStarted_Sjon').click();
//await page.getByText('Get Started').click();
const text = await page.getByText('enables reliable end-to-end testing for modern web apps.').textContent();
console.log(text);
});