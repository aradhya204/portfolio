import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = '',
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const node = nodeRef.current;
      if (!node) return;

      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value) + suffix;
        },
      });

      setHasAnimated(true);
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix, hasAnimated]);

  return (
    <span ref={nodeRef} className={className}>
      {from}{suffix}
    </span>
  );
};
