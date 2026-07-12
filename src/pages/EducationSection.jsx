import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const education = [
  {
    degree: 'B.Tech in ENTC',
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    score: '8.6 CGPA',
    date: 'Graduated'
  },
  {
    degree: '12th Grade (PCM)',
    institution: 'Lt. Raosaheb Jamkar Jr. College, Parbhani',
    score: '75.5%',
    date: 'Completed'
  },
  {
    degree: '10th Grade',
    institution: 'Bal Vidya Mandir, Parbhani',
    score: '99%',
    date: 'Completed'
  }
];

const certifications = [
  {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'Coursera — IBM Skills Network (15-Course Professional Certificate)',
    date: 'Apr 2025'
  },
  {
    title: 'AWS Academy Cloud Virtual Internship',
    issuer: 'AICTE — EduSkills Foundation | National Internship Portal (10 Weeks)',
    date: 'Sep 2024'
  }
];

const EducationSection = () => {
  return (
    <section className="w-full py-16 bg-dark-bg flex flex-col items-center relative overflow-hidden" id="education">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-10">
        <div className="absolute top-[40%] right-[20%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-accent">
                <FaGraduationCap size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-glow">Education</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-panel p-6 border-l-4 border-l-accent hover:border-l-blue-400 transition-colors group"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-slate-400 text-sm font-medium mb-3">{edu.institution}</h4>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-dark-border group-hover:border-slate-700 transition-colors">
                    <span className="text-accent font-black text-lg">{edu.score}</span>
                    <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{edu.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-purple-400">
                <FaCertificate size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-glow" style={{ textShadow: "0 0 10px rgba(192, 132, 252, 0.5)"}}>Certifications</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-panel p-6 border-l-4 border-l-purple-500 hover:border-l-purple-400 transition-colors group relative overflow-hidden h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10 leading-snug">{cert.title}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6 relative z-10">{cert.issuer}</p>
                  <div className="inline-block px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-xs font-bold text-slate-300 tracking-wider relative z-10">
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
