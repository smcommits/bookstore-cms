const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

export {
  CREATE_BOOK,
  REMOVE_BOOK,
};
