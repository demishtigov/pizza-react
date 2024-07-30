import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://66a62f9d23b29e17a1a1f5a3.mockapi.io/items?page=${currentPage}&${category}&sortBy=${sortBy}&order=${order}&${search}
`
    );
    return data;
  }
);
