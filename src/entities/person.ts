import { PersonM } from '../models/people';
import { School } from './school';

export class Person implements PersonM {
  public readonly first_name: string;
  public readonly id: number;
  public readonly job: string;
  public readonly last_name: string;
  public readonly school: School;

  constructor(data: PersonM) {
    this.first_name = data.first_name;
    this.id = data.id;
    this.job = data.job;
    this.last_name = data.last_name;
    this.school = new School(data.school);
  }
}
