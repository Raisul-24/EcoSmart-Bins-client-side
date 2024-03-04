import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartSlice";
import ServiceSlice from "./ServiceSlice";
import getApi from "./userApi/getApi";
import careerSlice from "./CareerSlice";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
    services: ServiceSlice,
    career: careerSlice,
    [getApi.reducerPath]: getApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware),
});

export default store;
