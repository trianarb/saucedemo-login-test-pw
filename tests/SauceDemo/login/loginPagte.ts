import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
    private readonly inputUsername: Locator;
    private readonly inputPassword: Locator;
    private readonly buttonLogin: Locator;
    private readonly titleText: Locator;

    constructor(page: Page) {
        this.inputUsername = page.locator('#user-name');
        this.inputPassword = page.locator('#password');
        this.buttonLogin = page.locator('#login-button');
        this.titleText = page.locator('[data-test=title]');
    }

    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
    }

    async fillPassword(password: string) {
        await this.inputPassword.fill(password);
    }

    async clickOnLoginButton() {
        await this.buttonLogin.click();
    }

    async validateHomePage() {
        await expect(this.titleText).toContainText('Products');
    }

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickOnLoginButton();
    }

}