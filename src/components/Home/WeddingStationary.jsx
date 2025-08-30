"use client";
import React from "react";

const items = [
  "Save the Dates",
  "Greeting Cards",
  "Wedding Announcements",
  "Wedding Stationery",
  "Menus",
  "Programs",
  "Custom Stamps",
  "Custom Embossers",
];

export default function WeddingStationery() {
  return (
    <section className="w-full py-12  bg-white">
      {/* Heading with dividers */}
      <div className="container mx-auto flex items-center justify-center mb-10">
        <div className="flex-grow border-t border-gray-200"></div>
        <h2 className="px-6 text-2xl md:text-3xl font-serif italic text-gray-700 whitespace-nowrap">
          Wedding Celebrations & Stationery
        </h2>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      {/* Grid of buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <button
            key={idx}
            className="border border-yellow-300 text-gray-700 py-3 px-4 text-sm font-medium hover:bg-yellow-50 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
