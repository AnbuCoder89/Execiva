import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "redesign",
    label: "Website Redesign",
    title: "Revamp your website to boost conversions and increase pipeline.",
    description:
      "By enhancing user experience, optimizing performance, and implementing scalable design, our website redesigns help you attract more visitors, convert leads, and drive sustainable growth.",
    cta: "/solutions/website-redesigns",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
  {
    id: "migrations",
    label: "Website Migrations",
    title: "Seamless Website Migrations without the headaches.",
    description:
      "Migrate your website to a modern platform with minimal downtime and maximum efficiency. From planning to execution, we ensure your migration is seamless, secure, and aligned with your business goals.",
    cta: "/solutions/website-migrations",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
  {
    id: "ongoing",
    label: "Ongoing Website Services",
    title: "Get a dedicated Website Product Team to drive continuous growth.",
    description:
      "Get a tailored Website Product Team to help you continuously manage, optimize, and scale your website. Taking an agile, data-driven approach, we ensure your site evolves alongside your business goals.",
    cta: "/solutions/ongoing-website-services",
    ctaLabel: "Learn more",
    image:
      "https://cdn.sanity.io/images/q9c9g16o/production/214d51304ca5e675e91994b7add6a7c370e5af15-8095x5399.jpg?w=1200&q=80",
  },
];

const ServiceUseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="relative w-full px-6 sm:px-8 lg:px-12 pt-12 md:pt-20 pb-12 md:pb-20 text-pureWhite">
      {/* Tabs */}
      <div className="flex flex-col items-center justify-center pb-10 md:pb-16">
        <div className="relative hidden md:flex flex-row items-center gap-2 px-2 py-2 bg-neutral-900/40 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-colors duration-200 cursor-pointer
                ${activeTab === tab.id ? "text-pureBlack" : "text-pureWhite"}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-pureWhite rounded-full shadow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Section */}
      <div className="container w-full bg-black rounded-xl p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col gap-8 lg:gap-24 lg:flex-row lg:justify-between"
          >
            {/* Left Content */}
            <div className="flex w-full flex-col justify-center gap-8 lg:max-w-[700px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h4 className="flex w-fit text-base items-center gap-2.5 text-[var(--fgColor-accent)] uppercase font-shareTechMono">
                    {activeContent.label}
                  </h4>
                  <div className="pt-2">
                    <h2 className="mb-0 text-3xl lg:text-4xl font-medium">
                      {activeContent.title}
                    </h2>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-6">
                  <p>{activeContent.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      className="group inline-flex items-center justify-center text-center rounded-lg transition-colors whitespace-nowrap gap-2 font-medium text-sm leading-none px-4 py-1 h-[46px] flex-shrink-0 bg-blue-700 text-white hover:bg-blue-800 sm:w-fit"
                      href={activeContent.cta}
                    >
                      <span className="flex size-full items-center justify-center gap-2 p-1">
                        {activeContent.ctaLabel}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="switchback-image-wrapper flex w-full items-center pt-8 md:pt-0 lg:max-w-[700px]">
              <div className="flex w-full justify-end">
                <div className="w-full overflow-hidden">
                  <div className="group relative w-full overflow-hidden">
                    <img
                      alt={activeContent.label}
                      loading="lazy"
                      decoding="async"
                      className="animate-mask-reveal w-full rounded-xl object-contain"
                      src={activeContent.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceUseCases;
