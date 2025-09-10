import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TrustedBy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample client logos - replace with your actual client logos
  const clientLogos = [
    { name: "Oracle", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/5836b142b7434a7600de0481735a41a310dd3c3c-171x61.svg", width: 171, height: 61 },
    { name: "Dell Technologies", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/d5bd03ccb68aceccae91a5e93f104e143b8b930d-170x60.svg", width: 170, height: 60 },
    { name: "RBC", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/39abce988f8dc7b0c10f36e7e766e5d04d3e2d94-171x61.svg", width: 171, height: 61 },
    { name: "LG CNS", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/e8a30bc84caccaef42d84f2c447c58c63443d2fb-170x60.svg", width: 170, height: 60 },
    { name: "Fujitsu", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/bea01a873a54823b1b79c71b16e74e94d7871b14-170x60.svg", width: 170, height: 60 },
    { name: "Bell", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/38a1f54b2cfcd93209930bedec2bd723a70d5e90-170x61.svg", width: 170, height: 61 },
    { name: "SAP", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/9210d325433b4057e78429767006c4886df08ac4-170x60.svg", width: 170, height: 60 },
    { name: "Salesforce", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/6fa18af555fccc6529de4bb0f6ceb0f00db62696-171x61.svg", width: 171, height: 61 },
    { name: "Notion", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/fb12f73f1982db5501bd5acab9d22fb70dc3192d-171x61.svg", width: 171, height: 61 },
    { name: "TD Bank", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/2e187278486f46880d2ee09aa592921051795576-170x60.svg", width: 170, height: 60 },
    { name: "Johnson Lambert", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/e67d93dd0f90739df42c137f9730dc0341dd1b81-171x61.svg", width: 171, height: 61 },
    { name: "Ensemble", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/e7a9cfbbe3c3a6e61b156dd1f5a19219e69f861e-170x60.svg", width: 170, height: 60 },
    { name: "Second Front", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/ccb5e5d4efb26a574f0795f046a002f84d7575d8-170x60.svg", width: 170, height: 60 },
    { name: "McKinsey & Company", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/5e55f56f8e105cddbcd6f243fc2686c7eeb63a29-160x50.svg", width: 160, height: 50 },
    { name: "Accenture", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/44b6dcb718341a204c9684ecd69889fd204d1368-170x60.svg", width: 170, height: 60 },
    { name: "Borderless AI", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/5c4a4242097f914d63a7dc0dd8c3acc394403538-171x61.svg", width: 171, height: 61 },
    { name: "BambooHR", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/2c9edaee49f36102928edaa202f77008f801c6af-171x61.svg", width: 171, height: 61 },
    { name: "Longshot", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/31606aaf9c2db6bfd058e71ade0491102583ebdc-171x61.svg", width: 171, height: 61 },
    { name: "Casetext", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/b49bff7eada837373c1754bc7b915788e5493a5d-171x61.svg", width: 171, height: 61 },
    { name: "Tabnine", logo: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/46808eb3cab44d9d7e8ef60eb8f56066fad895cd-171x61.svg", width: 171, height: 61 }
  ];

  // Create rows of 5 logos each
  const logoRows = [];
  for (let i = 0; i < clientLogos.length; i += 5) {
    logoRows.push(clientLogos.slice(i, i + 5));
  }

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % logoRows.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logoRows.length]);

  return (
    <section className="relative w-full px-6 sm:px-8 lg:px-12 pb-12 md:pb-20 text-black overflow-hidden">
      <div className="relative z-content">
        <div className="flex w-full flex-col items-center">
          
          {/* Desktop Logo Grid */}
          <div className="hidden lg:block lg:min-h-[108px] xl:min-h-[138px]">
            {logoRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`relative flex justify-center transition-opacity duration-500 ${
                  rowIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ zIndex: rowIndex === currentSlide ? 1 : 0 }}
              >
                <div className="absolute left-1/2 top-6 -translate-x-1/2">
                  <div className="flex flex-row gap-10 overflow-hidden">
                    {row.map((client, clientIndex) => (
                      <div
                        key={`${rowIndex}-${clientIndex}`}
                        className={`flex h-[60px] w-[170px] justify-center transition-opacity duration-500 xl:h-[90px] xl:w-[240px] ${
                          rowIndex === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img
                          src={client.logo}
                          width={client.width}
                          height={client.height}
                          alt={`${client.name} Logo`}
                          loading="lazy"
                          className="filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scrolling Animation */}
          <div className="relative py-2 lg:hidden">
            <div className="flex">
              <div className="flex h-[60px] animate-scroll items-center justify-around gap-4 pl-4">
                {/* First set of logos */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex h-[60px] w-[170px] justify-center transition-opacity duration-500 opacity-100 flex-shrink-0"
                  >
                    <img
                      src={client.logo}
                      width={client.width}
                      height={client.height}
                      alt={`${client.name} Logo`}
                      loading="lazy"
                      className="filter grayscale"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex h-[60px] w-[170px] justify-center transition-opacity duration-500 opacity-100 flex-shrink-0"
                  >
                    <img
                      src={client.logo}
                      width={client.width}
                      height={client.height}
                      alt={`${client.name} Logo`}
                      loading="lazy"
                      className="filter grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;