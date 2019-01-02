import { Headers } from 'request';
import { JsonObject } from './types';
import { Constants } from '../constants';

export abstract class Requester {
  private readonly url: string;
  private headers: Headers;
  private body: JsonObject;
  private queries: string;

  protected constructor(endpoint: string) {
    this.headers = Constants.defaultHeaders;
    this.url = `${Constants.baseUrl}${Constants.resourceName}${endpoint}`;
    this.body = {};
    this.queries = '';
  }

  public setHeaders(headers: Headers): this {
    this.headers = Object.assign(this.headers, headers);
    return this;
  }

  public setBody(body: JsonObject): this {
    this.body = Object.assign(this.body, body);
    return this;
  }

  public setQueries(queries): this {
    this.queries = `${this.queries}${queries}`;
    return this;
  }

  protected getUrl(): string {
    return this.url;
  }

  protected getHeaders(): Headers {
    return this.headers;
  }

  protected getBody(): JsonObject {
    return this.body;
  }

  protected getQueries(): string {
    return this.queries;
  }
}
