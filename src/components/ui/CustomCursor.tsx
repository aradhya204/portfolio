import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorVariant } = useCursor();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  if (shouldReduceMotion) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: '#F59E0B',
      mixBlendMode: 'normal' as any,
    },
    link: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 2,
      backgroundColor: '#EC4899',
      mixBlendMode: 'screen' as any,
    },
    project: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1,
      backgroundColor: 'transparent',
      border: '1px solid white',
      width: 64,
      height: 64,
      mixBlendMode: 'normal' as any,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[100] flex items-center justify-center"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      {cursorVariant === 'project' && (
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white">View</span>
      )}
    </motion.div>
  );
};
