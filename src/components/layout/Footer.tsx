import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#060913] py-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter block mb-2">
              Aradhya<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 text-sm">
              Building scalable digital experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/aradhya204" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cards flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/in/aradhya-raj-570509312" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-cards flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:aradhyaraj7422@gmail.com" className="w-10 h-10 rounded-full bg-cards flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Aradhya. All rights reserved.</p>
          <p>
            Designed and Developed by <span className="text-gray-300 font-medium">Aradhya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
