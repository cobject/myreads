import React from 'react'
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import './App.css'

class SearchBooksContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    render() {
        console.log(this.props.query);
        return (
            <div className="search-books-results">
                <BookShelf books={this.props.books}/>
            </div>
        );
    }
}

export default SearchBooksContent;