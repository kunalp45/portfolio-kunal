import React from 'react';
import ContactCard from '../components/ContactCard';

const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-dark-bg flex flex-col items-center justify-center relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent rounded-full blur-[200px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full mb-12">
        <ContactCard />
      </div>
    </section>
  );
};

export default ContactSection;
