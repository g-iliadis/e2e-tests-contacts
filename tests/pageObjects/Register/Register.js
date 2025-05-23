import { RegisterLocators } from './RegisterLocators';

export class Register {
  constructor(page) {
    this.page = page;
    this.locators = new RegisterLocators(page);
  }

  async goto() {
    await this.page.goto('/');
    await this.locators.signupButton.click();
    await this.page.waitForURL('**/addUser');
  }

  async register(user) {
    await this.locators.firstNameInput.fill(user.firstName);
    await this.locators.lastNameInput.fill(user.lastName);
    await this.locators.emailInput.fill(user.email);
    await this.locators.passwordInput.fill(user.password);
    await this.locators.submitButton.click();
  }
}