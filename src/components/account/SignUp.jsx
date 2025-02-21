import { useDispatch } from "react-redux";
import { useState } from "react";
import { setWindow } from "../../redux/accountSlice";
import { signUpSchema } from "../../validation/joiSchemas";
import { onFormInput } from "../../validation/formInput";
import { createNewUser } from "../../requests/createNewUser";

import FormBtn from "./FormBtn";
import FormInput from "./FormInput";

const SignUp = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const callback = () => {
    dispatch(setWindow(0));
  };

  return (
    <>
      <section>
        <h2>Create as account</h2>
        <form
          onInput={(e) => {
            onFormInput(e, signUpSchema, userInput, setUserInput, setErrors);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(errors);
            if (typeof errors === "undefined") {
              try {
                createNewUser(userInput);
              } catch (e) {
                console.log(e);
              }
            } else {
              console.log(errors);
            }
          }}
        >
          <FormInput type="email" text="Email" name="email" errors={errors} />

          <FormInput
            type="text"
            text="Create a username"
            name="username"
            errors={errors}
          />

          <FormInput
            type="password"
            text="Password"
            name="password"
            errors={errors}
          />

          <FormBtn
            type="button"
            func={callback}
            text="Already have an acoount?"
            className="linkContainer"
          />

          <FormBtn type="submit" className="submitBtn" text="Sign Up" />
        </form>
      </section>
    </>
  );
};

export default SignUp;
