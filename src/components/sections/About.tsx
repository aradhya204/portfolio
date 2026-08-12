import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillChip } from '../ui/SkillChip';
import { KineticHeading } from '../ui/KineticHeading';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'RBAC', 'MVC'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'Postman', 'AWS', 'CI/CD'],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    skills: ['Scikit-learn', 'Model Training', 'Feature Engineering', 'OCR Integration'],
  },
  {
    id: 'core',
    label: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'Concurrency'],
  },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent relative z-10">
      <div className="max-w-[90vw] mx-auto">
        <div className="mb-16">
          <KineticHeading className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
            About Me
          </KineticHeading>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Photo/Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              {/* Replace with your actual illustration or secondary photo */}
              <img 
                src="/images/about-illustration.jpg" 
                alt="Aradhya Raj working" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x800/111827/8B5CF6?text=About+Illustration'; }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Column: Bio and Skills */}
          <div className="w-full lg:w-3/5 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
                Full Stack Developer with hands-on experience building production-grade distributed backend systems and full-stack web applications.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                My work includes engineering a Redis-backed distributed rate-limiting API gateway, an AI-powered code review platform combining a self-trained ML classifier with a full-stack TypeScript app, and secure multi-tenant fintech REST APIs with role-based access control.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                I have a strong foundation in <span className="text-white font-semibold">Data Structures & Algorithms, Object-Oriented Programming, and Concurrency</span> across the full Software Development Life Cycle.
              </p>
            </motion.div>

            {/* Interactive Skills Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4"
            >
              <h3 className="text-xl font-bold font-display text-white mb-6 uppercase tracking-wide">Technical Arsenal</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {SKILL_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === category.id 
                        ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                        : 'bg-cards text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: { transition: { staggerChildren: 0.05 } },
                      hidden: { opacity: 0, y: -10 }
                    }}
                    className="flex flex-wrap gap-3"
                  >
                    {SKILL_CATEGORIES.find(c => c.id === activeTab)?.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                        }}
                      >
                        <SkillChip name={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
