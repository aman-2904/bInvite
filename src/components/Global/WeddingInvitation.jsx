"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const invitations = [
  {
    id: 1,
    title: "Fleurs d'Alençon Wedding...",
    designer: "Oscar de la Renta",
    price: "$3.25 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622455283.jpg?v=1750369069&width=800", // replace with actual
  },
  {
    id: 2,
    title: "Watercolor Garland Wedding...",
    designer: "Paperless Post",
    price: "$3.25 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/620534125.png?v=1738221543&width=1000",
  },
  {
    id: 3,
    title: "Embossed Arc on Cream...",
    designer: "Paperless Post",
    price: "$3.25 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622454069.jpg?v=1750366747&width=800",
  },
  {
    id: 4,
    title: "Embossed Arc on White...",
    designer: "Paperless Post",
    price: "$3.25 Each",
    image:
      "https://www.papersource.com/cdn/shop/files/622454062.jpg?v=1750366705&width=800",
  },
];

export default function WeddingInvitations() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full py-12 container mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-serif text-gray-700 mb-10">
        Top Wedding Invitations
      </h2>

      <div className="flex justify-center gap-6 overflow-x-auto scrollbar-hide">
        {invitations.map((item) => (
          <div
            key={item.id}
            className="relative bg-white shadow-sm rounded-md  flex-shrink-0"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[320px] object-cover rounded-md mb-4"
            />

            {/* Favorite Heart */}
            <button
              onClick={() => toggleFavorite(item.id)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <Heart
                className={`w-6 h-6 ${
                  favorites.includes(item.id)
                    ? "fill-red-500 text-red-500"
                    : "hover:text-red-400"
                }`}
              />
            </button>

            {/* Text */}
            <div className="border-t border-gray-100 pt-3">
              <h3 className="font-semibold text-gray-800 truncate">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.designer}</p>
              <p className="text-sm text-gray-700">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gray-800 text-white px-6 py-3 rounded-md shadow hover:bg-gray-700 transition">
          SHOP THE COLLECTION
        </button>
      </div>
    </section>
  );
}
