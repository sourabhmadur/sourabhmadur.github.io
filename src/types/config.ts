export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
};

export type ReadingItem = {
  title: string;
  author: string;
  url?: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  bio: string[];
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
  }[];
  currentlyReading?: ReadingItem[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
