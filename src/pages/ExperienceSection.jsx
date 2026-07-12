import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const ExperienceSection = () => {
  return (
    <section className="w-full py-16 bg-dark-bg flex flex-col items-center" id="experience">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-glow text-center">
        Professional Experience
      </h2>
      <div className="container mx-auto px-4">
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
