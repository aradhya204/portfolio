import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Technologies Learned', value: 20, suffix: '+' },
  { label: 'GitHub Repositories', value: 35, suffix: '' },
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
      
      // Easing function: easeOutQuart
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
    <section className="py-24 relative border-t border-b border-white/5 bg-[#080C17]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements" 
          subtitle="A quick look at my progress and contributions."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex">
                <Counter to={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto glass rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">GitHub Activity</h3>
            <p className="text-gray-400 text-sm">My recent open source contributions and activity.</p>
          </div>
          <div className="w-full flex justify-center overflow-x-auto pb-4">
            {/* Real github stats could be used here via github-readme-stats */}
            <img 
              src="https://ghchart.rshah.org/3B82F6/aradhya204" 
              alt="Aradhya's GitHub chart" 
              className="opacity-80 hover:opacity-100 transition-opacity min-w-[600px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
