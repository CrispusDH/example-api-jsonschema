export interface PersonM {
  readonly id: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly job: string;
  readonly school: SchoolM;
}

export interface SchoolM {
  readonly country: string;
  readonly city: string;
  readonly state_zip: string;
}
