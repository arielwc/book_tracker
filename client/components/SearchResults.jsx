import React from "react";
import SearchResult from "./SearchResult";

const SearchResults = (props) => {
  return (
    <div className="resultsContainer">
      {props.books.map((book, i) => {
        return (
          <SearchResult
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
