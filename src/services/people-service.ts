import { ResponseWithBody } from '../utils/requester/types';
import { PersonM } from '../models/people';
import { Get } from '../utils/requester/get';

export class PeopleService {
  public async getPeople(): Promise<ResponseWithBody<Array<PersonM>>> {
    const get = new Get('/people');

    return await get
      .send<Array<PersonM>>();
  }
}
