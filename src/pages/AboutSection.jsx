import React from 'react';
import FloatingTechIcons from '../components/FloatingTechIcons';

const AboutSection = () => {
  return (
    <section className="relative w-full flex items-center justify-center bg-dark-bg py-24 overflow-hidden" id="about">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          
          {/* Profile Image & Orbiting Tech */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dark-border animate-[spin_10s_linear_infinite] opacity-50"></div>
            <div className="absolute inset-4 rounded-full border border-dark-border animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
            
            <img 
              src="/profile.jpg" 
              alt="Kunal Patki" 
              className="w-48 h-48 rounded-full object-cover z-10 border-4 border-slate-800 shadow-[0_0_30px_rgba(59,130,246,0.3)]" 
            />
            
            <FloatingTechIcons />
          </div>
          
          <div className="max-w-xl glass-panel p-8">
            <h2 className="text-4xl font-bold mb-6 text-glow text-white">About Me</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I am a versatile Software Engineer specializing in Backend Engineering, AI/RAG, and Cloud architecture. With a diverse background across .NET, React, and AWS, I build robust systems ranging from high-latency AI wrappers to large-scale PLM solutions.
            </p>
            <p className="text-slate-400 text-md">
              Whether I'm optimizing database queries, setting up CI/CD pipelines, or implementing complex front-end animations, I focus on delivering scalable, high-performance applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
