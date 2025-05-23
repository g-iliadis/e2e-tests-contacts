import { faker } from "@faker-js/faker";

export async function createContactBody() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.string.numeric(10),
    birthdate: faker.date
      .birthdate({ mode: "year", min: 1970, max: 2005 })
      .toISOString()
      .split("T")[0],
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    stateProvince: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
}

export async function createInvalidDobContactBody() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.string.numeric(10),
    birthdate: "9999-99-99",
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    stateProvince: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: faker.location.country(),
  };
}
