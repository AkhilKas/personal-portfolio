import CountUp from './CountUp';

const publications = [
  {
    kind: "Published Paper",
    title: "Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare-based Consortium Blockchains",
    authors: "Akhilesh Kasturi, Beena B.M",
    venue: "ICICC 2024",
    abstract: "Introduces PoTE, a consensus mechanism leveraging medical professionals' trust and expertise for secure, auditable healthcare data management across consortium blockchains.",
    metrics: { downloads: "50+", citations: "1", views: "300+" },
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4804243",
    status: "Published",
  },
];

const researchAreas = [
  {
    kind: "Machine Learning",
    title: "Healthcare AI & MLOps",
    description: "Developing reliable AI systems for clinical settings, with a focus on interpretability, fairness, and production-grade deployment.",
  },
  {
    kind: "Computer Vision",
    title: "Perception Systems",
    description: "Advanced perception for autonomous systems and medical imaging, from LiDAR point cloud processing to chest X-ray classification.",
  },
  {
    kind: "Audio Processing",
    title: "Acoustic Analysis",
    description: "Signal processing and machine learning for acoustic feature extraction, including voice-based classification at scale.",
  },
];

export default function Research() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--line)' }} id="research">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">04</span>
          <h2 className="font-serif font-normal text-4xl tracking-tight text-ink">Research</h2>
          <span className="flex-1 h-px self-center ml-2" style={{ background: 'var(--line)' }} />
        </div>

        {/* Publication */}
        {publications.map((paper, i) => (
          <div key={i} className="p-7 rounded-sm border mb-8 transition-all duration-300" style={{ background: 'var(--paper-deep)', border: '1px solid var(--line)' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.66rem] tracking-[0.12em] uppercase text-accent">{paper.kind}</span>
                  <span className="font-mono text-[0.66rem] tracking-[0.08em] uppercase px-2 py-0.5 rounded-sm" style={{ color: 'var(--ink-faint)', background: 'var(--paper)', border: '1px solid var(--line-soft)' }}>
                    {paper.status}
                  </span>
                </div>
                <h3 className="font-serif font-medium text-[1.25rem] leading-snug mb-2 text-ink">{paper.title}</h3>
                <p className="font-sans text-sm mb-1" style={{ color: 'var(--ink-soft)' }}>{paper.authors}</p>
                <p className="font-mono text-[0.7rem] tracking-[0.06em]" style={{ color: 'var(--ink-faint)' }}>{paper.venue}</p>
              </div>
              <div className="flex gap-8 md:gap-6 flex-shrink-0">
                {Object.entries(paper.metrics).map(([k, v]) => (
                  <div key={k} className="text-center">
                    <div className="font-serif font-semibold text-xl" style={{ fontVariationSettings: '"opsz" 144', color: 'var(--accent)' }}>
                      <CountUp value={v} />
                    </div>
                    <div className="font-mono text-[0.62rem] tracking-[0.08em] uppercase mt-1" style={{ color: 'var(--ink-faint)' }}>{k}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[0.94rem] leading-[1.55] mb-5" style={{ color: 'var(--ink-soft)' }}>{paper.abstract}</p>
            <div className="flex gap-3">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.08em] uppercase px-4 py-2 rounded-sm transition-all duration-200"
                style={{ background: 'var(--ink)', color: 'var(--paper)', border: '1px solid var(--ink)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
              >
                View on SSRN
              </a>
              <button
                onClick={() => {
                  const citation = "Kasturi, Akhilesh et al., Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare based Consortium Blockchains (April 23, 2024). ICICC 2024, Available at SSRN: https://ssrn.com/abstract=4804243";
                  navigator.clipboard.writeText(citation);
                  const btn = event.target.closest('button');
                  const orig = btn.textContent;
                  btn.textContent = 'Copied!';
                  setTimeout(() => { btn.textContent = orig; }, 2000);
                }}
                className="font-mono text-[0.7rem] tracking-[0.08em] uppercase px-4 py-2 rounded-sm border transition-all duration-200"
                style={{ color: 'var(--ink-soft)', borderColor: 'var(--line)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                Cite
              </button>
            </div>
          </div>
        ))}

        {/* Research areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {researchAreas.map((area, i) => (
            <div
              key={i}
              className="p-6 rounded-sm border transition-all duration-300"
              style={{ background: 'var(--paper-deep)', border: '1px solid var(--line)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            >
              <div className="font-mono text-[0.66rem] tracking-[0.12em] uppercase mb-3 text-accent">{area.kind}</div>
              <h4 className="font-serif font-medium text-[1.2rem] mb-2 text-ink">{area.title}</h4>
              <p className="text-[0.94rem] leading-[1.55]" style={{ color: 'var(--ink-soft)' }}>{area.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
