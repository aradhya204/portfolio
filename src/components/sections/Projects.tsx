import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, ProjectData } from '../ui/ProjectCard';

const projectsData: ProjectData[] = [
  {
    id: "finsphere",
    title: "FinSphere — AI-Powered Personal Finance",
    period: "May 2026 – Jul 2026",
    shortDesc: "Multi-tenant finance platform for multi-member families with refresh-token rotation, RBAC, and full audit logging.",
    fullDesc: [
      "Built a multi-tenant finance platform for multi-member families with refresh-token rotation, Role-Based Access Control (RBAC), and full audit logging.",
      "Developed 25+ REST APIs across income, expense, budget, and analytics modules, maintaining an average response time of under 200ms.",
      "Integrated automated PDF and Excel reporting features, cutting report preparation time from ~30 minutes to seconds."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "Ant Design"],
    image: "/images/finsphere.png",
    githubUrl: "https://github.com/aradhya204",
  },
  {
    id: "rate-limiter",
    title: "Distributed Rate Limiter & API Gateway",
    period: "Jun 2026 – Present",
    shortDesc: "Middleware-based gateway implementing Token Bucket, Sliding Window Log, and Fixed Window Counter algorithms.",
    fullDesc: [
      "Engineered a middleware-based API gateway implementing Token Bucket, Sliding Window Log, and Fixed Window Counter rate-limiting algorithms.",
      "Leveraged Redis-backed atomic counters to eliminate race conditions across multiple distributed gateway instances.",
      "Load-tested horizontal scalability across 3 concurrent instances and built a live-updating React dashboard for real-time traffic visualization."
    ],
    techStack: ["Node.js", "Express.js", "Redis", "Docker", "React.js"],
    image: "/images/rate-limiter.png",
    githubUrl: "https://github.com/aradhya204",
  },
  {
    id: "codesentry",
    title: "CodeSentry — AI Code Review",
    period: "Aug 2025 – Nov 2025",
    shortDesc: "Monorepo platform combining Next.js/TS frontend, Node API, and Python/FastAPI ML microservice for bug prediction.",
    fullDesc: [
      "Architected a Turborepo monorepo platform featuring a Next.js/TypeScript frontend, Node/Express API, and a Python/FastAPI ML microservice achieving ~80% prediction accuracy.",
      "Implemented secure JWT authentication with refresh tokens and RBAC (Developer/Admin) to secure all routes.",
      "Integrated OCR-based code extraction, eliminating manual code retyping for 100% of image-based code submissions."
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "Scikit-learn", "PostgreSQL", "Prisma", "Docker"],
    image: "/images/codesentry.png",
    githubUrl: "https://github.com/aradhya204",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative z-10">
      <div className="max-w-[90vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
