import React from 'react';
import PropTypes from 'prop-types';
import '../../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css';

const Book = (props) => {
  const { book, bookRemover } = props;

  const removeBook = () => {
    bookRemover(book);
  };

  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button className="las la-trash" onClick={removeBook} type="submit" aria-label="remove" /></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookRemover: PropTypes.func.isRequired,
};
export default Book;
