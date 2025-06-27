import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/lib/axios";
import { Country } from "@/types";

export const countriesSlice = createApi({
  reducerPath: "countriesApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => ({ url: `/all`, params: { fields: "name" }, method: "GET" }),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesSlice;
