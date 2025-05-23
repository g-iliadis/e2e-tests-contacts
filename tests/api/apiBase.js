import { BASE_URL } from "../../playwright.config";
import { URIS } from "./constants/URIS";


export async function createUser(requestContext, userData) {
  const response = await requestContext.post(BASE_URL + URIS.CREATE_USER, {
    data: userData
  });
  return response;
}