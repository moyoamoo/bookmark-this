import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  bookId: "",
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setBookId: (state, { payload }) => {
      state.bookId = payload;
    },
  },
});

export const { setBookId } = reviewSlice.actions;

export const selectBookId = (state) => state.review.bookId;

export default reviewSlice.reducer;
