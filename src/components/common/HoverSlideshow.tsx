import React, { useState, useEffect, useRef } from 'react';

interface HoverSlideshowProps {
  images: string[];
  title: string;
  className?: string;
  interval?: number;
}

const HoverSlideshow: React.FC<HoverSlideshowProps> = ({ 
  images, 
  title, 
  className = '', 
  interval = 800 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isHovered, images.length, interval]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      setCurrentIndex(0);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setCurrentIndex(0);
    };

    // Listen to the parent container's hover events
    const parentContainer = container.closest('.group');
    if (parentContainer) {
      parentContainer.addEventListener('mouseenter', handleMouseEnter);
      parentContainer.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        parentContainer.removeEventListener('mouseenter', handleMouseEnter);
        parentContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
      />
      
      {/* Image counter indicator */}
      {images.length > 1 && isHovered && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}
      
      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-2 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-orange' 
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverSlideshow;