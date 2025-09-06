// constants/index.ts
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
] as const;

export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
] as const;

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
