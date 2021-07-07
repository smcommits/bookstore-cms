/* eslint-disable max-len */

import React from 'react';

const BooksForm = () => {
  const categories = ['Actions', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryItems = categories.map((category) => <option key={1} value={category.toLowerCase()}>{category}</option>);

  return (
    <form action="">
      <input type="text" />
      <select id="categories" name="categories">
        {categoryItems}
      </select>
      <input type="submit" />
    </form>
  );
};

export default BooksForm;
