import * as faker from 'faker';
import { Person } from '../entities/person';

export const createFakePerson = () => {
  const school = {
    country: faker.address.country(),
    city: faker.address.city(),
    state_zip: faker.address.zipCode(),
  };
  const person = {
    id: faker.random.number({min: 10, max: 10000}),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    job: faker.name.jobTitle(),
    school
  };
  return new Person(person);
};
