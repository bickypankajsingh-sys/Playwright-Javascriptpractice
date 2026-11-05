
// // @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage.js';
import testData from './testdata.json' with { type: 'json' };

const environmentName = (process.env.TEST_ENV || 'qa').toLowerCase();
const environment = testData.environments[environmentName];

if (!environment) {
  throw new Error(`Unknown TEST_ENV="${environmentName}". Use qa, stage, prod.`);
}

test(`login using ${environmentName} environment data`, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(environment.url);
  await loginPage.expectLoginPage();
  await loginPage.login(environment.userName, environment.password);

  await expect(page).toHaveURL(/\/inventory\.html$/);
 // await expect(page.getByText('Products')).toBeVisible();
});

