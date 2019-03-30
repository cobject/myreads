import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ListBooksContents from './ListBooksContents'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  handleShowSearchPage = () => {
    this.setState({ showSearchPage: false });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ListBooksContents />
              <div className="open-search">
                <Link to="/search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </Link>
              </div>
            </div>
          )} />
          <Route path="/search" render={() => (
            <div className="search-books">
              <SearchBooks onShowSearchPage={this.handleShowSearchPage}/>
            </div>
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
