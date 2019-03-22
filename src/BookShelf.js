import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelf extends React.Component {
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

    onShelfChanged = (e, id) => {
        const shelf = e.target.value;
        BooksAPI.update({id: id}, shelf).then(res =>
            this.props.onBooksChanged()
        );
    }

    render() {
        const shelf = this.getTypeOfShelf(this.props.title);
        const books = this.props.books.filter(book => book.shelf === shelf);

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    id={book.id}
                                    author={book.authors}
                                    shelf={shelf}
                                    title={book.title}
                                    bgImage={book.imageLinks.smallThumbnail}
                                    onChange={this.onShelfChanged}
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