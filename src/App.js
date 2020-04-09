import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from "react-router-dom";
import SearchPage from "./SearchPage";
import Library from "./Library";

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  updateBook = (book, newShelf) => {
    let i = this.state.books.findIndex(b => b.id === book.id);
    BooksAPI.update(book, newShelf).then( () => {
      this.setState((prevState) => {
        prevState.books[i].shelf = newShelf;
        return {books: prevState.books};
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ ()=> {
          return <Library books={this.state.books} updateBook={this.updateBook} />
        }}/>
        <Route exact path="/search" component={SearchPage} />  
      </div>
    )
  }
}

export default BooksApp
