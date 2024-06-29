import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart', // name of the slice
  initialState: {
    items: JSON.parse(localStorage.getItem('items')) || [], // initial state of the cart
    showCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem('items', JSON.stringify(state.items));
    },

    removeSingleItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.card.info.id
          );
        }
      }
      localStorage.setItem('items', JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload
      ); // remove item
      localStorage.setItem('items', JSON.stringify(state.items));
    },

    removeTopPicksItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.dish?.info?.id !== action.payload
      ); // remove item
    },

    clearCart: (state) => {
      state.items.length = 0; // clear cart
      localStorage.clear();
    },

    displayCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});
export const {
  addItem,
  clearCart,
  removeItem,
  removeTopPicksItem,
  removeSingleItem,
  displayCart,
} = cartSlice.actions;
export default cartSlice.reducer; // This reducer is combination of small reducers.
