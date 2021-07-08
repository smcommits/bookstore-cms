import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
