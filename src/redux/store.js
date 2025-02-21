import { configureStore } from "@reduxjs/toolkit";
import bookSearchReducer from "./bookSearchSlice";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    bookSearch: bookSearchReducer,
    account: accountReducer,
  },
});
