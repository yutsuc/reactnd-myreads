import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

const SHELVES = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    title: 'Want To Read',
    id: 'wantToRead'
  },
  {
    title: 'Read',
    id: 'read'
  }
];

const Library = (props) => {
  const { books, updateBook } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {SHELVES.map((bookshelf, index) => (
            <Bookshelf books={books.filter(book => book.shelf === bookshelf.id)} shelfTitle={bookshelf.title} updateBook={updateBook} />
          ))}
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