import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Technologies Learned', value: 20, suffix: '+' },
  { label: 'Coding Problems Solved', value: 300, suffix: '+' },
];

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

export const Achievements = () => {
  return (
    <section className="py-32 relative bg-[#030712] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-section-title font-black uppercase tracking-tighter leading-none mb-4">
            Impact<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-32">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-start border-l-2 border-white/10 pl-6"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2 flex tracking-tighter">
                <Counter to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-2">GitHub Activity</h3>
            <p className="text-gray-400 font-medium text-lg">My recent open source contributions and activity.</p>
          </div>
          <div className="w-full flex overflow-x-auto pb-4">
            <img 
              src="https://ghchart.rshah.org/F59E0B/aradhya204" 
              alt="Aradhya's GitHub chart" 
              className="opacity-90 hover:opacity-100 transition-opacity min-w-[600px] brightness-125"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
