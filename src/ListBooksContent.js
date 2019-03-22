import React from 'react'
import BookShelf from './BookShelf';
import './App.css'

class ListBooksContent extends React.Component {
    render() {
        return (
            <div className="list-books-content">
                <BookShelf title={'Current Reading'}/>
                <BookShelf title={'Want to Read'}/>
                <BookShelf title={'Read'}/>
            </div>
        )
    }
}

export default ListBooksContent;