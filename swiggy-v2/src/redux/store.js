import { configureStore } from '@reduxjs/toolkit';
import locationSearchToggleSlice from './toggleSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    locationSearchToggleSlice,
    cartSlice,
  },
});

export default store;
