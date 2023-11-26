import React from 'react';

const CartIcon = ({ cartSize, clearCart }) => {
  return (
      <div className="cart-icon">
          {/* Use font awesome (added to public) to track count using a shopping cart icon */}
      <i className="fas fa-shopping-cart"></i>
      <span>{cartSize}</span>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartIcon;
