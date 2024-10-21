import React, { useContext, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import ImageLock1 from '../../Components/Asset/b10.jpg';
import ImageLock2 from '../../Components/Asset/b17.jpg';
import ImageLock3 from '../../Components/Asset/b18.jpg';
import ImageLock4 from '../../Components/Asset/b4.jpg';
import ImageLock5 from '../../Components/Asset/b7.jpg';
import ShopData from '../../data/Shopdata';
// Ensure this is correctly imported
import { Data } from '../../data/Data';
import { Link } from 'react-router-dom';
import { CardContext } from './CardContext';
// import { CardContext } from './CardContext';

function Shop() {
  const [cart, setCart] = useState([]);
  const { addToCard } = useContext(CardContext);
  

  const handleAddToCard = (product) => {
    // Check if the product is already in the cart
    const isInCart = cart.find((item) => item.id === product.id);

    if (isInCart) {
      // If the product is already in the cart, alert the user
      alert(`${product.title} is already in your cart!`);
    } else {
      // If not in the cart, add it and show a success message
      setCart((prevCart) => [...prevCart, product]);
      addToCard(product); // Add to the global context
      // alert(`${product.title} has been added to your cart!`);
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-start justify-center h-[90vh] w-full bg-cover bg-no-repeat bg-right-top p-20"
        style={{ backgroundImage: "url('https://i.postimg.cc/cCwBHzDV/hero4.png')" }}
      >
        <h4 className="pb-4 text-lg italic">Style's World</h4>
        <h2 className="text-4xl">Super value deals</h2>
        <h1 className="text-6xl text-[#088178]">On all Products</h1>
        <p className="text-lg my-4">Save more with coupons and up to 70% off!</p>
        <button
          className="bg-transparent text-[#088178] border-0 py-4 px-[65px] bg-cover"
          style={{ backgroundImage: "url('https://i.postimg.cc/528H2mmS/button.png')" }}
        >
          Shop Now
        </button>
      </section>

      {/* Feature Section */}
      <section id="feature" className="p-10 flex flex-wrap justify-between">
        {["Free Shipping", "Online Order", "Save Money", "Promotions", "Happy Sell", "24/7 Support"].map((feature, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-1/6 p-4 text-center">
            <img src={`https://i.postimg.cc/${['PrN2Y6Cv/f1.png', 'qvycxW4q/f2.png', '1Rdphyz4/f3.png', 'GpYc2JFZ/f4.png', '4yFCwmv6/f5.png', 'gJN1knTC/f6.png'][index]}`} alt={feature} />
            <h6 className="mt-2 text-[#088178] bg-[#fddde4] rounded px-2">{feature}</h6>
          </div>
        ))}
      </section>

      <section id="product1" className="p-10 text-center">
      <h2 className="text-6xl font-semibold">Featured Products</h2>
      <p className="text-gray-700 mb-6">Summer Collection New Modern Design</p>

      <div className="flex flex-wrap justify-center">
        {ShopData.map((product) => (
          <div
            key={product.id}
            className="w-1/4 md:min-w-[250px] min-w-[200px] p-2 cursor-pointer transition-shadow duration-200 hover:shadow-lg relative"
          >
            <Link to={`/product/${product.id}`}> {/* Adjust the route as needed */}
              <img src={product.image} alt={product.description} className="rounded-lg w-full" />
              <div className="des text-left p-2">
                <span className="text-gray-600">{product.title}</span>
                <h5 className="md:text-lg text-sm font-semibold mt-2 text-gray-900">{product.description}</h5>
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, index) => <FaStar key={index} />)}
                </div>
                <h4 className="text-xl text-[#088178]">${product.price}</h4>
              </div>
            </Link>
            <Link
              to="#"
              className="absolute bottom-5 right-2 bg-[#e8f6ea] text-[#088178] rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the link
                handleAddToCard(product);
              }}
            >
              <IoCartOutline />
            </Link>
            <div className='bg-yellow-300 p-2 hover:bg-yellow-400 hidden md:block' onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the link
                handleAddToCard(product);
              }}>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Banner Section */}
      <section id="banner" className="flex flex-col items-center justify-center bg-cover h-[40vh] p-10 bg-[url('https://i.postimg.cc/SsC7D5WD/b2.jpg')]">
        <h4 className="text-white">Repair Service</h4>
        <h2 className="text-3xl text-white">Up to <span className="text-red-500">70% off</span> - All Tshirts and Accessories</h2>
        <button className="mt-4 bg-white text-black p-3 rounded">Explore more</button>
      </section>

      <section id="new-arrivals" className="p-10 text-center">
      <h2 className="text-6xl font-semibold">New Arrivals</h2>
      <p className="text-gray-700 mb-6">Summer Collection New Modern Design</p>
      <div className="flex flex-wrap justify-center">
        {Data.map((item) => (
          <div
            key={item.id}
            className="w-1/4 md:min-w-[250px] min-w-[200px] p-2 cursor-pointer transition-shadow duration-200 hover:shadow-lg relative"
          >
            <Link to={`/product/${item.id}`}> {/* Navigate to the product detail page */}
              <img src={item.image} alt={item.description} className="rounded-lg w-full" />
              <div className="des text-left p-2">
                <span className="text-gray-600">{item.title}</span>
                <h5 className="md:text-lg mt-2 text-gray-900 text-sm font-semibold">{item.description}</h5>
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, index) => <FaStar key={index} />)}
                </div>
                <h4 className="text-xl text-[#088178]">${item.price}</h4>
              </div>
            </Link>
            <Link
              to="#"
              className="absolute bottom-5 right-2 bg-[#e8f6ea] text-[#088178] rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the link
                handleAddToCard(item);
              }}
            >
              <IoCartOutline />
            </Link>
            <div className='bg-yellow-300 p-2 hover:bg-yellow-400 hidden md:block' onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the link
                handleAddToCard(item);
              }}>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Promotional Banner */}
      <section id="sm-banner" className="flex flex-wrap justify-around section-p1 md:py-0 py-10">
        <div
          className="banner-box flex flex-col justify-center items-start text-left bg-cover bg-center min-w-[400px]  md:min-w-[580px] h-[30vh] md:h-[40vh] md:rounded-none rounded-lg p-8"
          style={{ backgroundImage: `url(${ImageLock2})` }}
        >
          <h4 className="text-white text-[20px] font-light">crazy deals</h4>
          <h2 className="text-white text-[32px] font-extrabold my-2">buy 1 get 1 free</h2>
          <span className="text-[#0e0e0e] text-[16px] font-medium pb-4">The best classic dress is on sale at cara</span>
          <button className="btn white border border-white text-black p-4 rounded hover:bg-[#088178] hover:text-white transition">
            Learn More
          </button>
        </div>
        <div
          className="banner-box2 banner-box flex flex-col md:mt-0 mt-9 justify-center items-start text-left bg-cover bg-center min-w-[400px]  md:min-w-[580px] h-[30vh] md:h-[40vh] md:rounded-none rounded-lg p-8 "
          style={{ backgroundImage: `url(${ImageLock1})` }}
        >
          <h4 className="text-white text-[20px] font-light">spring/summer</h4>
          <h2 className="text-white text-[32px] font-extrabold my-2">upcoming season</h2>
          <span className="text-[#0e0e0e] text-[16px] font-medium pb-4">The best classic dress is on sale at cara</span>
          <button className="btn white border border-white text-black p-4 rounded hover:bg-[#088178] hover:text-white transition">
            Collection
          </button>
        </div>
      </section>

      {/* Final Promotional Section */}
      <section id="banner3" className="flex justify-between flex-wrap p-20 ">
        <div
          className="banner-box flex flex-col justify-center items-start bg-cover bg-center md:min-w-[30%] h-[30vh] p-8 mb-5 md:block hidden"
          style={{ backgroundImage: `url(${ImageLock5})` }}
        >
          <h2 className="text-white font-black text-[22px]">Limited Time Offer</h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">50% off on all accessories</h3>
        </div>
        <div
          className="banner-box flex flex-col justify-center items-start bg-cover bg-center min-w-[30%] h-[30vh] p-8 mb-5 md:block hidden"
          style={{ backgroundImage: `url(${ImageLock4})` }}
        >
          <h2 className="text-white font-black text-[22px]">New Arrivals</h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">Check out our new collection</h3>
        </div>
        <div
          className="banner-box flex flex-col justify-center items-start bg-cover bg-center min-w-[30%] h-[30vh] p-8 mb-5 md:block hidden"
          style={{ backgroundImage: `url(${ImageLock3})` }}
        >
          <h2 className="text-white font-black text-[22px]">Summer Sale</h2>
          <h3 className="text-[#ec544e] font-extrabold text-[15px]">Up to 70% off</h3>
        </div>
      </section>


      {/* Newsletter Section */}
      <section id="newsletter" className="flex flex-wrap justify-around items-center bg-[#041e42] bg-no-repeat bg-[20%_30%] py-8" style={{ backgroundImage: "url('https://i.postimg.cc/R0Bs4qqt/b14.png')" }}>
        <div className="newstext text-left">
          <h4 className="text-white font-bold text-xl">Sign Up for Newsletters</h4>
          <p className="text-[#818ea0] font-semibold text-sm">
            Get Email updates about our latest shop and <span className="text-[#ffbd27]">special offers.</span>
          </p>
        </div>
        <div className="flex md:w-1/4 w-[80%]   mt-4 sm:mt-0">
          <input type="text" placeholder="Your email address" className="h-[50px] w-full text-sm px-5 rounded-l-md outline-none" />
          <button className="bg-[#088178] text-white px-5 py-2 whitespace-nowrap rounded-r-md">Sign Up</button>
        </div>
      </section>
    </>
  );
}

export default Shop;
