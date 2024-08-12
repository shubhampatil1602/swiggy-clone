import { createSlice } from '@reduxjs/toolkit';

const calculateTotalPrice = (items) => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((acc, curr) => {
    return acc + (curr.price / 100 || curr.defaultPrice / 100) * curr.quantity;
  }, 0);
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    total: calculateTotalPrice(
      JSON.parse(localStorage.getItem('cartItems')) || 0
    ),
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

      localStorage.setItem('cartItems', JSON.stringify(state.items));
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

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeSingleItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.total = calculateTotalPrice(state.items);

      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;

      localStorage.setItem('cartItems', JSON.stringify(state.items));
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
