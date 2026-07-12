import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiDotnet, SiReact, SiDocker, SiKubernetes, 
  SiPostgresql, SiJavascript, SiGithub,
  SiJsonwebtokens
} from 'react-icons/si';
import { FaDatabase, FaServer, FaBrain, FaNetworkWired, FaAws, FaHtml5, FaCss3Alt, FaPython, FaReact } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp } from 'react-icons/tb';

const categories = [
  {
    title: 'Backend Engineering',
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'from-[#512BD4]/20 to-transparent',
    border: 'border-[#512BD4]/50',
    skills: [
      { name: 'ASP.NET Core', Icon: SiDotnet },
      { name: 'C#', Icon: TbBrandCSharp },
      { name: 'Entity Framework', Icon: FaDatabase },
      { name: 'REST APIs', Icon: FaServer },
      { name: 'JWT', Icon: SiJsonwebtokens },
    ]
  },
  {
    title: 'Cloud & DevOps',
    colSpan: 'md:col-span-2 lg:col-span-1',
    color: 'from-[#FF9900]/20 to-transparent',
    border: 'border-[#FF9900]/50',
    skills: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'CI/CD', Icon: SiGithub },
    ]
  },
  {
    title: 'AI & Data',
    colSpan: 'md:col-span-2 lg:col-span-1',
    color: 'from-[#412991]/20 to-transparent',
    border: 'border-[#412991]/50',
    skills: [
      { name: 'LangChain', Icon: FaBrain },
      { name: 'OpenAI', Icon: FaBrain },
      { name: 'Vector DB', Icon: FaDatabase },
      { name: 'RAG', Icon: FaNetworkWired },
    ]
  },
  {
    title: 'Frontend Development',
    colSpan: 'md:col-span-2 lg:col-span-2',
    color: 'from-[#61DAFB]/20 to-transparent',
    border: 'border-[#61DAFB]/50',
    skills: [
      { name: 'React', Icon: SiReact },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
    ]
  },
  {
    title: 'Languages & DBs',
    colSpan: 'md:col-span-4 lg:col-span-3',
    color: 'from-[#3776AB]/20 to-transparent',
    border: 'border-[#3776AB]/50',
    skills: [
      { name: 'SQL Server', Icon: FaDatabase },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'Python', Icon: FaPython },
      { name: 'C++', Icon: TbBrandCpp },
    ]
  }
];

const SkillsBentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4">
      {categories.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`glass-panel p-6 md:p-8 relative overflow-hidden group hover:shadow-lg transition-all ${cat.colSpan} border-t-2 ${cat.border}`}
        >
          {/* Subtle gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{cat.title}</h3>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            {cat.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2 bg-dark-bg/80 border border-dark-border px-3 py-2 rounded-lg hover:border-accent hover:text-accent transition-colors cursor-default">
                <skill.Icon size={18} className="text-slate-400 group-hover/skill:text-accent" />
                <span className="text-sm font-medium text-slate-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsBentoGrid;
