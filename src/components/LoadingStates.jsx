import { motion } from 'framer-motion';

export const PulseLoader = ({ size = "md", color = "primary-orange" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={pulseVariants}
      animate="animate"
      className={`rounded-full bg-${color} ${sizeClasses[size]}`}
    />
  );
};

export const SkeletonLoader = ({ 
  lines = 3, 
  className = "",
  animated = true 
}) => {
  const skeletonVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          variants={animated ? skeletonVariants : {}}
          animate={animated ? "animate" : ""}
          className="h-4 bg-gray-200 rounded"
          style={{ width: `${100 - (index * 10)}%` }}
        />
      ))}
    </div>
  );
};

export const SpinnerLoader = ({ size = "md", color = "primary-orange" }) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-2",
    lg: "w-12 h-12 border-4"
  };

  const spinVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      variants={spinVariants}
      animate="animate"
      className={`
        rounded-full border-gray-200 border-t-${color}
        ${sizeClasses[size]}
      `}
    />
  );
};