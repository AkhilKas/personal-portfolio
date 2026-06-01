import { useState, useRef } from 'react';

const technologies = [
  { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'PyTorch',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenCV',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Linux',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const duplicated = [...technologies, ...technologies];

export default function TechStack() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-14 pt-10 border-t" style={{ borderColor: 'var(--line)' }}>
      <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase mb-6" style={{ color: 'var(--ink-faint)' }}>
        Languages &amp; Tools
      </p>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--paper), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--paper), transparent)' }} />

        <div
          className="flex gap-4 py-2 animate-scroll-continuous"
          style={{ width: 'fit-content', animationPlayState: isHovered ? 'paused' : 'running' }}
        >
          {duplicated.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group flex flex-col items-center justify-center min-w-[72px] px-3 py-3 rounded-sm border transition-all duration-200"
              style={{
                background: 'var(--paper-deep)',
                borderColor: 'var(--line-soft)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--line)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line-soft)'; }}
            >
              <img src={tech.logo} alt={tech.name} className="w-8 h-8 filter grayscale group-hover:grayscale-0 transition-all duration-200 object-contain mb-1.5" />
              <span className="font-mono text-[0.6rem] tracking-wide text-center" style={{ color: 'var(--ink-faint)' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="font-mono text-[0.62rem] tracking-wide mt-3" style={{ color: 'var(--ink-faint)' }}>
        Hover to pause
      </p>
    </div>
  );
}
