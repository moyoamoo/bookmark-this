import SearchBar from "./search/SearchBar";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-upper">
          <h1>Bookmark</h1>
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className="header-lower">
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
