import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchPizzasArgs {
  categoryId: number;
  sort: {
    sortProperty: string;
  };
}

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async ({ categoryId, sort }: FetchPizzasArgs) => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : "";
    const sortQuery = `sortBy=${sort.sortProperty}&order=desc`;
    const response = await axios.get(
      `https://66a62f9d23b29e17a1a1f5a3.mockapi.io/items?${categoryQuery}&${sortQuery}`
    );
    return response.data;
  }
);
