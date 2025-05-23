import { LoginLocators } from "./LoginLocators";

export class Login {
  constructor(page) {
    this.page = page;
    this.locators = new LoginLocators(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(email, password) {
    await this.locators.emailInput.fill(email);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }
}
