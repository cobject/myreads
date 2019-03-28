import React from 'react';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    handleChange = (e) => {
        if(e.target.value.length === 0) {
            this.setState({
                books: [],
            })
        } else {
            BooksAPI.search(e.target.value).then(books => {
                if(books && books.length > 0) {
                    this.setState({
                        books: books,
                    })
                }
            });
        }
    }

    handleBooksChanged = (id, shelf) => {
        this.state.books.find((book) => book.id === id).shelf = shelf;
        this.setState({books: this.state.books});
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <button className="close-search" onClick={this.props.onShowSearchPage}>Close</button>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>
                </div>
                </div>
                <div className="search-books-results">
                    <BookShelf books={this.state.books} isSearchList={true} onBooksChanged={this.handleBooksChanged}/>
                </div>
            </div>
        );
    }
}

export default SearchBooks;