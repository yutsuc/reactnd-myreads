import React from "react";
import {Link} from "react-router-dom"
import Bookshelf from "./Bookshelf";
import PropTypes from "prop-types";

class Library extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render = () => {
    const {books} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf books={books.filter( book => book.shelf === "currentlyReading")} shelfTitle="Currently Reading" />
            <Bookshelf books={books.filter( book => book.shelf === "wantToRead")} shelfTitle="Want To Read" />
            <Bookshelf books={books.filter( book => book.shelf === "read")} shelfTitle="Read" />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Library;