# Comprehensive Guide: Advanced Animations with Framer Motion in React

## Table of Contents
1. [Setup and Configuration](#setup-and-configuration)
2. [Viewport-Triggered Scroll Animations](#viewport-triggered-scroll-animations)
3. [Staggered Animations](#staggered-animations)
4. [Micro-Interactions](#micro-interactions)
5. [Performance Optimization](#performance-optimization)
6. [Accessibility Considerations](#accessibility-considerations)
7. [Common Pitfalls](#common-pitfalls)

## Setup and Configuration

### Installation and Basic Setup

```bash
npm install framer-motion
```

### Global Configuration

```jsx
// src/utils/motionConfig.js
export const motionConfig = {
  // Respect user's motion preferences
  reducedMotion: "user",
  
  // Global transition defaults
  transition: {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
    duration: 0.4
  },
  
  // Viewport detection settings
  viewport: {
    once: true, // Animate only once
    margin: "-100px", // Trigger 100px before element enters viewport
    amount: 0.3 // Trigger when 30% of element is visible
  }
};

// Animation variants for consistency
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};
```

### Motion Provider Setup

```jsx
// src/components/MotionProvider.jsx
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { motionConfig } from '../utils/motionConfig';

export const MotionProvider = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig 
        reducedMotion={motionConfig.reducedMotion}
        transition={motionConfig.transition}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};
```

## Viewport-Triggered Scroll Animations

### Basic Scroll Animation Hook

```jsx
// src/hooks/useScrollAnimation.js
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
    ...options
  });

  return { ref, isInView };
};
```

### Scroll-Triggered Components

```jsx
// src/components/ScrollReveal.jsx
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
```

### Advanced Scroll Animations

```jsx
// src/components/ParallaxSection.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxSection = ({ children, speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
```

### Scroll Progress Indicator

```jsx
// src/components/ScrollProgress.jsx
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-orange z-50 origin-left"
      style={{ scaleX }}
    />
  );
};
```

## Staggered Animations

### Staggered List Component

```jsx
// src/components/StaggeredList.jsx
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const StaggeredList = ({ 
  items, 
  renderItem, 
  staggerDelay = 0.1,
  className = "" 
}) => {
  const { ref, isInView } = useScrollAnimation();

  const customContainerVariants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...containerVariants.visible.transition,
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customContainerVariants}
      className={className}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id || index}
          variants={itemVariants}
          className="mb-4"
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
};
```

### Advanced Staggered Grid

```jsx
// src/components/StaggeredGrid.jsx
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
```

## Micro-Interactions

### Interactive Button Component

```jsx
// src/components/InteractiveButton.jsx
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
```

### Hover Card Component

```jsx
// src/components/HoverCard.jsx
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
```

### Focus Indicator Component

```jsx
// src/components/FocusIndicator.jsx
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
```

### Loading States

```jsx
// src/components/LoadingStates.jsx
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
```

## Performance Optimization

### Optimized Animation Hook

```jsx
// src/hooks/useOptimizedAnimation.js
import { useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

export const useOptimizedAnimation = (variants, options = {}) => {
  const shouldReduceMotion = useReducedMotion();
  
  return useMemo(() => {
    if (shouldReduceMotion) {
      // Return simplified variants for reduced motion
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } }
      };
    }
    
    return variants;
  }, [variants, shouldReduceMotion]);
};
```

### Performance Tips

```jsx
// src/utils/performanceUtils.js

// 1. Use transform properties for better performance
export const performantVariants = {
  // Good - uses transform
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  
  // Avoid - triggers layout recalculation
  // hidden: { opacity: 0, width: 0, height: 0 },
  // visible: { opacity: 1, width: 'auto', height: 'auto' }
};

// 2. Use will-change for complex animations
export const complexAnimationStyles = {
  willChange: 'transform, opacity',
  // Remove will-change after animation completes
};

// 3. Optimize for mobile
export const mobileOptimizedVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "tween", // Faster than spring on mobile
      duration: 0.3
    }
  }
};
```

## Accessibility Considerations

### Accessible Animation Component

```jsx
// src/components/AccessibleAnimation.jsx
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AccessibleAnimation = ({ 
  children, 
  variants,
  reducedMotionVariants,
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for user preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const finalVariants = shouldReduceMotion || prefersReducedMotion 
    ? (reducedMotionVariants || {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1 } }
      })
    : variants;

  return (
    <motion.div
      variants={finalVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
```

### ARIA and Focus Management

```jsx
// src/components/AccessibleModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const AccessibleModal = ({ 
  isOpen, 
  onClose, 
  children, 
  title 
}) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      modalRef.current?.focus();
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <h2 id="modal-title" className="text-xl font-bold mb-4">
              {title}
            </h2>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

## Common Pitfalls

### 1. Layout Thrashing
```jsx
// ❌ Bad - causes layout recalculation
const badVariants = {
  hidden: { width: 0, height: 0 },
  visible: { width: 'auto', height: 'auto' }
};

// ✅ Good - uses transform
const goodVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 }
};
```

### 2. Memory Leaks
```jsx
// ❌ Bad - doesn't clean up
const BadComponent = () => {
  const { scrollY } = useScroll();
  // scrollY listener never gets cleaned up
};

// ✅ Good - proper cleanup
const GoodComponent = () => {
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      // Handle scroll
    });
    
    return unsubscribe; // Cleanup
  }, [scrollY]);
};
```

### 3. Overusing Animations
```jsx
// ❌ Bad - too many simultaneous animations
const OverAnimated = () => (
  <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1], x: [0, 100, 0] }}>
    <motion.h1 animate={{ color: ['red', 'blue', 'green'] }}>
      <motion.span animate={{ opacity: [0, 1, 0] }}>
        Too much!
      </motion.span>
    </motion.h1>
  </motion.div>
);

// ✅ Good - focused, purposeful animation
const WellAnimated = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h1>Just right!</h1>
  </motion.div>
);
```

### 4. Not Considering Mobile Performance
```jsx
// ❌ Bad - complex spring animation on mobile
const mobileUnfriendly = {
  type: "spring",
  stiffness: 500,
  damping: 10,
  mass: 2
};

// ✅ Good - simpler animation for mobile
const mobileOptimized = {
  type: window.innerWidth < 768 ? "tween" : "spring",
  duration: window.innerWidth < 768 ? 0.2 : 0.4,
  stiffness: 100,
  damping: 20
};
```

## Usage Examples

### Complete Page Animation

```jsx
// src/pages/AnimatedPage.jsx
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { StaggeredList } from '../components/StaggeredList';
import { InteractiveButton } from '../components/InteractiveButton';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export const AnimatedPage = () => {
  const items = [
    { id: 1, title: "Item 1", description: "Description 1" },
    { id: 2, title: "Item 2", description: "Description 2" },
    { id: 3, title: "Item 3", description: "Description 3" }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-8">Animated Page</h1>
      </ScrollReveal>

      <StaggeredList
        items={items}
        renderItem={(item) => (
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        )}
        staggerDelay={0.1}
      />

      <ScrollReveal delay={0.3}>
        <InteractiveButton
          variant="primary"
          size="lg"
          onClick={() => console.log('Clicked!')}
        >
          Get Started
        </InteractiveButton>
      </ScrollReveal>
    </motion.div>
  );
};
```

This comprehensive guide provides everything you need to implement advanced animations with Framer Motion while maintaining performance, accessibility, and best practices.