export class RegisterLocators {
  constructor(page) {
    this.signupButton = page.locator('#signup');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('#submit');
    this.errorMessage = page.locator('#error');
  }
}