import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const LINKS = {
  sourceCode: "https://github.com/astucess",
};

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
];

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Stripe", image: "stripe.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
] as const;

export const PROJECTS = [
  {
    title: "Modern Websites with Advanced Animations",
    description:
      "PlutoWebWorks is your creative powerhouse for building stunning, modern, and responsive websites. It blends cinematic design with smooth animations and top-tier performance. The goal is to deliver sleek, professional websites that stand out in a crowded digital world. It’s not just web design—it’s a full visual experience.",
    image: "/projects/project-1.png",
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
