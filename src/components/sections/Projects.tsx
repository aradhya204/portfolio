import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { FaGithub, FaExternalLinkAlt, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiJsonwebtokens, SiDocker, SiRedis, SiNextdotjs, SiTypescript, SiPython, SiFastapi, SiScikitlearn } from 'react-icons/si';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';

const projects = [
  {
    title: "FinSphere",
    subtitle: "AI-Powered Personal Finance Platform",
    description: "A multi-tenant finance platform for multi-member families with secure auth, role-based access control, and full audit logging.",
    hasLiveDemo: false,
    features: ["Family Expense Management", "Secure Authentication", "Role Based Access Control", "Analytics Dashboard", "Income & Expense Tracking", "PDF & Excel Reports"],
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Docker", icon: <SiDocker /> }
    ],
    links: [
      { name: "Live Demo", url: "#", icon: <FaExternalLinkAlt /> },
      { name: "GitHub", url: "#", icon: <FaGithub /> },
      { name: "Case Study", url: "#", icon: <FaFileAlt /> }
    ]
  },
  {
    title: "Distributed Rate Limiter & API Gateway",
    subtitle: "High-Performance Middleware",
    description: "Middleware-based API gateway implementing multiple rate-limiting algorithms with Redis-backed atomic counters.",
    hasLiveDemo: true,
    features: ["Token Bucket", "Sliding Window", "Fixed Window Counter", "Redis Atomic Counters", "Per User Rate Limits", "Docker Deployment"],
    tech: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "React", icon: <SiReact /> }
    ],
    links: [
      { name: "GitHub", url: "#", icon: <FaGithub /> },
      { name: "Architecture", url: "#", icon: <FaFileAlt /> }
    ]
  },
  {
    title: "CodeSentry",
    subtitle: "AI Code Review & Bug Prediction",
    description: "Full-stack monorepo platform with a self-trained ML model for bug prediction and OCR-based code extraction.",
    hasLiveDemo: true,
    features: ["AI Code Review", "ML Bug Prediction", "OCR Code Extraction", "JWT Authentication", "FastAPI Integration"],
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Docker", icon: <SiDocker /> }
    ],
    links: [
      { name: "GitHub", url: "#", icon: <FaGithub /> },
      { name: "Live Demo", url: "#", icon: <FaExternalLinkAlt /> },
      { name: "Case Study", url: "#", icon: <FaFileAlt /> }
    ]
  }
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  return (
    <section id="projects" className="py-24 bg-cards/30 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent full-stack applications and system architectures."
        />

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
            >
              {/* Animated hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              <div className="w-full lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                
                <h4 className="text-secondary text-sm font-mono mb-2 tracking-wider uppercase">{project.subtitle}</h4>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col gap-4 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-4">
                    {project.links
                      .filter(link => link.name !== "Live Demo" || project.hasLiveDemo)
                      .map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:underline decoration-primary underline-offset-4 transition-all hover:scale-105"
                        >
                          {link.icon} {link.name}
                        </a>
                      ))}
                  </div>
                  
                  {project.title.includes('Rate Limiter') && (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition w-fit"
                      >
                        {expandedProject === project.title ? 'Hide Architecture' : 'Explore Architecture'}
                        {expandedProject === project.title ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      
                      {expandedProject === project.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-4 overflow-hidden rounded-xl bg-black/20 p-2"
                        >
                          <ArchitectureDiagram />
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-7/12 p-8 lg:p-12 bg-black/10 backdrop-blur-sm">
                <div className="mb-8">
                  <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span> Core Features
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-1 bg-gradient-to-r from-secondary to-primary rounded-full"></span> Technologies
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-xl border border-white/5 text-sm text-gray-300 group-hover:border-white/10 group-hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        title={tech.name}
                      >
                        <span className="text-primary text-lg">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
