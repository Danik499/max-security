export type Country = {
  name: string;
};

export type Region = {
  name: string;
  countries: Country[];
};

export type Company = {
  id: string;
  name: string;
  activeCountries?: Country[];
  types?: MembershipType[];
};

export type MembershipType = {
  name: string;
};
