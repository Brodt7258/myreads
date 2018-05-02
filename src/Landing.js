import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf';

const Landing = ({ books, onBookUpdate }) => {
  console.log('Landing', books)

  const currentlyReading = [];
  const wantToRead = [];
  const read = [];

  books.forEach(book => {
    switch (book.shelf) {
      case 'currentlyReading':
        currentlyReading.push(book);
        break;
      case 'wantToRead':
        wantToRead.push(book);
        break;
      case 'read':
        read.push(book);
        break;
      default:
        console.log(`Error: ${book.shelf} is not a valid shelf category`);
    }
  });

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <Shelf title="Currently Reading" books={currentlyReading} onBookUpdate={onBookUpdate} />
      <Shelf title="Want to Read" books={wantToRead} onBookUpdate={onBookUpdate} />
      <Shelf title="Read" books={read} onBookUpdate={onBookUpdate} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Landing;