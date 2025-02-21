import { store } from "../redux/store";
import { loginUser } from "../requests/loginUser";




export const onFormSubmit = (e, errors, func, userInput) => {
  e.preventDefault();
  if (typeof errors === "undefined") {
    try {
      func(userInput);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(errors);
    // store.dispatch(setMessage("Email and Password are Invalid! Try Again"));
  }
};
