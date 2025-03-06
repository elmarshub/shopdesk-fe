"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/icons/logo.svg";
import menu from "../../public/icons/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white px-[clamp(16px,_4vw,_120px)]">
      <div className="py-4 flex items-center justify-between max-w-screen-xl">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={32} height={32} />
          <p className="text-2xl font-semibold">ShopDesk</p>
        </div>

        <nav className="hidden md:flex gap-6 text-[16px]">
          <Link href="/features" className="hover:text-green-500 transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-green-500 transition">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-green-500 transition">
            Blog
          </Link>
          <Link href="/faq" className="hover:text-green-500 transition">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-green-500 transition">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Start for free
          </button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={menu} alt="menu" width={28} height={28} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-screen bg-white shadow-lg flex flex-col items-left gap-4 py-6 md:hidden overflow-hidden px-4">
          <Link
            href="/features"
            className="hover:text-green-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-green-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="hover:text-green-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="hover:text-green-500 transition"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="hover:text-green-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <button
            className="border border-black px-4 py-2 rounded-lg hover:bg-gray-100 transition w-full"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition w-full"
            onClick={() => setIsOpen(false)}
          >
            Start for free
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
