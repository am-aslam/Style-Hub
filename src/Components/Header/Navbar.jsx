import React, { useContext, useState } from 'react';
import { FaFacebook, FaSearch } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquarePinterest } from "react-icons/fa6";
import { BsFillMenuButtonFill, BsX } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CardContext } from '../../pages/Shop/CardContext';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cardItems } = useContext(CardContext);
  const hasItems = cardItems?.length > 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="header bg-gray-100 mb-20 fixed z-50 w-full shadow-lg">
      {/* Navbar for Medium and Larger Screens */}
      <nav className="navbar hidden md:flex justify-between items-center px-6 sm:px-8 py-4">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <h1 className="text-3xl ">STYLE HUB</h1>
        </div>

        {/* Navbar Links */}
        <div className="navbar-collapse flex items-center space-x-10">
          <ul className="navbar-nav flex space-x-8 items-center uppercase ">
            <li className='border-b-2 transition-all ease-in border-transparent hover:border-green-900 py-1 px-1'><Link to='/' className="nav-link text-sm font-semibold" >Home</Link></li>
            <li className='border-b-2 transition-all ease-in border-transparent hover:border-green-900 py-1 px-1'><Link to='/about' className="nav-link text-sm font-semibold" >About</Link></li>
            <li className='border-b-2 transition-all ease-in border-transparent hover:border-green-900 py-1 px-1'><Link to='/Shop' className="nav-link text-sm font-semibold" >Shop</Link></li>
            <li className='relative md:ml-5'>
              <Link to="/another">
                <FaShoppingCart
                  size={20}
                  color={hasItems ? 'red' : 'black'} // Change the color based on items in the cart
                />
              </Link>
              {hasItems && (
                <span className='absolute -top-3 -right-2 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                  {cardItems.length}
                </span>
              )}
            </li>
          </ul>
          {/* Right Menu - Social Icons and Search */}
          <ul className="right-menu flex space-x-4 items-center">
            <li>
              <Link href="#" className="text-xl text-gray-700 hover:text-black"><FaFacebook /></Link>
            </li>
            <li>
              <Link href="#" className="text-xl text-gray-700 hover:text-black"><PiInstagramLogoFill /></Link>
            </li>
            <li>
              <Link href="#" className="text-xl text-gray-700 hover:text-black"><FaSquarePinterest /></Link>
            </li>
            <li>
              {/* Search Bar */}
              <div className="input-group flex">
                <input
                  type="text"
                  className="form-control p-2 border rounded-l focus:outline-none"
                  placeholder="Search"
                />
                <button className="input-group-append p-2 bg-gray-200 rounded-r">
                  <FaSearch />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar for Small Screens */}
      <nav className="navbar flex md:hidden justify-between items-center px-6 sm:px-8 py-4">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <h1 className="text-3xl ">STYLE HUB</h1>

        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='flex items-center pl-48'>
          <div className='relative md:ml-5'>
            <Link to="/another">
              <FaShoppingCart
                size={20}
                color={hasItems ? 'red' : 'black'} // Change the color based on items in the cart
              />
            </Link>
            {hasItems && (
              <span className='absolute -top-3 -right-2  text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                {cardItems.length}
              </span>
            )}
          </div>
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          {isOpen ? <BsX className="text-3xl" /> : <BsFillMenuButtonFill className="text-3xl" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4 absolute text-center w-full left-0 top-16 shadow-lg">
          <ul className="flex flex-col space-y-4 ">
            <li>
              <Link to='/' className="nav-link text-lg text-center font-semibold" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to='/about' className="nav-link text-lg text-center font-semibold" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to='/shop' className="nav-link text-lg text-center font-semibold" onClick={closeMenu}>Shop</Link>
            </li>
            <li className='flex justify-center'><FaShoppingCart size={20} /></li>
          </ul>

          <div className="navbar-collapse flex flex-col items-center space-x-10">

            {/* Right Menu - Social Icons and Search */}
            <ul className="right-menu flex py-5 space-x-4 items-center justify-center">
              <li>
                <Link href="#" className="text-xl text-gray-700 hover:text-black"><FaFacebook /></Link>
              </li>
              <li>
                <Link href="#" className="text-xl text-gray-700 hover:text-black"><PiInstagramLogoFill /></Link>
              </li>
              <li>
                <Link href="#" className="text-xl text-gray-700 hover:text-black"><FaSquarePinterest /></Link>
              </li>
            </ul>

            <div className="input-group flex">
              <input
                type="text"
                className="form-control p-2 border rounded-l focus:outline-none"
                placeholder="Search"
              />
              <button className="input-group-append p-2 bg-gray-200 rounded-r">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
