import { createSlice } from "@reduxjs/toolkit";
import { saveStore, getStore } from "./diskUtils";

const diskData = getStore("account");

const defaultState = {
  value: 0,
  status: "idle",
  window: 0,
  token: "",
  message: "",
  username: "",
};

const initialState = diskData ? diskData : defaultState;

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setWindow: (state, { payload }) => {
      state.window = payload;
      saveStore("account", state);
    },

    setToken: (state, { payload }) => {
      state.token = payload;
      saveStore("account", state);
    },

    setMessage: (state, { payload }) => {
      state.message = payload;
      saveStore("account", state);
    },

    setUsername: (state, { payload }) => {
      state.username = payload;
      saveStore("account", state);
    },
  },
});

export const { setWindow, setToken, setMessage, setUsername } =
  accountSlice.actions;

export const selectWindow = (state) => state.account.window;

export const selectToken = (state) => state.account.token;

export const selectMessage = (state) => state.account.message;

export const selectUsername = (state) => state.account.username;

export default accountSlice.reducer;
