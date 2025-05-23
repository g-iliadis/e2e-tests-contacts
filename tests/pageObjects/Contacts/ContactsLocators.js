export class ContactsLocators {
  constructor(page) {
    this.addContactButton = page.locator('#add-contact');
    this.contactList = page.locator('table#myTable tr');
    this.deleteButton = page.locator('button#delete');
  }
}