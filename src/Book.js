import React from 'react';

const Book = ({ book, onBookUpdate }) => {
  
  const handleBookUpdate = (e) => {
    onBookUpdate(book, e.target.value);
  }
  
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : ''}}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={e => handleBookUpdate(e)}>
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