import React from 'react';
import ProjectCubes from '../components/ProjectCubes';

const ProjectsSection = () => {
  return (
    <section className="w-full py-16 bg-dark-bg flex flex-col items-center" id="projects">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-glow text-center">
        Featured Projects
      </h2>
      <div className="container mx-auto px-4 w-full">
        <ProjectCubes />
      </div>
    </section>
  );
};

export default ProjectsSection;
