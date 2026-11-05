
import { test, expect } from '@playwright/test';
import loginData from './hrmslogin.json';
import testData from './hrmsdata.json';

const hrmsUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test.describe('HRMS - Recruitment Data Driven Testing', () => {

    // BEFORE EACH HOOK
    test.beforeEach(async ({ page }) => {

        // Open HRMS URL
        await page.goto(hrmsUrl);

        // Enter Username
        await page.locator('input[placeholder="Username"]')
            .fill(loginData.Username);

        // Enter Password
        await page.locator('input[placeholder="Password"]')
            .fill(loginData.Password);

        // Click Login
        await page.locator('button[type="submit"]').click();

        // Verify Dashboard
        await page.waitForURL(/dashboard/i);

        await expect(page).toHaveURL(/dashboard/i);

        await expect(
            page.locator('h6.oxd-topbar-header-breadcrumb-module')
        ).toContainText('Dashboard');

        console.log('BeforeEach: Login successful');

    });

    // DATA DRIVEN TESTING
    testData.valid_users.forEach((user) => {

        test(`Add Candidate - ${user['First Name']} ${user['Last Name']}`, async ({ page }) => {

            // Navigate to Recruitment
            await page.locator('a[href*="recruitment"]').click();

            await page.waitForLoadState('networkidle');

            // Click Add Candidate
            await page.locator('button:has-text("Add")').first().click();

            // Enter Candidate Details
            await page.locator('input[placeholder="First Name"]')
                .fill(user['First Name']);

            await page.locator('input[placeholder="Last Name"]')
                .fill(user['Last Name']);

            await page.locator('input[placeholder="Type here"]')
                .fill(user.Email);

            // Save Candidate
            await page.locator('button:has-text("Save")').click();

            // Verify Success Message
            await expect(page.locator('.oxd-toast'))
                .toContainText(/success|saved/i);

            console.log(
                `Candidate added: ${user['First Name']} ${user['Last Name']}`
            );

        });

    });

});
