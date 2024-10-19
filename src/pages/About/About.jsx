import React from 'react';
import AboutHero from '../About/AboutHero';
import TeamSection from '../About/TeamSection';
import Testimonials from '../About/Testimonials';

function About() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <AboutHero />

      {/* Brand Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2010, our fashion brand was born out of the desire to bring bold, fresh designs to life. Our commitment to quality,
            sustainability, and timeless style has made us a beloved name in the industry. From humble beginnings to global recognition,
            our journey is one of passion and creativity
            Founded in 2010, our fashion brand was born out of the desire to bring bold, fresh designs to life. Our commitment to quality,
            sustainability, and timeless style has made us a beloved name in the industry. From humble beginnings to global recognition,
            our journey is one of passion and creativity
          </p>
        </div>
      </section>
      {/* Team Section */}
      <TeamSection />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Call-to-Action */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to explore our latest collections?</h3>
          <a href="/shop" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300">Shop Now</a>
        </div>
      </section>
    </>
  );
}

export default About;
