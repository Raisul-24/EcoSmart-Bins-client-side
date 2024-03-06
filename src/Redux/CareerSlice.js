import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    career : []
}

const careerSlice = createSlice({
    name: "career",
    initialState,
    reducers: {}
})

export default careerSlice.reducer;

