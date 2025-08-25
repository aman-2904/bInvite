"use client"; 
import { useState } from "react";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState("MINTED");

  const mainTabs = ["MINTED", "MINTED WEDDINGS"];
  const categories = [
    "Wedding",
    "Back To School",
    "Baby & Kids",
    "Art & Home",
    "Stationery",
    "Gifts",
    "Online Invitations",
  ];

  return (
    <header className="w-full border-b bg-white">
      {/* Top Row: Links + Tabs + Icons */}
      <div className="flex justify-between items-center px-6 py-2 text-sm text-gray-600 border-b">
        
        {/* Left links */}
        <div className="flex gap-4">
          <Link href="#">Submit Artwork</Link>
          <Link href="#">Vote on Artwork</Link>
          <span>|</span>
          <Link href="#">Trade Program</Link>
        </div>

        {/* Center Tabs */}
        <div className="flex gap-6">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
                activeTab === tab
                  ? "border-b-2 border-gray-800 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <Link href="#" className="text-sm font-medium">
            Sign In
          </Link>
        </div>
      </div>

      {/* Logo + Categories (same row) */}
      <div className="flex items-center px-6 py-4 border-b">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Minted Logo"
            width={160}
            height={50}
            priority
            className="flex justify-start"
          />
        </Link>

        {/* Categories */}
        <nav className="flex gap-10 text-md font-medium text-[#37514D] justify-between ml-46">
          {categories.map((cat) => (
            <Link
              key={cat}
              href="#"
              className="hover:text-black transition"
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>

      {/* Offer Banner */}
      <div className="bg-[#37514D] text-white text-center text-sm py-2 flex justify-center items-center">
        <span>
          Ends Tomorrow | 15% off wedding*; 25% off save the dates.{" "}
          <strong>Code: WEDDING2025</strong>{" "}
          <Link href="#" className="underline ml-2">
            View all offers ▸
          </Link>
        </span>
      </div>
    </header>
  );
}
