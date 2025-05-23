export class AddContactLocators {
  constructor(page) {
    this.page = page;

    this.addButton = page.locator('#add-contact');
    this.nameInput = page.locator('#contactName');
    this.phoneInput = page.locator('#contactPhone');
    this.birthdateInput = page.locator('#contactBirthdate');
    this.emailInput = page.locator('#contactEmail');
    this.street1Input = page.locator('#contactStreet1');
    this.street2Input = page.locator('#contactStreet2');
    this.cityInput = page.locator('#contactCity');
    this.stateInput = page.locator('#contactStateProvince');
    this.postalCodeInput = page.locator('#contactPostalCode');
    this.countryInput = page.locator('#contactCountry');
    this.saveButton = page.locator('button[type="submit"]');
  }
}