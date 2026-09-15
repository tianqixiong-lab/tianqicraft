import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { Work, Project, projects } from './components/Work';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

function getProjectFromPath() {
  const slug = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
  return projects.find((project) => project.slug === slug) || null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => getProjectFromPath());

  useEffect(() => {
    document.body.style.overflow = (isLoading || selectedProject) ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isLoading, selectedProject]);

  useEffect(() => {
    const handlePopState = () => setSelectedProject(getProjectFromPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = selectedProject ? `${selectedProject.title} | Tianqi Xiong` : 'Tianqi Xiong';
  }, [selectedProject]);

  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);
  const handleProjectSelect = useCallback((project: Project) => {
    const path = `/${project.slug}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setSelectedProject(project);
  }, []);
  const handleCloseProject = useCallback(() => {
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    setSelectedProject(null);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black no-flash selection:bg-accent-blue selection:text-white">
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <main className="relative">
            <Hero />
            <Work onProjectSelect={handleProjectSelect} />
            <Experience />
            <Contact />
          </main>

          <AnimatePresence>
            {selectedProject && (
              <ProjectDetail 
                project={selectedProject} 
                onClose={handleCloseProject} 
                onNextProject={handleProjectSelect}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
