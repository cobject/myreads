import React from 'react'
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI'
import './App.css'

class ListBooksContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => 
            this.setState({books: books})
        );  
    }

    handleBooksChanged = () => {
        BooksAPI.getAll().then(books => 
            this.setState({books: books})
        );
    }

    render() {
        return (
            <div className="list-books-content">
                <BookShelf title={'Current Reading'} books={this.state.books} onBooksChanged={this.handleBooksChanged}/>
                <BookShelf title={'Want to Read'} books={this.state.books} onBooksChanged={this.handleBooksChanged}/>
                <BookShelf title={'Read'} books={this.state.books} onBooksChanged={this.handleBooksChanged}/>
            </div>
        );
    }
}

export default ListBooksContent;