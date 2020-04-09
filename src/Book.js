import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

const Book = (props) => {
  const {book, updateBook} = props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
          </div>
          <BookshelfChanger book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
}

export default Book;