import { AddContactLocators } from "./AddContactLocators";

export class AddContact {
  constructor(page) {
    this.page = page;
    this.locators = new AddContactLocators(page);
  }

  async fillContactForm(contact) {
    await this.locators.addButton.click();
    await this.locators.nameInput.fill(
      contact.firstName + " " + contact.lastName
    );
    await this.locators.phoneInput.fill(contact.phone);
    await this.locators.birthdateInput.fill(contact.birthdate);
    await this.locators.emailInput.fill(contact.email);
    await this.locators.street1Input.fill(contact.street1);
    await this.locators.street2Input.fill(contact.street2);
    await this.locators.cityInput.fill(contact.city);
    await this.locators.stateInput.fill(contact.stateProvince);
    await this.locators.postalCodeInput.fill(contact.postalCode);
    await this.locators.countryInput.fill(contact.country);
  }

  async saveContact() {
    await this.locators.saveButton.click();
  }
}
