import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'about', 'projects', 'contact'];

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

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);


  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'research', label: 'Research'},
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Akhilesh
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`block py-2 px-3 rounded-sm md:p-0 transition-colors ${
                    activeSection === id
                      ? 'text-blue-700 dark:text-blue-500 font-semibold'
                      : 'text-gray-900 dark:text-white hover:text-blue-700 md:hover:text-blue-700 dark:hover:text-blue-500'
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
