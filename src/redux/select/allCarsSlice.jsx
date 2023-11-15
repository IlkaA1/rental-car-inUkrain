import { createSlice } from "@reduxjs/toolkit";
import { fetchAllcars } from "../operations";

const allCarsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllcars.pending](state) {
      state.isLoading = true;
    },
    [fetchAllcars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllcars.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const allCarsReducer = allCarsSlice.reducer;