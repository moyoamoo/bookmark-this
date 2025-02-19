import { configureStore } from "@reduxjs/toolkit";
import bookSearchReducer from "./bookSearchSlice";

export const store = configureStore({
  reducer: {
    bookSearch: bookSearchReducer,
  },
});
