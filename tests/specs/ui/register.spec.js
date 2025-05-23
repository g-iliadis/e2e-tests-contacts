import { test, expect } from '@playwright/test';
import { Register } from '../../pageObjects/Register/Register';
import { createUserValidBody } from '../../api/body/createUser';

test('User can register successfully', async ({ page }) => {
  const register = new Register(page);
  const user = await createUserValidBody();

  await register.goto();
  await register.register(user);

  await expect(page).toHaveURL(/.*contactList/);
});