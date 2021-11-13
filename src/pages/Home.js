/* stylelint-disable */
/* eslint-disable */

import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import BookList from "../components/BookList";
import { addBook } from "../redux/reducers/bookReducer/bookActions";

function Home() {
  const dispatch = useDispatch();
  const [book, setBook] = React.useState({
    genre: "",
    title: "",
    author: "",
    completed: "",
    chapter: "",
  });
  // const [title, setTitle] = React.useState('');
  // const [author, setAuthor] = React.useState('');
  // const [completed, setCompleted] = React.useState('');
  // const [chapter, setChapter] = React.useState('');

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
      addBook({
        id: uuidv4(),
        genre: book.genre,
        title: book.title,
        author: book.author,
        completed: book.completed,
        chapter: book.chapters,
      })
    );
    setBook({
      genre: "",
      title: "",
      author: "",
      completed: "",
      chapter: "",
    });
  };

  return (
    <div>
      <BookList />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={book.genre} name='genre' onChange={updateObj} />
        <input value={book.title} name='title' onChange={updateObj} />
        <input value={book.author} name='author' onChange={updateObj} />
        <input value={book.completed} name='completed' onChange={updateObj} />
        <input value={book.chapter} name='chapter' onChange={updateObj} />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default Home;
