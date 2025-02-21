import axios from "axios";
import { store } from "../redux/store";
import { url } from "../config";
import { setMessage } from "../redux/accountSlice";

export const createNewUser = async (userInput) => {
  try {
    console.log(userInput);
    const { data } = await axios.post(`${url}/user/add`, userInput);
    if (data.status) {
      store.dispatch(setMessage("New account created!"));
    }
    console.log(data);
  } catch (e) {
    console.log(e);
    store.dispatch(setMessage("Unable to make new account"));
  }
};
