/* stylelint-disable */
/* eslint-disable */

import * as types from "./bookTypes";
import { v4 as uuidv4 } from 'uuid';


const initialState = [
  {
    id: uuidv4(),
    genre: "Romance",
    title: "Mike the BBC Reporter",
    author: "Michael Garyssan",
    completed: 64,
    chapter: "Chapter 17",
  },
  {
    id: uuidv4(),
    genre: "Fiction",
    title: "The Alchemist",
    author: "Paulo Coelho",
    completed: 88,
    chapter: "Chapter 7",
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [ ...state, action.payload];
    case types.REMOVE_BOOK:
      return [...state.filter((el) => el.id !== action.id)];

    default:
      return state;
  }
};
