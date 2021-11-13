/* stylelint-disable */
/* eslint-disable */

import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import BookList from "../components/BookList";
import { addBookToServer } from "../redux/reducers/bookReducer/bookActions";
import { addBookToRedux } from "../redux/reducers/bookReducer/bookActions";

function Home() {
  const dispatch = useDispatch();
  const [book, setBook] = React.useState({
    category: "",
    title: "",
    // author: "",
    // completed: "",
    // chapter: "",
  });

  const updateObj = (e) => {
    e.preventDefault(),
      setBook({
        ...book,
        [e.target.name]: e.target.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBookToServer(
        "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6XuNa1i2ihDpsbnaynQL/books",
        {
          itemId: uuidv4(),
          category: book.category,
          title: book.title,
          // author: book.author,
          // completed: book.completed,
          // chapter: book.chapters,
        }
      )
    );

    setBook({
      category: "",
      title: "",
      // author: "",
      // completed: "",
      // chapter: "",
    });
  };

  return (
    <div>
      <BookList />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={book.category} name='category' onChange={updateObj} />
        <input value={book.title} name='title' onChange={updateObj} />
        {/* <input value={book.author} name='author' onChange={updateObj} /> */}
        {/* <input value={book.completed} name='completed' onChange={updateObj} />
        <input value={book.chapter} name='chapter' onChange={updateObj} /> */}

        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Home;
