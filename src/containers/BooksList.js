/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = (props) => {
  const { books, removeBook } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const bookTable = books.map((book) => (
    <Book key={book.id} book={book} bookRemover={handleRemoveBook} />
  ));

  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Remove</th>
      </tr>
      {bookTable}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(REMOVE_BOOK(book));
  },
});

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
