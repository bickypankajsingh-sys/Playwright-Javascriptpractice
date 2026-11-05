
import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage';

const loginPage = new LoginPage();

test.describe('SauceDemo - Hooks Demo', () => {

    // 1. Runs once before all test cases
    test.beforeAll(async () => {
        console.log('Starting SauceDemo Test Suite');
    });

    // 2. Runs before every test case
    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        // Login functionality
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        // Verify successful login
        await expect(page).toHaveURL(/inventory.html/);

        console.log('Login successful');
    });

    // Test Case 1: Verify products page
    test('Verify Products Page', async ({ page }) => {

        await expect(
            page.getByText('Products', { exact: true })
        ).toBeVisible();

        await expect(page.locator('.inventory_item'))
            .toHaveCount(6);

        console.log('Products page verified');
    });

    // Test Case 2: Add product to cart
    test('Add Product to Cart', async ({ page }) => {

        await page.getByRole('button', {
            name: 'Add to cart'
        }).first().click();

        await expect(
            page.locator('.shopping_cart_badge')
        ).toHaveText('1');

        console.log('Product added to cart');
    });

    // Test Case 3: Verify shopping cart
    test('Verify Shopping Cart', async ({ page }) => {

        await page.getByRole('button', {
            name: 'Add to cart'
        }).first().click();

        await page.locator('.shopping_cart_link').click();

        await expect(page).toHaveURL(/cart.html/);

        await expect(page.locator('.cart_item'))
            .toHaveCount(1);

        console.log('Shopping cart verified');
    });

    // Test Case 4: Logout functionality
    test('Verify Logout', async ({ page }) => {

        await page.locator('#react-burger-menu-btn').click();

        await page.getByRole('link', {
            name: 'Logout'
        }).click();

        await expect(page).toHaveURL(
            'https://www.saucedemo.com/'
        );

        await expect(
            page.getByPlaceholder('Username')
        ).toBeVisible();

        console.log('Logout successful');
    });

    // 3. Runs after every test case
    test.afterEach(async ({}, testInfo) => {

        console.log(
            `Test completed: ${testInfo.title}`
        );

        console.log(
            `Test status: ${testInfo.status}`
        );
    });

    // 4. Runs once after all test cases
    test.afterAll(async () => {

        console.log('All test cases completed');
        console.log('SauceDemo Test Suite Finished');

    });

});

