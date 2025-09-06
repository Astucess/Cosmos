import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// 🔹 LINKS added here
export const LINKS = {
  sourceCode: "https://github.com/astucess",
  portfolio: "https://plutowebworks.com/",
  contact: "mailto:contact@example.com",
};

export const SKILL_DATA = [ /* ... */ ] as const;

export const SOCIALS = [
  { name: "Instagram", icon: RxInstagramLogo, link: "https://instagram.com" },
  { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
  { name: "Twitter", icon: RxTwitterLogo, link: "https://twitter.com" },
] as const;

export const FRONTEND_SKILL = [ /* ... */ ] as const;
export const BACKEND_SKILL = [ /* ... */ ] as const;
export const FULLSTACK_SKILL = [ /* ... */ ] as const;
export const OTHER_SKILL = [ /* ... */ ] as const;

export const PROJECTS = [ /* ... */ ];

export const FOOTER_DATA = [ /* ... */ ] as const;

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;
