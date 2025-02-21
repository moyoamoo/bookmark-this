import { useSelector } from "react-redux";
import defaultImage from "../../assets/default_image.webp";
import { formatDate, formatAuthors } from "../../utils";
import { NavLink } from "react-router";

const SearchBooks = ({ book }) => {
  const token = useSelector(selectToken);

  const { volumeInfo } = book || {};
  const { title, authors, imageLinks, publishedDate } = volumeInfo || {};

  // Fallback for missing imageLinks or thumbnail
  const imageSrc = imageLinks?.thumbnail || defaultImage;
  return (
    <>
      {book ? (
        <div className="book-search-result">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title || "Book cover"}
            onError={(e) => {
              e.target.src = defaultImage;
              e.onError = null;
            }}
          />

          <div className="search-text">
            <p className="search-title">{title}</p>
            <p className="search-author">{formatAuthors(authors)}</p>
            <p className="search-date">
              Date Published: {formatDate(publishedDate)}
            </p>
          </div>

        
        </div>
      ) : null}
    </>
  );
};

export default SearchBooks;
