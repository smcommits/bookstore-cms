import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { REMOVE_BOOK, FILTER_BOOKS } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const {
    books, filter, removeBook, filterBooks,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    filterBooks(filter);
  };

  const renderBook = (id, book, handler) => (<Book key={id} book={book} bookRemover={handler} />);

  const bookTable = books.filter((book) => book.category === filter || filter === 'All')
    .map((book) => renderBook(book.id, book, handleRemoveBook));

  return (
    <>
      <CategoryFilter filterHandler={handleFilterChange} />
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove</th>
        </tr>
        {bookTable}
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(REMOVE_BOOK(book));
  },
  filterBooks: (filter) => {
    dispatch(FILTER_BOOKS(filter));
  },
});

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
