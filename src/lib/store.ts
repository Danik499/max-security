import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./features/countries";
import { companiesSlice } from "./features/companies";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [countriesSlice.reducerPath]: countriesSlice.reducer,
      [companiesSlice.reducerPath]: companiesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        countriesSlice.middleware,
        companiesSlice.middleware
      ),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
