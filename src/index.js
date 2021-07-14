import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers/index';
import { fetchBooks } from './reducers/books';
import './styles/css/index.css';

import App from './components/App';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Intro to CS',
      author: 'John M Zelle',
      category: 'Learning',
    },
    {
      id: 2,
      title: 'The Murder of Roger Ackroyd',
      author: 'Agatha Christie',
      category: 'Mystrey',
    },
    {
      id: 3,
      title: 'The Elements of Computing System',
      author: 'Noam Nisan',
      category: 'Learning',
    },
  ],
  filter: 'All',
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
store.dispatch(fetchBooks);

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
