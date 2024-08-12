import { configureStore } from '@reduxjs/toolkit';
import locationSearchToggleSlice from './toggleSlice';
import cartSlice from './cartSlice';
import filterSlice from './filterSlice';
import authSlice from './authSlice';

const store = configureStore({
  reducer: {
    locationSearchToggleSlice,
    cartSlice,
    filterSlice,
    authSlice,
  },
});

export default store;
