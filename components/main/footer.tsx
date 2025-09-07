"use client";
import Link from "next/link";

const FOOTER_DATA = [
  {
    title: "Quick Links",
    links: [
      { label: "About Me", href: "#about-me" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/astucess" },
      { label: "Portfolio", href: "https://portfoliocom-nine.vercel.app/" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Facebook", href: "https://facebook.com" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {FOOTER_DATA.map((column) => (
          <div
            key={column.title}
            className="min-w-[200px] flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[rgb(112,66,248)] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Zanix. All rights reserved.
      </div>
    </footer>
  );
};
