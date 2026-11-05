
import { test, expect } from '@playwright/test';

test('Dropdown Test', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Locate State dropdown
    const stateDropdown = page.locator('#state');

    // Open dropdown
    await stateDropdown.click();

    // Wait for NCR option and select it
    const ncrOption = page.getByRole('option', { name: 'NCR' });
    await expect(ncrOption).toBeVisible();
    await ncrOption.click();

    // Verify selected option
    await expect(stateDropdown).toContainText('NCR');

});


