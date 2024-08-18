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
        exictItem.addedItemsCount++;
      } else {
        state.items.push({
          ...action.payload,
          addedItemsCount: 1,
        });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
