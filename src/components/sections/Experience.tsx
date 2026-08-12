import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { KineticHeading } from '../ui/KineticHeading';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Design Esthetics",
    period: "Feb 2026 – May 2026",
    stats: [
      { count: 4, label: "React Modules" },
      { count: 100, label: "Internal Users", suffix: "+" },
      { count: 95, label: "Onboarding Reduction", suffix: "%" }
    ],
    bullets: [
      "Shipped 4 production React.js modules (auth, onboarding, instructor allocation, aircraft scheduling) adopted by 100+ internal users",
      "Built 20+ RESTful endpoints with JWT auth and role-based authorization across 3 roles",
      "Reduced new-developer onboarding time by ~95% (1 day → under 30 min) via Docker containerization"
    ]
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <div className="mb-16">
          <KineticHeading className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            Professional Experience
          </KineticHeading>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
        </div>

        <div className="relative">
          {/* Timeline Background Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-4 md:left-8 top-0 w-1 bg-gradient-to-b from-primary to-accent rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-12 pt-6">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }: { exp: any, index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 80%", "center center"]
  });

  const dotScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
  const dotOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const dotColor = useTransform(scrollYProgress, [0, 1], ["#111827", "#3B82F6"]);

  return (
    <div ref={itemRef} className="relative pl-12 md:pl-24">
      {/* Animated Dot */}
      <motion.div 
        className="absolute left-2.5 md:left-[1.65rem] top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary z-10 bg-cards"
        style={{ scale: dotScale, opacity: dotOpacity, backgroundColor: dotColor as any }}
      />
      
      {/* Glow Effect behind Dot */}
      <motion.div 
        className="absolute left-2.5 md:left-[1.65rem] top-1.5 w-4 h-4 -translate-x-1/2 rounded-full bg-primary blur-md z-0"
        style={{ opacity: scrollYProgress }}
      />

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-cards/50 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-colors shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-white">{exp.role}</h3>
            <div className="text-lg text-primary font-medium">{exp.company}</div>
          </div>
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 self-start md:self-auto whitespace-nowrap">
            {exp.period}
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="flex flex-wrap gap-4 mt-6 mb-6">
          {exp.stats.map((stat: any, i: number) => (
            <div key={i} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5">
              <div className="text-2xl font-black text-white font-display">
                <AnimatedCounter to={stat.count} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <ul className="space-y-3">
          {exp.bullets.map((bullet: string, i: number) => (
            <li key={i} className="text-gray-400 flex items-start group">
              <span className="text-accent mr-3 mt-1.5 opacity-60 group-hover:opacity-100 transition-opacity">▹</span>
              <span className="leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
