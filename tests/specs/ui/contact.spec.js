import { test, expect, request } from '@playwright/test';
import { Login } from '../../pageObjects/Login/Login';
import { Contacts } from '../../pageObjects/Contacts/Contacts';
import { createUserValidBody } from '../../api/body/createUser';
import { AddContact } from '../../pageObjects/AddContact/AddContact';
import { createUser } from '../../api/apiBase';
import { createContactBody } from '../../api/body/createContact';

test('Sign up, add contact, and validate on detail page', async ({ page }) => {
  const user = createUserValidBody();
  const contact = createContactBody();

  const context = await request.newContext();
  const res = await createUser(context, user);
  expect(res.ok()).toBeTruthy();

  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(user.email, user.password);

  const contactsPage = new Contacts(page);
  await contactsPage.isLoaded();

  const addContact = new AddContact(page);
  await addContact.addContact(contact.name, contact.phone);

  const contactEntry = page.locator(`text=${contact.name}`);
  await expect(contactEntry).toBeVisible();

  await contactEntry.click();
  await expect(page.locator('h2')).toHaveText(contact.name);
  await expect(page.locator('p')).toContainText(contact.phone);
});