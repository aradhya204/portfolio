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

      {/* Very subtle noise/texture overlay for editorial feel */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

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
