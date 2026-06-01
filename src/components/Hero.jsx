export default function Hero() {
  return (
    <section className="pt-[168px] pb-[110px] relative" id="hero">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Available tag */}
        <div
          className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.14em] uppercase rounded-full px-4 py-2 mb-8"
          style={{
            color: 'var(--accent-deep)',
            border: '1px solid rgba(224,68,30,0.3)',
            background: 'rgba(224,68,30,0.05)',
          }}
        >
          <span className="w-[7px] h-[7px] rounded-full animate-pulse-dot flex-shrink-0" style={{ background: 'var(--accent)' }} />
          Open to full-time roles &middot; AI / ML
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-normal leading-[0.95] tracking-[-0.02em] mb-8"
          style={{ fontSize: 'clamp(3rem, 8.5vw, 7.2rem)', maxWidth: '14ch' }}
        >
          Building ML systems for{' '}
          <em className="italic" style={{ color: 'var(--accent)', fontVariationSettings: '"opsz" 144' }}>
            healthcare
          </em>
          , end to end.
        </h1>

        {/* Sub */}
        <p
          className="font-sans font-normal leading-[1.55]"
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
            color: 'var(--ink-soft)',
            maxWidth: '56ch',
            marginBottom: '42px',
          }}
        >
          I'm Akhilesh Kasturi, an MS in Artificial Intelligence candidate at Northeastern University.
          I work where rigorous research meets production engineering — designing healthcare AI systems,
          MLOps pipelines, and applied ML that actually ships.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="font-mono text-[0.76rem] tracking-[0.08em] uppercase px-7 py-3.5 rounded-sm transition-all duration-[250ms] hover:-translate-y-0.5"
            style={{ background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
          >
            View my work
          </a>
          <a
            href="#contact"
            className="font-mono text-[0.76rem] tracking-[0.08em] uppercase px-7 py-3.5 rounded-sm transition-all duration-[250ms] hover:-translate-y-0.5"
            style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
