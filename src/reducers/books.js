const BookReducer = (state = [], action) => {
  const index = state.indexOf(action.book);
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return [...state.slice(0, index), ...state.slice(index)];
    default:
      return state;
  }
};
export default BookReducer;
