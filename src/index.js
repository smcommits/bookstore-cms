import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book1',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book2',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book3',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book4',
      category: 'Horror',
    },
  ],
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())
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
