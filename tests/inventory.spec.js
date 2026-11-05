import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/inventoryPage';

test.describe('Inventory page related tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.expectLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Test for adding multiple items to the cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.isLoaded();

        const products = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket'
        ];

        for (const product of products) {
            await inventoryPage.addItemToCart(product);
        }

        await expect(page.locator('.shopping_cart_badge')).toHaveText('4');
        await expect(await inventoryPage.getCartItemCount()).toBe(4);
    });

    test('Test for removing an item from the cart', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);
        await inventoryPage.isLoaded();
        await inventoryPage.addItemToCart('Sauce Labs Backpack');
        await inventoryPage.removeItemFromCart('Sauce Labs Backpack');

        await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
        await expect(await inventoryPage.getCartItemCount()).toBe(0);
    });
});
   