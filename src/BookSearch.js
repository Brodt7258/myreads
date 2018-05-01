import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

class BookSearch extends Component {
  state = {
    query: '',
    found: []
  }

  updateQuery = (event) => {
    const query = event.target.value.trim();

    this.setState({ query });

    if (query) {
      BooksAPI.search(query)
        .then(found => {
          if (!found || found.error) {
            this.setState({ found: [] });
          } else {
            this.setState({ found: found.map(book => {
              const existing = this.props.books.find(existing => existing.id === book.id);
              if (existing) {
                book.shelf = existing.shelf;
              } else {
                book.shelf = 'none';
              }
              return book;
            }) });
          }
        });
    } else {
      this.setState({ found: [] });
    }
  }



  render() {
    const { query, found } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          {found.length > 0 && <Shelf title={`Found ${found.length} results`} books={found}/>}
        </div>
      </div>
    );
  }
}

export default BookSearch;