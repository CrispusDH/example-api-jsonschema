import { ResponseWithBody } from '../utils/requester/types';
import { Get } from '../utils/requester/get';
import { Person } from '../entities/person';
import { Post } from '../utils/requester/post';
import { School } from '../entities/school';
import { PersonM } from '../models/people';
import { Delete } from '../utils/requester/delete';

export class PeopleService {
  public async getPeople(): Promise<ResponseWithBody<Array<PersonM>>> {
    const get = new Get('/people');

    return await get
      .send<Array<PersonM>>();
  }

  public async getPersonById(id: number): Promise<ResponseWithBody<PersonM>> {
    const get = new Get(`/people/${id}`);

    return await get
      .send<PersonM>();
  }

  public async getPerson(person: Person): Promise<Person> {
    const id = person.id;
    const get = new Get(`/people/${id}`);
    const response = await get.send<Person>();
    const data = response.body;
    return new Person(data);
  }

  public async removePerson(person: Person) {
    const id = person.id;
    const remove = new Delete(`/people/${id}`);
    return remove
      .send();
  }

  public async getSchoolByPersonId(id: number): Promise<School> {
    const get = new Get(`/people/${id}`);
    const response = await get
      .send<PersonM>();
    const person = new Person(response.body);
    return person.school;
  }

  public async addPerson(person: Person): Promise<ResponseWithBody<PersonM>> {
    const post = new Post('/people');

    return await post
      .setBody(person)
      .send<PersonM>();
  }
}
