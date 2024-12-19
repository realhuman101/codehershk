// HalftoneGradient.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface HalftoneGradientProps {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
  className?: string;
}

const HalftoneGradient: React.FC<HalftoneGradientProps> = ({
  rows = 2,
  cols = 40,
  dotSize = 8,
  gap = 4,
  color = '#fff',
  className = ''
}) => {
  const dots = Array.from({ length: rows * cols });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gap: `${gap}px`,
      }}

	  className={className}
    >
       {dots.map((_, index) => (
         <div
           key={index}
           style={{
             width: `${dotSize}px`,
             height: `${dotSize}px`,
             borderRadius: '50%',
             background: color,
             opacity: (Math.floor(index / cols) + 1) / rows,
           }}
         />
       ))}
     </div>
  );
};

export default HalftoneGradient;