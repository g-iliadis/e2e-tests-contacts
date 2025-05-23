export class LoginLocators {
  constructor(page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[id="submit"]');
  }
}