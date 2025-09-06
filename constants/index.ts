import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Extra links if needed (source code / portfolio / contact etc.)
export const LINKS = {
  sourceCode: "https://github.com/astucess",
  portfolio: "https://your-portfolio.com",
  contact: "mailto:you@example.com",
};

// Navigation links
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
];

// Social icons
export const SOCIALS = [
  { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/astucess" },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com" },
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://linkedin.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
];
