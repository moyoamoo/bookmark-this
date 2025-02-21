import { useDispatch } from "react-redux";
import { useState } from "react";
import FormInput from "./FormInput";
import FormBtn from "./FormBtn";
import { loginSchema } from "../../validation/joiSchemas";
import { onFormInput } from "../../validation/formInput";
import { loginUser } from "../../requests/loginUser";
import { setWindow } from "../../redux/accountSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState({});

  const callback = () => {
    dispatch(setWindow(1));
  };

  return (
    <>
      <section>
        <h2>Login</h2>
        <form
          onInput={(e) => {
            onFormInput(e, loginSchema, userInput, setUserInput, setErrors);
          }}
          onSubmit={(e) => {
            e.preventDefault();
            if (typeof errors === "undefined") {
              loginUser(userInput);
              console.log("i ran");
            }
          }}
        >
          <FormInput type="email" text="Email" name="email" errors={errors} />

          <FormInput
            type="password"
            text="Password"
            name="password"
            errors={errors}
          />

          <FormBtn type="button" text="Don't have an account" func={callback} />
          <FormBtn type="submit" className="submitBtn" text="Login" />
        </form>
      </section>
    </>
  );
};

export default Login;
