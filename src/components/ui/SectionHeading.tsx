import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, className }: SectionHeadingProps) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      className={cn("flex flex-col items-center justify-center text-center mb-16", className)}
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, type: 'spring', bounce: 0.4 } }
        }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: "circOut" } }
        }}
        className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-6 rounded-full origin-left"
      />
    </motion.div>
  );
};
