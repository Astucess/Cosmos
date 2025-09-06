"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-white text-lg">MyPortfolio</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.title}
              href={nav.link}
              className="text-gray-300 hover:text-white transition"
            >
              {nav.title}
            </Link>
          ))}
        </div>

        {/* Socials (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.title}
              href={nav.link}
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {nav.title}
            </Link>
          ))}

          <div className="flex gap-4 mt-4">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
