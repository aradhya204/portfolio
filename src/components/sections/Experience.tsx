import { motion, useReducedMotion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Design Esthetics",
    period: "Feb 2026 – May 2026",
    highlights: [
      "Engineered and shipped 4 production React.js modules (auth, onboarding, instructor allocation, aircraft scheduling) with reusable, responsive components.",
      "Architected 20+ RESTful endpoints and integrated them into React.js front-ends, securing routes with JWT authentication and RBAC.",
      "Cut new-developer onboarding time by ~95% by containerizing all Node.js services with Docker.",
      "Drove Agile delivery via Git/GitHub and Postman.",
      "Integrated PostgreSQL and MySQL for scalable data management."
    ]
  }
];

export const Experience = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="experience" className="py-32 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-section-title font-black uppercase tracking-tighter leading-none mb-4">
            Experience<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-5xl"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-t border-white/10 first:border-t-0 first:pt-0"
            >
              <div className="w-full lg:w-1/3 shrink-0">
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <h4 className="text-lg font-serif italic text-accent mb-4">{exp.company}</h4>
                <div className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  {exp.period}
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <motion.ul 
                  variants={shouldReduceMotion ? {} : listContainerVariants}
                  className="space-y-4"
                >
                  {exp.highlights.map((item, i) => (
                    <motion.li 
                      key={i} 
                      variants={shouldReduceMotion ? {} : listItemVariants}
                      className="text-gray-300 text-base leading-relaxed flex items-start"
                    >
                      <span className="text-primary mr-3 mt-1.5 opacity-70 text-xs">■</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
