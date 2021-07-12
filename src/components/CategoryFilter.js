/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES } from '../helpers/constants';

const CategoryFilter = (props) => {
  const { filterHandler } = props;

  const handleFilterChange = (event) => {
    filterHandler(event.target.value);
  };
  const filterCategories = ['All', ...CATEGORIES];

  return (
    <select id="filterCategories" name="filterCategories" onChange={handleFilterChange}>
      {filterCategories.map((filterCategory) => <option key={filterCategory} value={filterCategory}>{filterCategory}</option>)}
    </select>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
