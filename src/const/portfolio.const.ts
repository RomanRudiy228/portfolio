import type { PortfolioProject } from "@/types/portfolio.types";

export const portfolio = {
  name: "Roman Rudiy",
  title: "Fullstack Developer (TypeScript / React / Next.js / Node.js)",
  location: "Ternopil, Ukraine",
  highlights: [
    { label: "Commercial experience", value: "~1 year" },
    {
      label: "Tech Stack",
      value:
        "TypeScript · React · Next.js · Node.js · NestJS · PostgreSQL · Supabase · Vercel",
    },
    { label: "Remote teamwork", value: "Outsource / Outstaff" },
  ],
  contacts: {
    email: "roman5rudiy5@gmail.com",
    phone: "+380 96 7587 027",
    githubUrl: "https://github.com/RomanRudiy228",
    linkedinUrl: "https://www.linkedin.com/in/roman-rudiy-2b8b80278/",
    telegramUrl: "https://t.me/rudiyroma",
  },
  interests: [
    "Adaptive frontend",
    "Scalable backend architecture",
    "Docker-based workflows",
    "CI/CD automation",
  ],
  skills: {
    frontend: [
      "TypeScript",
      "React / React Native",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
    ],
    backend: ["Node.js", "NestJS", "Express", "REST API"],
    database: ["MongoDB", "PostgreSQL", "Prisma ORM", "TypeORM", "Supabase"],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "CI/CD basics",
      "Notion",
      "Figma",
    ],
    languages: ["English (B1-B2)", "Ukrainian"],
  },
  categories: [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "tools", label: "Tools" },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Commercial Projects (International Outstaff)",
      period: "~1 year (incl. 2 months outstaff) · Remote",
      bullets: [
        "Developed fullstack features for production web apps using React, Next.js, TypeScript, Node.js, and NestJS.",
        "Built responsive, production-ready landing pages (React & Next.js).",
        "Integrated frontend with REST APIs and contributed to backend API design and implementation.",
        "Implemented authentication/authorization and data management using Supabase.",
        "Worked with PostgreSQL and collaborated with designers, developers, and foreign clients in English.",
        "Used GitHub for collaboration and worked within CI/CD workflows; deployed apps to Vercel.",
      ],
    },
  ],
  education: [
    {
      title: "Bachelor — Western Ukrainian National University",
      period: "Sep 2022 — Jul 2026",
      location: "Ternopil, Ukraine",
    },
  ],
  projects: [
    {
      name: "Alytic",
      role: "Full Stack Developer",
      summary:
        "Fullstack SaaS platform with responsive marketing pages and core app features.",
      highlights: [
        "Built and maintained landing pages with modern responsive UI.",
        "Contributed to core features using React, TypeScript, Tailwind CSS, Node.js.",
        "Collaborated with backend services using NestJS and PostgreSQL.",
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "NodeJS", "NestJS", "PostgreSQL"],
      links: [{ label: "Live", href: "https://www.alytic.sa/" }],
    },
    {
      name: "Tornix",
      role: "Full Stack Developer (Outstaff)",
      summary: "AI/marketing platform focused on performance, auth, and data flows.",
      highlights: [
        "Implemented responsive marketing landing pages using Next.js.",
        "Participated in core app feature development across frontend and backend.",
        "Worked with authentication and data management using Supabase.",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase"],
      links: [{ label: "Live", href: "https://www.tornix.ai/" }],
    },
  ] satisfies PortfolioProject[],
} as const;
