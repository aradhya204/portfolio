import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { FaCalendarAlt } from 'react-icons/fa';

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
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and industry experience."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-center mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] z-10" />
              
              {/* Content */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-16 text-left md:text-right mb-4 md:mb-0 group cursor-default">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                <h4 className="text-xl text-secondary font-medium mb-2">{exp.company}</h4>
                <div className="flex items-center md:justify-end gap-2 text-sm text-gray-400 font-mono mb-4">
                  <FaCalendarAlt className="text-accent" />
                  {exp.period}
                </div>
              </div>

              {/* Highlights */}
              <div className="w-full md:w-1/2 pl-8 md:pl-16">
                <div className="glass-card p-8 border-l-4 border-l-primary hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-500">
                  <ul className="space-y-4">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start group">
                        <span className="text-accent mr-3 mt-1 opacity-70 group-hover:opacity-100 transition-opacity">▹</span>
                        <span className="group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
