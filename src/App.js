import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Library from "./Library";

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  // add a book to a bookshelf. If it's already in a shelf, update to new shelf
  updateBook = (book, newShelf) => {
    book.shelf = newShelf;
    let i = this.state.books.findIndex(b => b.id === book.id);
    this.setState((prevState) => {
      if( i === -1) {
        return {books: [...prevState.books, book]};
      } else {
        prevState.books[i].shelf = newShelf;
        return { books: prevState.books };
      }
    });
    BooksAPI.update(book, newShelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Library books={this.state.books} updateBook={this.updateBook} />)} />
        <Route exact path="/search" render={() => (<SearchPage books={this.state.books} updateBook={this.updateBook} />)} />
      </div>
    )
  }
}

export default BooksApp
