"use client";

import Image from "next/image";

const seasons = [
  {
    title: "Summer",
    image: "https://www.papersource.com/cdn/shop/files/622456044.jpg?v=1750369186&width=800", // replace with actual image path
    link: "#",
  },
  {
    title: "Fall",
    image: "https://www.papersource.com/cdn/shop/files/622454173.jpg?v=1750367794&width=800",
    link: "#",
  },
  {
    title: "Winter",
    image: "https://www.papersource.com/cdn/shop/files/622454355.jpg?v=1750367067&width=800",
    link: "#",
  },
  {
    title: "Spring",
    image: "https://www.papersource.com/cdn/shop/files/622456042.jpg?v=1750369912&width=800",
    link: "#",
  },
];

export default function ShopBySeason() {
  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-light italic mb-10">
        Shop by <span className="font-normal">Season</span>
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {seasons.map((season, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-full bg-white border border-gray-200 rounded-md shadow-sm p-4">
              <img
                src={season.image}
                alt={season.title}
                width={400}
                height={600}
                className="rounded-md object-cover mx-auto"
              />
            </div>
            <h3 className="mt-4 text-xl font-light italic">{season.title}</h3>
            <a
              href={season.link}
              className="mt-1 text-sm font-medium underline underline-offset-4"
            >
              EXPLORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
