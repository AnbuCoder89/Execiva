import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const technologies = [
  { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "MongoDB", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "AWS", src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
  { name: "Docker", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
];

const InfiniteMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const speed = 0.5; // pixels per frame

  // duplicate content for seamless loop
  const content = [...technologies, ...technologies];

  useAnimationFrame(() => {
    if (!marqueeRef.current) return;
    setOffset((prev) => {
      const totalWidth = marqueeRef.current!.scrollWidth / 2;
      const newOffset = prev + speed;
      return newOffset > totalWidth ? 0 : newOffset;
    });
  });

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ x: -offset }}
      >
        {content.map((tech, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mx-10 flex flex-col items-center"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="h-12 sm:h-14 lg:h-16 object-contain"
              loading="lazy"
            />
            <span className="mt-3 text-sm md:text-base font-medium text-gray-700">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
