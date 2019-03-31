import React from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class SearchBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksOnShelf: [],
            books: [],
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => 
            this.setState({booksOnShelf: books})
        );  
    }

    handleChange = (e) => {
        if(e.target.value.length === 0) {
            this.setState({
                books: [],
            })
        } else {
            BooksAPI.search(e.target.value)
                .then(result => result.error !== undefined ? [] : result)
                .then(books => {
                    books.forEach(book => {
                        let matchBook = this.state.booksOnShelf.find((item) => (item.id === book.id));
                        book.shelf = matchBook ? matchBook.shelf : "none";
                    });
                    return books;
                })
                .then(books => this.setState({books: books}))
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
                <Link to="/">
                    <button className="close-search" onClick={this.props.onShowSearchPage}>Close</button>
                </Link>
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