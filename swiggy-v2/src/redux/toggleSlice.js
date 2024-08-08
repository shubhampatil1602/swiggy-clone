import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'locationSearchToggleSlice',
  initialState: {
    locationSearchToggle: false,
  },
  reducers: {
    locationToggleFn: (state) => {
      state.locationSearchToggle = !state.locationSearchToggle;
    },
  },
});

export const { locationToggleFn } = toggleSlice.actions;

export default toggleSlice.reducer;
