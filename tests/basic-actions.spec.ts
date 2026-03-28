import {test, expect} from "@playwright/test";

test ('basic actions', async({page}) => { 
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const emailInput = page.locator("#email");
    await emailInput.fill('fabio.iketani@test.com');
    await emailInput.fill('');
    await emailInput.pressSequentially('fabio.iketani@test.com');
    await expect(emailInput).toHaveValue('fabio.iketani@test.com');

    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/checkboxes"]').click();

    const checkbox1 = page.locator('Input[type="checkbox"]').nth(0);
    await checkbox1.check();
    const checkbox2 = page.locator('Input[type="checkbox"]').nth(1);
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox1).toBeChecked();
})      

test ('basic actions 2', async({page}) => { 
    //dropdown
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('select#dropdown');
    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');
    await dropdown.selectOption({ label: 'Option 2' });
    await expect(dropdown).toHaveValue('2');

    //hover
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const img1= page.locator('.figure').nth(0);
    const img2= page.locator('.figure').nth(1);
    const img3= page.locator('.figure').nth(2);

    const imgInfo1 = img1.locator('.figcaption');
    const imgInfo2 = img2.locator('.figcaption');
    const imgInfo3 = img3.locator('.figcaption');

    //const url1 = img1.locator('a[href="/users/1"]');
    // const url2 = img2.locator('a[href="/users/2"]');
    const url3 = img3.locator('a[href="/users/3"]');     

    await img1.hover();
    await expect(imgInfo1).toBeVisible();
    await expect(imgInfo2).toBeHidden();
    await expect(imgInfo3).toBeHidden();

    await img2.hover();
    await expect(imgInfo1).toBeHidden();
    await expect(imgInfo2).toBeVisible();
    await expect(imgInfo3).toBeHidden();

    await img3.hover();
    await expect(imgInfo1).toBeHidden();
    await expect(imgInfo2).toBeHidden();
    await expect(imgInfo3).toBeVisible();

    await url3.click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/users/3')

})

