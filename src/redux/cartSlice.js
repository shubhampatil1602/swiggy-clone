import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart', // name of the slice
  initialState: {
    items: [], // initial state of the cart
  },
  reducers: {
    // actionName: reducerFn => addItem,..
    addItem: (state, action) => {
      state.items.push(action.payload); // add item to cart
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      ); // remove item
    },
    removeTopPicksItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.dish?.info?.id !== action.payload
      ); // remove item
    },
    clearCart: (state) => {
      state.items.length = 0; // clear cart
    },
  },
});
export const { addItem, clearCart, removeItem, removeTopPicksItem } =
  cartSlice.actions;
export default cartSlice.reducer; // This reducer is combination of small reducers.
