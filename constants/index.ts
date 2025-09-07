// constants/index.ts
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Single link (like source code repo)
export const LINKS = {
  sourceCode: "https://github.com/astucess",
};

// Navbar links
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;

// Socials
export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/astucess" },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://linkedin.com" },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com" },
] as const;

// Footer
export const FOOTER_DATA = [
  {
    title: "Community",
    links: [
      { label: "YouTube", href: "https://youtube.com" },
      { label: "GitHub", href: "https://github.com/astucess" },
      { label: "Discord", href: "https://discord.com" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Become Sponsor", href: "https://youtube.com" },
      { label: "Learning about me", href: "https://example.com" },
      { label: "Contact Me", href: "mailto:contact@example.com" },
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    title: "Zanix Portfolio",
    description: "Personal portfolio website built with Next.js, TailwindCSS, and Three.js animations.",
    link: "https://zanix.dev",
  },
  {
    title: "PlutoWebWorks",
    description: "A sleek web development studio site showcasing modern animations and responsive design.",
    link: "https://plutowebworks.com",
  },
  {
    title: "Astucess.xyz",
    description: "A full-stack platform with advanced UI/UX, deployed on Render.",
    link: "https://astucess.xyz",
  },
  {
    title: "Portfolio.com",
    description: "Custom portfolio site with smooth navigation and integrated social links.",
    link: "https://portfolio.com",
  },
  {
    title: "Portfolio.xyz",
    description: "Minimalistic portfolio with grid-based layout and light/dark modes.",
    link: "https://portfolio.xyz",
  },
  {
    title: "Pluto Voyage",
    description: "Creative project with advanced preloader effects and animations.",
    link: "https://plutovoyage.com",
  },
  {
    title: "Galaxy Preloader",
    description: "3D galaxy preloader built using Three.js for interactive animations.",
    link: "https://github.com/astucess/galaxy-preloader",
  },
];
