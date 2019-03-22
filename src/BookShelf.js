import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            shelf: this.getTypeOfShelf(this.props.title),
            books: []
        }
    }

    getTypeOfShelf(title) {
        if(title === 'Current Reading') {
            return 'currentlyReading';
        } else if(title === 'Want to Read') {
            return 'wantToRead';
        } else if(title === 'Read') {
            return 'read';
        } else {
            console.log('error');
            return null;
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => 
            this.setState({books: books.filter(book => book.shelf === this.state.shelf)})
        );
    }
    
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.map((book) => (
                            <li key={book.id}>
                                <Book 
                                    author={book.authors}
                                    title={book.title}
                                    bgImage={book.imageLinks.smallThumbnail}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;