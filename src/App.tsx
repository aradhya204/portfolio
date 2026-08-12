import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Subtle background color shift from #030712 to #050410 (very slight tint changes)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#030712", "#050614", "#0a050f"]
  );

  return (
    <motion.div 
      className="min-h-screen text-text font-sans selection:bg-primary/30 relative"
      style={{ backgroundColor: shouldReduceMotion ? '#030712' : backgroundColor }}
    >
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Editorial Background: Subtle Animated SVG Grid + Fine Noise */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ 
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%)'
          }}
        />
        {/* Fine Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </motion.div>
  );
}

export default App;
