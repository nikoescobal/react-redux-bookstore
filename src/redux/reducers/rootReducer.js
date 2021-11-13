import { combineReducers } from 'redux';
import books from './bookReducer/book.reducer';

export default combineReducers({
  books,
});
