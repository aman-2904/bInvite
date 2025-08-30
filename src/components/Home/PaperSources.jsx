'use client';

import React from 'react';

// Data for the cards, using placeholder images.
// Replace these with your actual image paths from the `public` folder.
const paperOptions = [
  {
    id: 1,
    title: 'Paper Bar',
    description: 'Choose from our extensive selection of paper items curated to compliment all of your stationery.',
    imageUrl: '/paper-bar.jpg', // Placeholder, e.g., 'https://placehold.co/400x500/a2d2a7/5c5c5c?text=Paper+Bar'
  },
  {
    id: 2,
    title: 'Fine Paper',
    description: 'Our selection of handmade and fine papers can be used to add impressive embellishments to your suite.',
    imageUrl: '/fine-paper.jpg', // Placeholder, e.g., 'https://placehold.co/400x500/f5e0e5/5c5c5c?text=Fine+Paper'
  },
  {
    id: 3,
    title: 'Custom Addressing',
    description: 'Deliver your wedding stationery in style with personalized address labels, custom stamps and embossers.',
    imageUrl: '/custom-addressing.jpg', // Placeholder, e.g., 'https://placehold.co/400x500/e0e0e0/5c5c5c?text=Custom+Addressing'
  },
  {
    id: 4,
    title: 'Wedding Events',
    description: 'From bridal showers to engagement parties, make every wedding event shine with the perfect invitation.',
    imageUrl: '/wedding-events.jpg', // Placeholder, e.g., 'https://placehold.co/400x500/fdf0f2/5c5c5c?text=Wedding+Events'
  },
];

// Card component for each option
function PaperCard({ title, description, imageUrl }) {
  return (
    <div className="group w-full bg-white text-center transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = `https://placehold.co/400x500/f5f5f5/999999?text=${title.replace(' ', '+')}`; }}
        />
      </div>
      <div className="py-8 px-6">
        <h3 className="text-3xl font-serif text-gray-700 italic mb-3" style={{ fontFamily: '"Cormorant Garamond", serif' }}>{title}</h3>
        <p className="text-gray-500 mb-4 h-20">{description}</p>
        <a href="#" className="inline-block text-sm font-semibold tracking-widest text-gray-600 relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-gray-400 after:bottom-[-4px] after:left-0 after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300">
          EXPLORE
        </a>
      </div>
    </div>
  );
}

// Main component to be used in your page
export default function PaperSources() {
  return (
    <>
      {/* It's good practice to import fonts in your main layout or global CSS file. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400&family=Lato:wght@400;700&display=swap');
        body {
          font-family: 'Lato', sans-serif;
        }
      `}</style>
      <div className="bg-orange-100 min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-serif italic text-gray-700 relative inline-block pb-4" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Choosing Paper Source
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gray-300"></span>
            </h2>
          </header>

          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {paperOptions.map((option) => (
              <PaperCard
                key={option.id}
                title={option.title}
                description={option.description}
                imageUrl={option.imageUrl}
              />
            ))}
          </main>
        </div>
      </div>
    </>
  );
}

