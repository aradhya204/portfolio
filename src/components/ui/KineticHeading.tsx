import React from 'react';
import { motion, Variants } from 'framer-motion';

interface KineticHeadingProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const KineticHeading: React.FC<KineticHeadingProps> = ({ 
  children, 
  className = '', 
  as: Component = 'h2' 
}) => {
  const words = children.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      rotateX: 45, 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Component className={`font-display tracking-tight ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="inline-flex flex-wrap gap-x-[0.3em] gap-y-2"
      >
        {words.map((word, idx) => (
          <motion.span key={idx} variants={wordVariants} className="inline-block origin-bottom">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};
