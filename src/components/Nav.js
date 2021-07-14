import React from 'react';
import HorizontalList from '../styles/StyledComponents';

const Nav = () => (
  <header>
    <nav className="flex_row_center">
      <h1 className="text_logo">Bookstore CMS</h1>
      <HorizontalList className="main_nav">
        <li className="text_nav_active">Home</li>
        <li className="text_nav">Categories</li>
      </HorizontalList>
    </nav>
  </header>
);

export default Nav;
