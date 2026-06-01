import ProgressTitle from './components/ProgressTitle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
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
    <div className="text-ink min-h-screen">
      <ProgressTitle />
      <div
        className="fixed top-0 left-0 h-[2px] bg-accent z-[60] transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar isDark={isDark} onToggle={() => setIsDark(p => !p)} />
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
