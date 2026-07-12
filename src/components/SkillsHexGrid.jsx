import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDotnet, SiReact, SiDocker, SiKubernetes, 
  SiPostgresql, SiJavascript, SiGithub,
  SiJsonwebtokens
} from 'react-icons/si';
import { FaDatabase, FaServer, FaBrain, FaNetworkWired, FaAws, FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';

const skills = [
  { name: 'ASP.NET Core', category: 'Backend', Icon: SiDotnet, color: '#512BD4' },
  { name: 'C#', category: 'Backend', Icon: TbBrandCSharp, color: '#239120' },
  { name: 'Entity Framework', category: 'Backend', Icon: FaDatabase, color: '#512BD4' },
  { name: 'REST APIs', category: 'Backend', Icon: FaServer, color: '#68A063' },
  { name: 'JWT', category: 'Backend', Icon: SiJsonwebtokens, color: '#000000' },
  
  { name: 'AWS', category: 'Cloud', Icon: FaAws, color: '#FF9900' },
  { name: 'Docker', category: 'Cloud', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', category: 'Cloud', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'CI/CD', category: 'Cloud', Icon: SiGithub, color: '#ffffff' },

  { name: 'React', category: 'Frontend', Icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', category: 'Frontend', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', Icon: SiJavascript, color: '#F7DF1E' },
  
  { name: 'LangChain', category: 'AI', Icon: FaBrain, color: '#2E3440' },
  { name: 'OpenAI', category: 'AI', Icon: FaBrain, color: '#412991' },
  { name: 'Vector DB', category: 'AI', Icon: FaDatabase, color: '#888888' },
  { name: 'RAG', category: 'AI', Icon: FaNetworkWired, color: '#005571' },
  
  { name: 'SQL Server', category: 'Database', Icon: FaDatabase, color: '#CC292B' },
  { name: 'PostgreSQL', category: 'Database', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'C++', category: 'Languages', Icon: TbBrandCpp, color: '#00599C' },
  { name: 'Python', category: 'Languages', Icon: FaPython, color: '#3776AB' },
];

const SkillsHexGrid = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-4xl mx-auto gap-4 md:gap-6 px-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="relative group cursor-pointer"
        >
          {/* Hexagon shape using clip-path */}
          <div 
            className="w-24 h-28 md:w-32 md:h-36 bg-dark-surface border border-dark-border flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-opacity-80 relative"
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: `linear-gradient(to bottom right, #111827, #030712)`
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: skill.color }}></div>
            
            <skill.Icon size={40} className="mb-2 z-10 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
            <span className="text-[10px] md:text-xs text-center px-2 text-slate-300 font-medium z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>
          </div>
          
          {/* Glowing border effect */}
          <div 
            className="absolute -inset-1 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500 z-0" 
            style={{ backgroundColor: skill.color }}
          ></div>

          {/* Category Tag (Optional Tooltip) */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <div className="glass-panel px-2 py-1 text-[10px] whitespace-nowrap bg-dark-bg text-accent font-semibold border-accent/30 border rounded-md">
              {skill.category}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsHexGrid;
