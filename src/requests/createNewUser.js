import axios from "axios";
import { store } from "../redux/store";
import { url } from "../config";

export const createNewUser = async (userInput) => {
  try {
    console.log(userInput);
    const { data } = await axios.post(`${url}/user/add`, userInput);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
