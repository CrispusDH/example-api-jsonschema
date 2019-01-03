import { ResponseWithBody } from '../utils/requester/types';
import { Get } from '../utils/requester/get';
import { Person } from '../entities/person';
import { Post } from '../utils/requester/post';
import { School } from '../entities/school';

export class PeopleService {
  public async getPeople(): Promise<ResponseWithBody<Array<Person>>> {
    const get = new Get('/people');

    return await get
      .send<Array<Person>>();
  }

  public async getPersonById(id: number): Promise<ResponseWithBody<Person>> {
    const get = new Get(`/people/${id}`);
    return await get
      .send<Person>();
  }
  public async getSchoolByPersonId(id: number): Promise<School> {
    const get = new Get(`/people/${id}`);
    const response = await get
      .send<Person>();
    const person = response.body;
    return person.school;
  }

  public async addPerson(person: Person): Promise<ResponseWithBody<Person>> {
    const post = new Post('/people');

    return await post
      .setBody(person)
      .send<Person>();
  }
}
