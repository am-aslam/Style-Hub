import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'Mubark', feedback: 'The quality of the fabrics and the designs are outstanding! I always receive compliments when wearing their clothes.', image: 'https://cdn.aglty.io/boys-town/quotes/ryan_20230915120925.jpg' },
    { name: 'Grace Kelly', feedback: 'I love how unique and stylish their pieces are. Each collection brings something new and exciting.', image: 'https://static.vecteezy.com/system/resources/previews/026/829/465/non_2x/beautiful-girl-with-autumn-leaves-photo.jpg' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border p-6 rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto object-cover"/>
              <p className="text-gray-600 italic mt-4">"{testimonial.feedback}"</p>
              <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
