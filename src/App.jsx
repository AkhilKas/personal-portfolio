import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';

import { useState, useEffect } from 'react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <Research />
      <Contact />
    </div>
  );
}
