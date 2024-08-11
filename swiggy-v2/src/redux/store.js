import { configureStore } from '@reduxjs/toolkit';
import locationSearchToggleSlice from './toggleSlice';
import cartSlice from './cartSlice';
import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    locationSearchToggleSlice,
    cartSlice,
    filterSlice,
  },
});

export default store;
