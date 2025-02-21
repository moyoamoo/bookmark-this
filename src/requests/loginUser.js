import axios from "axios";
import { url } from "../config";

export const loginUser = async (userInput) => {
  try {
    const { data } = await axios.post(`${url}/user/login`, userInput);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
