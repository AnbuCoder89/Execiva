import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Start with center card active
  const [isAnimating, setIsAnimating] = useState(false);
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

    return () => {
      observer.disconnect();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(8px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      position: "CTO, FinanceFirst",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The level of professionalism and technical expertise is unmatched. They delivered a solution that perfectly aligned with our vision.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      position: "Founder, MedConnect",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "From concept to launch, they guided us every step of the way. The result exceeded our wildest dreams and transformed our industry presence.",
      rating: 5
    },
    {
      name: "David Park",
      position: "VP, Innovation Labs",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Their strategic approach and cutting-edge solutions have revolutionized how we operate. Truly exceptional partnership and results.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director, GrowthTech",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The team's creativity and technical expertise delivered beyond our expectations. Our digital transformation was seamless and impactful.",
      rating: 5
    },
    {
      name: "James Wilson",
      position: "Founder, StartupHub",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Outstanding results that transformed our entire business model. The team's expertise and dedication are truly remarkable.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      position: "Head of Digital, RetailCorp",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Incredible attention to detail and innovative solutions. They exceeded every expectation and delivered exceptional results.",
      rating: 5
    },
    {
      name: "Robert Kim",
      position: "CTO, DataFlow",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Professional, innovative, and results-driven. The perfect partner for digital transformation and growth.",
      rating: 5
    },
    {
      name: "Amanda Foster",
      position: "CEO, InnovateLab",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Exceptional service and outstanding results. They brought our vision to life with precision and creativity.",
      rating: 5
    }
  ];

  const handleCardClick = (position: number) => {
    if (isAnimating || position === 0) return;
    
    // Calculate the correct new index based on which card was clicked
    let newIndex;
    if (position > 0) {
      // Clicked a card to the right - move right
      newIndex = (activeIndex + position) % testimonials.length;
    } else {
      // Clicked a card to the left - move left
      newIndex = (activeIndex + position + testimonials.length) % testimonials.length;
    }
    setActiveIndex(newIndex);
  };

  const handleIndicatorClick = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
  };

  // Calculate position of each card relative to active index
  const getCardPosition = (cardIndex: number) => {
    const diff = cardIndex - activeIndex;
    if (diff > testimonials.length / 2) {
      return diff - testimonials.length;
    } else if (diff < -testimonials.length / 2) {
      return diff + testimonials.length;
    }
    return diff;
  };

  const getCardStyles = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const absPosition = Math.abs(position);
    const cardSpacing = 320;
    
    let scale, width, height, opacity, blur;
    
    if (absPosition === 0) {
      scale = 1;
      width = 300;
      height = 380;
      opacity = 1;
      blur = 0;
    } else if (absPosition === 1) {
      scale = 0.85;
      width = 260;
      height = 320;
      opacity = 0.8;
      blur = 2;
    } else if (absPosition === 2) {
      scale = 0.7;
      width = 220;
      height = 280;
      opacity = 0.6;
      blur = 3;
    } else {
      scale = 0.6;
      width = 200;
      height = 260;
      opacity = 0.4;
      blur = 4;
    }
    
    return {
      width: width + 'px',
      height: height + 'px',
      scale: scale,
      translateX: position * cardSpacing,
      zIndex: 10 - absPosition,
      filter: `blur(${blur}px)`,
      opacity: opacity,
    };
  };

  const getTextStyles = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const absPosition = Math.abs(position);
    
    // Dynamic text sizing based on position
    let nameSize, positionSize, contentSize, imageSize, starSize, padding;
    
    if (absPosition === 0) {
      nameSize = 18;
      positionSize = 14;
      contentSize = 14;
      imageSize = 64;
      starSize = 18;
      padding = 24;
    } else if (absPosition === 1) {
      nameSize = 16;
      positionSize = 13;
      contentSize = 12;
      imageSize = 48;
      starSize = 16;
      padding = 16;
    } else if (absPosition === 2) {
      nameSize = 14;
      positionSize = 12;
      contentSize = 11;
      imageSize = 40;
      starSize = 14;
      padding = 12;
    } else {
      nameSize = 12;
      positionSize = 11;
      contentSize = 10;
      imageSize = 32;
      starSize = 12;
      padding = 8;
    }
    
    return {
      nameSize,
      positionSize,
      contentSize,
      imageSize,
      starSize,
      padding
    };
  };

  const getContentLength = (cardIndex: number) => {
    const position = getCardPosition(cardIndex);
    const absPosition = Math.abs(position);
    
    if (absPosition === 0) {
      return {
        showFullContent: true,
        maxLength: 200
      };
    } else if (absPosition === 1) {
      return {
        showFullContent: false,
        maxLength: 80
      };
    } else {
      return {
        showFullContent: false,
        maxLength: 60
      };
    }
  };

  return (
    <motion.section 
      id="testimonials" 
      className="relative w-full min-h-screen py-20 bg-white" 
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div 
        className="w-full"
        variants={itemVariants}
      >
        {/* Header */}
        <motion.h2 
          className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-sf-pro-display text-center"
          variants={itemVariants}
        >
          We Care About Our Customers
          <span className="block font-normal text-gray-600 mt-2">
            Experience Too
          </span>
        </motion.h2>

      </motion.div>

        {/* Sliding Carousel */}
        <motion.div 
          className="flex justify-center items-center mb-12 overflow-hidden"
          variants={itemVariants}
        >
          <motion.div 
            className="relative flex items-center justify-center" 
            style={{ width: '1200px', height: '400px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {testimonials.map((card, cardIndex) => {
              const cardStyles = getCardStyles(cardIndex);
              const textStyles = getTextStyles(cardIndex);
              const contentStyles = getContentLength(cardIndex);
              const position = getCardPosition(cardIndex);
              const absPosition = Math.abs(position);
              const isVisible = absPosition <= 3; // Show more cards for smoother transitions
              
              return (
                <motion.div
                  key={cardIndex}
                  className={`absolute cursor-pointer flex-shrink-0 ${
                    absPosition !== 0 ? 'hover:opacity-90' : ''
                  } ${!isVisible ? 'pointer-events-none' : ''}`}
                  animate={{
                    x: cardStyles.translateX,
                    scale: cardStyles.scale,
                    opacity: isVisible ? cardStyles.opacity : 0,
                    filter: cardStyles.filter,
                    width: cardStyles.width,
                    height: cardStyles.height,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8
                  }}
                  style={{
                    zIndex: cardStyles.zIndex,
                    left: '50%',
                    transformOrigin: 'center',
                    marginLeft: '-150px' // Half of the card width to center properly
                  }}
                  onClick={() => handleCardClick(position)}
                  whileHover={absPosition !== 0 ? { 
                    scale: cardStyles.scale * 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  } : {}}
                  whileTap={{ scale: cardStyles.scale * 0.95 }}
                >
                  <motion.div 
                    className={`bg-white rounded-2xl shadow-xl border border-gray-100 w-full h-full flex flex-col justify-between ${
                    absPosition === 0 ? 'shadow-2xl border-gray-200' : 'hover:shadow-xl'
                  }`}
                  animate={{ 
                    padding: `${textStyles.padding}px`
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}>
                    {/* Profile Image */}
                    <motion.div 
                      className="flex justify-center mb-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.div 
                        className="rounded-full overflow-hidden bg-gray-100"
                        animate={{ 
                          width: `${textStyles.imageSize}px`, 
                          height: `${textStyles.imageSize}px`
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="flex-1 flex flex-col justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {/* Name */}
                      <motion.h3 
                        className="text-center font-semibold text-gray-900 mb-2 font-sf-pro-display"
                        animate={{ 
                          fontSize: `${textStyles.nameSize}px`
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {card.name}
                      </motion.h3>

                      {/* Position */}
                      <motion.p 
                        className="text-center text-gray-600 mb-3 font-sf-pro-text"
                        animate={{ 
                          fontSize: `${textStyles.positionSize}px`
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {card.position}
                      </motion.p>

                      {/* Content */}
                      <motion.p 
                        className="text-gray-700 leading-relaxed mb-3 font-sf-pro-text text-center"
                        animate={{ 
                          fontSize: `${textStyles.contentSize}px`
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {contentStyles.showFullContent 
                          ? card.content 
                          : card.content.substring(0, contentStyles.maxLength) + '...'
                        }
                      </motion.p>
                    </motion.div>

                    {/* Rating */}
                    <motion.div 
                      className="flex justify-center space-x-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {[...Array(card.rating)].map((_, i) => (
                        <motion.div
                          key={i} 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.7 + (i * 0.05),
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star 
                            size={textStyles.starSize}
                            className="text-blue-500 fill-current"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div 
          className="flex justify-center space-x-3"
          variants={itemVariants}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gray-800 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              } ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to testimonial ${index + 1}`}
              disabled={isAnimating}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          ))}
        </motion.div>
    </motion.section>
  );
};

export default Testimonials;