import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import testData from './testdata.json';

test.describe('SauceDemo - Data Driven Testing', () => {
  for (const data of testData.valid_users) {
    test(`Login Test - ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.username === 'locked_out_user') {
        await expect(page.locator('[data-test="error"]'))
          .toContainText('Sorry, this user has been locked out');
      } else {
        await expect(page).toHaveURL(/inventory.html/);
      }
    });
  }
});

