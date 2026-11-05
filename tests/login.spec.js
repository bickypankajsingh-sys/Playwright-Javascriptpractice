import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';



// positive test case for login with valid credentials
test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.expectLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
});


// negative test case for login with invalid credentials
test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.expectLoginPage();
    await loginPage.login('standard_user_xyz_fghgg', 'secret_sauce');
    await expect(page).toHaveURL(/\/inventory\.html$/);
});
