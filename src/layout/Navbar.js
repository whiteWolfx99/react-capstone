import React from 'react';
import Bitcoin from '../Images/Bitcoin.svg.png';

const Navbar = () => (
  <nav className="navbar">
    <img src={Bitcoin} alt="logo" />
    <h1>cryptocurrency</h1>
  </nav>
);

export default Navbar;
