import React from 'react';

import Book from './Book';

const Shelf = ({ title, books, onBookUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.map((book) => <Book key={book.id} book={book} onBookUpdate={onBookUpdate} />)}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;