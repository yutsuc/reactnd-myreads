import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

const Library = (props) => {
  const { books, updateBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf books={books.filter(book => book.shelf === "currentlyReading")} shelfTitle="Currently Reading" updateBook={updateBook} />
          <Bookshelf books={books.filter(book => book.shelf === "wantToRead")} shelfTitle="Want To Read" updateBook={updateBook} />
          <Bookshelf books={books.filter(book => book.shelf === "read")} shelfTitle="Read" updateBook={updateBook} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
Library.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default Library;