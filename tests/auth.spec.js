
import { test, expect } from '@playwright/test';

test('sign in once and save the authenticated browser session', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();

    await page.context().storageState({
        path: 'tests/.auth/standard_user.json'
    });
});
