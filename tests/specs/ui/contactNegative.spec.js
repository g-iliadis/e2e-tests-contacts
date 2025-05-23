import { test, expect, request } from "@playwright/test";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";
import { createUserValidBody } from "../../api/body/createUser";
import { AddContact } from "../../pageObjects/AddContact/AddContact";
import { createUser } from "../../api/apiBase";
import { createInvalidDobContactBody } from "../../api/body/createContact";
import { CommonErrors } from "../../common/CommonErrors";

test("Cannot add contact with invalid date of birth", async ({ page }) => {
  const user = await createUserValidBody();
  const contact = await createInvalidDobContactBody();

  const context = await request.newContext();
  const res = await createUser(context, user);
  expect(res.ok()).toBeTruthy();

  const loginPage = new Login(page);
  await loginPage.goto();
  await loginPage.login(user.email, user.password);

  const contactsPage = new Contacts(page);
  await contactsPage.isLoaded();

  const addContact = new AddContact(page);
  console.log("Contact:", contact);
  await addContact.addContact(contact);

  const errors = new CommonErrors(page);
  await errors.expectInvalidBirthdateError();
});
