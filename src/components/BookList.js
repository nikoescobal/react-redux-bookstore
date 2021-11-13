/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Book from './Book';

function BookList() {
  const [books] = React.useState([
    {
      id: 1,
      genre: 'Romance',
      title: 'Mike the BBC Reporter',
      author: 'Michael Garyssan',
      completed: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      genre: 'Fiction',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      completed: 88,
      chapter: 'Chapter 7',
    },
  ]);

  return books.map(({ id, ...bookProps }) => <Book key={id} {...bookProps} />);
}

export default BookList;
