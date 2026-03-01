import { motion } from 'motion/react';
import { AsciiText } from './AsciiText';
import { PixelMatrix } from './PixelMatrix';
import { useRef, useState, useCallback, useMemo } from 'react';

const SPRING_CONFIG = { type: 'spring' as const, stiffness: 150, damping: 15, mass: 0.1 };
const ZERO = { x: 0, y: 0 };
const STRENGTH = 0.25;

export function Contact() {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [magnetPos, setMagnetPos] = useState(ZERO);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = magnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const deltaX = e.clientX - (rect.left + rect.width / 2);
    const deltaY = e.clientY - (rect.top + rect.height / 2);
    setMagnetPos({ x: deltaX * STRENGTH, y: deltaY * STRENGTH });
  }, []);

  const handleMouseLeave = useCallback(() => setMagnetPos(ZERO), []);

  const year = useMemo(() => new Date().getFullYear(), []);
  const timeStr = useMemo(
    () => new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Stockholm' }),
    []
  );

  return (
    <section id="contact" className="relative min-h-[90vh] flex flex-col justify-between py-10 px-6 sm:px-10 bg-[#f5f5f5] overflow-hidden">
      <PixelMatrix withMask />
      
      {/* Top Status Bar */}
      <div className="w-full flex justify-between items-center border-b border-black/10 pb-4 z-10">
        <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-black/60">[ STATUS: OPEN ]</span>
        <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-black/60">2026</span>
      </div>

      {/* Main Interactive Center */}
      <div className="flex-grow flex flex-col justify-center items-center z-10 relative gap-8">
        <p className="font-['IBM_Plex_Mono'] text-sm sm:text-base text-black/40 uppercase tracking-widest">
          Have an idea?
        </p>
        
        {/* Giant Magnetic Ascii Button */}
        <a href="mailto:bearring19@gmail.com" className="group relative inline-flex items-center justify-center cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={magnetRef}
            animate={magnetPos}
            transition={SPRING_CONFIG}
            className="font-['IBM_Plex_Mono'] text-[8vw] sm:text-[6vw] lg:text-[5vw] leading-none text-black transition-colors duration-300 group-hover:text-accent-blue text-center"
          >
            <AsciiText text="BEARRING19@GMAIL.COM" mobileBreakBefore="@" />
          </motion.div>
        </a>

        <p className="font-['DM_Sans'] text-sm sm:text-base text-black/40 max-w-md text-center text-pretty">
          I'm always open for new ideas and collaborations. Let's create together!
        </p>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-black/10 pt-10 z-10">
        
        {/* Copyright */}
        <div className="flex flex-col gap-2 justify-between">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-black/40 uppercase tracking-widest">
            © {year} TIANQI XIONG
          </span>
        </div>

        {/* Social 1 */}
        <div className="flex flex-col gap-2">
          <h3 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-black/30 mb-2">CONNECT</h3>
          <a href="https://www.linkedin.com/in/tianqi-jade-xiong-a310782a0/" target="_blank" rel="noopener noreferrer" className="font-['IBM_Plex_Mono'] text-sm hover:text-accent-blue transition-colors">
            <AsciiText text="LINKEDIN" />
          </a>
          <a href="https://www.youtube.com/@TianqiXiong" target="_blank" rel="noopener noreferrer" className="font-['IBM_Plex_Mono'] text-sm hover:text-accent-blue transition-colors">
            <AsciiText text="YOUTUBE" />
          </a>
        </div>

        {/* Social 2 / Resume */}
        <div className="flex flex-col gap-2">
          <h3 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-black/30 mb-2">DOWNLOAD</h3>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="font-['IBM_Plex_Mono'] text-sm hover:text-accent-blue transition-colors">
            <AsciiText text="RESUME.PDF" />
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2 lg:items-end">
          <h3 className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-black/30 mb-2 lg:text-right">BASED IN</h3>
          <span className="font-['IBM_Plex_Mono'] text-sm text-black">
            UMEA, SE
          </span>
          <span className="font-['IBM_Plex_Mono'] text-xs text-black/40">
            {timeStr}
          </span>
        </div>

      </div>
    </section>
  );
}
