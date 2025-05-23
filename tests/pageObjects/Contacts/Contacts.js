import { ContactsLocators } from './ContactsLocators';

export class Contacts {
  constructor(page) {
    this.page = page;
    this.locators = new ContactsLocators(page);
  }

  async isLoaded() {
    await this.locators.addContactButton.waitFor();
  }

  async contactExists(name) {
    return this.locators.contactList.locator(`text=${name}`).isVisible();
  }
}