import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cards border border-white/10 text-accent font-mono text-sm mb-6"
          >
            👋 Hi, I'm Aradhya
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Full Stack <span className="text-gradient">Engineer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-gray-300 mb-6 h-[40px]"
          >
            I am a{' '}
            <TypeAnimation
              sequence={[
                'React Developer',
                2000,
                'Full Stack Engineer',
                2000,
                'Backend Developer',
                2000,
                'Software Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-white"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-xl text-lg mb-10 leading-relaxed"
          >
            Full Stack Engineer passionate about building scalable, high-performance web applications with modern frontend technologies, robust backend architectures, secure REST APIs, distributed systems, and cloud-native solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3.5 rounded-full glass border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/5 transition-all active:scale-95"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold hover:border-gray-500 hover:text-white transition-all active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 mt-12"
          >
            <a href="https://github.com/aradhya204" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/aradhya-raj-570509312" target="_blank" className="text-gray-400 hover:text-white transition-colors" rel="noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:aradhyaraj7422@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
