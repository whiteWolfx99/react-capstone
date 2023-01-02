import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Movies</h1>

    <div className="link_list">
      <Link className="link" to="/">List</Link>
      <Link className="link" to="/single">Single</Link>
    </div>
  </nav>
);

export default Navbar;
