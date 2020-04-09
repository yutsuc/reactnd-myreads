import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Bookshelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
  }
  
  render = () => {
    const {books, shelfTitle} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map( book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;