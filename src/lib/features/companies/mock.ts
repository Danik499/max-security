import { Company } from "@/types";

const companies = [
  {
    id: "mock-company-id",
    name: "Mock Company",
    activeCountries: [
      { name: "China" },
      { name: "Japan" },
      { name: "South Korea" },
    ],
    types: [
      {
        name: "Monthly",
      },
      {
        name: "Daily",
      },
    ],
  },
  {
    id: "mock-company-id-2",
    name: "Mock Company 2",
    activeCountries: [
      { name: "India" },
      { name: "Singapore" },
      { name: "Malaysia" },
    ],
    types: [{ name: "Analytics" }, { name: "Elastic" }],
  },
  {
    id: "mock-company-id-3",
    name: "Mock Company 3",
    activeCountries: [{ name: "Australia" }, { name: "New Zealand" }],
  },
  {
    id: "mock-company-id-4",
    name: "Mock Company 4",
    activeCountries: [{ name: "Germany" }, { name: "France" }],
  },
  {
    id: "mock-company-id-5",
    name: "Mock Company 5",
  },
  {
    id: "mock-company-id-6",
    name: "Mock Company 6",
  },
];

export const GetCompaniesRequest = () => {
  return new Promise<{ data: Company[] }>((resolve) => {
    setTimeout(() => {
      resolve({ data: companies });
    }, 1000);
  });
};

export const GetCompanyByIdRequest = (id: string) => {
  return new Promise<{ data: Company | undefined }>((resolve) => {
    setTimeout(() => {
      const company = companies.find((c) => c.id === id);
      resolve({ data: company });
    }, 1000);
  });
};

export const SaveMembershipPlanRequest = () => {
  return new Promise<{ data: { success: boolean } }>((resolve) => {
    setTimeout(() => {
      resolve({ data: { success: true } });
    }, 1000);
  });
};
