/* stylelint-disable */
/* eslint-disable */

import * as types from "./bookTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, action.payload];
    case types.REMOVE_BOOK:
      return [...state.filter((el) => el.id !== action.id)];

    default:
      return state;
  }
};
