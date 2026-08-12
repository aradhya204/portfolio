import { motion, useReducedMotion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'MVC Architecture']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'Redis']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub', 'Jenkins', 'CI/CD', 'Postman']
  },
  {
    title: 'Core CS',
    skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Concurrency', 'System Design']
  }
];

export const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" className="py-32 border-t border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-section-title font-black uppercase tracking-tighter leading-none mb-4">
            Skills<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-5xl"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex flex-col md:flex-row md:items-baseline py-8 border-b border-white/10 last:border-none"
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-white text-lg font-semibold tracking-wide">{category.title}</h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-400 font-medium leading-relaxed">
                  {category.skills.join(' • ')}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
