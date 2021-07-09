const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const FILTER_BOOKS = (filter) => ({
  type: 'FILTER_BOOKS',
  filter,
});

export {
  CREATE_BOOK,
  REMOVE_BOOK,
  FILTER_BOOKS,
};
