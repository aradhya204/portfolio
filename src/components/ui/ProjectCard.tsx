import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { SkillChip } from './SkillChip';

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
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        onClick={() => setIsModalOpen(true)}
        className="group relative bg-cards border border-white/10 rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/800x450/111827/3B82F6?text=${project.title.replace(/ /g, '+')}`; }}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
            <span className="px-6 py-2 bg-primary/20 border border-primary/50 text-white rounded-full font-medium backdrop-blur-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 bg-cards">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-3">
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
          
          <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
            {project.shortDesc}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-cards border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[101]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-background/50 hover:bg-background/80 rounded-full text-white backdrop-blur-md transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="overflow-y-auto no-scrollbar">
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = `https://via.placeholder.com/800x450/111827/3B82F6?text=${project.title.replace(/ /g, '+')}`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cards via-cards/20 to-transparent" />
                </div>
                
                <div className="p-6 sm:p-10 -mt-12 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                    <div>
                      <div className="text-accent font-mono text-sm mb-2">{project.period}</div>
                      <h3 className="text-2xl sm:text-4xl font-black text-white">{project.title}</h3>
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors">
                          <FiGithub size={18} />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-lg transition-colors shadow-lg">
                          <FiExternalLink size={18} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <SkillChip key={tech} name={tech} />
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white mb-2">About the project</h4>
                    <ul className="space-y-3">
                      {project.fullDesc.map((desc, i) => (
                        <li key={i} className="text-gray-300 flex items-start group">
                          <span className="text-primary mr-3 mt-1.5 opacity-80">▹</span>
                          <span className="leading-relaxed">{desc}</span>
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
