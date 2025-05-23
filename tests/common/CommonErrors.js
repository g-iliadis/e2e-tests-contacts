import { expect } from '@playwright/test';
import { ErrorsEnum } from './ErrorEnums';

export class CommonErrors {
  constructor(page) {
    this.page = page;
    this.errorMessage = page.locator('#error');
  }

  async expectVisibleError(message) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }

  async expectInvalidBirthdateError() {
    await this.expectVisibleError(ErrorsEnum.INVALID_BIRTHDATE);
  }

  async expectInvalidCredentialsError() {
    await this.expectVisibleError(ErrorsEnum.INVALID_CREDENTIALS);
  }
}