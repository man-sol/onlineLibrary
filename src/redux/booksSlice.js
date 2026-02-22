import { createSlice } from "@reduxjs/toolkit";
import dummyBooks from "../data/dummyBooks";

// Create slice
const booksSlice = createSlice({
  name: "books",
  initialState: dummyBooks,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // add new book at beginning
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;