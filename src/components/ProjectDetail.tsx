import { lazy, Suspense } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Project, projects } from './Work';
import { motion, AnimatePresence } from 'motion/react';

// Lazy load detail components - only loaded when needed
const Maxi3DDetail = lazy(() => import('./Maxi3DDetail').then(m => ({ default: m.Maxi3DDetail })));
const ElfDetail = lazy(() => import('./ElfDetail').then(m => ({ default: m.ElfDetail })));
const RushDetail = lazy(() => import('./RushDetail').then(m => ({ default: m.RushDetail })));
const OldieDetail = lazy(() => import('./OldieDetail').then(m => ({ default: m.OldieDetail })));

const ARROW_LEFT_PATH = "M19 11H11V7H9V9H7V11H5V13H7V15H9V17H11V13H19V11Z";
const ARROW_RIGHT_PATH = "M5 11H13V7H15V9H17V11H19V13H17V15H15V17H13V13H5V11Z";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const CHARS_LEN = CHARS.length;

// Collaboration map - static lookup
const COLLABORATION_MAP: Record<number, string> = {
  1: 'Epiroc',
  3: 'Försäkringskassan',
  4: 'Komatsu Forest',
};

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onNextProject: (project: Project) => void;
}

export function ProjectDetail({ project, onClose, onNextProject }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [project]);

  const { prevProject, nextProject } = useMemo(() => {
    const idx = projects.findIndex(p => p.id === project.id);
    return {
      prevProject: projects[(idx - 1 + projects.length) % projects.length],
      nextProject: projects[(idx + 1) % projects.length],
    };
  }, [project.id]);

  const handlePrev = useCallback(() => onNextProject(prevProject), [onNextProject, prevProject]);
  const handleNext = useCallback(() => onNextProject(nextProject), [onNextProject, nextProject]);

  const collaboration = COLLABORATION_MAP[project.id];
  const hasThreeColGrid = !!collaboration;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-[#f5f5f5] overflow-y-auto"
      ref={containerRef}
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#f5f5f5] border-b border-black/10 flex justify-between items-center px-4 py-4 sm:px-10">
        <BackButton onClick={onClose} />
      </div>

      <div className="w-full px-4 sm:px-10 py-12 sm:py-20">
        {/* Project Header */}
        <div className="mb-12 sm:mb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-black/50 font-['IBM_Plex_Mono',monospace] text-sm">
              <span>NO. 0{project.id}</span>
              <span>//</span>
              <span>{project.year}</span>
              <span>//</span>
              <span>{project.category}</span>
            </div>
            
            <h1 className="font-['IBM_Plex_Mono',monospace] text-4xl sm:text-6xl md:text-7xl leading-none tracking-tighter text-black uppercase break-words">
              {project.title}
            </h1>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full aspect-video bg-neutral-100 mb-16"
        >
           <ImageWithFallback
             src={project.detailImage || project.image}
             alt={project.title}
             className="w-full h-full object-cover"
           />
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-12 sm:gap-16">
           {/* Description Section */}
           <div className="flex flex-col gap-8 border-t border-black pt-8">
              <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest opacity-50">OVERVIEW</h3>
              <p className="font-['DM_Sans'] text-xl sm:text-2xl leading-relaxed max-w-3xl">
                {project.description}
              </p>
           </div>

           {/* Info Grid: Role & Timeline */}
           <div className={`grid grid-cols-1 ${hasThreeColGrid ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-8 sm:gap-16 border-t border-black pt-8`}>
              <div className="flex flex-col gap-4">
                 <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest opacity-50">ROLE</h3>
                 <p className="font-['IBM_Plex_Mono',monospace] text-lg">
                    {project.role || 'Design & Development'}
                 </p>
              </div>
              <div className="flex flex-col gap-4">
                 <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest opacity-50">TIMELINE</h3>
                 <p className="font-['IBM_Plex_Mono',monospace] text-lg">
                    {project.timeline || '2024'}
                 </p>
              </div>
              {collaboration && (
                <div className="flex flex-col gap-4">
                   <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest opacity-50">COLLABORATION</h3>
                   <p className="font-['IBM_Plex_Mono',monospace] text-lg">
                      {collaboration}
                   </p>
                </div>
              )}
           </div>
           
           {/* Case Study Content */}
           <div className="flex flex-col gap-16 border-t border-black pt-16">
              <Suspense fallback={<div className="flex items-center justify-center py-32"><p className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest text-black/40">Loading...</p></div>}>
                {project.id === 4 ? (
                  <Maxi3DDetail />
                ) : project.id === 3 ? (
                  <ElfDetail />
                ) : project.id === 2 ? (
                  <RushDetail />
                ) : project.id === 1 ? (
                  <div className="flex items-center justify-center py-32">
                    <p className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest text-black/40">
                      Coming Soon
                    </p>
                  </div>
                ) : project.id === 5 ? (
                  <OldieDetail />
                ) : (
                <DefaultDetail project={project} />
                )}
              </Suspense>
           </div>

           {/* Navigation Footer - Prev/Next */}
           <div className="mt-32 border-t border-black">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <NavButton project={prevProject} label="PREVIOUS" direction="left" onClick={handlePrev} />
                <NavButton project={nextProject} label="NEXT" direction="right" onClick={handleNext} />
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// Extracted default detail to avoid inline JSX bloat
function DefaultDetail({ project }: { project: Project }) {
  return (
    <>
      {/* 1. Background / Context */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
         <div className="md:w-1/4">
            <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">01 // CONTEXT</h3>
         </div>
         <div className="md:w-3/4 flex flex-col gap-6">
            <h4 className="font-['DM_Sans'] text-2xl font-medium">The Challenge</h4>
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
               {project.challenge || "Project challenge description not available."}
            </p>
         </div>
      </div>

      {/* 2. Research & Insights */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
         <div className="md:w-1/4">
            <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">02 // RESEARCH</h3>
         </div>
         <div className="md:w-3/4 flex flex-col gap-6">
            <h4 className="font-['DM_Sans'] text-2xl font-medium">User Insights</h4>
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
               {project.insights || "Research insights not available."}
            </p>
            {project.quote && (
              <div className="bg-neutral-200 p-8 my-4 border-l-4 border-black max-w-3xl">
                 <p className="font-['IBM_Plex_Mono',monospace] text-sm italic">
                    {project.quote}
                 </p>
              </div>
            )}
            {project.takeaway && (
              <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
                 {project.takeaway}
              </p>
            )}
         </div>
      </div>

      {/* 3. Ideation & Wireframing */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
         <div className="md:w-1/4">
            <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">03 // IDEATION</h3>
         </div>
         <div className="md:w-3/4 flex flex-col gap-6">
            <h4 className="font-['DM_Sans'] text-2xl font-medium">Exploration</h4>
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
               {project.exploration || "Exploration details not available."}
            </p>
            <div className="grid grid-cols-2 gap-4 my-6">
               <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center border border-black/10">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-black/40">SKETCH_A.JPG</span>
               </div>
               <div className="aspect-[4/3] bg-neutral-200 flex items-center justify-center border border-black/10">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-black/40">WIREFRAME_V1.JPG</span>
               </div>
            </div>
         </div>
      </div>

      {/* 4. Prototype & Final Design */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
         <div className="md:w-1/4">
            <h3 className="font-['IBM_Plex_Mono',monospace] text-sm uppercase tracking-widest sticky top-24">04 // SOLUTION</h3>
         </div>
         <div className="md:w-3/4 flex flex-col gap-6">
            <h4 className="font-['DM_Sans'] text-2xl font-medium">High Fidelity</h4>
            <p className="font-['DM_Sans'] text-lg text-black/80 leading-relaxed max-w-3xl">
               {project.solution || "Solution details not available."}
            </p>
            <div className="w-full aspect-video bg-neutral-900 mt-6 flex items-center justify-center">
               <span className="font-['IBM_Plex_Mono',monospace] text-white/50">INTERACTIVE_PROTOTYPE_DEMO.MOV</span>
            </div>
         </div>
      </div>
    </>
  );
}

// Nav button with CSS-only hover instead of AnimatePresence
function NavButton({ project, label, direction, onClick }: { project: Project, label: string, direction: 'left' | 'right', onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = direction === 'left';
  const arrowPath = isLeft ? ARROW_LEFT_PATH : ARROW_RIGHT_PATH;

  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative h-40 sm:h-56 p-6 sm:p-10 flex flex-col justify-between group overflow-hidden cursor-pointer
        ${isLeft ? 'border-b md:border-b-0 md:border-r border-black text-right items-end' : 'text-left items-start'}
        border-black/10
      `}
    >
      {/* CSS-only hover background */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-200 z-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      <div className={`relative z-10 flex w-full justify-between items-start ${isLeft ? 'flex-row-reverse' : ''}`}>
        <span className={`font-['IBM_Plex_Mono',monospace] text-xs uppercase tracking-widest transition-colors duration-300 ${isHovered ? 'text-white/50' : 'text-black/40'}`}>
          {isLeft ? '<< ' : ''}{label}
        </span>
        <span className={`font-['IBM_Plex_Mono',monospace] text-xs uppercase transition-colors duration-300 ${isHovered ? 'text-white/50' : 'text-black/40'}`}>
           0{project.id}
        </span>
      </div>

      <div className="relative z-10 w-full">
        <h4 className={`font-['IBM_Plex_Mono',monospace] text-xl sm:text-3xl leading-tight transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
          {project.title}
        </h4>
      </div>
      
      {/* Pixel Arrow */}
      <div 
        className={`absolute bottom-10 z-10 text-white transition-all duration-200 ${isLeft ? 'left-10' : 'right-10'}`}
        style={{ 
          opacity: isHovered ? 1 : 0, 
          transform: `translateX(${isHovered ? 0 : isLeft ? 20 : -20}px)` 
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" shapeRendering="crispEdges">
           <path d={arrowPath} />
        </svg>
      </div>
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-sm hover:bg-black hover:text-white px-3 py-1 transition-colors border border-transparent hover:border-black cursor-pointer"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" shapeRendering="crispEdges" className="w-4 h-4">
        <path d={ARROW_LEFT_PATH} />
      </svg>
      <HyperText text="BACK [ESC]" trigger={isHovered} />
    </button>
  );
}

function HyperText({ text, trigger }: { text: string; trigger: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }
    
    let iteration = 0;
    const interval = setInterval(() => {
      const arr = text.split("");
      for (let i = Math.floor(iteration); i < arr.length; i++) {
        arr[i] = CHARS[Math.floor(Math.random() * CHARS_LEN)];
      }
      setDisplayText(arr.join(""));
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1/3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span>{displayText}</span>;
}
