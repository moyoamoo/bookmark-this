import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { searchBySearchTerm } from "../../requests/searchBySearchTerm";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="searchbar-container">
        <div className="searchbar">
          <label htmlFor="searchBar">
            <IconContext.Provider
              value={{ color: "#fe0100", className: "search-icon" }}
            >
              <div>
                <FaSearch />
              </div>
            </IconContext.Provider>
          </label>
          <input
            name="searchBar"
            id="searchBar"
            type="text"
            placeholder="Search books"
            className="input-primary"
            onInput={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <button
          className="primary-btn"
          onClick={() => {
            searchBySearchTerm(searchTerm);
          }}
        >
          Discover
        </button>
    </div>
    </>
  );
};

export default SearchBar;
