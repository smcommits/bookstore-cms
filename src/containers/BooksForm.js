/* eslint-disable max-len */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../helpers/constants';
import { postBook } from '../reducers/books';

const BooksForm = (props) => {
  const { addBook } = props;
  const categoryItems = CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>);

  const [bookFormState, setBookFormState] = useState({
    title: '',
    author: '',
    category: 'Actions',
  });

  const handleChange = ({ target: { name, value } }) => {
    setBookFormState({
      ...bookFormState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(bookFormState);
  };

  return (
    <div className="book_form_container">
      <h2 className="form_head">Add a new book</h2>
      <form action="" className="book_add_form flex space_between">
        <input className="title_input" type="text" onChange={handleChange} name="title" placeholder="Book Title" />
        <input className="author_input" type="author" onChange={handleChange} name="author" placeholder="Author" />
        <select id="categories" name="category" onChange={handleChange}>
          {categoryItems}
        </select>
        <button type="submit" onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(postBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
