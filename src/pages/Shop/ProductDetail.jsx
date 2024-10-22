import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/Data'; // Adjust the path to your data source
import { CardContext } from './CardProvider';

const ProductDetail = () => {
    const { id } = useParams(); // Get product ID from URL params
    const [cart, setCart] = useState([]); // Local cart state
    const { addToCard } = useContext(CardContext); // Access global cart context
    const product = Data.find(item => item.id === parseInt(id)); // Assuming id is a number

    if (!product) {
        return <div>Product not found!</div>; // Show this if no matching product is found
    }

    // Handle adding the product to the cart
    const handleAddToCard = (product) => {
        const isInCart = cart.find((item) => item.id === product.id);
  
        if (isInCart) {
            alert(`${product.title} is already in your cart!`);
        } else {
            setCart((prevCart) => [...prevCart, product]); // Add to local state
            addToCard(product); // Add to the global cart state
        }
    };

    return (
        <div className="py-28 flex justify-center items-center">
            <div className='border-2 border-gray-200 p-8 rounded-lg flex flex-col md:flex-row w-full max-w-5xl shadow-lg'>
                {/* Product Image */}
                <div className='w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0'>
                    <img src={product.image} alt={product.description} className="rounded-lg w-full" />
                </div>

                {/* Product Info */}
                <div className='w-full md:w-2/3 pl-0 md:pl-44 flex flex-col justify-between'>
                    <div className='flex justify-between items-start mb-4'>
                        <h2 className="text-2xl md:text-4xl font-semibold uppercase">{product.title}</h2>
                        <h4 className="text-lg md:text-xl font-semibold text-red-400">${product.price}</h4>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 bg-red-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-blue-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-yellow-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-green-400 cursor-pointer border-2 border-gray-300'></span>
                    </div>

                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <p className="text-sm md:text-base mb-4">
                        Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing,
                        html css tutorials, css animations and css effects, javascript and jquery tutorials
                        and related so on.
                    </p>

                    {/* Size Options */}
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>S</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>M</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>L</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>XL</span>
                    </div>

                    {/* Add to Cart Button */}
                    <div className='px-1'>
                        <button
                            className="w-full md:w-auto bg-yellow-300 text-white py-2 px-10 rounded-lg hover:bg-yellow-400 transition duration-300"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering link
                                handleAddToCard(product);
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
