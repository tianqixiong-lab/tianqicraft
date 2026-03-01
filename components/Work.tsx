import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import controlSoftensImg from "figma:asset/7f90008e1199a8adbf5db61bdca4f4308d84b488.png";
import maxi3dImg from "figma:asset/2979d391dbe261eaecf17c7ad86ce4ef2b6aa3f9.png";
import maxi3dDetailImg from "figma:asset/c61ee5e9315c645f33e251b02efc31d3543ed999.png";
import rushImg from "figma:asset/61595b63263adea1c8259a61291bc0863736f33b.png";
import rushDetailImg from "figma:asset/f5528152af07dcc0a8e2959b804561796c7ec9f9.png";
import elfImg from "figma:asset/3f79415e0a2f07014658fcada44246aaa0cf4a0b.png";
import elfDetailImg from "figma:asset/e23a6934e4aca67bc717c2c434fdbde10f9c5dee.png";
import oldieImg from "figma:asset/e382e5bc13f5f104003b87ebbb1bd06c8be66dc3.png";

// Export the interface so App.tsx can use it
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  role?: string;
  timeline?: string;
  challenge?: string;
  insights?: string;
  quote?: string;
  takeaway?: string;
  exploration?: string;
  solution?: string;
  detailImage?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "WHERE CONTROL SOFTENS",
    category: "Coming soon",
    year: "2026",
    description:
      "Redefining machine agency through 'weakness' to foster empathetic, non-dominant, and reflective human-machine interaction.",
    image: controlSoftensImg,
    role: "Sole Creator",
    timeline: "Jan 2026 - Present",
    challenge:
      "In a rapidly evolving digital landscape, users are overwhelmed by complexity. The goal was to simplify the interaction model without sacrificing power, creating a system that feels almost invisible. We started by questioning the fundamental assumptions of the existing workflow.",
    insights:
      "Through interviews with 15+ power users, we discovered that muscle memory plays a critical role in efficiency. However, the learning curve was too steep.",
    quote:
      '"I spend 40% of my time just navigating menus instead of doing the actual work."',
    takeaway:
      "Key takeaway: The interface needs to be context-aware, surfacing tools only when they are relevant to the current task.",
    exploration:
      'We explored multiple paradigms, from gesture-based controls to voice commands. The most promising direction was a "predictive cursor" concept that anticipates user intent.',
    solution:
      'The final design unifies the fragmented toolset into a cohesive "command center." The visual language uses high contrast and mono-spaced typography to evoke precision and reliability.',
  },
  {
    id: 2,
    title: "RUSH",
    category: "Product & AR",
    year: "2024",
    description:
      "A smart beach wearable for instant SOS alerts and real-time crowd monitoring, aiming to accelerate lifeguard response and coordination.",
    image: rushImg,
    detailImage: rushDetailImg,
    role: "UX Design, User test",
    timeline: "Feb 2024 - March 2024",
    challenge:
      "How can we visualize the invisible energy of human motion? The challenge was to create an installation that reacts instantly to visitors, fostering a dialogue between the body and digital space.",
    insights:
      "People are naturally drawn to their own reflection, but traditional mirrors are static. We found that abstracting movement into light trails encourages more uninhibited, playful interactions.",
    quote:
      '"It feels like painting with light, but my whole body is the brush."',
    takeaway:
      "Latency is the enemy of immersion. The feedback loop must be under 16ms to feel like a true extension of the body.",
    exploration:
      "We prototyped using Kinect sensors and custom shaders. Initial tests with particle systems were too chaotic; we pivoted to fluid dynamics for smoother, more organic visualization.",
    solution:
      "RUSH uses a custom LIDAR tracking system mapped to a 40ft LED wall. The visuals evolve based on the speed and intensity of movement, creating a unique, ephemeral artwork for every visitor.",
  },
  {
    id: 3,
    title: "ELF",
    category: "UX/UI Design",
    year: "2024",
    description:
      "Reimagining citizen-state relations through an intimate, conversational platform for flexible life planning.",
    image: elfImg,
    detailImage: elfDetailImg,
    role: "UX Design, Service Design",
    timeline: "April 2024 - June 2024",
    challenge:
      "Modern car dashboards are becoming dangerously distracting. ELF aims to reduce cognitive load for drivers while providing essential information and entertainment in a safe, intuitive way.",
    insights:
      "Eye-tracking studies revealed that drivers look at screens for an average of 2 seconds per glance. Any interaction requiring more focus is a safety hazard.",
    quote:
      '"I want my car to be smart, but I don\'t want to fight with a tablet while driving."',
    takeaway:
      "Information must be hierarchized strictly by urgency. Secondary controls should rely on voice or haptic feedback, not visual attention.",
    exploration:
      "We tested AR windshield displays vs. traditional clusters. While AR is promising, current tech has field-of-view limitations. We settled on a hybrid approach: a minimal cluster for critical data and a voice-first assistant.",
    solution:
      'ELF features a "Glanceable UI" system using large, high-contrast typography and color-coded alerts. The interface adapts to driving conditions—calm and minimal on highways, detailed when parked.',
  },
  {
    id: 4,
    title: "MAXI 3D",
    category: "Product Integration",
    year: "2023",
    description:
      "A digital twin platform that simplifies complex operations through interactive visualization and collaborative knowledge sharing.",
    image: maxi3dImg,
    detailImage: maxi3dDetailImg,
    role: "UI Design, Prototype",
    timeline: "Nov 2023 - Jan 2024",
    challenge:
      'Typography is traditionally rigid. MAXI 3D explores how code can break these rules to create "living type" that retains legibility while embracing chaos and three-dimensional form.',
    insights:
      "Standard 3D text often feels heavy and disconnected. By treating letters as collections of particles or spline curves, we can manipulate them physically—simulating wind, gravity, and collision.",
    quote:
      '"Type shouldn\'t just sit there. It should have mass, velocity, and behavior."',
    takeaway:
      "Generative design requires controlled randomness. Pure chaos is noise; curated chaos is art.",
    exploration:
      "Built with Three.js and custom GLSL shaders. We experimented with voxelization, but it felt too blocky. Signed Distance Fields (SDFs) allowed for smoother, infinite-resolution blending.",
    solution:
      "The resulting tool allows designers to input text and manipulate 20+ parameters (extrusion, twist, melt, shatter) in real-time, exporting high-res meshes for print or web use.",
  },
  {
    id: 5,
    title: "OLDIE BUT GOODIE",
    category: "Archive",
    year: "2023",
    description:
      "A collection of experimental works and early prototypes.",
    image: oldieImg,
    role: "Sole Creator",
    timeline: "2023 - Present",
    challenge:
      "Not every experiment becomes a full product, but the process is valuable. This archive serves as a digital garden to preserve and display raw, unfinished, or quirky ideas that don't fit a standard portfolio.",
    insights:
      'Perfectionism kills creativity. showcasing "messy" work humanizes the designer and shows the thinking process behind the polish.',
    quote: '"Show your work. All of it. Even the weird stuff."',
    takeaway:
      "An archive is a living history. It tracks growth and allows for cross-pollination of old ideas into new projects.",
    exploration:
      "The site design itself mimics a file directory system, using retro OS aesthetics (boot sequences, command lines) to frame these digital artifacts.",
    solution:
      "A curated, searchable repository of 50+ sketches, code snippets, and motion tests. It serves as both a personal reference library and a playground for testing new web technologies.",
  },
];

