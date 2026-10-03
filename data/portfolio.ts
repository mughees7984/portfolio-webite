export const profile = {
  name: "Muhammad Mughees Arif",
  email: "mughees791@gmail.com",
    emailLink:
    "https://mail.google.com/mail/?view=cm&fs=1&to=mughees791@gmail.com&su=Portfolio%20enquiry",
  phone: "+92 335 6169085",
  linkedin: "https://www.linkedin.com/in/muhammad-mughees-arif", // TODO: your profile URL
  github: "https://github.com/mughees7984", // TODO: your profile URL
};


export type Project = {
  title: string;
  description: string;
  icon: "plane" | "sparkles" | "shield" | "wallet" | "code" | "layout";
  tags: string[];
  live?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    title: "Travel Booking Platform",
    description:
      "Full-stack platform for hotel booking and activity reservation, with authentication and user management. Built as reusable flows so new features slot in cleanly.",
    icon: "plane",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "TypeScript"],
  },
  {
    title: "AI Task Manager",
    description:
      "Production-ready task app that generates subtasks with the Groq API (Llama 3.3), analyses priority and flags deadline risk. Secured with JWT and role-based guards, documented in Swagger.",
    icon: "sparkles",
    tags: ["Next.js 14", "NestJS", "Redux Toolkit", "Tailwind", "shadcn/ui", "Groq"],
    live: "https://github.com/", // TODO
    source: "https://github.com/mughees7984", // TODO
  },
  {
    title: "Authentication & User Management",
    description:
      "Registration, login, password reset, email verification, profile management and avatar upload, with documented endpoints.",
    icon: "shield",
    tags: ["NestJS", "JWT", "bcrypt", "PostgreSQL", "Swagger"],
    source: "https://github.com/mughees7984", // TODO
  },
  {
    title: "Web3 Dashboards",
    description:
      "Dashboards with wallet authentication and smart contract interactions, pulling blockchain data from several sources into real-time workflows.",
    icon: "wallet",
    tags: ["React.js", "Web3.js", "ethers.js", "GraphQL"],
  },
];

export const jobs = [
  {
    period: "Oct 2025 – Present",
    role: "Full Stack Developer",
    company: "Orazone Technologies",
    current: true,
    summary:
      "Working across the full stack of a travel booking platform, from database design to the interface people book with.",
    points: [
      "Build and maintain the platform with Next.js, NestJS, PostgreSQL and TypeORM.",
      "Design and ship REST APIs for hotel booking, activity reservation, authentication and user management.",
      "Build responsive interfaces and connect them to backend services for smooth end-to-end booking flows.",
      "Troubleshoot bugs, refine existing features and improve performance and stability.",
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeORM", "TypeScript"],
  },
  {
    period: "Jun 2024 – Sep 2025",
    role: "Frontend Developer",
    company: "Kaizen Global",
    current: false,
    summary:
      "Built the frontend for Web3 products, connecting wallets, smart contracts and blockchain data into one dashboard experience.",
    points: [
      "Built Web3 dashboards with React.js, Web3.js and GraphQL APIs.",
      "Implemented wallet authentication and smart contract interactions with ethers.js.",
      "Integrated blockchain data from multiple sources to support real-time product workflows.",
      "Improved frontend performance and cut page load time by about 25%.",
    ],
    tags: ["React.js", "Web3.js", "ethers.js", "GraphQL"],
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  Backend: ["NestJS", "Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Authentication", "RBAC"],
  Database: ["PostgreSQL", "MongoDB", "TypeORM", "Supabase"],
  Languages: ["TypeScript", "Python", "C++"],
  "Web3 & AI": ["ethers.js", "Web3.js", "wagmi", "Reown SDK", "Groq API"],
  Tools: ["Git", "GitHub", "Bitbucket", "Swagger / OpenAPI", "Postman"],
};