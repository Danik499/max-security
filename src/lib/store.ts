import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./features/countries";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [countriesSlice.reducerPath]: countriesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(countriesSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