// Shared preview component - only one instance for all strips
function ProjectPreview({ project }: { project: Project | null }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          style={{
            x: springX,
            y: springY,
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 50,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="hidden sm:block"
        >
          <div className="w-[480px] aspect-video overflow-hidden shadow-2xl bg-black">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface GhostStripProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
  onHoverStart: (project: Project) => void;
  onHoverEnd: () => void;
}

// Pixel arrow SVG path - shared constant
const ARROW_RIGHT_PATH = "M5 11H13V7H15V9H17V11H19V13H17V15H15V17H13V13H5V11Z";

export function GhostStrip({
  project,
  index,
  onClick,
  onHoverStart,
  onHoverEnd,
}: GhostStripProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onHoverStart(project);
  }, [project, onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    onHoverEnd();
  }, [onHoverEnd]);

  const handleClick = useCallback(() => onClick(project), [project, onClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full group border-t border-black/10 hover:border-transparent transition-colors duration-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* CSS-only hover background instead of AnimatePresence */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-200 z-0"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        {/* Pixel corners */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-white" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-white" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
      </div>

      <div className="relative w-full py-6 sm:py-8 md:py-10 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 cursor-pointer overflow-hidden z-10">
        <div className="flex items-center gap-6 z-20 transition-colors duration-300 group-hover:text-white">
          <div className="flex flex-col items-center">
            <span className="font-['IBM_Plex_Mono',monospace] text-sm font-bold">
              0{project.id}
            </span>
          </div>
          <h3 className="font-['IBM_Plex_Mono',monospace] text-2xl sm:text-3xl md:text-4xl font-light tracking-tight sm:group-hover:translate-x-4 transition-transform duration-300 whitespace-nowrap">
            {project.title}
          </h3>
        </div>

        {/* Mobile inline image */}
        <div className="sm:hidden w-full aspect-video overflow-hidden bg-black/5">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-auto flex items-center gap-8 sm:gap-12 z-20 transition-colors duration-300 group-hover:text-white">
          <span className="font-['IBM_Plex_Mono',monospace] text-xs sm:text-sm uppercase tracking-widest hidden sm:block opacity-70 group-hover:opacity-100">
            [{project.category}]
          </span>
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start sm:gap-4">
            <span className="font-['IBM_Plex_Mono',monospace] text-sm opacity-50">
              {project.year}
            </span>
            <motion.div
              animate={{ rotate: isHovered ? -45 : 0 }}
              transition={{ duration: 0.2, ease: "steps(4)" }}
              className="origin-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                shapeRendering="crispEdges"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path d={ARROW_RIGHT_PATH} />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface WorkProps {
  onProjectSelect?: (project: Project) => void;
}

export function Work({ onProjectSelect }: WorkProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const handleHoverEnd = useCallback(() => setHoveredProject(null), []);
  const handleClick = useCallback(
    (p: Project) => onProjectSelect?.(p),
    [onProjectSelect]
  );

  return (
    <section id="work" className="py-20 sm:py-32 relative z-20 bg-[#f5f5f5]">
      <div className="w-full px-4 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-['Redaction_50'] italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-black mb-12 sm:mb-16 md:mb-20"
        >
          Selected work*
        </motion.h2>

        <div className="w-full flex flex-col border-b border-black/10">
          {projects.map((project, index) => (
            <GhostStrip
              key={project.id}
              project={project}
              index={index}
              onClick={handleClick}
              onHoverStart={setHoveredProject}
              onHoverEnd={handleHoverEnd}
            />
          ))}
        </div>
      </div>

      {/* Shared Preview Component */}
      <ProjectPreview project={hoveredProject} />
    </section>
  );
}
