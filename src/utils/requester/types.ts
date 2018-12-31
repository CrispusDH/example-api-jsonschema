import { Response as SuperAgentResponse } from 'superagent';

export interface JsonObject {
  [parameter: string]: any;
}

export interface ResponseWithBody<T> extends SuperAgentResponse {
  body: T;
}

export interface HTTPMethods {
  send: <T>() => Promise<ResponseWithBody<T>>;
}
