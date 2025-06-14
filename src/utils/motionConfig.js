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