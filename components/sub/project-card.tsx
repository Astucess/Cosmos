"use client";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

const projects = [
  {
    src: "/projects/project-1.png",
    title: "PlutoWebWorks",
    description:
      "Premium business websites and luxury portfolios with advanced Next.js architecture and stunning animations.",
    link: "https://plutowebworks.com/",
  },
  {
    src: "/projects/project-2.png",
    title: "Astucess.xyz",
    description:
      "A next-gen portfolio and client showcase demonstrating technical expertise and bold, innovative web design.",
    link: "https://astucess.github.io/astucess.xyz/",
  },
  {
    src: "/projects/project-3.png",
    title: "Portfolio.xyz",
    description:
      "Brilliantly animated personal portfolio featuring premium UI effects, brand identity, and dynamic card layouts.",
    link: "https://portfolio.xyz/",
  },
  {
    src: "/projects/project-4.png",
    title: "Pluto Voyage",
    description:
      "A cosmic digital journey: immersive web experience, animated visuals, and futuristic navigation.",
    link: "https://pluto-voyage-com.vercel.app/",
  },
  {
    src: "/projects/project-5.png",
    title: "PortfolioCom",
    description:
      "State-of-the-art developer portfolio: world-class smooth design, advanced motion, and elegant aesthetics.",
    link: "https://portfoliocom-nine.vercel.app/",
  },
];

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group block overflow-hidden rounded-2xl border border-cyan-700/40 bg-gradient-to-br from-[#191932] via-[#060e33] to-[#1e1931] shadow-[0_0_36px_0_rgba(57,122,245,0.12)] transition duration-400 ease-in-out min-w-[300px]"
  >
    {/* Increased height for larger image */}
    <div className="relative px-8 py-10 bg-white/5 backdrop-blur-[10px] rounded-b-2xl border-t border-cyan-600/10 min-h-[220px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={700}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/12 via-blue-600/9 to-amber-200/12 opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 flex items-end justify-end">
        <span className="px-3 py-1 rounded-xl bg-blue-700/80 text-xs text-amber-300 font-bold opacity-0 group-hover:opacity-100 transition-all duration-400">
          View Project
        </span>
      </div>
    </div>
    {/* Increased padding and min-height for spacious text area */}
    <div className="relative px-8 py-10 bg-white/5 backdrop-blur-[10px] rounded-b-2xl border-t border-cyan-600/10 min-h-[220px]">
      <h1
        className="text-2xl font-extrabold mb-4 min-h-[4rem]"
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
      <p className="text-base text-cyan-100/70 leading-relaxed">{description}</p>
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
    <section className="py-16 px-6 max-w-screen-xl mx-auto">
      <h2 className="mb-12 text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
