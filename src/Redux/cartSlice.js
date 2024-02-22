//import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import GetCartsData from "./CartApi";
//export const deleteItemFromCart = createAction("cart/deleteItem");
//
//export const fetchCart = createAsyncThunk(
//  "Carts/fetchCartsData",
//  async (email) => {
//    const carts = await GetCartsData(email);
//    return carts;
//  }
//);
//
//const initialState = {
//  carts: [],
//  cartItems: "",
//  isLoading: false,
//  isError: false,
//  error: "",
//};
//
//const cartSlice = createSlice({
//  name: "carts",
//  initialState,
//
//  extraReducers: (builder) => {
//    builder
//
//      .addCase(fetchCart.pending, (state) => {
//        state.isError = false;
//        state.isLoading = true;
//      })
//      .addCase(fetchCart.fulfilled, (state, action) => {
//        state.isLoading = false;
//        state.carts = action.payload;
//        state.email = action.payload;
//      })
//      .addCase(fetchCart.rejected, (state, action) => {
//        state.isLoading = false;
//        state.carts = [];
//        state.isError = true;
//        state.error = action.error?.message;
//      })
//      .addCase(deleteItemFromCart, (state, action) => {
//        // Update the state to remove the deleted item
//        state.cartItems = state?.cartItems?.filter(
//          (item) => item._id !== action.payload._id
//        );
//      });
//  },
//});
//
//export default cartSlice.reducer;

import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetCartsData from "./CartApi";

export const deleteItemFromCart = createAction("cart/deleteItem");

export const fetchCart = createAsyncThunk(
  "Carts/fetchCartsData",
  async (email) => {
    const carts = await GetCartsData(email);
    return carts;
  }
);

const initialState = {
  carts: [],
  cartItems: [], // Initialize as an array instead of a string
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
        state.email = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.carts = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      // Inside your cartSlice reducer
      .addCase(deleteItemFromCart, (state, action) => {
        // Update the state to remove the deleted item
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload
        );
      });
  },
});

export default cartSlice.reducer;
