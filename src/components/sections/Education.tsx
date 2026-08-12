import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "PES University, Bengaluru",
    period: "2024 – 2026",
    grade: "CGPA 6.91/10"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "St. Andrews Institute of Technology, Gurugram",
    period: "2020 – 2023",
    grade: "CGPA 7.05/10"
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-cards border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all shadow-lg relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-accent mb-4">
                  {edu.period}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                
                <div className="text-gray-400 font-medium mb-4">
                  {edu.institution}
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-md text-sm font-semibold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {edu.grade}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
