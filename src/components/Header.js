import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = ({ onSearch, cartSize, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const isSearchEnabled = location.pathname !== '/About';

  return (
    <header>
      <h1>Welcome to Newestyle</h1>
      <nav>
        <NavLink to="/" style={({ isActive }) => (isActive ? { background: 'red' } : undefined)}>
          Home
        </NavLink>
        <NavLink to="/Men">Men</NavLink>
        <NavLink to="/Women">Women</NavLink>
        <NavLink to="/Kids">Kids</NavLink>
        <NavLink to="/About">About</NavLink>

        {isSearchEnabled && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        )}
        
        <CartIcon cartSize={cartSize} clearCart={() => addToCart('CLEAR_CART')} />
      </nav>
    </header>
  );
};

export default Header;
