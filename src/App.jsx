import ProgressTitle from './components/ProgressTitle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

import { useState, useEffect } from 'react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

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

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 light:bg-gray-50 text-gray-900 dark:text-white light:text-gray-900">
      <Analytics />
      <ProgressTitle />
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[60] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar isDark={isDark} onToggle={() => setIsDark(prev => !prev)} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}
