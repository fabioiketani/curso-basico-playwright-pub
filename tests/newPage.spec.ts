import {test, expect} from "@playwright/test";

test('new page', async({page})=>{
    await page.goto('https://playwright.dev/')
    const pagePromisse = page.context().waitForEvent('page');//promessa de uma nova pagina
    await page.locator('a.gh-btn').click();
    const newPage = await pagePromisse; //newPage = nova pagina, page = pagina atinga
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage).toHaveURL('https://github.com/microsoft/playwright');
    await page.bringToFront(); //voltar pra pagina
})

