import anyTest, { TestInterface } from 'ava';
import { PeopleService } from '../src/services/people-service';
import { createFakePerson } from '../src/utils/fake-user';
import { Person } from '../src/entities/person';

const test = anyTest as TestInterface<{
  person: Person
}>;

test.beforeEach(async (t) => {
  const person = createFakePerson();
  const peopleService = new PeopleService();
  await peopleService.addPerson(person);
  t.context.person = person;
});

test('Check add a person',async (t) => {
  const peopleService = new PeopleService();

  const expected = t.context.person;
  const actual = await peopleService.getPerson(expected);
  t.deepEqual(actual, expected);
});

test('Check delete a person',async (t) => {
  const peopleService = new PeopleService();
  const person = t.context.person;

  const response = await peopleService.removePerson(person);
  t.is(response.status, 200);
  await t.throwsAsync(
    async () => await peopleService.getPerson(person),
    {message: 'Not Found'}
    );
});
