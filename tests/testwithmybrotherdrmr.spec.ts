
import {test, expect} from "@playwright/test";



test('test', async({page})=>{
await page.goto('https://www.globo.com/');
await page.getByRole('button', { name: 'Menu' }).click();

await page.getByRole('button', { name: 'Menu' }).first().click();
await page.getByRole('button', { name: 'Menu' }).first().click();
})
