import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { Work, Project } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = (isLoading || selectedProject) ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isLoading, selectedProject]);

  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);
  const handleCloseProject = useCallback(() => setSelectedProject(null), []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black no-flash selection:bg-accent-blue selection:text-white">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <main className="relative">
            <Hero />
            <Work onProjectSelect={setSelectedProject} />
            <Experience />
            <Contact />
          </main>

          <AnimatePresence>
            {selectedProject && (
              <ProjectDetail 
                project={selectedProject} 
                onClose={handleCloseProject} 
                onNextProject={setSelectedProject}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}