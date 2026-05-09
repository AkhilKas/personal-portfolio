import { useEffect, useState } from 'react';

export default function Navbar({ isDark, onToggle }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'about', 'projects', 'research', 'contact'];
      let current = activeSection;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }

      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 light:bg-white border-b border-gray-200 dark:border-gray-800 light:border-gray-200 fixed top-0 left-0 w-full z-50 shadow-sm dark:shadow-none light:shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white light:text-gray-900">
            Akhilesh
          </span>
        </a>

        <div className="flex items-center gap-2 md:order-2">
          {/* Theme Toggle */}
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 light:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 light:hover:bg-gray-100 transition-colors"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 light:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-gray-700 light:border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 light:bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:!bg-transparent">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => {
                    setActiveSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 px-3 rounded-sm md:p-0 transition-colors ${
                    activeSection === id
                      ? 'text-blue-600 dark:text-blue-400 light:text-blue-600 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 light:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 light:hover:text-blue-600'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
