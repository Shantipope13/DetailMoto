import { motion } from 'framer-motion';
import { useState } from 'react';

export const HoverCard = ({ 
  children, 
  hoverContent,
  className = "",
  hoverScale = 1.03,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    idle: { 
      scale: 1,
      rotateY: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: hoverScale,
      rotateY: 2,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const contentVariants = {
    idle: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1, duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="idle"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-lg bg-white ${className}`}
      {...props}
    >
      {children}
      
      {hoverContent && (
        <motion.div
          variants={contentVariants}
          animate={isHovered ? "hover" : "idle"}
          className="absolute inset-0 bg-black/80 flex items-center justify-center p-4"
        >
          <div className="text-white text-center">
            {hoverContent}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};