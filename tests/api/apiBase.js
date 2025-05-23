import { BASE_URL } from "../../playwright.config";
import { URIS } from "./constants/uris";


export async function createUser(requestContext, userData) {
  const response = await requestContext.post(BASE_URL + URIS.CREATE_USER, {
    data: userData
  });
  return response;
}

export async function createContact(requestContext, contact, token) {
  return await requestContext.post(`${BASE_URL}${URIS.CREATE_CONTACT}`, {
    data: contact,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}