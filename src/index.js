import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import App from './components/App';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Book1',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Book2',
      category: 'History',
    },
    {
      id: 3,
      title: 'Book3',
      category: 'Biography',
    },
    {
      id: 4,
      title: 'Book4',
      category: 'Horror',
    },
  ],
};

const store = createStore(rootReducer, initialState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
