import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';

import Landing from './Landing';
import BookSearch from './BookSearch';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  handleBookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(prevState => {
        const newBooks = prevState.books.find(b => b.id === book.id) ? (
            prevState.books.map(prevBook => prevBook.id === book.id ? { ...prevBook, shelf } : prevBook ) 
          ):(
            prevState.books.concat({ ...book, shelf })
          );
        
        return { books: newBooks.filter(newBook => newBook.shelf !== 'none')};
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            exact
            path="/" 
            render={() => (
              <Landing books={this.state.books} onBookUpdate={this.handleBookUpdate} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <BookSearch books={this.state.books} onBookUpdate={this.handleBookUpdate} />    
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp
