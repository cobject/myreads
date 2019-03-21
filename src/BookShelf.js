import React from 'react'
import Book from './Book'
import './App.css'

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">TBD</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <Book />
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;