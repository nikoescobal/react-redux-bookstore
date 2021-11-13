import * as types from './bookTypes';

export const addBook = (payload) => ({
  type: types.ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  id,
});
