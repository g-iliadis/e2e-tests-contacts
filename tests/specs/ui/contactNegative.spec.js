import { test, expect, request } from "@playwright/test";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";
import { AddContact } from "../../pageObjects/AddContact/AddContact";
import { createUserValidBody } from "../../api/body/createUser";
import { createUser } from "../../api/apiBase";
import { createInvalidDobContactBody } from "../../api/body/createContact";

test("Cannot add contact with invalid date of birth", async ({ page }) => {
  const user = createUserValidBody();
  const contact = createInvalidDobContactBody();

  const context = await request.newContext();
  const res = await createUser(context, user);
  expect(res.ok()).toBeTruthy();

  const login = new Login(page);
  const contacts = new Contacts(page);
  const addContact = new AddContact(page);

  await login.goto();
  await login.login(user.email, user.password);
  await contacts.isLoaded();

  await addContact.addContact(contact);

  const errorMessage = page.locator(".error-message");
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText("Birthdate is invalid");
});
