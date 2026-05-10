const dotColor = {
  work:      'bg-blue-500',
  education: 'bg-indigo-500',
};

const workEntries = [
  {
    id: 7,
    period: 'Sep 2025 – Present',
    title: 'Graduate Teaching Assistant',
    organization: 'Northeastern University',
    bullets: [
      'Supported 40+ undergraduates weekly in discrete mathematics — graph theory, combinatorics, and proof techniques.',
    ],
  },
  {
    id: 6,
    period: 'Jun 2025 – Aug 2025',
    title: 'AI Engineer Intern',
    organization: 'CognitiveHealth Solutions',
    bullets: [
      'Built a production-ready OCR system with secure API management, cross-platform deployment, and automated testing.',
      'Reduced healthcare document processing time by 95% via an LLM-based n8n pipeline with advanced prompt engineering.',
    ],
  },
  {
    id: 3,
    period: 'Feb 2024 – May 2024',
    title: 'Data Analyst',
    organization: 'Ryzklytix Consulting Solutions',
    bullets: [
      'Developed an end-to-end product prototype using Python and Streamlit.',
      'Moved to R&D to build backend functions and stored procedures on MySQL Server.',
    ],
  },
  {
    id: 1,
    period: 'Jan 2023 – Jun 2023',
    title: 'ML Engineer',
    organization: 'Reliance Jio',
    bullets: [
      'Built gender and age classification models for voice-based ad-targeting on smart TV remotes.',
      'Trained on the Mozilla Common Voice dataset (American English), then extended to Indian regional languages.',
    ],
  },
];

const educationEntries = [
  {
    id: 5,
    period: 'Sep 2024 – Present',
    title: 'Master of Science — Artificial Intelligence',
    organization: 'Khoury College of Computer Sciences, Northeastern University',
    bullets: [
      'Relevant coursework: Foundations of AI, Reinforcement Learning, Algorithms, Program Design Paradigms.',
    ],
  },
  {
    id: 2,
    period: 'Aug 2019 – Jul 2023',
    title: 'Bachelor of Engineering — Computer Science',
    organization: 'Specialization in Deep Learning · Graduated summa cum laude · 90% scholarship',
    bullets: [
      'Relevant coursework: Machine Learning, Neural Networks & Deep Learning, Foundations of Data Science, Mining of Massive Datasets, Cloud Computing.',
    ],
  },
];

function EntryList({ entries, type }) {
  return (
    <div className="relative">
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700 light:bg-gray-200" />
      <div className="space-y-0">
        {entries.map((entry, index) => (
          <div key={entry.id} className={`relative flex gap-6 ${index === entries.length - 1 ? 'pb-0' : 'pb-8'}`}>
            <div className="relative flex-shrink-0 w-[11px] mt-[6px]">
              <span className={`block w-[11px] h-[11px] rounded-full ${dotColor[type]} ring-2 ring-white dark:ring-gray-900 light:ring-white`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 light:text-gray-500 tabular-nums mb-1">
                {entry.period}
              </p>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white light:text-gray-900 leading-snug">
                {entry.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500 mt-0.5 mb-2">
                {entry.organization}
              </p>
              <ul className="space-y-1">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                    <span className="mt-[7px] flex-shrink-0 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 light:bg-gray-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8 space-y-12">
      {/* Work Experience */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white light:text-gray-900 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
          </svg>
          Work Experience
        </h3>
        <EntryList entries={workEntries} type="work" />
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white light:text-gray-900 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
          </svg>
          Education
        </h3>
        <EntryList entries={educationEntries} type="education" />
      </div>

      {/* Download Resume */}
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700 light:border-gray-200">
        <p className="text-gray-500 dark:text-gray-400 light:text-gray-500 text-sm mb-4">
          Interested in learning more about my background?
        </p>
        <a
          href="https://drive.google.com/file/d/1kZQJwwA91-22L1exEG6hQNksX0IU6MrX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 light:bg-gray-100 light:hover:bg-gray-200 text-gray-900 dark:text-white light:text-gray-900 text-sm font-medium py-2.5 px-5 rounded-lg border border-gray-300 dark:border-gray-600 light:border-gray-300 hover:border-gray-400 dark:hover:border-gray-500 light:hover:border-gray-400 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Resume
        </a>
        <p className="text-gray-400 dark:text-gray-500 light:text-gray-400 text-xs mt-3">
          Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
