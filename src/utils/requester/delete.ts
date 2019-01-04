import * as request from 'superagent';
import { Requester } from './requester';
import { HTTPMethods, ResponseWithBody } from './types';
import { Constants } from '../constants';

export class Delete extends Requester implements HTTPMethods {
  constructor(endpoint) {
    super(endpoint);
  }

  public async send<T>(): Promise<ResponseWithBody<T>> {
    return await request
      .delete(this.getUrl())
      .set(this.getHeaders())
      .send(this.getBody())
      .timeout({
        response: Constants.timeout.response,
        deadline: Constants.timeout.deadline
      });
  }
}
