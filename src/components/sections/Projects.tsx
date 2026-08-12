import React from 'react';
import { ProjectCard, ProjectData } from '../ui/ProjectCard';
import { KineticHeading } from '../ui/KineticHeading';

const projectsData: ProjectData[] = [
  {
    id: "finsphere",
    title: "FinSphere — AI Personal Finance",
    period: "May 2026 – Jul 2026",
    shortDesc: "Multi-tenant finance platform for multi-member families with refresh-token rotation, RBAC, and full audit logging.",
    fullDesc: [
      "Built a multi-tenant finance platform for multi-member families with refresh-token rotation, Role-Based Access Control (RBAC), and full audit logging.",
      "Developed 25+ REST APIs across income, expense, budget, and analytics modules, maintaining an average response time of under 200ms.",
      "Integrated automated PDF and Excel reporting features, cutting report preparation time from ~30 minutes to seconds."
    ],
    techStack: ["React.js", "Node.js", "PostgreSQL", "Prisma"],
    image: "/@fs/C:/Users/aradh/.gemini/antigravity-ide/brain/e6738687-8dd5-44ac-bf0c-b77ad72d84e8/finsphere_banner_1786543144248.png",
    githubUrl: "https://github.com/aradhya204",
    accentColor: "emerald-500",
    accentHex: "#10b981",
  },
  {
    id: "rate-limiter",
    title: "Distributed Rate Limiter",
    period: "Jun 2026 – Present",
    shortDesc: "Middleware API gateway with Token Bucket and Redis atomic counters.",
    fullDesc: [
      "Engineered a middleware-based API gateway implementing Token Bucket, Sliding Window Log, and Fixed Window Counter rate-limiting algorithms.",
      "Leveraged Redis-backed atomic counters to eliminate race conditions across multiple distributed gateway instances.",
      "Load-tested horizontal scalability across 3 concurrent instances and built a live-updating React dashboard for real-time traffic visualization."
    ],
    techStack: ["Node.js", "Redis", "Docker", "React.js"],
    image: "/@fs/C:/Users/aradh/.gemini/antigravity-ide/brain/e6738687-8dd5-44ac-bf0c-b77ad72d84e8/rate_limiter_banner_1786543652313.png",
    githubUrl: "https://github.com/aradhya204",
    accentColor: "amber-500",
    accentHex: "#f59e0b",
  },
  {
    id: "codesentry",
    title: "CodeSentry — AI Code Review",
    period: "Aug 2025 – Nov 2025",
    shortDesc: "Monorepo platform with FastAPI ML microservice for bug prediction.",
    fullDesc: [
      "Architected a Turborepo monorepo platform featuring a Next.js/TypeScript frontend, Node/Express API, and a Python/FastAPI ML microservice achieving ~80% prediction accuracy.",
      "Implemented secure JWT authentication with refresh tokens and RBAC (Developer/Admin) to secure all routes.",
      "Integrated OCR-based code extraction, eliminating manual code retyping for 100% of image-based code submissions."
    ],
    techStack: ["Next.js", "Python", "FastAPI", "Prisma"],
    image: "/@fs/C:/Users/aradh/.gemini/antigravity-ide/brain/e6738687-8dd5-44ac-bf0c-b77ad72d84e8/codesentry_banner_1786543671075.png",
    githubUrl: "https://github.com/aradhya204",
    accentColor: "cyan-400",
    accentHex: "#22d3ee",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative z-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="mb-20">
          <KineticHeading className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            Selected Works
          </KineticHeading>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(400px,auto)]">
          {projectsData.map((project, index) => {
            // First item spans 2 columns on large screens
            const isFeatured = index === 0;
            // Add a subtle vertical offset for alternating items
            const mtClass = index % 2 !== 0 && index !== 0 ? 'lg:mt-24' : '';
            
            return (
              <div 
                key={project.id} 
                className={`${isFeatured ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1'} ${mtClass}`}
              >
                <ProjectCard project={project} index={index} isFeatured={isFeatured} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
