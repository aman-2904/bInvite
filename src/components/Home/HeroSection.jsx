"use client";
import React, { useState, useEffect, useRef } from "react";

// You can replace these with your actual image paths in the /public folder
const images = [
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1974&auto=format&fit=crop",
];

// Data for each carousel slide
const carouselData = [
  {
    subtitle: "Craft & Quality",
    title: "Made for moments that matter",
    description: "Every card is intentionally crafted, from the first set of hands it passes through to the last.",
    image: images[0],
    bgColor: "bg-[#d8a989]",
    buttonColor: "bg-[#f6e0cc]",
    buttonHoverColor: "hover:bg-[#f3d7ba]",
  },
  {
    subtitle: "Timeless Design",
    title: "Elegance in every detail",
    description: "Our designs blend classic aesthetics with modern sensibilities for a truly unique feel.",
    image: images[1],
    bgColor: "bg-[#a9c2d8]",
    buttonColor: "bg-[#d1e0ee]",
    buttonHoverColor: "hover:bg-[#c1d5e8]",
  },
  {
    subtitle: "Sustainable Sourcing",
    title: "Kind to the planet",
    description: "We use recycled materials and eco-friendly processes to minimize our impact.",
    image: images[2],
    bgColor: "bg-[#a9d8b1]",
    buttonColor: "bg-[#d8f0dc]",
    buttonHoverColor: "hover:bg-[#c6e8cf]",
  },
  {
    subtitle: "Personal Touch",
    title: "Your message, beautifully delivered",
    description: "Customize your cards to create a personal and unforgettable connection.",
    image: images[3],
    bgColor: "bg-[#d8a9d1]",
    buttonColor: "bg-[#f5dff1]",
    buttonHoverColor: "hover:bg-[#eacbe5]",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Function to reset the timeout for auto-play
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // useEffect for auto-playing the carousel
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        ),
      3000 // Change slide every 5 seconds
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-[1467] h-[548] font-sans overflow-hidden relative">
      {/* Carousel container for sliding effect */}
      <div
        className="h-full whitespace-nowrap transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {carouselData.map((slide, index) => (
          <section
            key={index}
            className="w-full h-full inline-block whitespace-normal"
          >
            <div className="w-full h-full flex flex-col md:flex-row">
              {/* Left Text Section */}
              <div
                className={`${slide.bgColor} flex-1 flex flex-col justify-center items-center p-10 md:p-20 transition-colors duration-500`}
              >
                <p className="uppercase tracking-widest text-sm font-semibold text-gray-800">
                  {slide.subtitle}
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                  {slide.title.split('<br />').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h2>
                <p className="mt-6 text-base md:text-lg text-gray-800 max-w-md">
                  {slide.description}
                </p>
                <button
                  className={`mt-8 ${slide.buttonColor} text-gray-900 font-semibold px-8 py-3 rounded-md ${slide.buttonHoverColor} transition-all duration-300`}
                >
                  Learn More
                </button>
              </div>

              {/* Right Image Section */}
              <div className="flex-1 relative w-full h-[300px] md:h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  // Using a simple img tag for easier handling with external URLs
                  // In a Next.js project, you'd configure your next.config.js for these domains
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/1000x1000/EEE/31343C?text=Image+Not+Found`;
                  }}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return <HeroCarousel />;
}
