import React from 'react';
import PropTypes from 'prop-types';

import ProgressRing from './ProgressRing';
import HorizontalList from '../styles/StyledComponents';

const Book = (props) => {
  const { book, bookRemover, percentUpdate } = props;

  const removeBook = () => {
    bookRemover(book);
  };

  const percentHandler = (event) => {
    const percentage = event.target.value;
    if (!(percentage.match(/^[0-9][0-9]?$|^100$/))) {
      return;
    }
    percentUpdate(book, event.target.value);
  };

  const {
    title, author, category,
  } = book;
  return (
    <li className="book_list_item flex space_between">
      <div className="left flex_column space_between">
        <div className="book_details">
          <strong className="category_text">{category}</strong>
          <h2 className="book_title_text">{title}</h2>
          <small className="small_text">{author}</small>
        </div>
        <div className="book_control_container">
          <HorizontalList className="book_control_list">
            <li className="book_control_item">
              <button type="button" className="small_text">Comment</button>
            </li>
            <li className="book_control_item">
              <button type="button" className="small_text">Edit</button>
            </li>
            <li className="book_control_item">
              <button type="button" className="small_text" onClick={removeBook} onKeyDown={removeBook}>Remove</button>
            </li>
          </HorizontalList>
        </div>
      </div>

      <div className="right  flex">
        <div className="percent_wrapper flex_row_center">
          <ProgressRing percentage={book.percentage} />
          <input type="text" placeholder="%" onChange={percentHandler} maxLength="3" />
        </div>
        <div className="book_chapter">
          <small>Current Chapter</small>
          <p className="chapter-name">Chapter 17</p>
          <button className="update_progress" type="submit">Update Progress</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookRemover: PropTypes.func.isRequired,
  percentUpdate: PropTypes.func.isRequired,
};
export default Book;
