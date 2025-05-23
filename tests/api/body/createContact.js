import { faker } from '@faker-js/faker';

export function createContactBody() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number('###########'),
    birthdate: faker.date.birthdate({ mode: 'year' }).toISOString().split('T')[0],
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    stateProvince: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: faker.location.country()
  };
}

export function createInvalidDobContactBody() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number('###########'),
    birthdate: '9999-99-99',
    street1: faker.location.streetAddress(),
    street2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    stateProvince: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: faker.location.country()
  };
}