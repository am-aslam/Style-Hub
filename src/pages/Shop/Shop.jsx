// Shop.js
import React, { useContext, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import ShopData from '../../data/Shopdata';
import { Data } from '../../data/Data';
import { Link } from 'react-router-dom';
import { CardContext } from '../Shop/CardProvider';  // Correct context import

function Shop() {
  const [cart, setCart] = useState([]);
  const { addToCard } = useContext(CardContext);  // Use CardContext with useContext

  const handleAddToCard = (product) => {
    const isInCart = cart.find((item) => item.id === product.id);

    if (isInCart) {
      alert(`${product.title} is already in your cart!`);
    } else {
      setCart((prevCart) => [...prevCart, product]);
      addToCard(product);  // Add to global cart context
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

      {/* Featured Products */}
      <section id="product1" className="p-10 text-center">
        <h2 className="text-6xl font-semibold">Featured Products</h2>
        <p className="text-gray-700 mb-6">Summer Collection New Modern Design</p>

        <div className="flex flex-wrap justify-center">
          {ShopData.map((product) => (
            <div
              key={product.id}
              className="w-1/4 md:min-w-[250px] min-w-[200px] p-2 cursor-pointer transition-shadow duration-200 hover:shadow-lg relative"
            >
              <Link to={`/product/${product.id}`}>
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
              <div
                className="bg-yellow-300 p-2 hover:bg-yellow-400"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the link
                  handleAddToCard(product);
                }}
              >
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

      {/* New Arrivals */}
      <section id="new-arrivals" className="p-10 text-center">
        <h2 className="text-6xl font-semibold">New Arrivals</h2>
        <p className="text-gray-700 mb-6">Summer Collection New Modern Design</p>
        <div className="flex flex-wrap justify-center">
          {Data.map((item) => (
            <div
              key={item.id}
              className="w-1/4 md:min-w-[250px] min-w-[200px] p-2 cursor-pointer transition-shadow duration-200 hover:shadow-lg relative"
            >
              <Link to={`/product/${item.id}`}>
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
              <div
                className="bg-yellow-300 p-2 hover:bg-yellow-400"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the link
                  handleAddToCard(item);
                }}
              >
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
