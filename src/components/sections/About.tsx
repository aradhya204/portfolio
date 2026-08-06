import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and my technical background."
        />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Image placeholder / decorative element */}
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-50" />
              <div className="absolute inset-0 bg-cards rounded-2xl border border-white/10 z-10 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop" 
                  alt="Coding environment" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a passionate <strong className="text-white">Full Stack Engineer</strong> with hands-on experience building scalable backend systems, secure APIs, distributed architectures, and responsive frontend applications.
            </p>
            <p>
              My expertise lies in designing robust solutions using modern technologies like React, Node.js, and PostgreSQL. I have a strong foundation in <strong className="text-white">system design, performance optimization, and clean architecture</strong>, ensuring the applications I build are not just functional, but maintainable and scalable.
            </p>
            <p>
              I'm constantly exploring new tools and paradigms. Whether it's implementing a distributed rate-limiter with Redis, architecting a multi-tenant platform, or training an ML model for code review, I love tackling complex technical challenges and delivering production-ready code.
            </p>
            
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-white/10 mt-8">
              <div>
                <h4 className="text-white font-medium mb-1">Education</h4>
                <p className="text-sm text-gray-400">Master of Computer Applications (MCA)<br/>PES University (2024-2026)</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-sm text-gray-400">Bengaluru, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
