import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity?: number;
  className?: string;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

interface ScrollVelocityProps {
  texts?: string[];
  images?: { src: string; alt?: string; className?: string }[];
  velocity?: number;
  className?: string;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
}

const VelocityText: React.FC<VelocityTextProps> = ({
  children,
  baseVelocity = 50,
  className = "",
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const rowRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);

  // Measure row width
  useLayoutEffect(() => {
    if (rowRef.current) setRowWidth(rowRef.current.scrollWidth / 2); // divide by 2 because we duplicate children
  }, [children]);

  useAnimationFrame((t, delta) => {
    const moveBy = (baseVelocity * delta) / 1000;
    baseX.set(baseX.get() - moveBy);

    if (rowWidth && baseX.get() <= -rowWidth) {
      baseX.set(0);
    }
  });

  return (
    <div className={`${parallaxClassName} relative overflow-hidden`} style={parallaxStyle}>
      <motion.div
        ref={rowRef}
        className={`${scrollerClassName} flex whitespace-nowrap items-center ${className}`}
        style={{ x: baseX, ...scrollerStyle }}
      >
        {children}
        {children /* duplicate for seamless infinite scroll */}
      </motion.div>
    </div>
  );
};

export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  texts = [],
  images = [],
  velocity = 50,
  className = "",
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
}) => {
  return (
    <section>
      {/* Text rows */}
      {texts.map((text, index) => (
        <VelocityText
          key={`text-${index}`}
          baseVelocity={index % 2 === 0 ? velocity : -velocity} // alternate direction
          className={className}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          <span className="mx-4">{text}</span>
        </VelocityText>
      ))}

      {/* Image row */}
      {images.length > 0 && (
        <VelocityText
          key="images"
          baseVelocity={velocity}
          className={className}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt ?? ""}
              className={img.className ?? "h-16 mx-8 flex-shrink-0"}
            />
          ))}
        </VelocityText>
      )}
    </section>
  );
};

export default ScrollVelocity;
