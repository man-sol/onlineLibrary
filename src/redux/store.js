import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// Create global Redux store
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});