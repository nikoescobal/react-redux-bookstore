/* stylelint-disable */
/* eslint-disable */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

function BookList() {
  const books = useSelector((state) => state.books);
  console.log(books);
  return books.map(({ id, ...bookProps }) => <Book key={id} id={id} {...bookProps} />);
}
export default BookList;
