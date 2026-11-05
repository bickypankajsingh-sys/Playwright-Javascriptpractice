
import { test, expect } from '@playwright/test';

test.use({
    storageState: 'tests/.auth/standard_user.json'
});

test('login using standard_user credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();

});

