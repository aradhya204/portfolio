import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiJsonwebtokens, SiDocker, SiRedis, SiNextdotjs, SiTypescript, SiPython, SiFastapi, SiScikitlearn } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "FinSphere",
    subtitle: "AI-Powered Personal Finance",
    description: "Multi-tenant platform with secure auth and RBAC.",
    hasLiveDemo: false,
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> }
    ],
    links: [
      { name: "GitHub", url: "#", icon: <FaGithub /> }
    ]
  },
  {
    title: "API Gateway",
    subtitle: "High-Performance Middleware",
    description: "Rate limiter with Redis atomic counters.",
    hasLiveDemo: true,
    gradient: "from-[#10B981] to-[#047857]",
    tech: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Express", icon: <SiExpress /> }
    ],
    links: [
      { name: "GitHub", url: "#", icon: <FaGithub /> }
    ]
  },
  {
    title: "CodeSentry",
    subtitle: "AI Code Review",
    description: "Self-trained ML model for bug prediction and OCR extraction.",
    hasLiveDemo: true,
    gradient: "from-[#8B5CF6] to-[#6D28D9]",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> }
    ],
    links: [
      { name: "GitHub", url: "#", icon: <FaGithub /> },
      { name: "Live Demo", url: "#", icon: <FaExternalLinkAlt /> }
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-[#030712] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-section-title font-black uppercase tracking-tighter leading-none">
            Work<span className="text-primary">.</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative aspect-square md:aspect-[4/3] overflow-hidden flex flex-col justify-end p-8 md:p-12 ${
                index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''
              }`}
            >
              {/* Background Panel (Gradient as Image Placeholder) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out`} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

              {/* Content overlaid */}
              <div className="relative z-10 w-full">
                <h4 className="text-white/80 font-serif italic text-xl md:text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.subtitle}
                </h4>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                
                {/* Reveal on hover */}
                <div className="overflow-hidden">
                  <div className="opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out flex flex-col gap-6">
                    <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
                      <div className="flex items-center gap-4">
                        {project.tech.map((tech, i) => (
                          <div key={i} className="text-white/90 text-2xl hover:text-white hover:scale-110 transition-transform" title={tech.name}>
                            {tech.icon}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.links.map((link, i) => (
                          <a 
                            key={i} 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
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
