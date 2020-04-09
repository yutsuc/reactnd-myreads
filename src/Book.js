import React from "react"
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }
  
  render = () => {
    const {book} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" 
            style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
          </div>
          <BookshelfChanger />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(", ")}</div>
      </div>
    );
  }
}

export default Book;