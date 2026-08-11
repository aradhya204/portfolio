import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ParticlePortrait } from '../ui/ParticlePortrait';
import profileImg from 'C:/Users/aradh/.gemini/antigravity-ide/brain/305fde7b-df25-4421-b00d-3a93dfdbfaa4/profile_pic_1786472674011.png';

export const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const fallbackImageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.6 } },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
    },
  };

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="max-w-[90vw] mx-auto w-full flex flex-col-reverse lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-24 pt-20">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full lg:w-2/3"
        >
          <div className="flex overflow-hidden">
            <motion.h1 
              variants={wordVariants}
              className="text-[clamp(4rem,10vw,12rem)] font-black leading-[0.9] tracking-tighter uppercase text-white"
            >
              Aradhya
            </motion.h1>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8 items-baseline overflow-hidden mt-2">
            <motion.span 
              variants={wordVariants}
              className="text-[clamp(4rem,10vw,12rem)] font-black leading-[0.9] tracking-tighter uppercase text-primary"
            >
              Raj
            </motion.span>
            <motion.span 
              variants={wordVariants}
              className="font-serif italic font-normal text-[clamp(1.5rem,3vw,3rem)] text-accent lowercase tracking-normal"
            >
              full stack developer
            </motion.span>
          </div>

          <motion.div
            variants={wordVariants}
            className="mt-12 md:mt-16 max-w-xl"
          >
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              Building scalable, high-performance web applications with modern frontend technologies and robust backend architectures.
            </p>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <div
          className="w-full max-w-sm lg:w-1/3 aspect-square rounded-full relative overflow-hidden flex-shrink-0 lg:mb-12 ring-2 ring-white/10 shadow-2xl bg-gray-800"
        >
          <ParticlePortrait src="/profile.jpg" width={300} height={400} />
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-4"
      >
        <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
        <div className="w-12 h-[1px] bg-gray-700 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
