import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'locationSearchToggleSlice',
  initialState: {
    locationSearchToggle: false,
    authToggle: false,
  },
  reducers: {
    locationToggleFn: (state) => {
      state.locationSearchToggle = !state.locationSearchToggle;
    },
    authToggleFn: (state) => {
      state.authToggle = !state.authToggle;
    },
  },
});

export const { locationToggleFn, authToggleFn } = toggleSlice.actions;

export default toggleSlice.reducer;
