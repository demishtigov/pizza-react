import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "../thunks/pizzaThunks";

interface PizzaState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PizzaState = {
  items: [],
  status: "idle",
  error: null,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default pizzaSlice.reducer;
