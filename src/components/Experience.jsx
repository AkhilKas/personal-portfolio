const workEntries = [
  {
    id: 5,
    period: 'Sep 2025 – Present',
    title: 'Graduate Teaching Assistant',
    organization: 'Northeastern University',
    bullets: [
      'Mentoring undergrad students by leading weekly recitations covering graph theory, combinatorics, logic proofs, and probability.',
      'Mentored 200+ graduate students in core AI concepts covering ML algorithms, Markov models, search algorithms, and RL.',
    ],
  },
  {
    id: 4,
    period: 'Feb 2026 – Apr 2026',
    title: 'AI Engineer Intern',
    organization: 'CognitiveHealth Solutions',
    bullets: [
      'Implemented a Human-in-the-Loop system that updated confidence thresholds per document classification from reviewer feedback.',
      'Extended a Genkit-based AI pipeline to support Zod validation, preventing malformed LLM responses from propagating to the DB.',
    ],
  },
  {
    id: 3,
    period: 'Jun 2025 – Aug 2025',
    title: 'AI Engineer Intern',
    organization: 'CognitiveHealth Solutions',
    bullets: [
      'Reduced document processing time by 95% by engineering a Gemini 2.5 Pro pipeline OCR for 30+ page medical documents.',
      'Achieved 1-minute document processing using prompt engineering strategies, enabling real-time clinical data extraction.',
      'Delivered production-ready OCR system with secure API management, ensuring HIPAA-compliant data handling.',
    ],
  },
  {
    id: 2,
    period: 'Feb 2024 – May 2024',
    title: 'Data Analyst',
    organization: 'Ryzklytix Consulting Solutions',
    bullets: [
      'Improved data processing efficiency by 35% by architecting parallelized backend systems, reducing ETL bottlenecks across workflows.',
      'Reduced ML model latency by 40% by implementing automated data cleaning and validation pipelines, improving data reliability.',
    ],
  },
  {
    id: 1,
    period: 'Jan 2023 – Jun 2023',
    title: 'ML Engineer',
    organization: 'Reliance Jio',
    bullets: [
      'Generated $150K in ad revenue by deploying a real-time voice based age classifier using CNNs with 95% F1-score across 5+ languages.',
      'Reduced model training time by 40% by implementing transfer learning, enabling faster iteration across 5+ regional language datasets.',
      'Optimized response times to sub-100ms through edge-device batch processing, supporting real-time classification across 40M+ users.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--line)' }} id="experience">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">02</span>
          <h2 className="font-serif font-normal text-4xl tracking-tight text-ink">Work Experience</h2>
          <span className="flex-1 h-px self-center ml-2" style={{ background: 'var(--line)' }} />
        </div>

        {/* Timeline */}
        <div>
          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: 'var(--line)' }} />
            <div className="space-y-0">
              {workEntries.map((entry, index) => (
                <div key={entry.id} className={`relative flex gap-6 ${index === workEntries.length - 1 ? '' : 'pb-8'}`}>
                  <div className="flex-shrink-0 w-[11px] mt-[6px]">
                    <span className="block w-[11px] h-[11px] rounded-full bg-accent" style={{ boxShadow: '0 0 0 2px var(--paper)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[0.72rem] tracking-[0.06em] mb-1" style={{ color: 'var(--ink-faint)' }}>
                      {entry.period}
                    </p>
                    <h4 className="font-serif font-medium text-[1.15rem] leading-snug text-ink mb-0.5">
                      {entry.organization}
                    </h4>
                    <p className="font-mono text-[0.7rem] tracking-[0.08em] uppercase mb-2.5" style={{ color: 'var(--accent-deep)' }}>
                      {entry.title}
                    </p>
                    <ul className="space-y-1.5">
                      {entry.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-[0.95rem] leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                          <span className="mt-[9px] flex-shrink-0 w-1 h-1 rounded-full" style={{ background: 'var(--ink-faint)' }} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume */}
        <div className="mt-14 pt-8 border-t" style={{ borderColor: 'var(--line)' }}>
          <a
            href="https://drive.google.com/file/d/1kZQJwwA91-22L1exEG6hQNksX0IU6MrX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.08em] uppercase px-5 py-2.5 rounded-sm border transition-all duration-200 hover:-translate-y-0.5"
            style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
