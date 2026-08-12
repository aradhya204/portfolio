import React from 'react';
import { motion } from 'framer-motion';

interface SkillChipProps {
  name: string;
}

export const SkillChip: React.FC<SkillChipProps> = ({ name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 bg-cards border border-white/10 rounded-full shadow-sm text-sm font-medium text-gray-300 hover:border-primary hover:text-white transition-colors"
    >
      {name}
    </motion.div>
  );
};
