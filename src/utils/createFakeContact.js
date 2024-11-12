import { faker } from '@faker-js/faker';

function createFakeContact() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
  };
}

export default createFakeContact;
