
import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFavoriteItem: (state, action) => {
      state.push(action.payload);
    },
    deleteFavoriteItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFavoriteItem, deleteFavoriteItem } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
