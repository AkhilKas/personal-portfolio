import { useState, useEffect, useRef } from 'react';

export default function TechStack() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const technologies = [
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'PyTorch',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
    },
    {
      name: 'TensorFlow',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    },
    {
      name: 'OpenCV',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Linux',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="mt-16 mb-20 pt-8 border-t border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Languages & Tools</h3>
      
      {/* Scrolling Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 py-4 animate-scroll-continuous"
          style={{
            width: 'fit-content',
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group flex flex-col items-center justify-center min-w-[80px] p-4 rounded-lg bg-gray-800/50 hover:bg-white/90 transition-all duration-300 transform hover:scale-110"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <img 
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 filter grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-800 transition-colors text-center font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4">
        <p className="text-gray-500 text-xs">
          Hover to pause • Scroll to explore the full tech stack
        </p>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-continuous {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-continuous {
          animation: scroll-continuous 30s linear infinite;
        }
      `}</style>
    </div>
  );
}