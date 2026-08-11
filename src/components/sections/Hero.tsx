import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <div className="max-w-[90vw] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h1 className="text-hero font-black leading-[0.9] tracking-tighter uppercase text-white">
            Aradhya
          </h1>
          <h1 className="text-hero font-black leading-[0.9] tracking-tighter uppercase text-white flex flex-wrap gap-4 md:gap-8 items-baseline">
            <span className="text-primary">Raj</span>
            <span className="font-serif italic font-normal text-hero-sub text-accent lowercase tracking-normal">
              full stack engineer
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 md:mt-24 max-w-xl"
        >
          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
            Building scalable, high-performance web applications with modern frontend technologies and robust backend architectures.
          </p>
        </motion.div>
      </div>

      {/* Subtle Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-4"
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
