import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { 
  FaReact, FaNodeJs, FaDocker, FaDatabase, FaJava 
} from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact className="text-blue-400" size={24} />,
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Ant Design']
  },
  {
    title: 'Backend',
    icon: <FaNodeJs className="text-green-500" size={24} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'MVC Architecture']
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="text-purple-400" size={24} />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM', 'Redis']
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaDocker className="text-blue-500" size={24} />,
    skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub', 'Jenkins', 'CI/CD', 'Postman']
  },
  {
    title: 'Core CS',
    icon: <FaJava className="text-red-500" size={24} />,
    skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'Concurrency', 'System Design']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-cards/30 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A comprehensive list of my technical arsenal and tools I use."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 text-sm font-medium bg-background/50 border border-white/5 rounded-full text-gray-300 group-hover:border-white/20 group-hover:text-white transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
