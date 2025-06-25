import ProgressTitle from './components/ProgressTitle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Analytics from './components/Analytics';

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
      {/* Add Analytics component */}
      <Analytics />
      {/* <TabAttention /> */}
      <ProgressTitle /> 
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Contact />
    </div>
  );
}
