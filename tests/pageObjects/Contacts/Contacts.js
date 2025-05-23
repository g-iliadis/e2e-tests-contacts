import { expect } from "@playwright/test";
import { ContactsLocators } from "./ContactsLocators";

export class Contacts {
  constructor(page) {
    this.page = page;
    this.locators = new ContactsLocators(page);
  }

  async isLoaded() {
    await this.locators.addContactButton.waitFor();
  }

  async openContactByName(name) {
    const row = this.locators.contactList.filter({ hasText: name });
    await row.first().click();
    await expect(this.page).toHaveURL(/.*contactDetails/);
  }

  async deleteContact(name) {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });

    await this.locators.deleteButton.click();

    await expect(this.page).toHaveURL(/.*contactList/);
    await this.entryDeleted(name);
  }

  async entryDeleted(name) {
    await expect(this.locators.contactList.filter({ hasText: name })).toHaveCount(0);;
  }
}
