import { SchoolM } from '../models/people';

export class School implements SchoolM {
  public readonly city: string;
  public readonly country: string;
  public readonly state_zip: string;

  constructor(data: SchoolM) {
    this.city = data.city;
    this.country = data.country;
    this.state_zip = data.state_zip;
  }
}
