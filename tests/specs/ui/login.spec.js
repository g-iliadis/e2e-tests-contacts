import { test, expect, request } from "@playwright/test";
import { Login } from "../../pageObjects/Login/Login";
import { Contacts } from "../../pageObjects/Contacts/Contacts";
import { createUserValidBody } from "../../api/body/createUser";
import { createUser } from "../../api/apiBase";

test.describe("Login", () => {
  let login;
  let contacts;
  const user = createUserValidBody();

  test.beforeAll(async () => {
    const requestContext = await request.newContext();
    const response = await createUser(requestContext, user);
    expect(response.ok()).toBeTruthy();
  });

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    contacts = new Contacts(page);
    await login.goto();
  });

  test("User can login with valid credentials", async ({ page }) => {
    await login.login(user.email, user.password);
    await contacts.isLoaded();
    await expect(page).toHaveURL(/.*contactList/);
  });

  test("User sees error with invalid credentials", async ({ page }) => {
    await login.login("wrong@example.com", "wrongpass");
    const errorMessage = page.locator("#error");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Incorrect username or password");
  });
});
