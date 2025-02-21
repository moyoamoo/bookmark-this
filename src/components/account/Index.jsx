import { useSelector } from "react-redux";
import { selectWindow } from "../../redux/accountSlice";
import Login from "./Login";
import SignUp from "./SignUp";

const Index = () => {
  const window = useSelector(selectWindow);
  return (
    <>
      <main>
        {window === 0 && <Login />}
        {window === 1 && <SignUp />}
      </main>
    </>
  );
};

export default Index;
