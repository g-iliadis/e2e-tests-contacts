import { test, expect, request, errors } from "@playwright/test";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";
import { createUserValidBody } from "../../api/body/createUser";
import { createUser } from "../../api/apiBase";
import { CommonErrors } from "../../common/CommonErrors";

test.describe("Login", () => {
  let login;
  let contacts;
  let errors;
  let user;

  test.beforeAll(async () => {
    user = await createUserValidBody();
    const requestContext = await request.newContext();
    const response = await createUser(requestContext, user);
    expect(response.ok()).toBeTruthy();
  });

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    contacts = new Contacts(page);
    errors = new CommonErrors(page);
    await login.goto();
  });

  test("User can login with valid credentials - Positive", async ({ page }) => {
    await login.login(user.email, user.password);
    await contacts.isLoaded();
    await expect(page).toHaveURL(/.*contactList/);
  });

  test("User sees error with invalid credentials - Negative", async ({ page }) => {
    await login.login("wrong@example.com", "wrongpass");
    await errors.expectInvalidCredentialsError();
  });
});
