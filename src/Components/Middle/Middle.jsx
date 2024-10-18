import React from 'react';
import Log1 from '../Asset/banner-1.jpg';


const Middle = () => {
    return (
        <div className="banner flex flex-col md:flex-row justify-between items-center md:items-start p-8 py-32 relative">
            {/* Image Section */}
            <div className="banner-img w-full md:w-1/2 mb-6 md:mb-0">
                <img
                    src={Log1}
                    alt="Fashion Banner"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 md:pl-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Fashion Story
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 md:text-start text-center md:line-clamp-none line-clamp-4">
                    Lifestyle websites try to cover everything for everyone, but as women, femme, and non-binary people,
                    we’re multi-layered with unique needs and interests—and we deserve media that recognizes our interests.
                    We follow these 9 websites that are as resourceful as they are empowering and uplifting—covering
                    we’re multi-layered with unique needs and interests—and we deserve media that recognizes our interests.
                    We follow these 9 websites that are as resourceful as they are empowering and uplifting—covering
                    we’re multi-layered with unique needs and interests—and we deserve media that recognizes our interests.
                    We follow these 9 websites that are as resourceful as they are empowering and uplifting—covering
                    everything from personal finance to mindful meditation.
                </p>

                {/* Explore Button */}
                <button className="bg-blue-600 text-white py-2 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                    Explore
                </button>
            </div>
        </div>
    );
};

export default Middle;
