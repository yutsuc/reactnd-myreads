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

  updateBook = (book, newShelf) => {
    let i = this.state.books.findIndex(b => b.id === book.id);
    BooksAPI.update(book, newShelf).then(() => {
      this.setState((prevState) => {
        prevState.books[i].shelf = newShelf;
        return { books: prevState.books };
      });
    });
  }

  addBook = (book, newShelf) => {
    book.shelf = newShelf;
    BooksAPI.update(book, newShelf).then(()=>{
      this.setState((prevState) => ({
        books: [...prevState.books, book],
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<Library books={this.state.books} updateBook={this.updateBook} />)} />
        <Route exact path="/search" render={() => (<SearchPage books={this.state.books} addBook={this.addBook} />)} />
      </div>
    )
  }
}

export default BooksApp
