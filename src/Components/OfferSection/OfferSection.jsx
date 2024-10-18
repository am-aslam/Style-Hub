import React from 'react'
import ImagePop from '../Asset/exclusive.jpg'

const OfferSection = () => {
  return (
    <section className="offer bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/Z1Wpsgp/offer-bg.jpg)' }}>
      <div className="flex flex-wrap items-center">
        <div className="md:w-1/2 text-center">
          <img src={ImagePop} alt="" className="mx-auto mb-4" />
        </div>
        <div className="md:w-1/2 p-8 bg-white bg-opacity-80">
          <h4 className="text-2xl mb-4">Vogue Exclusive</h4>
          <p className="mb-4">Lifestyle websites try to cover
            everything for everyone, but as women, femme, and non-binary
            people, we’re multi-layered with unique needs interests—and we
            deserve media that recognizes our interests. We follow these
            9 websites that are as resourceful
          </p>
          <a href="#" className="bg-black text-white py-2 px-4">Subscribe</a>
        </div>
      </div>
    </section>
  );
};


export default OfferSection;
