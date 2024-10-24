import React, { useState } from 'react';
import { FaFacebook, FaSearch, FaShoppingCart } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquarePinterest } from "react-icons/fa6";
import { BsFillMenuButtonFill, BsX } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const cartItemCount = getTotalQuantity();


  // Handle the click event for the cart icon
  const handleCartClick = (e) => {
    if (!cartItemCount) {
      e.preventDefault(); // Prevent navigation to /another if the cart is empty
      alert('Your cart is empty!'); // Show an alert if the cart is empty
    } else {
      navigate('/cart'); // Navigate to /another only if the cart has items
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header bg-gray-100 mb-20 fixed z-50 w-full shadow-lg">
      {/* Navbar for Medium and Larger Screens */}
      <nav className="navbar hidden md:flex justify-between items-center px-6 sm:px-8 py-4">
        <div className="navbar-brand">
          <h1 className="text-3xl">STYLE HUB</h1>
        </div>

        <div className="navbar-collapse flex items-center space-x-10">
          <ul className="navbar-nav flex space-x-8 items-center uppercase">
            {['/', '/about', '/shop'].map((path, index) => (
              <li key={index} className='border-b-2 transition-all ease-in border-transparent hover:border-green-900 py-1 px-1'>
                <Link to={path} className="nav-link text-sm font-semibold" onClick={closeMenu}>
                  {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <li className='relative md:ml-5'>
              <button onClick={handleCartClick}>
                <FaShoppingCart
                  size={20}
                  color={cartItemCount ? 'black' : 'gray'} // Change color to gray if the cart is empty
                />
              </button>
              {cartItemCount > 0 && (
                <span className='absolute -top-3 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                  {cartItemCount}
                </span>
              )}
            </li>
          </ul>

          {/* Social Icons and Search */}
          <div className="flex space-x-4 items-center">
            {[
              { icon: <FaFacebook />, link: '#' },
              { icon: <PiInstagramLogoFill />, link: '#' },
              { icon: <FaSquarePinterest />, link: '#' }
            ].map((social, index) => (
              <Link key={index} to={social.link} className="text-xl text-gray-700 hover:text-black">
                {social.icon}
              </Link>
            ))}
            <div className="input-group flex">
              <input
                type="text"
                className="form-control p-2 border rounded-l focus:outline-none"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="input-group-append p-2 bg-gray-200 rounded-r" aria-label="Search Button">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar for Small Screens */}
      <nav className="navbar flex md:hidden justify-between items-center px-6 sm:px-8 py-4">
        <div className="navbar-brand">
          <h1 className="text-3xl">STYLE HUB</h1>
        </div>

        <div className='flex items-center'>
          <Link to="/cart" onClick={handleCartClick} className='relative mr-7'>
            <FaShoppingCart
              size={20}
              color={cartItemCount ? 'black' : 'gray'}
            />
            {cartItemCount > 0 && (
              <span className='absolute -top-3 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                {cartItemCount}
              </span>
            )}
          </Link>
          <button className="navbar-toggler" onClick={toggleMenu}>
            {isOpen ? <BsX className="text-3xl" /> : <BsFillMenuButtonFill className="text-3xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4 absolute text-center w-full left-0 top-16 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {['/', '/about', '/shop'].map((path, index) => (
              <li key={index}>
                <Link to={path} className="nav-link text-lg font-semibold" onClick={closeMenu}>
                  {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            
          </ul>

          {/* Right Menu - Social Icons and Search */}
          <div className="flex flex-col items-center py-5">
            <div className="flex space-x-4 items-center">
              {[
                { icon: <FaFacebook />, link: '#' },
                { icon: <PiInstagramLogoFill />, link: '#' },
                { icon: <FaSquarePinterest />, link: '#' }
              ].map((social, index) => (
                <Link key={index} to={social.link} className="text-xl text-gray-700 hover:text-black">
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="input-group flex mt-4">
              <input
                type="text"
                className="form-control p-2 border rounded-l focus:outline-none"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="input-group-append p-2 bg-gray-200 rounded-r" aria-label="Search Button">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
