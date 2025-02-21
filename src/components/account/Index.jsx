import { useSelector } from "react-redux";
import { selectWindow } from "../../redux/accountSlice";
import Login from "./Login";

const Index = () => {
  const window = useSelector(selectWindow);
  return <>{window === 0 && <Login />}</>;
};

export default Index;
