// ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Data from '../../data/Data';
import { addToCart } from '../../Redux/CartSlice';

const ProductDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const product = Data.find(item => item.id === parseInt(id));  // Find product by ID
  const [selectedColor, setSelectedColor] = useState(null);  // State for selected color
  const [selectedSize, setSelectedSize] = useState(null);  // State for selected size
  const dispatch = useDispatch();  // Redux dispatch

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    const productToAdd = {
      ...product,
      selectedColor,
      selectedSize,
    };

    dispatch(addToCart(productToAdd));  // Dispatch product with selected options
  };

  return (
    <div className="py-28 flex justify-center items-center">
      <div className='border-2 border-gray-200 p-8 rounded-lg flex flex-col md:flex-row w-full max-w-5xl shadow-lg'>
        {/* Product Image */}
        <div className='w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0'>
          <img src={product.image} alt={product.title} className="rounded-lg w-full" />
        </div>

        {/* Product Info */}
        <div className='w-full md:w-2/3 pl-0 md:pl-44 flex flex-col justify-between'>
          <div className='flex justify-between items-start mb-4'>
            <h2 className="text-2xl md:text-4xl font-semibold uppercase">{product.title}</h2>
            <h4 className="text-lg md:text-xl font-semibold text-red-400">${product.price}</h4>
          </div>

          {/* Color Selection */}
          <div className="flex space-x-2 mb-4">
            {["red", "blue", "black", "yellow"].map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-lg border-2 ${selectedColor === color ? "border-black" : "border-gray-400"
                  }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>

          {/* Size Selection */}
          <div className="flex space-x-4 mb-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`border-2 px-3 py-1 rounded-lg ${selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                  }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-gray-600 mt-4">
            Lifestyle websites try to cover everything for everyone, but as women, femme, and non-binary people,
            we’re multi-layered with unique needs and interests—and we deserve media that recognizes our interests.
            We follow these 9 websites that are as resourceful as they are empowering and uplifting—covering we’re multi-layered
            with unique needs
          </p>
          <div className='flex gap-3 py-5 md:flex-row flex-col md:w-60 rounded-md w-full'>
            {/* Add to Cart Button */}
            <button
              className="bg-yellow-300 p-2 hover:bg-yellow-400 md:w-1/2 w-full rounded-md shadow"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Add to Cart Button */}
            <button
              className="bg-yellow-300 p-2 hover:bg-yellow-400 md:w-1/2 w-full rounded-md shadow"

            >
              Buy Now
            </button>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
