export interface PersonM {
  id: number;
  first_name: string;
  last_name: string;
  job: string;
  school: SchoolM;
}

export interface SchoolM {
  county: string;
  city: string;
  state_zip: string;
}
