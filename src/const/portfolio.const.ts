import type { PortfolioProject } from "@/types/portfolio.types";

export const portfolio = {
  name: "Roman Rudiy",
  title: "Fullstack Developer (React / Next.js / Node.js)",
  location: "Ternopil, Ukraine",
  intro:
    "I build scalable, production-ready web applications with modern frontend and backend technologies.",
  contacts: {
    email: "roman5rudiy5@gmail.com",
    phone: "+380 96 7587 027",
    githubUrl: "https://github.com/RomanRudiy228",
    linkedinUrl: "https://www.linkedin.com/in/roman-rudiy-2b8b80278/",
    telegramUrl: "https://t.me/rudiyroma",
  },
  interests: [
    "CI/CD automation",
    "Docker-based workflows",
    "Scalable backend architecture",
  ],
  skills: {
    frontend: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Zustand"],
    backend: ["Node.js", "NestJS", "REST API"],
    database: ["PostgreSQL", "Prisma ORM", "TypeORM", "Supabase"],
    tools: ["Git", "GitHub", "Docker", "Postman", "Vercel", "CI/CD basics"],
    languages: ["English (B1-B2)", "Ukrainian"],
  },
  experience: [
    {
      title: "Full Stack Developer",
      company: "Commercial Projects (International Outstaff)",
      period: "~7 months (incl. 2 months outstaff) · Remote",
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
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL"],
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
