import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getCartsData from "./CartApi";

export const fetchCart = createAsyncThunk("Carts/fetchCartsData", async () => {
  const carts = await GetCartsData();
  return carts;
});

const initialState = {
  carts: [],
  isLoading: false,
  isError: false,
  error: "",
};

const cartSlice = createSlice({
  name: "carts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default cartSlice.reducer;
