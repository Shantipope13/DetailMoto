import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const StaggeredGrid = ({ 
  items, 
  renderItem, 
  columns = 3,
  staggerDelay = 0.05,
  animationDirection = "up" // "up", "down", "left", "right", "scale"
}) => {
  const { ref, isInView } = useScrollAnimation();

  const getItemVariants = (direction) => {
    const variants = {
      up: { opacity: 0, y: 40 },
      down: { opacity: 0, y: -40 },
      left: { opacity: 0, x: -40 },
      right: { opacity: 0, x: 40 },
      scale: { opacity: 0, scale: 0.8 }
    };

    return {
      hidden: variants[direction],
      visible: { 
        opacity: 1, 
        y: 0, 
        x: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`grid grid-cols-1 md:grid-cols-${Math.min(columns, 3)} lg:grid-cols-${columns} gap-6`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          variants={getItemVariants(animationDirection)}
          className="w-full"
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};