import React, { Suspense } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useTypingEffect from '../utils/useTypingEffect';
import GlobeHeroCanvas from '../components/canvas/GlobeHero';

const HeroSection = () => {
  const titles = [
    'Software Engineer',
    'Backend Engineer',
    'AI Developer',
    'Cloud Enthusiast'
  ];
  
  const typedText = useTypingEffect(titles, 100, 50, 2000);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-dark-bg overflow-hidden" id="hero">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-dark-bg" />}>
          <GlobeHeroCanvas />
        </Suspense>
      </div>

      {/* Floating Particles overlay (CSS based) */}
      <div className="absolute inset-0 pointer-events-none z-10" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
             backgroundSize: '50px 50px',
             opacity: 0.3
           }}>
      </div>

      {/* Content */}
      <div className="z-20 text-center flex flex-col items-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white opacity-0 animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-forwards text-glow">
          KUNAL PATKI
        </h1>
        
        <div className="mt-4 md:mt-6 text-xl md:text-2xl text-accent font-light tracking-wide h-10 flex items-center justify-center">
          <span>{typedText}</span>
          <span className="w-[2px] h-6 bg-accent ml-1 animate-pulse"></span>
        </div>

        <p className="mt-6 text-slate-300 text-lg md:text-xl opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-forwards">
          Building scalable backend systems, AI-powered applications, and real-time cloud architectures.
        </p>

        <div className="mt-10 flex gap-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1200 fill-mode-forwards">
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 bg-transparent border-2 border-slate-600 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-colors glass-panel"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-12 flex gap-6 opacity-0 animate-in fade-in duration-1000 delay-1500 fill-mode-forwards">
          <a href="https://github.com/kunalp45" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/kunalpatki01" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent hover:scale-110 transition-all"><FaLinkedin size={24} /></a>
          <a href="mailto:kunalpatki01@gmail.com" className="text-slate-400 hover:text-red-400 hover:scale-110 transition-all"><FaEnvelope size={24} /></a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 z-20 flex flex-col items-center animate-bounce text-text-muted opacity-0 animate-in fade-in duration-1000 delay-[2000ms] fill-mode-forwards">
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
