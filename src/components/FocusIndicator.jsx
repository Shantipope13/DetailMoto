import { motion } from 'framer-motion';
import { useState } from 'react';

export const FocusIndicator = ({ 
  children, 
  className = "",
  focusColor = "primary-orange",
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const indicatorVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.1 }
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className="relative">
      <motion.div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`relative z-10 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
      
      <motion.div
        variants={indicatorVariants}
        animate={isFocused ? "visible" : "hidden"}
        className={`absolute inset-0 -m-1 rounded-lg border-2 border-${focusColor} pointer-events-none`}
        style={{ zIndex: 5 }}
      />
    </div>
  );
};