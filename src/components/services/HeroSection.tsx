import React from "react";
import Button from "../ui/Button";
import BackButton from "../ui/BackButton";

interface HeroSectionProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tagline?: string;
  onGetStarted?: () => void;
  onViewAllServices?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  image,
  tagline,
  onGetStarted,
  onViewAllServices
}) => {

  return (
    <section className="pt-12 min-h-screen">
      <div className="flex items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-2xl shadow-xl w-full mt-8 overflow-hidden">
          {/* background image */}
          <img
            src={image}
            alt={title}
            className="w-full h-[100vh] lg:h-[90vh] object-cover rounded-2xl"
          />
          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* content overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white">

            <div className="bg-green-500/20 backdrop-blur-sm rounded-lg border border-white/30 px-4 py-2 mb-2">
              <div className="text-sm font-medium text-white font-sf-pro-text">
                <h1 className="">{title}</h1>
              </div>
            </div>

            <h2 className="font-bold mb-2 font-sf-pro-display text-center text-[2.5rem] leading-[1.2] md:text-[4rem] md:leading-[1.3] lg:text-[6rem] lg:leading-[1]">{tagline}</h2>

            <p className="max-w-7xl mx-auto mb-6 py-2 font-sf-pro-text text-center text-[1.125rem] md:text-[1.5rem] lg:text-[2rem]">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="vision" size="lg" className="px-8 py-4" onClick={onGetStarted}>
                Get Started
              </Button>
              <BackButton
                label="Back to Services"
                onClick={onViewAllServices}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;