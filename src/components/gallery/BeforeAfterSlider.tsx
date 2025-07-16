import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterImage {
  id: number;
  before: string;
  after: string;
  title: string;
  service: string;
  description?: string;
}

interface BeforeAfterSliderProps {
  images: BeforeAfterImage[];
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ images }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  const currentImageData = images[currentImage];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Title and Service */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary-black mb-2">
          {currentImageData.title}
        </h3>
        <p className="text-primary-orange font-medium">{currentImageData.service}</p>
        {currentImageData.description && (
          <p className="text-gray-600 mt-2">{currentImageData.description}</p>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative mb-8">
        <div
          className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Bottom Layer) */}
          <img
            src={currentImageData.after}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Top Layer with Clip) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={currentImageData.before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-medium">
            BEFORE
          </div>
          <div className="absolute top-4 right-4 bg-primary-orange text-white px-3 py-1 rounded-md text-sm font-medium">
            AFTER
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-black p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-black p-2 rounded-full shadow-lg transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => {
              setCurrentImage(index);
              setSliderPosition(50);
            }}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              index === currentImage
                ? 'border-primary-orange scale-105'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <img
              src={image.after}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
