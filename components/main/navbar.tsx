"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="hover:text-blue-400 transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="block text-gray-300 hover:text-blue-400 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
