import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#030712] relative flex flex-col items-center justify-center border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-[clamp(3rem,10vw,12rem)] font-black uppercase tracking-tighter leading-[0.85] text-white">
            Let's<br/>
            <span className="text-primary">Work</span><br/>
            Together<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-lg md:text-xl font-medium"
        >
          <a 
            href="mailto:aradhyaraj7422@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-sm md:text-base border-b border-transparent hover:border-white pb-1"
          >
            Email
          </a>
          <a 
            href="https://linkedin.com/in/aradhya-raj-570509312" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-sm md:text-base border-b border-transparent hover:border-white pb-1"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/aradhya204" 
            target="_blank"
            rel="noreferrer" 
            className="text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em] text-sm md:text-base border-b border-transparent hover:border-white pb-1"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};
