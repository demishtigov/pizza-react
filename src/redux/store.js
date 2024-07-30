import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
  },
});
