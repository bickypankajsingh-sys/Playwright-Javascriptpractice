import{test,expect} from '@playwright/test';
import path from 'path';
import {fileURLToPath} from 'url';

const __dirname = fileURLToPath(import.meta.url);
const __uploadFilePath = path.join(__dirname,'data','sample.jpg');

test('File Upload Test', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    uploadFileInput = page.locator('#uploadPicture');
    await page.locator('#uploadPicture').setInputFiles(__uploadFilePath);
});