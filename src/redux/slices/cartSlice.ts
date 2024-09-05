import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalCount++;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action: PayloadAction<number>) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove && itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      state.totalCount--;
      state.totalPrice -= itemToRemove?.price ?? 0;
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
