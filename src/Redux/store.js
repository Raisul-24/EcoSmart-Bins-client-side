import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    carts: cartsReducer,
  },
});

export default store;
