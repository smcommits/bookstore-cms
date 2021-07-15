/* eslint-disable no-unused-vars */

import axios from 'axios';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { ...action.payload }];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    case 'FETCH_BOOKS':
      return action.payload.data;
    case 'UPDATE_PERCENT':
      return [...state.filter((book) => book.id !== action.payload.id), action.payload];
    default:
      return state;
  }
};

const fetchBooks = async (dispatch, getState) => {
  const response = await axios.get('http://localhost:3000/api/books');
  dispatch({ type: 'FETCH_BOOKS', payload: response.data });
};

const postBook = (book) => {
  const saveBookThunk = async (dispatch, getState) => {
    const response = await axios.post('http://localhost:3000/api/books', { data: book });
    dispatch({ type: 'CREATE_BOOK', payload: response.data.data });
  };

  return saveBookThunk;
};

const removeBook = (book) => {
  const removeBookThunk = async (dispatch, getState) => {
    const response = await axios.delete(`http://localhost:3000/api/books/${book.id}`);
    dispatch({ type: 'REMOVE_BOOK', payload: response.data.data });
  };
  return removeBookThunk;
};

const updatePercent = (book, newPercent) => {
  const updatePercentThunk = async (dispatch, getState) => {
    const response = await axios.patch(`http://localhost:3000/api/books/${book.id}`, { data: newPercent });
    dispatch({ type: 'UPDATE_PERCENT', payload: response.data.data });
  };

  return updatePercentThunk;
};

export default booksReducer;
export {
  fetchBooks, postBook, removeBook, updatePercent,
};
