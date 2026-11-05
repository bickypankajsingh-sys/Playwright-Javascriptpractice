import {test,expect} from '@playwright/test';

test('Alert Handling Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');   
page.on('dialog', async dialog => {
    console.log(dialog.message());
    const message = dialog.message();
    if(message.includes('I am a JS Confirm')) {
       // await dialog.accept();
       await dialog.dismiss();
    }
  });
    await page.locator('text=Click for JS Confirm').click();
});