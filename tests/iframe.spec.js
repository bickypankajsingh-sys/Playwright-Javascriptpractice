
/*import { test, expect } from '@playwright/test';
test('Frame Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const frame = page.frameLocator('#mce_0_ifr').locator('body#tinymce');
    await frame.click();
    await frame.fill('Hello, World!');
    await expect(frame).toHaveText('Hello, World!');

});   */


import { test, expect } from '@playwright/test';

test('Nested iFrame Test', async ({ page }) => {

    await page.goto('https://demoqa.com/nestedframes');

    // Locate Parent Frame
    const parentFrame = page.frameLocator('#frame1');

    // Verify Parent Frame Text
    await expect(parentFrame.locator('body'))
        .toContainText('Parent frame');

    // Locate Child Frame inside Parent Frame
    const childFrame = parentFrame.frameLocator('iframe');

    // Verify Child Frame Text
    await expect(childFrame.locator('body'))
        .toContainText('Child Iframe');

});


