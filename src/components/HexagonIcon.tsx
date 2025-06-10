import React from 'react';

interface HexagonIconProps {
  className?: string;
}

const HexagonIcon: React.FC<HexagonIconProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.5 3.5L22 12L17.5 20.5H6.5L2 12L6.5 3.5H17.5Z" />
    </svg>
  );
};

export default HexagonIcon;