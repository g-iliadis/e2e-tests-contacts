import { AddContactLocators } from "./AddContactLocators";
import { expect } from "@playwright/test";

export class AddContact {
  constructor(page) {
    this.page = page;
    this.locators = new AddContactLocators(page);
  }

  async openContactForm() {
    await this.locators.addButton.click();
  }

  async fillContactForm(contact) {
    await this.locators.firstNameInput.fill(contact.firstName);
    await this.locators.lastNameInput.fill(contact.lastName);
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

  async addContact(contact) {
    await this.openContactForm();
    await this.fillContactForm(contact);
    await this.saveContact();
  }

  async selectedContactAddedToTable(contact) {
    const row = this.page.locator("table#myTable tr", {
      hasText: `${contact.firstName} ${contact.lastName}`,
    });

    await expect(row).toBeVisible();
    await expect(row).toContainText(contact.birthdate);
    await expect(row).toContainText(contact.email.toLowerCase());
    await expect(row).toContainText(contact.phone);
    await expect(row).toContainText(contact.street1);
    await expect(row).toContainText(
      `${contact.city} ${contact.stateProvince} ${contact.postalCode}`
    );
    await expect(row).toContainText(contact.country);
  }
}
