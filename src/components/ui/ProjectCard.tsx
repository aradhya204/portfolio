import React, { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  shortDesc: string;
  fullDesc: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  accentColor?: string;
  accentHex?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isFeatured = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  // We use useSpring for smoother parallax
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);

  // 3D Tilt Effect
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Spotlight position
    const x = e.clientX - rect.left;
    const y_pos = e.clientY - rect.top;
    setMousePosition({ x, y: y_pos });
    
    // Tilt calculations (max 8 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y_pos - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    
    rotateX.set(tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const accentColorClass = project.accentColor ? `text-${project.accentColor}` : 'text-primary';
  const borderHoverClass = project.accentColor ? `hover:border-${project.accentColor}/50` : 'hover:border-primary/50';
  const bgAccentClass = project.accentHex ? project.accentHex : '#3B82F6';

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className={`group relative bg-cards border border-white/10 rounded-[2rem] overflow-hidden cursor-pointer flex flex-col h-full shadow-2xl transition-all duration-500 ${borderHoverClass}`}
      >
        {/* Spotlight Overlay */}
        <motion.div 
          className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100 z-50"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${bgAccentClass}1a, transparent 40%)`,
          }}
        />

        {/* Browser Frame / Image Area */}
        <div className={`relative ${isFeatured ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'} overflow-hidden bg-background p-4 sm:p-6 lg:p-8 flex items-center justify-center`} style={{ transform: "translateZ(30px)" }}>
          
          {/* Subtle glow behind the device mockup */}
          <div 
            className="absolute inset-0 opacity-20 blur-[60px] transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: bgAccentClass }}
          />

          {/* Browser Mockup Wrapper */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-cards flex flex-col">
            {/* Browser Header */}
            <div className="h-6 sm:h-8 bg-[#1a1f2e] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            {/* Parallax Image */}
            <div className="flex-1 overflow-hidden relative bg-black">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/800x450/111827/${bgAccentClass.replace('#','')}?text=${project.title.replace(/ /g, '+')}`; }}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 bg-cards border-t border-white/5" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className={`text-2xl font-bold font-display text-white group-hover:text-white transition-colors tracking-tight`}>
              {project.title}
            </h3>
            <div className="flex gap-3 shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                  <FiGithub size={20} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow leading-relaxed">
            {project.shortDesc}
          </p>
          
          {/* Staggered Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech, i) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + (i * 0.08) }}
                className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-gray-300"
                style={{ backgroundColor: isHovering ? `${bgAccentClass}1a` : 'transparent' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal - keeping it mostly the same but injecting accent colors */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-cards border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-[101]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-50 p-2 bg-background/50 hover:bg-white/10 rounded-full text-white backdrop-blur-md transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cards via-cards/40 to-transparent" />
                </div>
                
                <div className="p-8 sm:p-12 -mt-20 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                      <div className="font-mono text-sm mb-3 tracking-widest" style={{ color: bgAccentClass }}>{project.period}</div>
                      <h3 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">{project.title}</h3>
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-colors">
                          <FiGithub size={18} />
                          <span className="text-sm font-semibold">Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 text-white rounded-xl transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: bgAccentClass }}>
                          <FiExternalLink size={18} />
                          <span className="text-sm font-semibold">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-5 max-w-3xl">
                    <h4 className="text-xl font-bold font-display text-white mb-4">About the project</h4>
                    <ul className="space-y-4">
                      {project.fullDesc.map((desc, i) => (
                        <li key={i} className="text-gray-300 flex items-start group text-lg leading-relaxed">
                          <span className="mr-4 mt-2 opacity-60" style={{ color: bgAccentClass }}>▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
