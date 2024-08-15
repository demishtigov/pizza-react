import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  searchInput: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setChangeSort(state, action) {
      state.sort = action.payload;
    },
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const { setCategoryId, setChangeSort, setSearchInput } =
  filterSlice.actions;

export default filterSlice.reducer;
