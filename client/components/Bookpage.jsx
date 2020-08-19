import React, { Component } from "react";
import request from "superagent";

import Search from "./Search";
import SearchResults from "./SearchResults";

class Bookpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchEntry: "",
    };
  }

  searchForBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchEntry })
      .then((bookData) => {
        const cleanData = this.cleanData(bookData);
        this.setState({ books: cleanData });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSearch = (e) => {
    this.setState({ searchEntry: e.target.value });
  };

  cleanData = (bookData) => {
    const cleanData = bookData.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
        };
      }
      return book;
    });
    return cleanData;
  };

  render() {
    return (
      <div>
        <Search
          searchForBook={this.searchForBook}
          handleSearch={this.handleSearch}
        />
        <SearchResults books={this.state.books} />
        <MyFavouritesList />
      </div>
    );
  }
}

export default Bookpage;
