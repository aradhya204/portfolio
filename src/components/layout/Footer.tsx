import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 relative z-10">
      <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-xl font-black tracking-tighter">
            ARADHYA<span className="text-primary">.</span>
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aradhya Raj. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/aradhya204" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/aradhya-raj-570509312" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0A66C2] transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:aradhyaraj7422@gmail.com" className="text-gray-500 hover:text-primary transition-colors">
            <FiMail size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-cards border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all group"
          aria-label="Back to top"
        >
          <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
