import React from 'react';
import Image1 from '../Asset/trending-1.jpg';
import Image2 from '../Asset/trending-2.jpg';
import Image3 from '../Asset/trending-3.jpg';

const FashionTrends = () => {
    const TrendingItem = ({ imgSrc }) => (
        <div className="relative group">
            {/* Image */}
            <img src={imgSrc} alt="Trending" className="w-full" />

            {/* Buy Now Button */}
            <button className="btn-buy absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-white text-black py-2 px-10 rounded-lg shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Buy Now
            </button>

            {/* Overlay Effect */}
            <div className="overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
        </div>
    );

    return (
        <section className="fashion-trends py-20">
            <div className="container mx-auto">
                {/* Title Section */}
                <div className="fashion-box text-center mb-20 relative">
                    <div className="title-style relative inline-block mb-8 p-8 shadow-lg bg-white z-10">
                        <h1 className="text-4xl text-black">Vogue Trends</h1>
                    </div>
                    {/* Decorative Pink Boxes */}
                    <div className="absolute top-0 left-0  -mt-4 bg-pink-400 h-16 w-32 sm:h-20 sm:w-40 lg:h-24 lg:w-48 z-0"></div>
                    <div className="absolute bottom-0 right-0  bg-pink-400 h-16 w-32 sm:h-20 sm:w-40  lg:h-24 lg:w-48 z-0"></div>

                    <p className="text-gray-500 mx-auto max-w-2xl z-10 relative md:text-center text-center">
                        Lifestyle websites try to cover everything for everyone, but as women,
                        femme, and non-binary people, we’re multi-layered with unique needs
                        interests—and we deserve media that recognizes our
                        interests. We follow these 9 websites that are as resourceful
                    </p>
                </div>
                {/* Trending Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TrendingItem imgSrc={Image1} />
                    <TrendingItem imgSrc={Image2} />
                    <TrendingItem imgSrc={Image3} />
                </div>
            </div>
        </section>
    );
};

export default FashionTrends;
