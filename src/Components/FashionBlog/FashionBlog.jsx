import React from 'react'


const FashionBrands = () => {
    const BrandItem = ({ imgSrc, title }) => (
        <div className="text-center">
          <div className="brand-logo mx-auto bg-white rounded-full shadow-lg w-48 h-48 flex items-center justify-center mb-4">
            <img src={imgSrc} alt="Brand" className="w-24" />
          </div>
          <p className="font-bold">{title}</p>
        </div>
      );
      
    return (
      <section className="fashion-brands my-20">
        <div className="title-style text-center mb-8">
          <h1 className="text-4xl">Our Fashion Brands</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          <BrandItem imgSrc="https://i.ibb.co/vQgV2R0/brand-1.png" title="Exclusive Offers" />
          <BrandItem imgSrc="https://i.ibb.co/g3yQzBB/brand-2.png" title="Min. 40% off" />
          <BrandItem imgSrc="https://i.ibb.co/MVBhpFf/brand-4.png" title="Free Delivery" />
          <BrandItem imgSrc="https://i.ibb.co/MNYw41G/brand-6.png" title="Up to 50% off" />
        </div>
      </section>
    );
  };

export default FashionBrands;
