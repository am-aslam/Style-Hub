import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between relative py-10 px-5 bg-gray-100">
      <div className="col flex flex-col items-start mb-5 ml-12">
        <h1 className="text-3xl font-semibold">STYLE HUB</h1>
        <h4 className="text-sm mb-5">Contact</h4>
        <p><strong>Email:</strong> style#@gmail.com</p>
        <p><strong>Phone:</strong> +111111111 +12324564</p>
        <p><strong>Hours:</strong> 10.00 - 18.00, Mon - Sat</p>
        <div className="follow mt-5">
          <h4 className="text-sm mb-2">Follow Us</h4>
          <div className="icon flex space-x-2">
          <FaFacebook className=" text-gray-600 hover:text-green-500 cursor-pointer"/>
          <BsTwitterX  className=" text-gray-600 hover:text-green-500 cursor-pointer"/>
          <FaGoogle className=" text-gray-600 hover:text-green-500 cursor-pointer"/>
          <FaInstagramSquare className="fab fa-youtube text-gray-600 hover:text-green-500 cursor-pointer"/>
          <FaLinkedin className=" text-gray-600 hover:text-green-500 cursor-pointer"/>
          
          </div>
        </div>
      </div>

      <div className="sec flex flex-wrap justify-between">
        <div className="col flex flex-col items-start mb-5 ml-12">
          <h4 className="text-sm mb-5">About</h4>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">About Us</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Delivery Information</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Privacy Policy</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Terms and Condition</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Contact Us</Link>
        </div>

        <div className="col flex flex-col items-start mb-5 ml-12">
          <h4 className="text-sm mb-5">My Account</h4>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Sign In</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">View Cart</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">My Account</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">My Wishlist</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Track My Order</Link>
          <Link href="#" className="text-sm text-gray-900 mb-2 hover:text-blue-500">Help</Link>
        </div>

        <div className="col flex flex-col items-start mb-5 ml-12 hidden md:block">
          <h4 className="text-sm mb-5">Install App</h4>
          <p className="text-sm mb-2">From App Store or Google Play</p>
          <div className="row flex space-x-3">
            <img className="border border-green-500 rounded-lg" src="https://i.postimg.cc/Y2s5mLdR/app.jpg" alt="App Store" />
            <img className="border border-green-500 rounded-lg" src="https://i.postimg.cc/7YvyWTS6/play.jpg" alt="Google Play" />
          </div>
          <p className="text-sm mt-4">Secured Payment Gateways</p>
          <img src="https://i.postimg.cc/kgfzqVRW/pay.png" alt="Payment Methods" />
        </div>
      </div>

      <div className="copyright w-full text-center mt-5">
        <p>© 2024 All rights reserved Style Hub</p>
      </div>
    </footer>

  );
};

export default Footer;
