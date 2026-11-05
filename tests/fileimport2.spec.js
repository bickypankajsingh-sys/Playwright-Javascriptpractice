
import { test, expect } from '@playwright/test';
import path from 'path';

const uploadFilePath = path.resolve('tests/datapic/sample.jpg');
const uploadFilePath1 = path.resolve('tests/datapic/nature.jpg');

test('File Upload Test', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Upload JPG file
    await page.locator('#uploadPicture').setInputFiles(uploadFilePath);
    await page.locator('#uploadPicture1').setInputFiles(uploadFilePath1);

    // Verify uploaded file name
    await expect(page.locator('#uploadPicture'))
        .toHaveValue(/sample\.jpg/);

        await expect(page.locator('#uploadPicture1'))
        .toHaveValue(/nature\.jpg/);

});
