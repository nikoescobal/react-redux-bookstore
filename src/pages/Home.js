/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useDispatch } from 'react-redux';
import BookList from '../components/BookList';
import { addBook } from '../redux/reducers/bookReducer/bookActions';

function Home() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: 7,
        genre: 'Romance',
        title: value,
        author: 'Michael Garyssan',
        completed: 64,
        chapter: 'Chapter 17',
      }),
    );
  };

  return (
    <div>
      <BookList />
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <input onChange={(e) => setValue(e.target.value)} type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Home;
