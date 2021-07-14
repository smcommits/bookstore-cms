import React from 'react';
import HorizontalList from '../styles/StyledComponents';

const Nav = () => (
  <header>
    <nav className="flex_row_center space_between">
      <div className="left flex_row_center">
        <h1 className="text_logo">Bookstore CMS</h1>
        <HorizontalList className="main_nav">
          <li className="text_nav_active">Home</li>
          <li className="text_nav">Categories</li>
        </HorizontalList>
      </div>

      <div className="right">
        <img src="/user.svg" alt="profile-icon" className="profile_image" />
      </div>
    </nav>

  </header>
);

export default Nav;
