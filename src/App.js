import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom"
import SearchPage from "./SearchPage"
import Library from "./Library"

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Library} />
        <Route exact path="/search" component={SearchPage} />  
      </div>
    )
  }
}

export default BooksApp
