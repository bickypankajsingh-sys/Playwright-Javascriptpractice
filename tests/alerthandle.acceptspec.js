
import { test, expect } from '@playwright/test';
test('Alert Handling Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log('Dialog Type:', dialog.type());
        console.log('Dialog Message:', dialog.message());

        if (dialog.type() === 'alert') {
            await dialog.accept();
        }

        else if (dialog.type() === 'confirm') {
            await dialog.accept();
        }

        else if (dialog.type() === 'prompt') {
            await dialog.accept('test purpose');
        }

    });

    // Handle JS Alert
    await page.getByText('Click for JS Alert').click();

    // Handle JS Confirm
    await page.getByText('Click for JS Confirm').click();

    // Handle JS Prompt
    await page.getByText('Click for JS Prompt').click();

    // Verify prompt result
    await expect(page.locator('#result'))
        .toHaveText('You entered: test purpose');

});
