import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartSlice";
import ServiceSlice from "./ServiceSlice";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
    services: ServiceSlice,
  },
});

export default store;
