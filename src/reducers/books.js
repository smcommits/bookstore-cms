const booksReducer = (state = [], action) => {
  const id = state.length ? state[state.length - 1].id + 1 : null;

  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { ...action.book, id }];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
};
export default booksReducer;
