import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Bookshelf = (props) => {
  const { books, shelfTitle, updateBook } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.map(book => (
            <li key={book.id}>
              <Book book={book} updateBook={updateBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default Bookshelf;