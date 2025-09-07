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
    title: "Modern Websites with Advanced Animations",
    description:
      "PlutoWebWorks is your creative powerhouse for building stunning, modern, and responsive websites. It blends cinematic design with smooth animations and top-tier performance. The goal is to deliver sleek, professional websites that stand out in a crowded digital world. It’s not just web design—it’s a full visual experience.",
    image: "/projects/project-1.png", // ✅ from /public/projects
    link: "https://astucess.github.io/PlutoWebWorks.com/",
  },
  {
    title: "Space Themed Website",
    description:
      "Astucess.xyz is an innovative platform created to merge smart ideas with real business success. It’s designed to provide tools, resources, or services that simplify work and boost productivity. The brand uses a minimal and futuristic .xyz identity to stay unique. At its core, it’s about helping creators and businesses grow smarter, not harder.",
    image: "/projects/project-2.png",
    link: "https://astucess.github.io/astucess.xyz/",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio.xyz is the experimental and creative spin on your personal showcase. It’s where you test bold layouts, futuristic animations, and interactive design ideas. This site reflects your innovative side. It’s a playground to show the world you don’t just follow trends—you set them.",
    image: "/projects/project-3.png",
    link: "https://astucess.github.io/Portfolio.xyz/",
  },
  {
    title: "Pluto Voyage",
    description:
      "Pluto Voyage is a next-gen web experience that feels cinematic from the very first click. It features advanced preloader effects and seamless animations that make transitions smooth and engaging. The design is futuristic, minimal, and crafted to keep users hooked as they navigate. It’s not just a website—it’s an interactive journey through creativity.",
    image: "/projects/project-4.png",
    link: "https://pluto-voyage-com.vercel.app/",
  },
  {
    title: "Next.js Portfolio",
    description:
      "Portfolio.com is your professional identity on the web, showcasing your skills, projects, and creativity. It serves as a digital resume while also being a live demo of your talent. Every section is crafted to tell your story and attract opportunities. It’s more than a portfolio—it’s a personal brand statement.",
    image: "/projects/project-5.png",
    link: "https://portfoliocom-nine.vercel.app/",
  },
] as const;

