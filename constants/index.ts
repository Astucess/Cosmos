import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

"use client";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const PROJECTS = [
  {
    title: "Modern Next.js 14 Portfolio",
    description:
      "Experience a cutting-edge digital presence with my Modern Next.js 14 Portfolio. This project showcases a seamless blend of creativity and technology, delivering an immersive interface that highlights skill, innovation, and the latest web development practices.",
    src: "/projects/project-1.png",
    link: "https://plutowebworks.com/",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      "Explore a dynamic and visually captivating platform designed to redefine the portfolio experience. The Interactive Cards Portfolio combines engaging animations and intuitive layouts to vividly present skills, projects, and personality in a modern, user-friendly way.",
    src: "/projects/project-2.png",
    link: "https://astucess.github.io/astucess.xyz/",
  },
  {
    title: "Space Themed Website",
    description:
      "Journey through the cosmos with the Space Themed Website — an awe-inspiring digital adventure that blends stunning visuals and futuristic design. Crafted to spark curiosity, this project highlights both creativity and technical mastery.",
    src: "/projects/project-3.png",
    link: "https://portfolio.xyz/",
  },
  {
    title: "Pluto Voyage",
    description:
      "Embark on a sleek, interactive voyage through this modern website experience. Featuring smooth animations and a stylish layout, Pluto Voyage exemplifies mastery in web development and immersive storytelling.",
    src: "/projects/project-4.png",
    link: "https://pluto-voyage-com.vercel.app/",
  },
  {
    title: "PortfolioCom",
    description:
      "Discover a refined and professional developer portfolio designed for maximum impact. PortfolioCom blends elegant motion, sophisticated UI elements, and responsive design to showcase expertise with style and clarity.",
    src: "/projects/project-5.png",
    link: "https://portfoliocom-nine.vercel.app/",
  },
];

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group block overflow-hidden rounded-2xl border border-cyan-700/40 bg-gradient-to-br from-[#191932] via-[#060e33] to-[#1e1931] shadow-[0_0_36px_0_rgba(57,122,245,0.12)] transition duration-400 ease-in-out min-w-[300px]"
  >
    <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-cyan-900/10">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={640}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/12 via-blue-600/9 to-amber-200/12 opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 flex items-end justify-end">
        <span className="px-3 py-1 rounded-xl bg-blue-700/80 text-xs text-amber-300 font-bold opacity-0 group-hover:opacity-100 transition-all duration-400">
          View Project
        </span>
      </div>
    </div>
    <div className="relative px-6 py-8 bg-white/5 backdrop-blur-[10px] rounded-b-2xl border-t border-cyan-600/10 min-h-[160px]">
      <h1
        className="text-2xl font-extrabold mb-3 min-h-[3rem]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #3b82f6, #fbbf24, #93c5fd, #3b82f6)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </h1>
      <p className="text-base text-cyan-100/70">{description}</p>
    </div>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <span className="absolute -top-20 left-1/2 w-48 h-32 rounded-full blur-2xl opacity-30 bg-gradient-to-r from-blue-400 via-amber-300 to-cyan-300 animate-glisten" />
    </div>
    <style jsx>{`
      .animate-glisten {
        animation: glistenAnim 2s linear infinite;
      }
      @keyframes glistenAnim {
        0% {
          transform: translateX(-60%) scale(1.1) rotate(0deg);
          opacity: 0.21;
        }
        50% {
          transform: translateX(20%) scale(1.3) rotate(20deg);
          opacity: 0.37;
        }
        100% {
          transform: translateX(-60%) scale(1.1) rotate(0deg);
          opacity: 0.21;
        }
      }
    `}</style>
  </Link>
);

export default function ProjectsSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="mb-12 text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}



export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;
