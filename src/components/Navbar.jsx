import { useEffect, useState } from 'react';

export default function Navbar({ isDark, onToggle }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ids = ['hero', 'about', 'experience', 'projects', 'research', 'contact'];
      let current = activeSection;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { current = id; break; }
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const sections = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'research',   label: 'Research' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backdropFilter: 'blur(8px)', background: 'color-mix(in srgb, var(--paper) 88%, transparent)', borderColor: 'var(--line-soft)' }}
    >
      <div className="max-w-[1180px] mx-auto px-8 flex items-center justify-between h-[60px]">

        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-[0.04em] text-ink">
          A. KASTURI
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setActiveSection(id)}
              className="relative font-mono text-[0.72rem] tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ color: activeSection === id ? 'var(--accent)' : 'var(--ink-faint)' }}
              onMouseEnter={e => { if (activeSection !== id) e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={e => { if (activeSection !== id) e.currentTarget.style.color = 'var(--ink-faint)'; }}
            >
              {label}
              <span
                className="absolute left-0 -bottom-1 h-[1.5px] bg-accent transition-all duration-300"
                style={{ width: activeSection === id ? '100%' : '0' }}
              />
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="p-1.5 rounded transition-colors cursor-pointer hover:bg-paper-deep"
            style={{ color: 'var(--ink-soft)' }}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={onToggle} aria-label="Toggle theme" className="p-2" style={{ color: 'var(--ink-faint)' }}>
            {isDark ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2" style={{ color: 'var(--ink-faint)' }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t px-8 py-4 flex flex-col gap-4" style={{ borderColor: 'var(--line-soft)', background: 'var(--paper)' }}>
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => { setActiveSection(id); setIsMenuOpen(false); }}
              className="font-mono text-[0.72rem] tracking-[0.1em] uppercase"
              style={{ color: activeSection === id ? 'var(--accent)' : 'var(--ink-soft)' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
