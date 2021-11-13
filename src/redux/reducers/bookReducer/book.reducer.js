const initialState = {
  books: [
    {
      genre: 'Romance',
      title: 'Mike the BBC Reporter',
      author: 'Michael Garyssan',
      completed: 64,
      chapter: 'Chapter 17',
    },
    {
      genre: 'Fiction',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      completed: 88,
      chapter: 'Chapter 7',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case typeName:
    //   return { ...state, ...payload };

    default:
      return state;
  }
};
