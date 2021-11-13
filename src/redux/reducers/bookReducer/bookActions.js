/* stylelint-disable */
/* eslint-disable */
import { enumDeclaration } from "@babel/types";
import axios from "axios";
import * as types from "./bookTypes";

const initialState = [];

const getBooks = () => (dispatch) =>
  axios
    .get(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6XuNa1i2ihDpsbnaynQL/books"
    )
    .then((books) => {
      const BookList = Object.entries(books.data);

      const newBook = [];

      for (let i = 0; i < BookList.length; i++) {
        const bookNew = {
          id: BookList[i][0],
          title: BookList[i][1][0].title,
        };
      }
    });

export const addBookToRedux = (payload) => ({
  type: types.ADD_BOOK,
  payload,
});

export const removeBook = (itemId) => ({
  type: types.REMOVE_BOOK,
  itemId,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_SUCCESS:
      return [...action.payload];

    case ADD_BOOK_SUCCESS:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
        action.payload,
      ];

    case REMOVE_BOOK_SUCCESS:
      return [...state.filter((book) => book.id !== enumDeclaration.payloyd)];

    default:
      return state;
  }
};

export const addBookToServer = () => async (dispatch) => {
  const config = {
    method: "post",
    headers: {
      ContentType: "text_plain",
    },
    url,
    data: book,
  };

  await axios(config);
};
