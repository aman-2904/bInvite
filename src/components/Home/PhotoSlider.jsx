// components/PhotoSlider.js

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Göreme Valley",
    src: "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=2969&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Saint Antonien",
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2952&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Nagano Prefecture",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Marrakesh Merzouga",
    src: "https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Los Lances Beach",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2940&auto=format&fit=crop",
  },
];

export default function PhotoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex justify-center items-center">
      {/* Container for the main background image */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          <motion.div
            key={photos[activeIndex].id}
            layoutId={`card-${photos[activeIndex].id}`}
            className="absolute inset-0"
            transition={{ duration: 2, ease: [0.1, 0.92, 0, 1] }}
          >
            <img
              src={photos[activeIndex].src}
              alt={photos[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Small preview cards */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="flex justify-center gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layoutId={`card-${photo.id}`}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-lg w-24 h-36 md:w-32 md:h-44 flex-shrink-0`}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {index !== activeIndex && (
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 transition-colors"
      >
        <ChevronLeft size={32} className="text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20 transition-colors"
      >
        <ChevronRight size={32} className="text-white" />
      </button>
    </div>
  );
}