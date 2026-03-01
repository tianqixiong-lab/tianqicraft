import { motion } from 'motion/react';
import { useRef, useState, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SPRING_CONFIG = { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.1 };
const MAX_DISTANCE = 100;
const STRENGTH = 0.3;
const ZERO = { x: 0, y: 0 };

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState(ZERO);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const deltaX = e.clientX - (rect.left + rect.width / 2);
    const deltaY = e.clientY - (rect.top + rect.height / 2);

    if (deltaX * deltaX + deltaY * deltaY < MAX_DISTANCE * MAX_DISTANCE) {
      setPosition({ x: deltaX * STRENGTH, y: deltaY * STRENGTH });
    }
  }, []);

  const handleMouseLeave = useCallback(() => setPosition(ZERO), []);

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={position}
      transition={SPRING_CONFIG}
      className={className}
    >
      {children}
    </motion.button>
  );
}
