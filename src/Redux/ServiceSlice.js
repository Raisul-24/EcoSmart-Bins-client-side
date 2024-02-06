import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useAxiosPublic from "../axios/axiosPublic";

export const GetServiceData = async (q) => {
  const axios = useAxiosPublic();
  const response = await axios.get(`/services${q ? `?q=${q}` : ""}`);
  return response.data;
};

export const fetchService = createAsyncThunk(
  "Service/GetServiceData",
  async (q) => {
    const carts = await GetServiceData(q);
    return carts;
  }
);

const initialState = {
  service: [],
  isLoading: false,
  isError: false,
  error: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchService.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.service = action.payload;
      })
      .addCase(fetchService.rejected, (state, action) => {
        state.isLoading = false;
        state.service = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default serviceSlice.reducer;
