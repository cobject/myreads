import React from 'react'
import BookShelf from './BookShelf';
import './App.css'

class ListBooksContent extends React.Component {
    render() {
        return (
            <div className="list-books-content">
                <BookShelf />
                <BookShelf />
                <BookShelf />
            </div>
        )
    }
}

export default ListBooksContent;