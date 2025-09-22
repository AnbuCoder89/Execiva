import React, { Fragment, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/ui/Button';
import TextAnimateUp from '../components/ui/TextAnimateUp';
import ContactForm from '../components/Home/Contact';

const Contact: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <Fragment>
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl shadow-xl w-full overflow-hidden h-[60vh] min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          {/* background image */}
          <img
            src="/image/case-studies/casestudy-1.jpeg"
            alt="Case Study Hero"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] font-bold mb-6 sm:mb-8 font-sf-pro-display text-white max-w-5xl mx-auto px-4 leading-none xl:leading-[1.2]">
              <TextAnimateUp 
                text="We've got a great feeling about this"
                className="inline-block"
                wordDelay={0.1}
                charDelay={0.03}
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
    
    {/* Contact Form Section */}
    <ContactForm />
    </Fragment>
  );
};

export default Contact;
