import { motion } from 'framer-motion';

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
  return (
    <section id="experience" className="py-32 bg-[#030712] border-t border-white/5 relative">
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

        <div className="max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="text-gray-300 text-base leading-relaxed flex items-start">
                      <span className="text-primary mr-3 mt-1.5 opacity-70 text-xs">■</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
