import { useRef, MouseEvent, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiDocker, SiRedis, SiNextdotjs, SiPython, SiFastapi, SiScikitlearn } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useCursor } from '../../context/CursorContext';

const projects = [
  {
    title: "FinSphere",
    subtitle: "AI-Powered Personal Finance",
    description: "Multi-tenant platform with secure auth and RBAC.",
    hasLiveDemo: false,
    image: "/projects/finsphere.jpg",
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
    image: "/projects/rate-limiter.jpg",
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
    image: "/projects/codesentry.jpg",
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

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const { setCursorVariant } = useCursor();
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);
  
  // Magnetic effect setup
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setCursorVariant('default');
  };

  const handleMouseEnter = () => {
    setCursorVariant('project');
  };

  return (
    <motion.div 
      ref={ref}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative aspect-square md:aspect-[4/3] overflow-hidden flex flex-col justify-end p-8 md:p-12 cursor-none ${
        index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''
      }`}
    >
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0 bg-[#030712]">
        {!imageError ? (
          <motion.img 
            src={project.image} 
            alt={project.title}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out transform-gpu group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out transform-gpu group-hover:scale-105`} />
        )}
      </div>

      {/* Duotone tint overlay */}
      <div className={`absolute inset-0 mix-blend-multiply opacity-50 transition-opacity duration-700 bg-gradient-to-t from-black via-[#030712]/50 to-transparent z-10 pointer-events-none`} />
      
      {/* Heavy gradient bottom for text legibility */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none" />

      {/* Content overlaid */}
      <div className="relative z-30 w-full transform-gpu">
        <h4 className="text-white/80 font-serif italic text-xl md:text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {project.subtitle}
        </h4>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
          {project.title}
        </h3>
        
        {/* Reveal on hover */}
        <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <div className="flex flex-col gap-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-6">
              <div className="flex items-center gap-4">
                {project.tech.map((tech: any, i: number) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                    className="text-white/90 text-2xl hover:text-white transition-colors" 
                    title={tech.name}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.map((link: any, i: number) => (
                  <a 
                    key={i} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors z-40"
                    onMouseEnter={(e) => e.stopPropagation()} // Optional: Prevent contextual cursor from overriding link hover if needed
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
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
