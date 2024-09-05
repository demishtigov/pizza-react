import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Sort {
  name: string;
  sortProperty: string;
}

interface FilterState {
  categoryId: number;
  sort: Sort;
  searchInput: string;
}

const initialState: FilterState = {
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setChangeSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
  },
});

export const { setCategoryId, setChangeSort, setSearchInput } =
  filterSlice.actions;

export default filterSlice.reducer;
