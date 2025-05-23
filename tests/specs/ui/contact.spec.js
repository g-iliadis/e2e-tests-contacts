import { test, expect, request } from "@playwright/test";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";
import { createUserValidBody } from "../../api/body/createUser";
import { AddContact } from "../../pageObjects/AddContact/AddContact";
import { createUser } from "../../api/apiBase";
import { createContactBody } from "../../api/body/createContact";

test("Sign up, add contact, and validate on detail page", async ({ page }) => {
  const user = await createUserValidBody();
  const contact = await createContactBody();

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

  const row = page.locator("table#myTable tr", {
    hasText: `${contact.firstName} ${contact.lastName}`,
  });

  await expect(row).toBeVisible();
  await expect(row).toContainText(contact.birthdate);
  await expect(row).toContainText(contact.email.toLowerCase());
  await expect(row).toContainText(contact.phone);
  await expect(row).toContainText(contact.street1);
  await expect(row).toContainText(
    `${contact.city} ${contact.stateProvince} ${contact.postalCode}`
  );
  await expect(row).toContainText(contact.country);
});
