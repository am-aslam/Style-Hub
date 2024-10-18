import React, { useState } from 'react';
import Image2 from '../Asset/jane.jpg' 

const Banner = () => {
  // State to manage the visibility of the subscribe section
  const [showSubscribe, setShowSubscribe] = useState(false);

  // Disable page scroll when the modal is open
  if (showSubscribe) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      {/* Header */}
      <header className="text-center py-28 bg-white">
        <h1 className="text-6xl font-bold">FASHION LIFE</h1>
        <h6 className="text-lg mt-4 ">
          Welcome to the Fashion of
          <span className="bg-black py-1 px-3 rounded-lg text-white "> Style's World</span>
        </h6>
      </header>

      {/* Image Header */}
      <header className="relative w-full" id="home">
        <img className="w-full h-auto" src={Image2} alt="Fashion" />
        <div className="absolute top-0 left-0 p-8 md:py-96 py-28">
          <h1 className="text-white text-4xl italic">Style's World</h1>
          <h1 className="text-white text-7xl hidden sm:block font-bold">FASHION STYLE</h1>
          <h6 className="mt-4">
            <button
              className="bg-white text-black py-3 px-6 text-lg opacity-75 hover:opacity-100"
              onClick={() => setShowSubscribe(true)} // Using state to toggle the subscribe form
            >
              SUBSCRIBE
            </button>
          </h6>
        </div>
      </header>

      {/* Subscribe Section */}
      {showSubscribe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Fashion Style</h2>
            <form className="z-50">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-2 w-full mb-4"
              />
              <button className="bg-black text-white py-2 px-4">Subscribe</button>
            </form>
            <button
              className="mt-4 text-red-500"
              onClick={() => setShowSubscribe(false)} // Close button to hide the subscribe form
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
