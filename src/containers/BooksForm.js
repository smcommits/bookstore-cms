/* eslint-disable max-len */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CREATE_BOOK } from '../actions/index';

const BooksForm = (props) => {
  const { addBook } = props;

  const [bookFormState, setBookFormState] = useState({
    title: '',
    category: '',
  });

  const handleChange = (event) => {
    if (event.target.tagName === 'INPUT') {
      setBookFormState({
        ...bookFormState,
        title: event.target.value,
      });
    } else {
      setBookFormState({
        ...bookFormState,
        category: event.target.value,
      });
    }
  };

  const handleSubmit = (bookFormState) => {
    addBook(bookFormState);
  };
  const categories = ['Actions', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryItems = categories.map((category) => <option key={1} value={category.toLowerCase()}>{category}</option>);

  return (
    <form action="">
      <input type="text" onChange={handleChange} />
      <select id="categories" name="categories" onChange={handleChange}>
        {categoryItems}
      </select>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(CREATE_BOOK(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
