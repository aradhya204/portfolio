import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Decision {
  question: string;
  answer: string;
}

interface EngineeringDecisionsProps {
  decisions: Decision[];
}

export const EngineeringDecisions = ({ decisions }: EngineeringDecisionsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-4 space-y-2">
      {decisions.map((d, i) => (
        <div key={i} className="border border-primary/30 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-4 py-2 flex justify-between items-center text-sm font-medium text-gray-300 hover:bg-primary/10 transition"
          >
            <span>{d.question}</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 pb-4 text-sm text-gray-300"
              >
                {d.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
