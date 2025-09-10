import React from "react";
import Button from "../ui/Button";

const useCases = [
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
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
            Use Cases & Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text max-w-3xl mx-auto">
            Discover how our solutions can be applied to solve real-world challenges and drive meaningful results for your business.
          </p>
        </div>

        {/* Use Cases Cards */}
        <div className="space-y-8 md:space-y-12">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="w-full bg-white rounded-lg overflow-hidden"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Content Section */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <span className="inline-block px-4 py-2 bg-beige text-gray-900 rounded-full text-sm font-medium font-sf-pro-text border border-gray-200">
                        {useCase.label}
                      </span>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight font-sf-pro-display">
                        {useCase.title}
                      </h3>
                    </div>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-sf-pro-text">
                      {useCase.description}
                    </p>
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 relative min-h-[300px] lg:min-h-[400px]">
                  <img
                    src={useCase.image}
                    alt={useCase.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceUseCases;