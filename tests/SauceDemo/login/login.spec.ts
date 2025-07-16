import { test } from '@playwright/test';
import { LoginPage} from './loginPagte';

test('Successfull login', async ({ page }) =>{
    console.log(process.env.URL);
    await page.goto(process.env.URL);

    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

    await loginPage.validateHomePage();
});