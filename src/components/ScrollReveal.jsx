import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeInUp } from '../utils/motionConfig';

export const ScrollReveal = ({ 
  children, 
  variant = fadeInUp,
  delay = 0,
  className = "",
  ...props 
}) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={{ ...variant.visible.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};