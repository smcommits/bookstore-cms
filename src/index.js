import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
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
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book3',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * (1 - 5) + 5),
      title: 'Book4',
      category: 'Action',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={initialState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
