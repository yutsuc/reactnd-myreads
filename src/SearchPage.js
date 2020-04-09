import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired,
  }

  state = {
    searchResult: [],
    errorMessage: "",
  }

  handleSearchTerm = (event) => {
    let searchTerm = event.target.value;
    if (searchTerm !== "") {
      BooksAPI.search(searchTerm).then((searchResult) => {
        if (!searchResult.error) {
          // update search result books with correct shelf
          this.props.books.forEach(book => {
            let i = searchResult.findIndex(result => result.id === book.id);
            if (i !== -1) {
              searchResult[i].shelf = book.shelf;
            }
          })
          this.setState({ searchResult, errorMessage: "" });
        } else {
          this.setState({ searchResult: [], errorMessage: "Invalid query" });
        }
      });
    } else {
      this.setState({ searchResult: [], errorMessage: "" });
    }
  }

  render = () => {
    const { searchResult, errorMessage } = this.state;
    const { updateBook } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={this.handleSearchTerm} />

          </div>
        </div>
        <div className="search-books-results">
          {errorMessage}
          <ol className="books-grid">
            {searchResult && searchResult.length > 0 && searchResult.map(book => (
              <li key={book.id}>
                <Book book={book} updateBook={updateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;