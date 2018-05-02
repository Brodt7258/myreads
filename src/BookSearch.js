import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

class BookSearch extends Component {
  state = {
    query: '',
    found: [],
    err: false
  }

  updateQuery = (event) => {
    const query = event.target.value;

    this.setState({ query });

    const trimmedQuery = query[query.length - 1] === ' ' ? query.substring(0, query.length - 1) : query;

    if (trimmedQuery) {
      BooksAPI.search(trimmedQuery)
        .then(found => {
          if (!found || found.error) {
            this.setState({ found: [], err: true });
          } else {
            this.setState({ found: found.map(book => {
              const existing = this.props.books.find(existing => existing.id === book.id);
              if (existing) {
                book.shelf = existing.shelf;
              } else {
                book.shelf = 'none';
              }
              return book;
            }), err: false });
          }
        });
    } else {
      this.setState({ found: [], err: false });
    }
  }

  onBookUpdate = (book, shelf) => {
    console.log('BookSearch onBookUpdate');
    this.props.onBookUpdate(book, shelf);
    this.props.history.push('/');
    
  }

  render() {
    const { query, found, err } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          {err ? 
              <Shelf title="Found 0 results, try again"/> 
            : 
              found.length > 0 && <Shelf title={`Found ${found.length} results`} books={found} onBookUpdate={this.onBookUpdate} />}
        </div>
      </div>
    );
  }
}

export default withRouter(BookSearch);