import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactCard = () => {
  const cardRef = useRef(null);
  
  // Mouse position values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the motion values
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (-15deg to 15deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates between -0.5 and 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Replace with your actual EmailJS IDs
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="w-full flex items-center justify-center perspective-[1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 glass-panel p-8 md:p-12 border-accent/20"
      >
        
        {/* Left Side: Contact Info (Pops out in 3D) */}
        <div style={{ transform: "translateZ(50px)" }} className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-2 text-glow">Get In Touch</h3>
          <p className="text-slate-400 mb-8">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-accent">
                <FaEnvelope size={20} />
              </div>
              <a href="mailto:kunalpatki01@gmail.com" className="hover:text-accent transition-colors">kunalpatki01@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-accent">
                <FaMapMarkerAlt size={20} />
              </div>
              <span>Pune, India</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kunalpatki01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel hover:bg-accent hover:border-accent flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/kunalp45" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel hover:bg-accent hover:border-accent flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <FaGithub size={20} />
            </a>
            
            <a href="/Resume_KunalPatki_8_july.pdf" download className="ml-auto px-6 h-12 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-accent hover:text-white transition-colors">
              <FaFileDownload /> Resume
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form (Sits further back) */}
        <div style={{ transform: "translateZ(20px)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="mt-2 w-full bg-accent hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors relative overflow-hidden"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactCard;
