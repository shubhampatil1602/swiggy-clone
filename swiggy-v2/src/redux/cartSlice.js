import { createSlice } from '@reduxjs/toolkit';

const calculateTotalPrice = (items) => {
  return items.reduce((acc, curr) => {
    return acc + (curr.price / 100 || curr.defaultPrice / 100) * curr.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total = calculateTotalPrice(state.items);
    },
    removeSingleItemQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => {
            return item.id !== action.payload.id;
          });
        }
      }
      state.total = calculateTotalPrice(state.items);
    },
    removeSingleItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.total = calculateTotalPrice(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addItem,
  removeSingleItemQuantity,
  removeSingleItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
