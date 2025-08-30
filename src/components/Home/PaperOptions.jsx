"use client";
import React from "react";

const paperOptions = [
  {
    id: 1,
    title: "Paper Bar",
    description:
      "Choose from our extensive selection of paper items curated to compliment all of your stationery.",
    image:
      "https://www.papersource.com/cdn/shop/files/2024-07-square-tall-wedding-fine-paper_58a2d17d-9934-49a8-9ca4-ef3ab4798eac.jpg?v=1737586128&width=500", // replace with real image
    link: "#",
  },
  {
    id: 2,
    title: "Fine Paper",
    description:
      "Our selection of handmade and fine papers can be used to add impressive embellishments to your suite.",
    image:
      "https://www.papersource.com/cdn/shop/files/2024-07-square-tall-wedding-paper-bar.jpg?v=1737586047&width=500", // replace with real image
    link: "#",
  },
  {
    id: 3,
    title: "Custom Addressing",
    description:
      "Deliver your wedding stationery in style with personalized address labels, custom stamps and embossers.",
    image:
      "https://www.papersource.com/cdn/shop/files/2024-07-square-tall-wedding-custom-addressing.jpg?v=1737586033&width=500", // replace with real image
    link: "#",
  },
  {
    id: 4,
    title: "Wedding Events",
    description:
      "From bridal showers to engagement parties, make every wedding event shine with the perfect invitation.",
    image:
      "https://www.papersource.com/cdn/shop/files/2024-07-square-tall-wedding-events.jpg?v=1737586033&width=500", // replace with real image
    link: "#",
  },
];

export default function PaperSource() {
  return (
    <section className="w-full py-12  bg-[#fdf7f7]">
        <div className="container mx-auto">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-700 mb-10">
        Choosing Paper Source
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
        {paperOptions.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[260px] object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="font-serif text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              <a
                href={item.link}
                className="text-xs uppercase tracking-wide font-medium text-gray-700 hover:text-gray-900 underline"
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
