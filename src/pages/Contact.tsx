import React, { Fragment } from 'react';
import TextAnimateUp from '../components/ui/TextAnimateUp';
import ContactForm from '../components/Home/Contact';

const Contact: React.FC = () => {

  return (
    <Fragment>
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl shadow-xl w-full overflow-hidden h-[60vh] min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-6 sm:mb-8 font-sf-pro-display text-white max-w-5xl mx-auto px-4 leading-none xl:leading-[1.2]">
              <TextAnimateUp 
                text="Let’s Build Something Great Together"
                className="inline-block"
                wordDelay={0.1}
                charDelay={0.03}
              />
            </h1>
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light font-sf-pro-text text-white/90 max-w-3xl leading-relaxed">

            <TextAnimateUp 
                text="Tell us about your project and our team will get back to you within one business day."
                className="inline-block"
                wordDelay={0.2}
                charDelay={0.05}
              />
            </p>
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
