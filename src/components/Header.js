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

  const isSearchEnabled = location.pathname == '/';

  return (
    <header>
      <div className="heading-cart-container">
      <div className="cart-container">          
            <CartIcon cartSize={cartSize} clearCart={() => addToCart('CLEAR_CART')} />
      </div>
      
        <h1 id="welcome-header">Welcome to Newestyle</h1>

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
        
      </div>
      <nav>
        <NavLink to="/" style={({ isActive }) => (isActive ? { background: 'gray' } : undefined)}>
          Home
        </NavLink>
        <NavLink to="/Men">Men</NavLink>
        <NavLink to="/Women">Women</NavLink>
        <NavLink to="/Kids">Kids</NavLink>
        <NavLink to="/About">About</NavLink>        
      </nav>
    </header>
  );
};

export default Header;
