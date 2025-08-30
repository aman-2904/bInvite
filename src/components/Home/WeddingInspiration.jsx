"use client";

import Image from "next/image";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
];

export default function WeddingInspiration() {
  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light italic">
          Wedding Inspiration
        </h2>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Browse photos from our style experts for inspiration to create your day in your own unique vision.
        </p>

        <button className="mt-6 px-6 py-2 bg-white border border-gray-800 text-gray-800 text-sm tracking-wide uppercase rounded hover:bg-gray-100 transition">
          FOLLOW US ON INSTAGRAM
        </button>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-4 grid grid-cols-3 gap-4 mt-12">
  {/* First item → spans 2 columns, 1 row */}
  <div className="col-span-1 row-span-2 bg-gray-200 flex items-center justify-center">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-3.jpg?v=1737586002&width=600" alt="" />
  </div>

  {/* Normal items */}
  <div className="bg-gray-200 flex items-center justify-center col-span-1 row-span-1">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-1.jpg?v=1737586002&width=600" alt="" />
  </div>
  <div className="bg-gray-200 flex items-center justify-center">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-7_1.jpg?v=1737586001&width=600" alt="" />
  </div>
  <div className="bg-gray-200 flex items-center justify-center col-span-1 row-span-2">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-2.jpg?v=1737586003&width=600" alt="" />
  </div>
  <div className="bg-gray-200 flex items-center justify-center">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-5.jpg?v=1737586000&width=600" alt="" />
  </div>
  <div className="bg-gray-200 flex items-center justify-center">
    <img src="https://www.papersource.com/cdn/shop/files/2024-05-square-feature-wedding-invitations.jpg?v=1737586000&width=600" alt="" />
  </div>
  <div className="bg-gray-200 flex items-center justify-center col-span-1 row-span-2">
    <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-4.jpg?v=1737586002&width=600" alt="" />
  </div>
    <div className="bg-gray-200 flex items-center justify-center">
        <img src="https://www.papersource.com/cdn/shop/files/2024-07-square-feature-ps-wedding-insta-6.jpg?v=1737586003&width=600" alt="" />
    </div>
      <div className="bg-gray-200 flex items-center justify-center">
        <img src="https://www.papersource.com/cdn/shop/files/2024-03-square-feature-pp-suite.jpg?v=1737586001&width=600" alt="" />
      </div>
</div>


      {/* Footer Text */}
      <div className="mt-12 max-w-5xl mx-auto px-4 text-center text-gray-600 text-sm leading-relaxed">
        <p>
          <strong>Paper Source Weddings</strong> is the start of your happily ever after.
          Design your perfect wedding day with our selection of wedding materials and accessories from Paper Source. 
          We have the best selection: custom wedding invitations, save the dates, wedding stationery, wedding décor,
          and so much more to make your wedding day special and memorable. 
          From wedding ceremony to reception, our team is here to support you every step of the way.
        </p>
        <a href="#" className="block mt-4 text-blue-600 underline">
          Read More
        </a>
      </div>
    </section>
  );
}
