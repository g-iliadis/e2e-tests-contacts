import { test, expect, request } from "@playwright/test";
import { createUserValidBody } from "../../api/body/createUser";
import { createContactBody } from "../../api/body/createContact";
import { createUser } from "../../api/apiBase";
import { createContact } from "../../api/apiBase";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";

test("User can delete an existing contact", async ({ page }) => {
  const user = await createUserValidBody();
  const contact = await createContactBody();
  const context = await request.newContext();
  const res = await createUser(context, user);
  expect(res.ok()).toBeTruthy();

  const userData = await res.json();
  const token = userData.token;
  const fullName = `${contact.firstName} ${contact.lastName}`;

  const contactRes = await createContact(context, contact, token);
  expect(contactRes.ok()).toBeTruthy();

  const loginPage = new Login(page);
  const contactsPage = new Contacts(page);

  await loginPage.goto();
  await loginPage.login(user.email, user.password);
  await contactsPage.isLoaded();
  

  await contactsPage.openContactByName(fullName);
  await contactsPage.deleteContact(fullName);
 
});
