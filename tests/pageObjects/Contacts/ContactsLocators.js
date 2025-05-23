export class ContactsLocators {
  constructor(page) {
    this.addContactButton = page.locator('#add-contact');
    this.contactList = page.locator('.contact');
  }
}