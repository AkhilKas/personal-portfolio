import TechStack from './TechStack';

const facts = [
  {
    label: 'Education',
    value: 'MS, Artificial Intelligence',
    sub: 'Northeastern University · Dec 2026',
  },
  {
    label: 'Now',
    value: 'Graduate Teaching Assistant',
    sub: 'CS1800 & CS5100, Khoury College',
  },
  {
    label: 'Focus areas',
    value: 'Healthcare AI · MLOps',
    sub: 'Applied & research ML',
  },
  {
    label: 'Based in',
    value: 'Boston, MA',
    sub: 'Open to relocation',
  },
];

export default function About() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--line)' }} id="about">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">01</span>
          <h2 className="font-serif font-normal text-4xl tracking-tight text-ink">About</h2>
          <span className="flex-1 h-px self-center ml-2" style={{ background: 'var(--line)' }} />
        </div>

        {/* Two-column grid */}
        <div className="about-grid">

          {/* Left — narrative */}
          <div className="space-y-5 font-sans text-[1.1rem] leading-[1.7] text-justify" style={{ color: 'var(--ink-soft)' }}>
            <p>
              I build the parts of machine learning that are easy to skip and hard to get right: the data pipelines,
              the monitoring, the fairness checks, and the deployment glue that turns a notebook into something
              people can rely on.
            </p>
            <p>
              My focus sits at the intersection of{' '}
              <strong className="text-ink font-semibold">healthcare AI</strong>,{' '}
              <strong className="text-ink font-semibold">MLOps</strong>, and{' '}
              <strong className="text-ink font-semibold">research-oriented ML engineering</strong>.
              I've shipped voice classification at industrial scale, trained medical imaging models with
              interpretability built in, and led the engineering backbone for multi-person research teams.
            </p>
            <p>
              Right now I'm a <strong className="text-ink font-semibold">Graduate Teaching Assistant</strong> at
              Khoury College, supporting Discrete Structures and Foundations of AI, while finishing my degree
              and a handful of production-grade projects.
            </p>
          </div>

          {/* Right — facts sidebar */}
          <div className="border-l-2 pl-7 space-y-7" style={{ borderColor: 'var(--accent)' }}>
            {facts.map(fact => (
              <div key={fact.label}>
                <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase mb-1.5" style={{ color: 'var(--ink-faint)' }}>
                  {fact.label}
                </p>
                <p className="font-sans font-medium text-[1.02rem] text-ink">
                  {fact.value}
                  <span className="block font-normal text-[0.92rem] mt-0.5" style={{ color: 'var(--ink-soft)' }}>
                    {fact.sub}
                  </span>
                </p>
              </div>
            ))}
          </div>

        </div>

        <TechStack />
      </div>
    </section>
  );
}
