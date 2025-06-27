import { createApi } from "@reduxjs/toolkit/query/react";
import companies from "./mock.json";
import { Company } from "@/types";

const mockBaseQuery = async () => {
  return { data: companies };
};

export const companiesSlice = createApi({
  reducerPath: "companiesApi",
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => ({ url: `/` }),
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesSlice;
