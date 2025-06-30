import { useEffect, useState } from 'react';

export default function ProgressTitle() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('Hero');

  const baseTitle = "Akhilesh";
  
  const sectionTitles = {
    'Hero': 'AI Researcher',
    'About': 'My Journey', 
    'Projects': 'Relevant Work',
    'Research': 'Publications',
    'Contact': 'Let\'s Connect'
  };

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.round((scrollTop / docHeight) * 100);
      setScrollProgress(progress);

      // Determine current section
      const sections = ['hero', 'about', 'projects', 'research', 'contact'];
      let current = 'Hero';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            break;
          }
        }
      }
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    // Update title with just section name
    document.title = `${baseTitle} | ${sectionTitles[currentSection]}`;
  }, [scrollProgress, currentSection, baseTitle, sectionTitles]);

  return null; // This component doesn't render anything
}