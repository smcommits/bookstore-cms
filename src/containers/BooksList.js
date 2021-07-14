import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { FILTER_BOOKS } from '../actions/index';
import { removeBook, updatePercent } from '../reducers/books';
import CategoryFilter from '../components/CategoryFilter';
import sortBooksById from '../helpers/helpers'

const BooksList = (props) => {
  const {
    books, filter, deleteBook, updateBook, filterBooks,
  } = props;

  const sortedBooks = books.sort(sortBooksById)

  const handleRemoveBook = (book) => {
    deleteBook(book);
  };

  const handleFilterChange = (filter) => {
    filterBooks(filter);
  };

  const handlePercentChange = (book, newPercent) => {
    updateBook(book, newPercent);
  };

  const renderBook = (id, book, handler) => (<Book key={id} book={book} bookRemover={handler} percentUpdate={handlePercentChange} />);

  const bookTable = sortedBooks.filter((book) => book.category === filter || filter === 'All')
    .map((book) => renderBook(book.id, book, handleRemoveBook));

  return (
    <>
      <CategoryFilter filterHandler={handleFilterChange} />
      <section className="book_list">
        <ul className="list_style_none">
          {bookTable}
        </ul>
      </section>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => {
    dispatch(removeBook(book));
  },

  updateBook: (book, newPercent) => {
    dispatch(updatePercent(book, newPercent));
  },
  filterBooks: (filter) => {
    dispatch(FILTER_BOOKS(filter));
  },
});

const BooksListConnected = connect(mapStateToProps, mapDispatchToProps)(BooksList);

export default BooksListConnected;
