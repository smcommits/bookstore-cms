const BookReducer = (state = {}, action) => {
  const index = state.indexOf(action.payload.book);
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        books: [
          ...state.books,
          action.payload.book,
        ],
      };
    case 'REMOVE_BOOK':
      return {
        books: [
          ...state.slice(0, index),
          ...state.slice(index),
        ],
      };
    default:
      return state;
  }
};

export default BookReducer;
