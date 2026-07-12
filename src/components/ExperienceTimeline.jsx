import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2026',
    role: 'Backend Engineering Intern',
    company: 'Kinetic Green',
    description: 'Developed a Smart PLM TeamCenter System. Designed a multi-tier architecture focusing on BOM Management and ECN Workflows.',
    metrics: [
      { value: '500+', label: 'Workflows' },
      { value: '99.9%', label: 'Uptime' }
    ],
    tech: ['C#', 'ASP.NET Core', 'SQL Server']
  },
  {
    year: '2026',
    role: 'Full Stack Intern',
    company: 'Kinetic Green',
    description: 'Built an EV Web Portal & React Native Mobile App utilizing an event-driven IoT architecture for real-time telemetry and fleet tracking.',
    metrics: [
      { value: 'Sub 200ms', label: 'Latency' },
      { value: '99.9%', label: 'Telemetry Reliability' }
    ],
    tech: ['React', 'React Native', 'AWS IoT Core', 'MQTT']
  }
];

const ExperienceTimeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-border -translate-x-1/2"></div>
      
      {experiences.map((exp, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative flex flex-col md:flex-row items-center mb-24 w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-dark-bg border-4 border-accent -translate-x-1/2 z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            {/* Year Badge (Mobile: top, Desktop: opposite side) */}
            <div className={`hidden md:block absolute top-1 ${isEven ? 'right-1/2 pr-12 text-right' : 'left-1/2 pl-12 text-left'} w-1/2`}>
              <span className="text-3xl font-black text-slate-700 opacity-30 tracking-tighter block">{exp.year}</span>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-panel p-6 md:p-8 hover:border-accent/50 transition-colors relative overflow-hidden group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="md:hidden text-2xl font-black text-slate-600 mb-2">{exp.year}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-accent font-medium mb-4">{exp.company}</h4>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {exp.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xl font-bold text-white">{metric.value}</span>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-dark-bg border border-dark-border rounded-full text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
