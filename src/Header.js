// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="header-content">
          <h1><Link to="/">Meals4U</Link></h1>
          <button className="sign-in">Sign In</button>
        </div>
      </header>
      <nav>
        <ul>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/forum">Forum</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
