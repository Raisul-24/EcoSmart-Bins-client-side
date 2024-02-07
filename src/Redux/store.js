import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartSlice";
import ServiceSlice from "./ServiceSlice";
import getApi from "./userApi/getApi";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
    services: ServiceSlice,
    [getApi.reducerPath]: getApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware),
});

export default store;
