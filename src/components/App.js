import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

const App = () => (
  <>
    <Nav />
    <main>
      <BooksList />
      <BooksForm />
    </main>
  </>
);

export default App;
