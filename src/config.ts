import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Sourabh Madur",
  email: "",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/sourabhmadur",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sourabhmadur/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "RSS",
    url: "/rss.xml",
    icon: "mdi:rss",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: identity.name,
    description:
      "Essays and notes on software, machine learning, distributed systems, and whatever else I'm thinking about.",
  },
  bio: [
    "I'm an AI Engineer at Supio, an early-stage legal AI startup.",
    "Previously at Meta, I worked on Instagram's recommendation systems and product growth, and later on the AI team behind Ray-Ban Meta Smart Glasses. Before that, I built distributed systems at Oracle.",
    "I hold a degree in Computer Science with a concentration in AI from Columbia University.",
    "I read and write for fun, which is most of what ends up on this site.",
  ],
  socialLinks: socialLinks,
  links: [
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  currentlyReading: [
    { title: "Notes from Underground", author: "Fyodor Dostoevsky" },
    { title: "Antifragile", author: "Nassim Nicholas Taleb" },
    { title: "Dear Girls", author: "Ali Wong" },
    { title: "Norwegian Wood", author: "Haruki Murakami" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "Siddhartha", author: "Hermann Hesse" },
    { title: "The Razor's Edge", author: "W. Somerset Maugham" },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | " + identity.name,
    description: "AI Engineer at Supio, previously Meta and Oracle.",
  },
  description: [
    "Hi, I'm Sourabh. I'm an AI Engineer at Supio, an early-stage legal AI startup.",
    "Previously at Meta, I worked on Instagram's recommendation systems and product growth, and later on the AI team behind Ray-Ban Meta Smart Glasses. Before that, I built distributed systems at Oracle.",
    "I hold a degree in Computer Science with a concentration in AI from Columbia University.",
    "I read and write for fun. You can find me on <a href=\"https://github.com/sourabhmadur\">GitHub</a> and <a href=\"https://www.linkedin.com/in/sourabhmadur/\">LinkedIn</a>.",
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | " + identity.name,
    description:
      "Essays and notes on software, machine learning, distributed systems, and whatever else I'm thinking about.",
  },
  subtitle:
    "Essays and notes on software, machine learning, distributed systems, and whatever else I'm thinking about.",
};
