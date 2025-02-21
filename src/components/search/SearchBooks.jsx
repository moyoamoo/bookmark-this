import { useSelector } from "react-redux";
import { selectBookSearchBySearchTerm } from "../../redux/bookSearchSlice";
import SearchBook from "./SearchBook";

const SearchBooks = () => {
  const searchResults = useSelector(selectBookSearchBySearchTerm);
  return (
    <>
      <section className="search-result-container">
        {searchResults.map((book) => {
          return <SearchBook book={book} key={book.id}/>;
        })}
      </section>
    </>
  );
};

export default SearchBooks;
