import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul className="main-nav">
        <li><NavLink to="/" style={({ isActive }) => isActive ? { background: 'red' } : undefined}>Home</NavLink></li>
        <li><NavLink to="/Jackets">Jackets</NavLink></li>
        <li><NavLink to="/Pants">Pants</NavLink></li>
        <li><NavLink to="/Tshirts">T-Shirts</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;