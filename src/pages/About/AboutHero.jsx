import React from 'react';

function AboutHero() {
  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('https://www.aarainc.com/wp-content/uploads/2024/09/hero-about.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">FASHION LIFE STYL</h1>
      </div>
    </section>
  );
}

export default AboutHero;
