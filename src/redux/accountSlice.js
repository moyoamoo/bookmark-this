import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
  window: 0,
  token: "",
};
export const accountSlice = createSlice({
  name: "accountSearch",
  initialState,
  reducers: {
    setWindow: (state, { payload }) => {
      state.window = payload;
    },

    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { setWindow, setToken } = accountSlice.actions;

export const selectWindow = (state) => state.account.window;

export const selectToken = (state) => state.token.window;

export default accountSlice.reducer;
