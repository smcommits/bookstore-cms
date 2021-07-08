const BookReducer = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case 'CREATE_BOOK':
      return {
        books: [...state.books, action.book]
      };
    case 'REMOVE_BOOK':
      return [...state.slice(0, index), ...state.slice(index)];
    default:
      return state;
  }
};
export default BookReducer;
