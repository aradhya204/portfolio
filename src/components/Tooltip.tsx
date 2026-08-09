import { useState } from 'react';
import { motion } from 'framer-motion';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onTouchStart={() => setVisible(!visible)}
    >
      {children}
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-8 bg-black/70 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10 shadow-md"
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};
