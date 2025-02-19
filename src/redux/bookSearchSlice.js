import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
  bookSearchBySearchTerm: [],
};
export const bookSearchSlice = createSlice({
  name: "bookSearch",
  initialState,
  reducers: {
    setBookSearchBySearchTerm: (state, { payload }) => {
      console.log(payload);
      state.bookSearchBySearchTerm = payload;
    },
  },
});

export const { setBookSearchBySearchTerm } = bookSearchSlice.actions;

export const selectBookSearchBySearchTerm = (state) =>
  state.bookSearch.bookSearchBySearchTerm;

export default bookSearchSlice.reducer;
