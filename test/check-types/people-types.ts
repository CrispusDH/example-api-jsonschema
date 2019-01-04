import { Person } from '../../src/entities/person';
import anyTest, { TestInterface } from 'ava';
import { PeopleService } from '../../src/services/people-service';
import { ResponseWithBody } from '../../src/utils/requester/types';
import { checkPropertyType } from '../../src/utils/check-property/check-property';
import { BasicTypes } from '../../src/utils/check-property/basic-types';

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

test('Check people type',async (t) => {
  checkPropertyType(t.context.people, BasicTypes.Array);
});
