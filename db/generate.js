const faker = require('faker');

module.exports = () => {
  const people = [];
  for (let index = 0; index < 10; index++) {
    const school = {
      country: faker.address.country(),
      city: faker.address.city(),
      state_zip: faker.address.zipCode(),
    };
    const person = {
      id: index,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      job: faker.name.jobTitle(),
      school
    };
    people.push(person);
  }
  return {
    people
  };
};
