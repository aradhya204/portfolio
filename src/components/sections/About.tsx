import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-32 relative border-t border-white/5 bg-[#030712]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-section-title font-black uppercase tracking-tighter leading-none mb-4">
            About<span className="text-primary">.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Resume Card */}
          <motion.div 
            variants={shouldReduceMotion ? {} : colVariants}
            className="w-full lg:w-1/3 flex flex-col gap-8 border-l-2 border-white/10 pl-6 lg:pl-10 py-2"
          >
            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-primary">Key Focus</h4>
              <ul className="text-gray-300 font-medium space-y-2">
                <li>System Design</li>
                <li>Backend Architectures</li>
                <li>API Development</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-primary">Education</h4>
              <p className="text-gray-300 font-medium">Master of Computer Applications</p>
              <p className="text-gray-500 text-sm mt-1">PES University (2024-2026)</p>
            </div>

            <div>
              <h4 className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-primary">Location</h4>
              <p className="text-gray-300 font-medium">Bengaluru, India</p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <a href="https://github.com/aradhya204" target="_blank" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform-gpu" rel="noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/aradhya-raj-570509312" target="_blank" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform-gpu" rel="noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:aradhyaraj7422@gmail.com" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform-gpu">
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Right Column: Bio */}
          <motion.div 
            variants={shouldReduceMotion ? {} : colVariants}
            className="w-full lg:w-2/3"
          >
            <div className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-300">
              <p className="mb-8">
                I am a passionate <span className="text-white font-sans font-bold">Full Stack Engineer</span> with hands-on experience building scalable backend systems, secure APIs, distributed architectures, and responsive frontend applications.
              </p>
              <p className="mb-8">
                My expertise lies in designing robust solutions using modern technologies like React, Node.js, and PostgreSQL. I have a strong foundation in <span className="text-white font-sans font-bold">system design, performance optimization, and clean architecture</span>, ensuring the applications I build are not just functional, but maintainable and scalable.
              </p>
              <p className="text-xl md:text-2xl text-gray-400">
                I'm constantly exploring new tools and paradigms. Whether it's implementing a distributed rate-limiter with Redis, architecting a multi-tenant platform, or training an ML model for code review, I love tackling complex technical challenges and delivering production-ready code.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
