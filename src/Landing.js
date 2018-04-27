import React from 'react';

import Shelf from './Shelf';

const Landing = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Landing Page</h1>
      </div>
      <Shelf title="Currently Reading" books={[{title: 'test'}]}/>
      <Shelf title="Want to Read"/>
      <Shelf title="Read"/>
    </div>
  );
}

export default Landing;