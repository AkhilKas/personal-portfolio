import CountUp from './CountUp';

const projects = [
  {
    title: 'Patient Communication Assistant',
    role: 'RAG Application · Solo build',
    description: 'A retrieval-augmented app that rewrites dense medical documents to an 8th-grade reading level. A two-stage prompting pipeline with a custom cosine-similarity evaluation framework, built after catching a dangerous over-simplification bug. Deployed on Hugging Face Spaces.',
    stack: ['ChromaDB', 'Phi-3', 'HuggingFace', 'FastAPI', 'React'],
    metric: { value: '85%', label: 'Semantic accuracy' },
    github: 'https://github.com/AkhilKas/patient-comm-assistant',
  },
  {
    title: 'RewardSense',
    role: 'End-to-end MLOps Platform',
    description: 'A full lifecycle pipeline for spend-behavior modeling: synthetic data generation across seven archetypes, anomaly and bias detection with Fairlearn, experiment tracking, drift monitoring, and a business reporting layer wired to Slack alerts and a FastAPI / React frontend.',
    stack: ['MLflow', 'Evidently AI', 'Fairlearn', 'GCP', 'FastAPI'],
    metric: { value: '5', label: 'Lifecycle epics' },
    github: 'https://github.com/AkhilKas/rewardsense',
  },
  {
    title: 'Medical Imaging Classifier',
    role: 'Chest X-ray Diagnosis · CheXpert',
    description: 'An EfficientNet-B0 model for multi-label chest pathology detection on CheXpert, paired with Grad-CAM interpretability and a systematic study of uncertainty-label handling strategies so clinicians can see why a prediction was made.',
    stack: ['PyTorch', 'EfficientNet', 'Grad-CAM', 'CheXpert'],
    metric: { value: '0.87', label: 'AUC' },
    github: 'https://github.com/AkhilKas/weak-labels-cxr',
  },
  {
    title: 'XAI Healthcare Dashboard',
    role: 'Explainable Motion Assessment',
    description: 'Orthopedic motion assessment from IMU sensors using LSTM/GRU, 1D CNN, and HMM models, presented through a three-layer progressive-disclosure interface with SHAP explanations. Grounded in user research with clinical stakeholders at MGH.',
    stack: ['LSTM / GRU', 'SHAP', 'React', 'FastAPI', 'Gemini'],
    metric: { value: '3', label: 'Disclosure layers' },
    github: 'https://github.com/AkhilKas/XAI-Healthcare',
  },
  {
    title: 'Temporal Health Transformer',
    role: 'Research Infrastructure Lead · 7-person team',
    description: 'Early disease-risk prediction from longitudinal EHRs. Built the full repo scaffold (Hydra, DVC, Docker, GitHub Actions CI), a Synthea data pipeline with ICD-10 mapping, and resolved the CI/CD failures that kept the team moving toward publication.',
    stack: ['Transformers', 'Hydra', 'DVC', 'Docker', 'CI/CD'],
    metric: { value: '7', label: 'Team size' },
    github: null,
  },
];

export default function Projects() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--line)' }} id="projects">
      <div className="max-w-[1180px] mx-auto px-8">

        {/* Section header */}
        <div className="flex items-baseline gap-4 mb-14">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">03</span>
          <h2 className="font-serif font-normal text-4xl tracking-tight text-ink">Selected Work</h2>
          <span className="flex-1 h-px self-center ml-2" style={{ background: 'var(--line)' }} />
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid py-8 px-2 border-t transition-all duration-300 cursor-default"
              style={{
                gridTemplateColumns: '48px 1fr 120px',
                gap: '26px',
                borderColor: 'var(--line-soft)',
                alignItems: 'start',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-deep)'; e.currentTarget.style.paddingLeft = '20px'; e.currentTarget.style.paddingRight = '20px'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '8px'; e.currentTarget.style.paddingRight = '8px'; }}
            >
              {/* Number */}
              <div className="font-mono text-sm pt-1.5" style={{ color: 'var(--ink-faint)' }}>
                /{String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif font-medium text-[1.5rem] tracking-[-0.01em] leading-snug mb-1.5 text-ink">
                  {project.title}
                </h3>
                <div className="font-mono text-[0.7rem] tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--accent-deep)' }}>
                  {project.role}
                </div>
                <p className="text-[1rem] leading-[1.6] mb-4 max-w-[62ch]" style={{ color: 'var(--ink-soft)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="font-mono text-[0.66rem] tracking-[0.03em] px-2 py-1 rounded-sm border" style={{ color: 'var(--ink-faint)', borderColor: 'var(--line-soft)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric + optional GitHub link */}
              <div className="text-right pt-1 flex flex-col items-end gap-4">
                <div>
                  <div
                    className="font-serif font-semibold leading-none"
                    style={{ fontSize: '2.1rem', fontVariationSettings: '"opsz" 144', color: 'var(--accent)' }}
                  >
                    <CountUp value={project.metric.value} />
                  </div>
                  <div className="font-mono text-[0.62rem] tracking-[0.08em] uppercase mt-1.5" style={{ color: 'var(--ink-faint)' }}>
                    {project.metric.label}
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.66rem] tracking-[0.08em] uppercase px-3 py-2 border rounded-sm transition-all duration-200 whitespace-nowrap"
                    style={{ color: 'var(--ink-soft)', borderColor: 'var(--line)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--paper)'; e.currentTarget.style.borderColor = 'var(--ink)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-soft)'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                  >
                    View code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
