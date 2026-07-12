import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-Commerce Platform',
    logo: 'AI',
    arch: 'Microservices with RAG integration',
    features: ['Semantic Search', 'Smart Recommendations', 'Vector Database Integration'],
    tech: ['React', 'ASP.NET Core', 'LangChain', 'OpenAI', 'Python'],
    challenges: 'Optimizing retrieval latency for semantic search over millions of products.',
    future: 'Implementing real-time multimodal search (image + text).',
    github: 'https://github.com/kunalp45/AI-Powered_E-commerce-website'
  },
  {
    id: 6,
    title: 'AI E-Commerce Mobile App',
    logo: 'RN',
    arch: 'Cross-platform Mobile Architecture',
    features: ['Seamless UI/UX', 'Real-time AI Chat', 'Push Notifications', 'API Integration'],
    tech: ['React Native', 'Redux', 'Axios'],
    challenges: 'Ensuring smooth cross-platform performance for AI-heavy features.',
    future: 'Offline-first capabilities using local vector search.',
    github: 'https://github.com/kunalp45/E-Commerce-app'
  },
  {
    id: 2,
    title: 'Intelligent Shot Prediction & Weather Analysis',
    logo: 'ML',
    arch: 'Supervised Learning & API Integration',
    features: ['Shot Selection ML', 'Real-time Pitch Conditions', 'Rain & Wind Impact Analysis', 'Interactive UI'],
    tech: ['Python', 'Machine Learning', 'Weather APIs', 'Data Science'],
    challenges: 'Cleaning and structuring disparate match statistics to achieve high model precision and recall.',
    future: 'Deep learning models for real-time video analysis of shots.',
    github: '#'
  },
  {
    id: 4,
    title: 'Custom Blockchain Voting System',
    logo: 'BC',
    arch: 'Custom Decentralized P2P Network',
    features: ['Custom Consensus Mechanism', 'Immutable Ledger', 'Cryptographic Hashing', 'Real-time Tally'],
    tech: ['Custom Blockchain Core', 'Cryptography', 'P2P Networking', 'React'],
    challenges: 'Designing a robust consensus algorithm from scratch and ensuring reliable peer-to-peer node synchronization.',
    future: 'Implementing Zero-Knowledge Proofs and expanding to support custom smart contracts.',
    github: '#'
  },
  {
    id: 5,
    title: 'Java Ticket Booking',
    logo: 'JB',
    arch: 'MVC Desktop Architecture',
    features: ['Real-time Booking', 'Seat Matrix', 'PDF Ticket Generation'],
    tech: ['Java', 'Swing', 'MySQL'],
    challenges: 'Handling concurrent bookings for the same seat to prevent race conditions.',
    future: 'Migrating to a web-based microservices architecture.',
    github: 'https://github.com/kunalp45/Ticket-Booking-System'
  }
];

const ProjectCubes = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full relative min-h-[60vh] flex items-center justify-center">
      
      {/* Grid of Cubes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 w-full max-w-[1400px] z-10 px-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* The "Cube" */}
            <div className="aspect-square glass-panel flex flex-col items-center justify-center relative overflow-hidden group hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center text-2xl font-black text-accent mb-4 group-hover:scale-110 transition-transform">
                {project.logo}
              </div>
              <h3 className="text-center font-bold text-white px-4">{project.title}</h3>
              
              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-accent">
                Click to open
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 relative bg-[#0a0f1c]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column: Visuals / Primary Info */}
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                  <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-dark-bg border border-dark-border flex items-center justify-center text-6xl font-black text-accent shadow-inner">
                    {selectedProject.logo}
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.github !== '#' && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 glass-panel py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm font-semibold">
                        <FaGithub size={18} /> Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="w-full md:w-2/3 flex flex-col">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-accent font-medium mb-8">Architecture: {selectedProject.arch}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                        {selectedProject.features.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-slate-800 rounded-md border border-slate-700 text-slate-300">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Challenges</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Future Enhancements</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.future}</p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCubes;
