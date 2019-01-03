import anyTest, { TestInterface } from 'ava';
import { PeopleService } from '../src/services/people-service';
import { checkPropertyType } from '../src/utils/check-property/check-property';
import { BasicTypes } from '../src/utils/check-property/basic-types';
import { School } from '../src/entities/school';

const test = anyTest as TestInterface<{
  school: School
}>;

test.before(async (t) => {
  const peopleService = new PeopleService();
  t.context.school= await peopleService.getSchoolByPersonId(0);
});

test('Check school type',async (t) => {
  checkPropertyType(t.context.school, BasicTypes.Object);
});

test('Check id property',async (t) => {
  checkPropertyType(t.context.school.city, BasicTypes.String);
});

test('Check county property',async (t) => {
  checkPropertyType(t.context.school.country, BasicTypes.String);
});

test('Check state_zip property',async (t) => {
  checkPropertyType(t.context.school.state_zip, BasicTypes.String);
});
