import React, { useEffect, useRef, useState } from 'react';

const Capabilities2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      title: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#ai-ml'
    },
    {
      title: 'Cloud Infrastructure',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#cloud'
    },
    {
      title: 'Data Analytics',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
      link: '#analytics'
    },
    {
      title: 'Cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#security'
    },
    {
      title: 'IoT Solutions',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#iot'
    },
    {
      title: 'Blockchain Technology',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#blockchain'
    },
    {
      title: 'Mobile Development',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#mobile'
    },
    {
      title: 'DevOps & Automation',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#devops'
    }
  ];

  return (
    <section id="capabilities2" className="py-20 md:py-32 bg-light-gray" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our
            <span className="block font-bold mt-2">
              Capabilities
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <a
              key={capability.title}
              href={capability.link}
              className={`group relative h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-cover bg-center transition-all duration-1000 hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                backgroundImage: `url('${capability.image}')`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 transition-all duration-300 group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/80" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center leading-tight font-sf-pro-display drop-shadow-lg">
                  {capability.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities2;