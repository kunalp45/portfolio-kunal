import React from 'react';
import SkillsBentoGrid from '../components/SkillsBentoGrid';

const SkillsSection = () => {
  return (
    <section className="w-full py-16 bg-dark-bg flex flex-col items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-glow text-center">
          Technical Mastery
        </h2>
        
        <div className="w-full">
          <SkillsBentoGrid />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
