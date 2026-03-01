import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { MagneticButton } from './MagneticButton';
import { AsciiText } from './AsciiText';
import { PixelTrail } from './PixelTrail';
import { PixelMatrix } from './PixelMatrix';
import svgPaths from '../imports/svg-q465zh1kbq';

const COMPANIES = ['BMW Group', 'Volvo Cars', 'Cyclone', 'HOTO Tools', 'Fablab O'];
const NAV_ITEMS = ['WORK', 'EXPERIENCE', 'CONTACT'] as const;
const PIXEL_COUNT = 48;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Hero() {
  const [companyIndex, setCompanyIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCompanyIndex((prev) => (prev + 1) % COMPANIES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Pre-compute random delays for pixel dissolve so they don't re-randomize on re-render
  const pixelDelays = useMemo(
    () => Array.from({ length: PIXEL_COUNT }, () => Math.random()),
    [companyIndex] // regenerate only when company changes
  );

  const handleNavClick = useCallback((item: string) => {
    setMenuOpen(false);
    scrollToSection(item.toLowerCase());
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#f5f5f5]">
      <PixelMatrix />
      <PixelTrail />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 sm:px-10 sm:py-8 mix-blend-difference text-white pointer-events-none">
        {/* Magnetic Monster Icon */}
        <div className="pointer-events-auto">
          <MagneticButton onClick={scrollToTop} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer">
             <svg className="w-full h-full" viewBox="0 0 30.8 22" fill="none">
               <path d={svgPaths.p269fae00} fill="currentColor" className="transition-colors duration-300"/>
             </svg>
          </MagneticButton>
        </div>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-10 font-['IBM_Plex_Mono',monospace] text-lg pointer-events-auto">
          <button onClick={() => scrollToSection('work')} className="hover:opacity-70 transition-opacity">
            <AsciiText text="WORK" />
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:opacity-70 transition-opacity">
            <AsciiText text="EXPERIENCE" />
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:opacity-70 transition-opacity">
            <AsciiText text="CONTACT" />
          </button>
        </nav>
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden pointer-events-auto w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer"
          aria-label="Toggle menu"
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-current origin-center" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-[2px] bg-current origin-center" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-current origin-center" />
        </button>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[45] bg-black flex flex-col items-center justify-center gap-12 sm:hidden"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => handleNavClick(item)}
                className="font-['IBM_Plex_Mono',monospace] text-3xl text-white tracking-widest hover:opacity-70 transition-opacity cursor-pointer"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6 pt-[8vh]">
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-['Redaction_50'] italic text-[22vw] sm:text-[18vw] lg:text-[180px] leading-none text-black shrink-0"
          >
            Tianqi<br />Xiong
          </motion.h1>

          {/* Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pb-1 lg:pb-3 w-full lg:w-[420px] shrink-0 text-left self-end lg:mr-0"
          >
            <p className="font-['DM_Sans'] text-base sm:text-lg lg:text-xl leading-relaxed text-black text-pretty">
              Hej! I'm an interaction designer works at the intersection of technology and art, 
              trying to add a little sparkling to the world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer / Bottom Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center px-6 sm:px-10 pb-10 gap-8 md:gap-0">
        
        {/* Previously work with */}
        <div className="flex items-center gap-4">
          <span className="font-['DM_Sans'] text-base sm:text-lg text-black">Previously work with:</span>
          <div className="h-[30px] sm:h-[36px] relative min-w-[140px] flex justify-center">
             <AnimatePresence mode='wait'>
                <motion.div
                  key={companyIndex}
                  className="relative border-2 border-black bg-[#f5f5f5] px-4 py-1 flex items-center justify-center whitespace-nowrap"
                >
                  <span className="font-['DM_Sans'] text-sm sm:text-base font-normal relative z-0 text-black">{COMPANIES[companyIndex]}</span>
                  
                  {/* Pixel Dissolve Mask */}
                  <div className="absolute inset-[-2px] z-10 grid grid-cols-12 grid-rows-4 pointer-events-none">
                    {pixelDelays.map((delay, i) => (
                      <motion.div
                        key={i}
                        className="bg-[#f5f5f5]"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0, delay }}
                      />
                    ))}
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        {/* Current Status */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full bg-accent-blue opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 bg-accent-blue"></span>
          </div>
          <p className="font-['DM_Sans'] text-base sm:text-lg text-black">
            Currently thesis worker at Epiroc
          </p>
        </div>
      </div>
    </section>
  );
}
