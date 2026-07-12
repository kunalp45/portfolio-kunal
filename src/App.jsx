import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import SkillsSection from './pages/SkillsSection';
import ExperienceSection from './pages/ExperienceSection';
import ProjectsSection from './pages/ProjectsSection';
import ContactSection from './pages/ContactSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-slate-950 text-slate-50 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
