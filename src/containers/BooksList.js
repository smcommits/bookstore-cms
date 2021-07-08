/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;
  const bookTable = books.map((book) => <Book key={book.id} book={book} />);
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {bookTable}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const BooksListConnected = connect(mapStateToProps, null)(BooksList);

export default BooksListConnected;
