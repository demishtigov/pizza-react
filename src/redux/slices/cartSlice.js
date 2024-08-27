import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const exictItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (exictItem) {
        exictItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove && itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      state.totalCount--;
      state.totalPrice -= itemToRemove.price;
    },
    clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
