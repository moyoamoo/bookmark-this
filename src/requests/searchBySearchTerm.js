import axios from "axios";
import { url } from "../config";
import { store } from "../redux/store";
import { setBookSearchBySearchTerm } from "../redux/bookSearchSlice";

export const searchBySearchTerm = async (searchTerm) => {
  try {
    const { data } = await axios.get(`${url}/books/search/term`, {
      params: { searchTerm: searchTerm },
    });
    if (data.status && data.data.items) {
      console.log(data.data.items);
      store.dispatch(setBookSearchBySearchTerm(data.data.items));
    } else {
      console.error("No items found in the response.");
    }
  } catch (e) {
    console.log(e, "error");
  }
};
