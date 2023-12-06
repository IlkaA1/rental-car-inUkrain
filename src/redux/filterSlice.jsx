

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    serchName: '',
    maxMails:'',
    minMails:'',
    price:'',
  },
  reducers: {
    filterSerchName(state, action) {
      state.serchName = action.payload;
    },
    filterMaxMails(state, action) {
        state.maxMails = action.payload;
      },
      filterMinMails(state, action) {
        state.minMails = action.payload;
      },
      filterPrice(state, action) {
        state.price = action.payload;
      },
  },
  
});

export const { filterSerchName,filterMaxMails,filterMinMails,filterPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
  