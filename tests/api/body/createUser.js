import { faker } from '@faker-js/faker';

export function createUserValidBody() {
  return {
    firstName: faker.internet.username(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

export function createUserInvalidEmailBody() {
  return {
    firstName: 'Test',
    lastName: 'User',
    email: 'invalid-email-format',
    password: 'Password123'
  };
}

export function createUserLongPasswordBody() {
  return {
    firstName: 'Test',
    lastName: 'User',
    email: `testuser_${Date.now()}@example.com`,
    password: 'P'.repeat(300)
  };
}