import axios from "axios";
import { url } from "../config";
import { store } from "../redux/store";
import { setToken, setMessage } from "../redux/accountSlice";

export const loginUser = async (userInput) => {
  try {
    const { data } = await axios.post(`${url}/user/login`, userInput);

    if (data.status) {
      store.dispatch(setToken(data.token));
      store.dispatch(setMessage("Login Sucessful"));
    }
  } catch (e) {
    console.log(e);
    store.dispatch(setMessage("Unable to Login"));
  }
};
