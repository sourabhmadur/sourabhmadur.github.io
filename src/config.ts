import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Sai Sourabh Madur",
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
    "I'm a Software Engineer at Meta in the San Francisco Bay Area.",
    "I have interests in programming languages, distributed systems, machine learning, and tech history, to name a few.",
    "Previously I was at Oracle working on distributed systems, and before that at Columbia University in New York, gaining academic exposure to machine learning.",
    "I write here when I'm bored.",
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
    description: "Software Engineer at Meta in the San Francisco Bay Area.",
  },
  description: [
    "Hi, I'm Sourabh. I'm a Software Engineer at Meta in the San Francisco Bay Area.",
    "I have interests in programming languages, distributed systems, machine learning, and tech history, to name a few.",
    "Previously I was at Oracle working on distributed systems, and before that at Columbia University in New York, gaining academic exposure to machine learning.",
    "I write here when I'm bored. You can find me on <a href=\"https://github.com/sourabhmadur\">GitHub</a> and <a href=\"https://www.linkedin.com/in/sourabhmadur/\">LinkedIn</a>.",
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
