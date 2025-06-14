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
  interval = 2500 // Changed to 2.5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 150); // Brief transition delay for smooth effect
    }, interval);

    return () => clearInterval(timer);
  }, [isHovered, images.length, interval]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      setCurrentIndex(0);
      setIsTransitioning(false);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setCurrentIndex(0);
      setIsTransitioning(false);
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
      {/* Image container with smooth transitions */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ${
              index === currentIndex 
                ? `opacity-100 ${isTransitioning ? 'scale-105' : 'scale-100'}` 
                : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0
            }}
          />
        ))}
      </div>
      
      {/* Image counter indicator */}
      {images.length > 1 && isHovered && (
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium transition-opacity duration-300">
          {currentIndex + 1} / {images.length}
        </div>
      )}
      
      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-2 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-primary-orange scale-125' 
                  : 'bg-white/50 scale-100'
              }`}
            />
          ))}
        </div>
      )}
      
      {/* Progress bar for current image */}
      {images.length > 1 && isHovered && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
          <div 
            className="h-full bg-primary-orange transition-all duration-300 ease-linear"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HoverSlideshow;