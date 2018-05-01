import React from 'react';

const OPTIONS = [
  { value: 'currentlyReading', name: 'Currently Reading' },
  { value: 'wantToRead', name: 'Want To Read' },
  { value: 'read', name: 'Read' },
  { value: 'none', name: 'None' }
];

const Book = ({ book }) => {
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : ''}}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf}>
              <option value="desc" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.map(author => <div key={author}>{`${author}`}</div>)}
        </div>
      </div>
    </li>
  );
}

export default Book;