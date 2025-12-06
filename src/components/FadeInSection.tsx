import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) => {
  // Define initial position based on direction
  const directionOffset = 50;
  const initialPosition = {
    up: { y: directionOffset, x: 0 },
    down: { y: -directionOffset, x: 0 },
    left: { x: directionOffset, y: 0 },
    right: { x: -directionOffset, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <Box
      component={motion.div}
      initial={{
        opacity: 0,
        ...initialPosition[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true, // Animation happens only once
        amount: 0.2, // Trigger when 20% of element is visible
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection;
