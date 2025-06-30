import { createApi } from "@reduxjs/toolkit/query/react";
import { Company, Country } from "@/types";
import {
  GetCompaniesRequest,
  GetCompanyByIdRequest,
  SaveMembershipPlanRequest,
} from "./mock";

const mockBaseQuery = async (query: { url: string }) => {
  if (query.url === "/") {
    return await GetCompaniesRequest();
  }

  if (query.url.startsWith("/save-membership-plan")) {
    return await SaveMembershipPlanRequest();
  }

  const companyId = query.url.split("/")[1];
  return await GetCompanyByIdRequest(companyId);
};

export const companiesSlice = createApi({
  reducerPath: "companiesApi",
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => ({ url: `/` }),
    }),
    getCompanyById: builder.query<Company, string>({
      query: (id) => ({ url: `/${id}` }),
    }),
    saveMembershipPlan: builder.mutation<
      { success: boolean },
      { companyId: string; activeCountries: Country[] }
    >({
      query: (body) => ({
        url: "/save-membership-plan",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCompaniesQuery,
  useGetCompanyByIdQuery,
  useSaveMembershipPlanMutation,
} = companiesSlice;
