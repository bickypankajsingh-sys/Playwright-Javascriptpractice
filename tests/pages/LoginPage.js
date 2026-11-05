
import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
        //this.usernameInput = page.getByPlaceholder("Username");
        this.usernameInput = page.locator("#user-name");
       // this.passwordInput = page.getByPlaceholder("Password");
        this.passwordInput = page.locator("#password");
       // this.loginButton = page.getByRole('button', { name: 'Login' });
        this.loginButton = page.locator("#login-button");
    }

    async goto() {
        await this.page.goto('/');
    }
 

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
 async expectLoginPage() {
        await expect(this.loginButton).toBeVisible();
   
    }
}
