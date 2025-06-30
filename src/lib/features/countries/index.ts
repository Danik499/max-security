import { createApi } from "@reduxjs/toolkit/query/react";
import countries from "./mock.json";
import { Region } from "@/types";

const mockBaseQuery = async () => {
  return { data: countries };
};

export const countriesSlice = createApi({
  reducerPath: "countriesApi",
  baseQuery: mockBaseQuery,
  endpoints: (builder) => ({
    getCountries: builder.query<Region[], void>({
      query: () => ({ url: `/` }),
    }),
  }),
});

export const { useGetCountriesQuery } = countriesSlice;
