import SearchBar from "./search/SearchBar";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-upper">
          <h1>Bookmark</h1>
          <button class="primary-btn">Sign Up</button>
        </div>
        <div className="header-lower">
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Header;
