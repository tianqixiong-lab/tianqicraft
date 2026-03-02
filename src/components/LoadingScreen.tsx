import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-q465zh1kbq';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 3000; // 3 seconds
    const interval = 30;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Calculate fill height based on progress
  // Screen area is approximately x=28, y=17.6, w=48, h=37.6 (inset from bezel/keyboard)
  const maxFillHeight = 37.6; 
  const fillHeight = (progress / 100) * maxFillHeight;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-[#f2f2f2] flex items-center justify-center z-50"
    >
      <div className="relative">
        <div className="relative size-[104px]">
          <svg className="block size-full" fill="none" viewBox="0 0 104 104">
            <g>
              {/* Computer outline - Everything EXCEPT the screen area */}
              <path d={svgPaths.p28e06980} fill="black" />
              <path d={svgPaths.p9cea800} fill="black" />
              <path d={svgPaths.p2359100} fill="black" />
              <path d={svgPaths.pd454180} fill="black" />
              <path d={svgPaths.p280b1600} fill="black" />
              <path d={svgPaths.p7573580} fill="black" />
              <path d="M78 57.2H26V62.4H78V57.2Z" fill="black" />
              <path d={svgPaths.p191f6c00} fill="black" />
              <path d={svgPaths.p194b8e80} fill="black" />
              <path d="M5.2 83.2H0V98.8H5.2V83.2Z" fill="black" />
              <path d={svgPaths.p189c8880} fill="black" />
              <path d={svgPaths.p124d9900} fill="black" />
              <path d={svgPaths.p1efe0d00} fill="black" />
              <path d={svgPaths.p15439400} fill="black" />
              <path d={svgPaths.p377ace00} fill="black" />
              <path d={svgPaths.p1f0cb400} fill="black" />
              <path d={svgPaths.p3a5e5bc0} fill="black" />
              <path d={svgPaths.paa88b00} fill="black" />
              <path d={svgPaths.p19c705b0} fill="black" />
              <path d={svgPaths.p306e2cc0} fill="black" />
              <path d={svgPaths.p13c431c0} fill="black" />
              <path d="M57.2 78H52V83.2H57.2V78Z" fill="black" />
              <path d={svgPaths.p900bb80} fill="black" />
              <path d={svgPaths.padb2600} fill="black" />
              <path d={svgPaths.p184b8480} fill="black" />
              <path d={svgPaths.p2d3756b0} fill="black" />
              <path d={svgPaths.p31b12f80} fill="black" />
              <path d={svgPaths.p178be000} fill="black" />
            </g>
            
            {/* Screen Content Group */}
            {/* Adjusted to be strictly inside the bezels (inset 2px from edges, 2px from keyboard) */}
            <svg x="28" y="17.6" width="48" height="37.6" viewBox="0 0 48 37.6" overflow="hidden">
               {/* Monster - Centered in the screen */}
               <svg x="8.6" y="7.8" width="30.8" height="22" viewBox="0 0 30.8 22">
                  <path d={svgPaths.p269fae00} fill="black" />
               </svg>

               {/* Rising Curtain (White with Difference Blend) */}
               <motion.rect
                  width="48"
                  fill="white"
                  style={{ mixBlendMode: 'difference' }}
                  initial={{ y: 37.6, height: 0 }}
                  animate={{ 
                    y: 37.6 - fillHeight,
                    height: fillHeight 
                  }}
                  transition={{ duration: 0.1, ease: 'linear' }}
               />
            </svg>
          </svg>
        </div>

        {/* Progress percentage */}
        <p
          className="pixelify text-2xl text-black text-center mt-6"
        >
          {Math.floor(progress)}%
        </p>
      </div>
    </motion.div>
  );
}