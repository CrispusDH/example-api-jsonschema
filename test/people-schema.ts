import anyTest, { TestInterface } from 'ava';
import { ResponseWithBody } from '../src/utils/requester/types';
import { Person } from '../src/entities/person';
import { PeopleService } from '../src/services/people-service';
import { peopleSchema } from '../src/schema/people';
import Ajv = require('ajv');

const test = anyTest as TestInterface<{
  response: ResponseWithBody<Array<Person>>,
  people: Array<Person>
}>;

test.before(async (t) => {
  const peopleService = new PeopleService();
  const response = await peopleService.getPeople();
  t.context.response = response;
  t.context.people = response.body;
});

test('Check response code',async (t) => {
  const code = t.context.response.status;
  t.is(code, 200);
});

test('Check people schema',async (t) => {
  const ajv = new Ajv();
  ajv.validate(peopleSchema, t.context.people);
  t.is(ajv.errorsText(), 'No errors');
});
