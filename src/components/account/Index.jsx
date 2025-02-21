import { useSelector } from "react-redux";
import { selectWindow } from "../../redux/accountSlice";
import Login from "./Login";
import SignUp from "./SignUp";
import Logout from "./Logout";

const Index = () => {
  const window = useSelector(selectWindow);
  return (
    <>
      <main>
        {window === 0 && <Login />}
        {window === 1 && <SignUp />}
        {window === 3 && <Logout/>}
      </main>
    </>
  );
};

export default Index;
