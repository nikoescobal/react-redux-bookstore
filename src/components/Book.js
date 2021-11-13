import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/reducers/bookReducer/bookActions';

function Book({
  id, genre, title, author, completed, chapter,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{genre}</div>
      <div>{title}</div>
      <div>{author}</div>
      <div>{completed}</div>
      <div>{chapter}</div>
      <button onClick={() => dispatch(addBook)} type="button">
        Add
      </button>
      <button onClick={() => dispatch(removeBook(id))} type="button">
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
