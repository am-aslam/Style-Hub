import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/Data'; // Assuming you have the data available
import { CardContext } from './CardProvider';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCard } = useContext(CardContext);
    const product = Data.find(item => item.id === parseInt(id));

    // Manage selected state for color and size
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

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

        addToCard(productToAdd); // Add to the global cart state
    };

    return (
        <div className="py-28 flex justify-center items-center">
            <div className='border-2 border-gray-200 p-8 rounded-lg flex flex-col md:flex-row w-full max-w-5xl shadow-lg'>
                <div className='w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0'>
                    <img src={product.image} alt={product.title} className="rounded-lg w-full" />
                </div>

                <div className='w-full md:w-2/3 pl-0 md:pl-44 flex flex-col justify-between'>
                    <div className='flex justify-between items-start mb-4'>
                        <h2 className="text-2xl md:text-4xl font-semibold uppercase">{product.title}</h2>
                        <h4 className="text-lg md:text-xl font-semibold text-red-400">${product.price}</h4>
                    </div>

                    {/* Color Selection */}
                    <div className="flex space-x-2 mb-4">
                        {["red", "blue", "yellow", "green"].map((color) => (
                            <span
                                key={color}
                                className={`w-8 h-8 bg-${color}-400 cursor-pointer border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                                onClick={() => setSelectedColor(color)}
                            ></span>
                        ))}
                    </div>

                    {/* Product Description */}
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <p className="text-sm md:text-base mb-4">
                        Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing,
                        html css tutorials, css animations and css effects, javascript and jquery tutorials
                        and related so on.
                    </p>

                    {/* Size Selection */}
                    <div className="flex space-x-2 mb-4">
                        {["S", "M", "L", "XL"].map((size) => (
                            <span
                                key={size}
                                className={`w-8 h-8 flex items-center justify-center bg-gray-200 cursor-pointer border-2 ${selectedSize === size ? 'border-black' : 'border-gray-300'} rounded-full hover:bg-gray-500 hover:text-white`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </span>
                        ))}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        className="w-full md:w-60 bg-yellow-300 text-white py-2 px-10 rounded-lg hover:bg-yellow-400 transition duration-300"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
