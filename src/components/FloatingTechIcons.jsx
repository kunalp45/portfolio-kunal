import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiDotnet, SiDocker, SiKubernetes, SiPostgresql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

const icons = [
  { id: 1, Icon: TbBrandCSharp, name: 'C#', color: '#512BD4', delay: 0 },
  { id: 2, Icon: SiReact, name: 'React', color: '#61DAFB', delay: 1 },
  { id: 3, Icon: SiDotnet, name: '.NET', color: '#512BD4', delay: 2 },
  { id: 4, Icon: SiDocker, name: 'Docker', color: '#2496ED', delay: 3 },
  { id: 5, Icon: FaAws, name: 'AWS', color: '#FF9900', delay: 4 },
  { id: 6, Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5', delay: 5 },
  { id: 7, Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', delay: 6 },
];

const FloatingTechIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
      {icons.map((tech, i) => {
        const angle = (i / icons.length) * Math.PI * 2;
        const radius = 140; // distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={tech.id}
            className="absolute pointer-events-auto"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ 
              x: [x, x + 10, x], 
              y: [y, y - 10, y],
              opacity: 1
            }}
            transition={{
              x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: tech.delay * 0.5 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: tech.delay * 0.5 },
              opacity: { duration: 1 }
            }}
            whileHover={{ scale: 1.2, zIndex: 30 }}
          >
            <div className="relative group cursor-pointer">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border-slate-700 hover:border-accent transition-colors">
                <tech.Icon size={24} color={tech.color} />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col items-center">
                <div className="glass-panel px-3 py-2 text-xs whitespace-nowrap bg-dark-bg text-white font-medium">
                  {tech.name}
                </div>
                <div className="w-2 h-2 bg-dark-bg border-r border-b border-dark-border rotate-45 -mt-1"></div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingTechIcons;
