import React from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf';

const Landing = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <Shelf title="Currently Reading" books={[{title: 'Test'}]}/>
      <Shelf title="Want to Read"/>
      <Shelf title="Read"/>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Landing;