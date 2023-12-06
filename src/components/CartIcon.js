import React from 'react';

const CartIcon = ({ cartSize, clearCart }) => {
  return (
    <div className="cart-icon">
      {/* Use font awesome (added to public) to track count using a shopping cart icon */}
      <i className="fas fa-shopping-cart"></i>
      <span class="cartSize">{cartSize}</span>
      <div className="clear-cart-wrapper">
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartIcon;
