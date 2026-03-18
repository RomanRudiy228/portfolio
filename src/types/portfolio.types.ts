export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: PortfolioLink[];
};
