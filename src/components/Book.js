import React from 'react';
import { PropTypes } from 'prop-types';

function Book({
  genre, title, author, completed, chapter,
}) {
  return (
    <div>
      <div>{genre}</div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{completed}</div>
      <div>{chapter}</div>
    </div>
  );
}

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
