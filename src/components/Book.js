import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/reducers/bookReducer/bookActions';

function Book({ itemId, category, title }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{category}</div>
      <div>{title}</div>
      {/* <div>{author}</div>
      <div>{completed}</div>
      <div>{chapter}</div> */}

      <button onClick={() => dispatch(removeBook(itemId))} type="button">
        Delete
      </button>
    </div>
  );
}

Book.propTypes = {
  itemId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // completed: PropTypes.number.isRequired,
  // chapter: PropTypes.string.isRequired,
};

export default Book;
