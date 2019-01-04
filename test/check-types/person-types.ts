import { Person } from '../../src/entities/person';
import anyTest, { TestInterface } from 'ava';
import { PeopleService } from '../../src/services/people-service';
import { ResponseWithBody } from '../../src/utils/requester/types';
import { checkPropertyType } from '../../src/utils/check-property/check-property';
import { BasicTypes } from '../../src/utils/check-property/basic-types';

const test = anyTest as TestInterface<{
  response: ResponseWithBody<Person>,
  person: Person
}>;

test.before(async (t) => {
  const peopleService = new PeopleService();
  const response = await peopleService.getPersonById(0);
  t.context.response = response;
  t.context.person = response.body;
});

test('Check response code',async (t) => {
  const code = t.context.response.status;
  t.is(code, 200);
});

test('Check person type',async (t) => {
  checkPropertyType(t.context.person, BasicTypes.Object);
});

test('Check id property',async (t) => {
  checkPropertyType(t.context.person.id, BasicTypes.Number);
});

test('Check first_name property',async (t) => {
  checkPropertyType(t.context.person.first_name, BasicTypes.String);
});

test('Check last_name property',async (t) => {
  checkPropertyType(t.context.person.last_name, BasicTypes.String);
});

test('Check job property',async (t) => {
  checkPropertyType(t.context.person.job, BasicTypes.String);
});

test('Check school property',async (t) => {
  checkPropertyType(t.context.person.school, BasicTypes.Object);
});
