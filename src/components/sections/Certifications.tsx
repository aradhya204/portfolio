import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  "System Analysis & Data Engineering",
  "Docker & Kubernetes Basics",
  "PySpark Fundamentals"
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Certifications
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="flex flex-wrap justify-center gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 bg-cards border border-white/10 rounded-full shadow-lg flex items-center gap-3 hover:border-accent hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-default"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className="text-gray-200 font-medium">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
