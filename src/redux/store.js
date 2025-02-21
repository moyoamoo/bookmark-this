import { configureStore } from "@reduxjs/toolkit";
import bookSearchReducer from "./bookSearchSlice";
import accountReducer from "./accountSlice";
import reviewReducer from "./reviewSlice";

export const store = configureStore({
  reducer: {
    bookSearch: bookSearchReducer,
    account: accountReducer,
  },
});
