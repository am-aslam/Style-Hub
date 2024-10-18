import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>STYLE HUB</h1>
      <div>
        <FaShoppingCart />
        {cartCount > 0 && (
          <span style={{ color: 'red', marginLeft: '5px' }}>{cartCount}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
