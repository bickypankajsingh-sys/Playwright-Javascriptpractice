// Practical for class, methods and constructor of previous class
import {expect, page} from '@playwright/test';

export class LoginPage {
readonly page:page;
readonly emailInput;
readonly passwordInput;
readonly signInButton;

    constructor(page:page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.signInButton = page.locator('#sign-in-button');
    }

    async goto() {
        await this.page.goto('https://orangehrm.com/');
        await expect (this.emailInput).toBeVisible({timeout: 5000});
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginInButton);
    }

    