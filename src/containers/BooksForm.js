/* eslint-disable max-len */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { CREATE_BOOK } from '../actions/index';

const BooksForm = (props) => {
  const { addBook } = props;
  const categories = ['Actions', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryItems = categories.map((category) => <option key={uuidv4()} value={category}>{category}</option>);

  const [bookFormState, setBookFormState] = useState({
    title: '',
    category: 'Actions',
  });

  const handleChange = (event) => {
    setBookFormState({
      ...bookFormState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(bookFormState);
  };

  return (
    <form action="">
      <input type="text" onChange={handleChange} name="title" />
      <select id="categories" name="category" onChange={handleChange}>
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
