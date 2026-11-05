
import { test, expect } from '@playwright/test';

test('JS Prompt Handling Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log('Prompt Message:', dialog.message());

        await dialog.accept('test purpose');

    });

    await page.locator('text=Click for JS Prompt').click();

    await expect(page.locator('#result'))
        .toHaveText('You entered: test purpose');

});

