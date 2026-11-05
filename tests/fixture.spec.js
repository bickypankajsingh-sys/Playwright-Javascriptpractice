
import { test, expect } from '@playwright/test';

/*test.describe('Demo Test', () => {

    // 1. Page Fixture
    test('Page fixture demo', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveTitle('Swag Labs', {
            timeout: 5000
        });

        console.log('Page fixture executed successfully');

    });


    // 2. Browser Fixture
    test('Browser fixture demo', async ({ browser }) => {

        const context = await browser.newContext({
            colorScheme: 'dark'
        });

        const page = await context.newPage();

        await page.goto('https://playwright.dev/');

        await expect(page).toHaveURL(/playwright.dev/);

        console.log('Browser fixture executed successfully');

        await context.close();

    });

});*/

//viewport

test('Viewport demo for browser contexts', async ({ browser }) => {

    // Create browser context with custom viewport
    const context = await browser.newContext({
        viewport: {
            width: 1034,
            height: 541
        }
    });

    // Create a new page
    const page = await context.newPage();

    // Navigate to Playwright website
    await page.goto('https://playwright.dev/');

    // Verify viewport size
    expect(page.viewportSize()).toEqual({
        width: 1034,
        height: 541
    });

    // Verify page title
    await expect(page).toHaveTitle(/playwright/i);

    console.log('Viewport size verified successfully');

    // Close browser context
    await context.close();

});

//context

test('Test for incognito session', async ({ context }) => {

    // Create a new isolated browser context (incognito session)
    const context = await browser.newContext();

    // Grant geolocation permission
    await context.grantPermissions(['geolocation']);

    // Create a new page
    const page = await context.newPage();

    // Navigate to website
    await page.goto('https://playwright.dev/');

    // Verify page title
    await expect(page).toHaveTitle(/Playwright/i);

    console.log('Incognito session test passed');

    // Close browser context
    await context.close();

});


//page
test('Test for incognito session', async ({ page }) => {

    // Create a new isolated browser context (incognito session)
    const context = await browser.newPage();

    // Grant geolocation permission
    await context.grantPermissions(['geolocation']);

    // Create a new page
    const page = await context.newPage();

    // Navigate to website
    await page.goto('https://playwright.dev/');

    // Verify page title
    await expect(page).toHaveTitle(/Playwright/i);

    console.log('Incognito session test passed');

    // Close browser context
    await context.close();

});









