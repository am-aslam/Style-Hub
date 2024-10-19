import React from 'react';

function TeamSection() {
  const teamMembers = [
    { name: 'Hafeex', role: 'Founder & CEO', image: 'https://fullyfilmy.in/cdn/shop/files/The-Boys_AI_MOCKUP.jpg?v=1696405510' },
    { name: 'Thasneem', role: 'Creative Director', image: 'https://fullyfilmy.in/cdn/shop/files/The-Boys_AI_MOCKUP.jpg?v=1696405510' },
    { name: 'Ameen', role: 'Marketing Head', image: 'https://fullyfilmy.in/cdn/shop/files/The-Boys_AI_MOCKUP.jpg?v=1696405510' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mx-auto object-cover"/>
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
