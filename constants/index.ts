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
  { title: "Contact", link: "#contact" },
];

//  define proper types so TS knows what FOOTER_DATA contains
type FooterColumn = {
  title: string;
  data: {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    link: string;
  }[];
};

export const FOOTER_DATA: FooterColumn[] = [
  {
    title: "Community",
    data: [
      { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com" },
      { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
      { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
      { name: "Linkedin", icon: RxLinkedinLogo, link: "https://linkedin.com" },
      { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
    ],
  },
];
S
