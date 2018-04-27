import React from 'react';
import { Link } from 'react-router-dom';

const Shelf = ({ title, books }) => {
  console.log(books);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {books && books.map((book) => <li key={book.title}>{book.title}</li>)}
        </ol>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Shelf;