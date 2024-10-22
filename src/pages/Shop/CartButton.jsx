import React, { useState, useContext } from 'react';
import { CardContext } from '../Shop/CardProvider';  // Importing CartContext
import { MdDelete } from "react-icons/md";          // Delete icon

const CartButton = () => {
    const { addToCard, closeCart } = useContext(CardContext);  // Access addToCard and closeCart from context
    const [count, setCount] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState('product2');

    const basePrices = {
        product1: 100,
        product2: 150,
        product3: 200
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const totalPrice = basePrices[selectedProduct] * count;

    const handlePayment = () => {
        // Payment logic: Redirect to payment or process order
        console.log("Proceeding to payment with total price:", totalPrice);
    };

    return (
        <div className="py-28 flex flex-col justify-center items-center border-2">
            {/* Product box */}
            <div className='border-2 border-gray-200 p-8 rounded-lg flex flex-col md:flex-row w-full max-w-5xl shadow-lg'>
                {/* Product Image */}
                <div className='w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0'>
                    <img src='' alt="Product Image" className="rounded-lg w-full" />
                </div>

                {/* Product Info */}
                <div className='w-full md:w-2/3 pl-0 md:pl-44 flex flex-col justify-between'>
                    <div className='flex justify-between items-start mb-4'>
                        <h2 className="text-2xl md:text-4xl font-semibold uppercase">Product Name</h2>
                        <h4 className="text-lg md:text-xl font-semibold text-red-400">${totalPrice}</h4>
                        {/* Close Cart Button */}
                        <button onClick={closeCart} className="close-button text-red-500 flex items-center font-bold p-2">
                            <MdDelete size={20} />
                        </button>
                    </div>

                    {/* Color Options */}
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 bg-red-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-blue-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-yellow-400 cursor-pointer border-2 border-gray-300'></span>
                        <span className='w-8 h-8 bg-green-400 cursor-pointer border-2 border-gray-300'></span>
                    </div>

                    <p className="text-gray-700 mb-4">Welcome to our store! Browse our amazing products.</p>

                    {/* Size Options */}
                    <div className="flex space-x-2 mb-4">
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>S</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>M</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>L</span>
                        <span className='w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-gray-500 hover:text-white'>XL</span>
                    </div>

                    {/* Quantity Control */}
                    <div className="flex items-center mb-4">
                        <button onClick={decrementCount} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
                        <span className="mx-4">{count}</span>
                        <button onClick={incrementCount} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
                    </div>
                </div>
            </div>
            
            {/* Payment Button */}
            <button
                className="w-full md:w-auto bg-yellow-300 text-white py-2 px-10 rounded-lg hover:bg-yellow-400 transition duration-300 mt-6"
                onClick={handlePayment}
            >
                Payment
            </button>
        </div>
    );
};

export default CartButton;
