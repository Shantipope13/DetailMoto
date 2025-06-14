import { motion } from 'framer-motion';
import { useState } from 'react';

export const InteractiveButton = ({ 
  children, 
  onClick, 
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const buttonVariants = {
    idle: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.1 }
    },
    disabled: {
      scale: 1,
      opacity: 0.6,
      boxShadow: "none"
    }
  };

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const getVariantClasses = () => {
    const variants = {
      primary: "bg-primary-orange text-white hover:bg-orange-600",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border-2 border-primary-orange text-primary-orange hover:bg-primary-orange hover:text-white"
    };
    return variants[variant] || variants.primary;
  };

  const getSizeClasses = () => {
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    return sizes[size] || sizes.md;
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover={!disabled && !loading ? "hover" : "idle"}
      whileTap={!disabled && !loading ? "tap" : "idle"}
      animate={disabled ? "disabled" : "idle"}
      onTapStart={() => setIsPressed(true)}
      onTap={() => setIsPressed(false)}
      onTapCancel={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative inline-flex items-center justify-center
        rounded-lg font-medium transition-colors
        focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2
        disabled:pointer-events-none
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <motion.div
          variants={loadingVariants}
          animate="animate"
          className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
        />
      )}
      <motion.span
        animate={{ opacity: loading ? 0.7 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};